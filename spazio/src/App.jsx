import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Search from './pages/Search.jsx'
import SpaceDetail from './pages/SpaceDetail.jsx'
import Payment from './pages/Payment.jsx'
import Confirmation from './pages/Confirmation.jsx'
import MyReservations from './pages/MyReservations.jsx'
import Publish from './pages/Publish.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/registro" replace />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/buscar" element={<Search />} />
      <Route path="/espacio/:id" element={<SpaceDetail />} />
      <Route path="/reservar/:id/pago" element={<Payment />} />
      <Route path="/reservar/:id/confirmacion" element={<Confirmation />} />
      <Route path="/mis-reservas" element={<MyReservations />} />
      <Route path="/publicar" element={<Publish />} />
      <Route path="*" element={<Navigate to="/buscar" replace />} />
    </Routes>
  )
}
