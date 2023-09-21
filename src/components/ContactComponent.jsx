import { Container, Row, Col } from 'react-bootstrap'

export const ContactComponent = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col className="badge bg-dark text-wrap mt-3 mb-2">
                        <h1>Contacto</h1>
                        <h5>¡Gracias por visitar nuestra página! Si tienes alguna pregunta o consulta, no dudes en contactarnos.</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="list-unstyled">
                            <li>Av. Las Condes #12523 - Local 1B. Las Condes - Santiago.</li>
                            <li>Teléfono: +56 9 123 45 678</li>
                            <li>Correo electrónico: contacto@contacto.cl</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
  )
}
