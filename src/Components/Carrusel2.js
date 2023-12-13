import React from 'react'
import { Carousel } from 'react-bootstrap';

import imagen5 from "../img2/imagen5.jpg";
import imagen6 from "../img2/imagen6.jpg";
import imagen7 from "../img2/imagen7.jpg";
import imagen8 from "../img2/imagen8.jpg";
export const Carrusel2 = () => {
  return (
    <Carousel className="custom-carousel2">
            <Carousel.Item>
                <img className="d-block w-100" src={imagen5} alt="Primera imagen" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={imagen6} alt="Segunda imagen" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={imagen7} alt="Tercera imagen" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={imagen8} alt="Cuarta imagen" />
            </Carousel.Item>
        </Carousel>
  )
}
