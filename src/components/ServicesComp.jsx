import React from 'react'
import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CardImg, Col, Row } from 'react-bootstrap';
import images from '../assets/images';

export const ServicesComp = () => {
    console.log(data)
    return (
        <>
            {
                data.services.map(service => (
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card className="text-center" key={service.sku} style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={images.afichepne} />
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
