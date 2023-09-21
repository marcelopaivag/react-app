import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import images from '../assets/images';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <img
          src={images.logo}
          height={80} />
        <Container>
          <Navbar.Brand as={Link} to='/react-app/'>Kinesiología OMT</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/react-app/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/react-app/services'>Servicios</Nav.Link>
            <Nav.Link as={Link} to='/react-app/bookings'>Reservas</Nav.Link>
            <Nav.Link as={Link} to='/react-app/contact'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/react-app/blog'>Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}