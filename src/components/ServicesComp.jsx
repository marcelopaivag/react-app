import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CardImg, Col, Container, Row, } from 'react-bootstrap';

export const ServicesComp = () => {
    console.log(data)
    return (
        <>
            {
                data.services.map(service => (
                    <Container>
                        <Row md={1} xl={1} className="g-4" style={{ display: 'flex', flexWrap: 'wrap'}}>
                            <Col>
                                <Card className="text-center" key={service.sku} style={{ width: 'auto' }}>
                                    <Card.Img variant="top" src={service.image} />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                        <Link to={`/react-app/services/${service.sku}`}>
                                            <Button variant="primary">Más detalles</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Container>
                ))
            }
        </>
    )
}
