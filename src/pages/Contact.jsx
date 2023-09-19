import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Contact = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Contacto</h1>
                        <p>¡Gracias por visitar nuestra página! Si tienes alguna pregunta o consulta, no dudes en contactarnos.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Información de contacto</h5>
                        <ul className="list-unstyled">
                            <li>Dirección: Av. Las Condes #12523. Local 1B. Las Condes, Santiago</li>
                            <li>Teléfono: +56 9 1234 5678</li>
                            <li>Correo electrónico: contacto@omtpaiva.cl</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
