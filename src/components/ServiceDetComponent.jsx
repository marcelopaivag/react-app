import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom"
import data from '../data.json'
import { Link } from 'react-router-dom';


export const ServiceDetComponent = () => {
    const { sku } = useParams()
    const serviceSelected = data.services.filter(service => service.sku === sku)
    console.log(serviceSelected)

    return (
        <Card>
            <Card.Header style={{ fontSize: '30px'}}>{serviceSelected[0].name}</Card.Header>
            <Card.Body>
                <Card.Title>{serviceSelected[0].price}</Card.Title>
                <Card.Text>{serviceSelected[0].description}</Card.Text>
                <Button variant="primary" as={Link} to='/react-app/bookings'>Reserva tu hora</Button>
            </Card.Body>
        </Card>
    )
}
