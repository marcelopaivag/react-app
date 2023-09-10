import data from '../data.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Services = () => {
  console.log(data)
  return (
    <>
      {
        data.services.map(service => (
          <Card key={service.sku} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Link to={`/services/${service.sku}`}>
                <Button variant="primary">Más detalles</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      }
    </>
  )
}
