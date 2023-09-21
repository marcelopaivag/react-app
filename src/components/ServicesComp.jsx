import React from 'react'
import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CardImg, Col, Row, } from 'react-bootstrap';

export const ServicesComp = () => {
    console.log(data)
    return (
        <>
            {
                data.services.map(service => (
                    <Row align-content="center" md={1} xl={2} className="g-4">
                        <Col>
                            <Card className="text-center" key={service.sku} style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={service.image} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                        <Link to={`/services/${service.sku}`}>
                                        <Button variant="primary">Más detalles</Button>
                                        </Link>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                ))
            }
        </>
    )
}
