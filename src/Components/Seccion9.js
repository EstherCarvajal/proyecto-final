import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import gen7 from '../img2/gen7.png';
import gen7a from '../img2/gen7a.png';
import gen7b from '../img2/gen7b.png';
import gen7c from '../img2/gen7c.png';
import { Boton } from './Boton';
import { Carrusel2 } from './Carrusel2';
export const Seccion9 = () => {
  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            <h2 className="header-title3">Séptima Generación (2004-2010)</h2>
            <p>La séptima generación de computadoras se caracterizó por una mayor eficiencia y ahorro de energía. Se desarrollaron nuevos procesadores y sistemas de enfriamiento para reducir el consumo de energía, lo que resultó en computadoras más eficientes y ecológicas.</p>
            <div className="flotante">
              <img className="imagen-flotante" src={gen7} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p>Según muchos expertos, científicos e investigadores, la séptima generación de computadoras se definirá por el uso masivo de redes de área mundial, o Wide Area Network. Otro punto por el cual se conocerá a esta generación de computadoras es por el ya mencionado procesamiento paralelo, técnica también conocida como computación distribuida.

              Esta computación distribuida utilizará arquitecturas combinadas del tipo  Paralelo/Vectorial. Esto básicamente significa que trabajarán simultáneamente cantidades realmente impresionantes de procesadores, computadoras y otros tipos de hardware diverso.

              Todo con el objetivo de llevar a cabo la mayor cantidad de tareas posibles en el menor tiempo posible.</p>
              <div className="flotante">
              <img className="imagen-flotante" src={gen7a} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p>Con estas implementaciones se conseguirán velocidades de proceso que en la actualidad sólo soñamos. Con estas velocidades de proceso y tasas de transmisión, gracias a las redes de área mundial, podremos acceder a todo tipo de servicios en línea de forma instantánea y en tiempo real.</p>
            <br/>
            <br/>
          </div>

        </Col>
        <Col md={6}>
          <div className="section-content">
          <div className="flotante">
              <img className="imagen-flotante" src={gen7b} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p>Con la introducción de estos nuevos elementos, la séptima generación de computadoras fue capaz de ir sustituyendo a los clásicos reproductores de vídeo y música como han sido televisores o aparatos musicales.

                Otro de los hitos de estas computadoras domésticas fue su capacidad de reducir el tamaño y peso de los dispositivos, además de aumentar el almacenamiento. Esto permitió, por ejemplo, la aparición de los conocidos libros electrónicos o Kindle.</p>

            <div className="flotante">
              <img className="imagen-flotante" src={gen7c} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p>La séptima generación permite a los aficionados a las películas y a la TV poder tener acceso a servicios con contenidos UHD 4K transmitidos.

                    Además, se pueden disfrutar los contenidos UHD 4K que se encuentran distribuidos a través de plataformas como YouTube, además de poder ver los mismos durante más tiempo.

                    Así mismo, gracias al motor multimedia se tiene también la capacidad requerida para crear, editar y compartir clips de video propios en UHD 4K con mayor rapidez que con una computadora personal de años atrás.</p>
                    <Carrusel2/>
                    <br/>
                    <Boton to="/octava">Ver la octava generación</Boton>
                    <br/>
            <br/>
          </div>
          

        </Col>
      </Row>
    </Container>
  )
}
