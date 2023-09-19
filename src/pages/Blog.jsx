import { Container, Row, Col } from 'react-bootstrap';

export const Blog = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Blog</h1>
            <p>¡Bienvenido a nuestro blog! Aquí encontrarás artículos interesantes sobre diversos temas.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Últimas publicaciones</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Título del artículo 1</a></li>
              <li><a href="#!">Título del artículo 2</a></li>
              <li><a href="#!">Título del artículo 3</a></li>
              <li><a href="#!">Título del artículo 4</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}
