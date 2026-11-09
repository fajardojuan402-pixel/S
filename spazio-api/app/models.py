"""Modelos SQLAlchemy que reflejan el esquema de la BD (db/schema.sql).

La BD está en inglés; la traducción al contrato en español/MAYÚSCULAS que
consume el frontend se hace en los schemas Pydantic (app/schemas.py).
"""
from __future__ import annotations

import uuid
from datetime import datetime

from geoalchemy2 import Geography
from sqlalchemy import (
    ARRAY,
    Boolean,
    CheckConstraint,
    DateTime,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
    UniqueConstraint,
    func,
)
from sqlalchemy.dialects.postgresql import ENUM as PgEnum
from sqlalchemy.dialects.postgresql import UUID as PgUUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base

# Enums existentes en la BD (no los recrea SQLAlchemy: create_type=False).
booking_status_enum = PgEnum(
    "PENDING_PAYMENT", "CONFIRMED", "CANCELLED", "EXPIRED",
    name="booking_status", create_type=False,
)
payment_status_enum = PgEnum(
    "PENDING", "APPROVED", "REJECTED", "REFUNDED",
    name="payment_status", create_type=False,
)
space_category_enum = PgEnum(
    "PARKING", "STORAGE", "OFFICES", "EVENTS", "SPORTS", "STUDIOS", "COMMERCIAL",
    name="space_category", create_type=False,
)


class User(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    full_name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    is_host: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())


class Space(Base):
    __tablename__ = "spaces"

    id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    host_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    category: Mapped[str] = mapped_column(space_category_enum, nullable=False, default="PARKING")
    title: Mapped[str | None] = mapped_column(String(150))
    address: Mapped[str] = mapped_column(String(255), nullable=False)
    neighborhood: Mapped[str | None] = mapped_column(String(100))
    location = mapped_column(Geography(geometry_type="POINT", srid=4326), nullable=False)
    price_per_hour: Mapped[float] = mapped_column(Numeric(10, 2), nullable=False)
    vehicle_type: Mapped[str] = mapped_column(String(20), nullable=False, default="carro")
    is_covered: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    conditions: Mapped[str | None] = mapped_column(Text)
    photos: Mapped[list[str]] = mapped_column(ARRAY(Text), default=list)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        CheckConstraint("price_per_hour > 0", name="spaces_price_positive"),
        CheckConstraint("cardinality(photos) <= 3", name="check_max_photos"),
    )

    availabilities: Mapped[list[Availability]] = relationship(
        back_populates="space", cascade="all, delete-orphan"
    )


class Availability(Base):
    __tablename__ = "availabilities"

    id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    space_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("spaces.id", ondelete="CASCADE"), nullable=False)
    start_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    end_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (CheckConstraint("end_time > start_time", name="check_valid_timespan"),)

    space: Mapped[Space] = relationship(back_populates="availabilities")


class Booking(Base):
    __tablename__ = "bookings"

    id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    space_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("spaces.id"), nullable=False)
    user_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    start_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    end_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    hourly_price_snapshot: Mapped[float] = mapped_column(Numeric(10, 2), nullable=False)
    total_amount: Mapped[float] = mapped_column(Numeric(10, 2), nullable=False)
    status: Mapped[str] = mapped_column(booking_status_enum, default="PENDING_PAYMENT")
    locked_until: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    cancelled_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    space: Mapped[Space] = relationship()
    payment: Mapped[Payment | None] = relationship(back_populates="booking", uselist=False)


class Payment(Base):
    __tablename__ = "payments"

    id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    booking_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("bookings.id", ondelete="CASCADE"), unique=True, nullable=False)
    gateway_reference: Mapped[str | None] = mapped_column(String(255))
    payment_method: Mapped[str | None] = mapped_column(String(50))
    amount: Mapped[float] = mapped_column(Numeric(10, 2), nullable=False)
    status: Mapped[str] = mapped_column(payment_status_enum, default="PENDING")
    refund_amount: Mapped[float] = mapped_column(Numeric(10, 2), default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    booking: Mapped[Booking] = relationship(back_populates="payment")


class Rating(Base):
    __tablename__ = "ratings"

    id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    booking_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("bookings.id", ondelete="CASCADE"), nullable=False)
    author_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    target_user_id: Mapped[uuid.UUID] = mapped_column(PgUUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    score: Mapped[int] = mapped_column(Integer, nullable=False)
    comment: Mapped[str | None] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        CheckConstraint("score BETWEEN 1 AND 5", name="ratings_score_range"),
        UniqueConstraint("booking_id", "author_id", name="unique_booking_rating"),
    )
