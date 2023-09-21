import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import images from '../assets/images';

export const Jumbotron = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images.fondo}
                    alt="First slide"
                    height={600}
                />
                <Carousel.Caption>
                    <h5>Kinesiología</h5>
                    <p>Para aliviar el dolor, optimizar la recuperación y mejorar el rendimiento.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images.tr}
                    alt="Second slide"
                    height={600}
                />
                <Carousel.Caption>
                    <h5>Fisioterapia</h5>
                    <p>Tecnología de punta al servicio de tu recuperación.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={images.tr2}
                    alt="Third slide"
                    height={600}
                />
                <Carousel.Caption>
                    <h5>Osteopatía</h5>
                    <p>El cuerpo dispone de todos los mecanismos para la curación, sólo hay que ayudarle a restablecer la función normal.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>)
}
