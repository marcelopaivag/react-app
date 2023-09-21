import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"
import { Bookings } from "./pages/Bookings"
import { Blog } from "./pages/Blog"
import { ServiceDet } from "./pages/ServiceDet"
import { Footer } from "./components/Footer"
import { Contact } from "./pages/Contact"
import '../src/App.css'

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/react-app/" element={<Home />} />
      <Route path="/react-app/services" element={<Services />} />
      <Route path="/react-app/services/:sku" element={<ServiceDet />} />
      <Route path="/react-app/bookings" element={<Bookings />} />
      <Route path="/react-app/contact" element={<Contact />} />
      <Route path="/react-app/blog" element={<Blog />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App