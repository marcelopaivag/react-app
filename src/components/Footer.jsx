import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import images from '../assets/images'

export const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col>
                        <img src={images.logo} width={350} />
                        </Col>
                        <Col>
                            <h5>Recupérate con nosotros</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Home</a></li>
                                <li><a href="#!">Servicios</a></li>
                                <li><a href="#!">Reservas</a></li>
                                <li><a href="#!">Blog</a></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>Contacto</h5>
                            <ul className="list-unstyled">
                                <li>Av. Las Condes #12523. Local 1B. Las Condes. Santiago</li>
                                <li>contacto@omtpaiva.cl</li>
                                <li>+ 01 234 567 88</li>
                                <li>+ 01 234 567 89</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col className="text-center">
                            © {new Date().getFullYear()} Copyright: OMTpaiva
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
