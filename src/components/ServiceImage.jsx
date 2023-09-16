import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export const ServiceImage = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail />
                </Col>
            </Row>
        </Container>
    )
}
