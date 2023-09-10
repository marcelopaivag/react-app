import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { Bookings } from "./pages/Bookings"
import { Blog } from "./pages/Blog"
import { ServiceDet } from "./pages/ServiceDet"

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:sku" element={<ServiceDet />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
  )
}

export default App
