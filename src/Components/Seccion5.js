import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import gen3 from '../img2/gen3.png';
import gen3a from '../img2/gen3a.jpg';
import gen3b from '../img2/gen3b.jpg';
import gen3c from '../img2/gen3c.jpeg';
import { Boton } from './Boton';
import { Tarjeta } from './Tarjeta';
export const Seccion5 = () => {
  return (
    <Container className="two-column-section">
    <Row>
      <Col md={6}>
        <div className="section-content">

          <h2 className="header-title2">Tercera generación (1965-1971)</h2>
          <p>La tercera generación de computadoras se basó en el uso de circuitos integrados, que permitían a los fabricantes de computadoras colocar varios transistores en una sola pieza de silicona. Esto permitió un aumento significativo en la velocidad y potencia de procesamiento de las computadoras. También se introdujeron las unidades de disco duro en esta generación.</p>
          <div
              className="estilizada-imagen"
            >
              <img
                src={gen3a}
                alt="Estilizada Imagen"
              />
            </div>
            <p>En la década del 60, el desarrollo de los circuitos integrados fue la marca de
                la tercera generación. Los transistores fueron minimizados y puestos en placas de
                silicón, llamados semiconductores, los cuales incrementaron drásticamente la
                velocidad y eficiencia de los computadores.
                El Burroughs B-2500 fue uno de los primero y estos podían almacenar
                millones de números. Surgen conceptos como memoria virtual, multiprogramación
                y sistemas operacionales complejos. Ejemplos de esta época son el IBM 360 y el
                BURROUGHS B-3500</p>
                <p>Esta tercera generación está signada por la incorporación de un nuevo componente electrónico llamado circuito integrado, el cual básicamente reúne grandes cantidades de transistores y otros componentes dentro de un mismo encapsulado.</p>
                <div
              className="estilizada-imagen"
            >
              <img
                src={gen3b}
                alt="Estilizada Imagen"
              />
            </div>

            <p>Gracias a la incorporación del circuito integrado, esta vez las computadoras pudieron realmente expandirse a todos lados. Incluso llegar con cada modelo que aparecía más cerca del usuario promedio, es decir del hobbista, el estudiante y la pequeña empresa, entre otros.

              Qué caracteriza la tercera gene</p>
               <br />
               <br />
        </div>
      </Col>
      <Col md={6}>
        <div className="section-content">
        <div className="flotante">
              <img className="imagen-flotante" src={gen3} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
          <p>A pesar que el circuito integrado se inventó en 1958, las primeras computadoras con este componente tardaron hasta mediados de la década de 1960.

            Estas computadoras incluían en sus opciones ciertas características como la utilización de medios magnéticos para el almacenamiento de datos, por ejemplo.</p>
            <Tarjeta
              imagenSrc={gen3c}
              titulo="Características"
              texto="La tercera generación de computadoras se caracteriza por el uso intensivo de un nuevo componente electrónico llamado circuito integrado. Este componente fue desarrollado en la dcada de 1950 y patentado en el año 1958 por Jack S. Kilby, ingeniero de Texas Instruments. Los circuitos integrados son básicamente componentes electrónicos semiconductores que reúnen decenas de miles de resistencias, capacitores y transistores de grado miniatura, en una misma capsula o pastilla de silicio. Sin embargo, la primera computadora que empleó circuitos integrados en su diseño fue la serie Edgar de IBM, recién en 1964. Luego le siguieron la IBM 360 y otras, de las cuales hablaremos más adelante."
            />
            <br/>
            <p>Estas primeras computadoras de la tercera generación con circuitos integrados eran en todo sentido muy superiores a la anterior generación.</p>
            <p>Muchas veces contaban con hasta 2 megabytes de memoria y la capacidad de procesar más de 5 millones de instrucciones por segundo. Además esta tercera generación de computadoras ya funcionaba con otro sistema de programación.</p>
            <Boton to="/cuarta">Ver la cuarta generación</Boton>
            <br/>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
