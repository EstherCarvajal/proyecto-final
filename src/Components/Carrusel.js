import React from 'react'
import { Carousel } from 'react-bootstrap';

import imagen1 from "../img2/imagen1.jpg";
import imagen9 from "../img2/imagen9.jpg";
import imagen3 from "../img2/imagen3.jpg";
import imagen4 from "../img2/imagen4.jpg";

export const Carrusel = () => {
    return (
        <Carousel className="custom-carousel">
            <Carousel.Item>
                <img className="d-block w-100" src={imagen1} alt="Primera imagen" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={imagen9} alt="Segunda imagen" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={imagen3} alt="Tercera imagen" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={imagen4} alt="Cuarta imagen" />
            </Carousel.Item>
        </Carousel>
  )
}
