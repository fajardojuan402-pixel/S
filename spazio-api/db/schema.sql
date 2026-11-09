-- =====================================================================
-- SPAZIO — Esquema de base de datos (PostgreSQL + PostGIS)
-- Basado en el script del equipo. La BD usa inglés; el backend traduce
-- al contrato en español/MAYÚSCULAS que consume el frontend.
-- =====================================================================

-- 1. Extensión PostGIS para geolocalización (RF-01)
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. Enums del sistema
DO $$ BEGIN
    CREATE TYPE booking_status AS ENUM ('PENDING_PAYMENT', 'CONFIRMED', 'CANCELLED', 'EXPIRED');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE payment_status AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'REFUNDED');
EXCEPTION WHEN duplicate_object THEN null; END $$;

DO $$ BEGIN
    CREATE TYPE space_category AS ENUM ('PARKING', 'STORAGE', 'OFFICES', 'EVENTS', 'SPORTS', 'STUDIOS', 'COMMERCIAL');
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- 3. Usuarios (RI-01)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    is_host BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Espacios (RI-02)
CREATE TABLE IF NOT EXISTS spaces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    host_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category space_category NOT NULL DEFAULT 'PARKING',
    title VARCHAR(150),
    address VARCHAR(255) NOT NULL,
    neighborhood VARCHAR(100),
    location GEOGRAPHY(Point, 4326) NOT NULL,
    price_per_hour NUMERIC(10, 2) NOT NULL CHECK (price_per_hour > 0),
    vehicle_type VARCHAR(20) NOT NULL DEFAULT 'carro',  -- carro | moto | ambos
    is_covered BOOLEAN NOT NULL DEFAULT TRUE,
    conditions TEXT,
    photos TEXT[] DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT check_max_photos CHECK (cardinality(photos) <= 3)
);

CREATE INDEX IF NOT EXISTS idx_spaces_location ON spaces USING GIST(location);

-- 5. Periodos de disponibilidad (RI-03)
CREATE TABLE IF NOT EXISTS availabilities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    space_id UUID NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT check_valid_timespan CHECK (end_time > start_time)
);

-- 6. Reservas (RI-04)
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    space_id UUID NOT NULL REFERENCES spaces(id),
    user_id UUID NOT NULL REFERENCES users(id),
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    hourly_price_snapshot NUMERIC(10, 2) NOT NULL,
    total_amount NUMERIC(10, 2) NOT NULL,
    status booking_status DEFAULT 'PENDING_PAYMENT',
    locked_until TIMESTAMP WITH TIME ZONE NOT NULL,  -- retención de 10 min (RF-07)
    cancelled_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT check_booking_timespan CHECK (end_time > start_time)
);

-- 7. Pagos (pago simulado; Wompi queda como extensión futura)
CREATE TABLE IF NOT EXISTS payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID NOT NULL UNIQUE REFERENCES bookings(id) ON DELETE CASCADE,
    gateway_reference VARCHAR(255),
    payment_method VARCHAR(50),
    amount NUMERIC(10, 2) NOT NULL,
    status payment_status DEFAULT 'PENDING',
    refund_amount NUMERIC(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Calificaciones (RI-05) — modeladas; sin endpoints en el incremento 1
CREATE TABLE IF NOT EXISTS ratings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    author_id UUID NOT NULL REFERENCES users(id),
    target_user_id UUID NOT NULL REFERENCES users(id),
    score INT NOT NULL CHECK (score BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT unique_booking_rating UNIQUE (booking_id, author_id)
);

-- =====================================================================
-- TRIGGERS Y FUNCIONES
-- =====================================================================

-- Activa el rol anfitrión (is_host) al crear la primera publicación (RF-03)
CREATE OR REPLACE FUNCTION activate_host_role_func()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE users SET is_host = TRUE WHERE id = NEW.host_id AND is_host = FALSE;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_activate_host_role ON spaces;
CREATE TRIGGER trg_activate_host_role
AFTER INSERT ON spaces
FOR EACH ROW
EXECUTE FUNCTION activate_host_role_func();
