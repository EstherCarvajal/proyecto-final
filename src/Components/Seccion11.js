import React from 'react'
import gen2 from '../img2/gen2.png';
import gen2a from '../img2/gen2a.jpg';
import gen2b from '../img2/gen2b.jpeg';
import { Container, Row, Col } from "react-bootstrap";
import { Tarjeta } from './Tarjeta';
import { Carrusel } from './Carrusel';
import { Boton } from './Boton';

export const Seccion11 = () => {
  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">

            <h2 className="header-title4">Segunda generación (1959-1964)</h2>
            <p>La segunda generación de computadoras se caracterizó por el uso de transistores en lugar de tubos de vacío. Los transistores eran más pequeños, más confiables y requerían menos energía para operar, lo que hizo posible la producción de computadoras más pequeñas y más económicas. Esta generación también vio la introducción de sistemas operativos y lenguajes de programación de alto nivel.</p>
            <Tarjeta
              imagenSrc={gen2a}
              titulo="Evolución de las computadoras"
              texto="En la segunda generación de computadoras, la característica principal es la inclusión de
              transistores. Siguen dominando los sistemas de tarjeta o cinta perforada para la entrada de datos,
              aunque en el Instituto Tecnológico de Massachusetts, Jay Wright Forrester (Nacido en 1918)
              incursiona en el desarrollo de memorias de acceso aleatorio mediante núcleos de ferrita, y se
              comienzan a utilizar unidades de cinta magnética.
              En noviembre de 1947 John Bardeen (1908-1991), Walter H. Brattain (1902-1987) y William
              Bradford Shockley (1910-1989) diseñan en los Laboratorios Bell el primer transistor (Figura 5), y
              en 1954 se fabrican los primeros transistores de silicio (Figura 6). Sin embargo, consideramos el
              año 1955 como el inicio de la segunda generación de computadoras, porque es cuando se aplican
              estos semiconductores a la construcción de las computadoras."
            />
            <br />
            <br />
            <Carrusel/>
            <br />
            <p>La segunda generación comprende desde 1958 hasta 1963. En esta época se utilizaban transistores, los cuales eran más rápidos y pequeños que los tubos al vacío y usaban pequeños anillos magnéticos para almacenar información e instrucciones. Se desarrollaron nuevos lenguajes de Grado Medio como COBOL y FORTRAN, los cuales eran comercialmente accesibles.

              Se usaban en aplicaciones de sistemas de reservaciones de líneas aéreas, control del tráfico aéreo y simulaciones de propósito general. Algunas computadoras se programaban con cintas perforadas y otras por medio de cableado en un tablero. </p>
              
          </div>
          <br />
          <br />
        </Col>
        <Col md={6}>
          <div className="section-content">
          <div className="flotante">
              <img className="imagen-flotante" src={gen2} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Uno más de los asombrosos descubrimientos en el ámbito del software entre los años 1959 y 1960
              es el lenguaje de programación COBOL (COmmon Business Oriented Language). Grace Murray
              Hopper (1906-1992) programadora de la marina de Estados Unidos, quien en 1952 había
              inventado el primer compilador llamado sistema A-0, fue una de las principales figuras del
              CODASYL (COmmittee on DAta SYstems Languages), que se encargó de desarrollar el proyecto
              COBOL.</p>
            <Tarjeta
              imagenSrc={gen2b}
              titulo="Características de la segunda generación"
              texto="Ahora bien, los ordenadores de la segundageneración contaban con aspectos característicos que hacían una diferenciación enorme respecto a los de la primera generación, los cuales se deben mencionar. Algunas de las características de las computadoras de segunda generación son:

              Usaban transistores para procesar información, por lo que no necesitaban tubos al vacío. 
              Podían acomodar 200 transistores en el mismo espacio de un tubo al vacío.
              Usaban anillos magnéticos para almacenar la información y las instrucciones. 
              Consumían menos electricidad.
              Eran de menor tamaño.
              Eran más eficientes.
              Tenían menos necesidad de ventilación.
              Contaban con lenguajes de programación más complejos, que permitían mayor relación entre el hardware y el operario.  
              Eran más económicas que las de primera generación."
            />
          </div>
          <br />
          <br />
          <Boton to="/tercera">Ver tercera generación</Boton>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  )
}
