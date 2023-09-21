import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import images from '../assets/images';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <img src={images.logo} height={80} />
        <Container>
          <Navbar.Brand as={Link} to='/'>Kinesiología OMT</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/services'>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/bookings'>Reservas</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}