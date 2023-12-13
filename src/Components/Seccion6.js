import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import gen4 from '../img2/gen4.png';
import gen4a from '../img2/gen4a.jpg';
import gen4b from '../img2/gen4b.jpg';
import gen4c from '../img2/gen4c.jpg';
import { Boton } from './Boton';
import { Tarjeta } from './Tarjeta';
export const Seccion6 = () => {
  return (
    <Container className="two-column-section">
    <Row>
      <Col md={6}>
        <div className="section-content">
          <h2 className="header-title3">Cuarta generación (1972-1984)</h2>
          <p>La cuarta generación de computadoras se caracterizó por la introducción de microprocesadores, que integraban en un solo chip todos los componentes necesarios para el funcionamiento de una computadora. Esto permitió la producción de computadoras personales más pequeñas y económicas, lo que llevó a un aumento en su popularidad y uso.</p>
          <Tarjeta
            imagenSrc={gen4a}
            titulo="Microprocesadores"
            texto="El primer microprocesador de 8 bits fue el Intel 8008, desarrollado en 1972 para su empleo en terminales informáticos.1​ El Intel 8008 contenía 3300 transistores. El primer microprocesador realmente diseñado para uso general, desarrollado en 1974, fue el Intel 8080 de 8 bits, que contenía 4500 transistores y podía ejecutar 200 000 instrucciones por segundo. Los microprocesadores modernos tienen una capacidad y velocidad mucho mayores. Entre ellos figuran el Intel (IBM PC) con 5,5 millones de transistores; el UltraSparc-II, de Sun Microsystems, que contiene 5,4 millones de transistores; el PowerPC 620, desarrollado conjuntamente por Apple, IBM y Motorola, con siete millones de transistores, y el Alpha 21164A, de Digital Equipment Corporation, con 9,3 millones de transistores. El microprocesador es un circuito electrónico que actúa como unidad central de proceso de un ordenador, proporcionando el control de las operaciones de cálculo."
          />
          <br />
          <br />
          <Tarjeta
            imagenSrc={gen4b}
            titulo="Características la cuarta generación de computadoras"
            texto="El tamaño de las computadoras fue minimizado.
            Más económicas.
            Disponibles para cualquier persona.
            Lenguaje básico de computación.
            No requiere aire acondicionado.
            El procesador es más rápido y consume menos energía.
            Más poderosas y confiables que la de las otras generaciones.
            Se comienzan a producir para su venta comercial."
          />
          <br />
          <br/>
          <div className="video-wrapper">
          <iframe width="345" height="315" src="https://www.youtube.com/embed/QP63cR62YaQ" title="Capitulo 4: Cuarta generación de las computadoras" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <div className="section-content">
        <div className="flotante">
              <img className="imagen-flotante" src={gen4} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
          <p>Esta generación de computadoras se caracterizó por grandes avances tecnológicos realizados en
              un tiempo muy corto: en 1971 Ray Tomlinson (nacido en 1941) envió el primer mensaje de correo
              electrónico utilizando una dirección de correo separada por el signo de @ a través de la red
              ARPANET; en 1974 se fabricó el primer ratón electrónico (Mouse); en enero de 1975 apareció un
              anuncio de la computadora Altair 8080 en la revista Popular Electronics, y causa revuelo
              vendiendo gran cantidad de ejemplares. Bill Gates (nacido en 1955) y Paul Allen (nacido en 1953)
              crean el lenguaje BASIC para la Altair 8080, debido a esa gran difusión.
              </p>
          <br/>
          <Tarjeta
            imagenSrc={gen4c}
            titulo="Ejemplos de computadoras de la cuarta generación"
            texto="ALTAIR 8800: Diseñada por Ed Roberts, en el año 1975. Fue la primera computadora personal usada en la cuarta generación de computadoras con un chip de CPU Intel 8080 y con el microprocesador de 16 bits. Las ventas aumentaron considerablemente al venderlas con el mouse y teclado incluido.
            Apple I y Apple II series: Steve Wozniak desarrolló para Apple en 1976 el primer producto de esta compañía, una computadora personal. Su amigo Steve Jobs lo ayudó en las ventas y más tarde lo ayudó a fabricar la Apple II, que fue la primera microcomputadora casera con gran éxito en cuanto a la producción y en ventas.
            Macintosh: En el año 1984 Apple presentó el Macintosh basado en el microprocesador Motorola 68000. Al principio no fue muy exitoso pero luego con la introducción a la autoedición superó las expectativas.
            IBM PC: El IBM Personal Computer es la versión original de la misma plataforma."
          />
          <br/>
          <p>La cuarta generación de computadoras fue una revolución informática en la que grandes personajes de la historia jugaron un papel fundamental como es el caso de Bill Gate, Steve Jobs, entre otros que, de una u otra manera, ayudaron en el proceso de creación de microchips para el funcionamiento de los sistemas operativos.</p>
          <p>El período de cuarta generación fue 1972-1984. Las computadoras de cuarta generación utilizan circuitos de muy gran escala integrados (VLSI). Circuitos VLSI teniendo cerca de 5000 transistores y otros elementos del circuito y sus circuitos asociados en un solo chip hizo posible tener microprocesadores de cuarta generación. Cuarta generación de computadoras se convierte en la más potente, compacta, confiable y asequible. Como resultado, dio lugar a la revolución de la computadora personal (PC). En esta generación de tiempo compartido, tiempo real, redes, sistemas operativos distribuidos fueron utilizados. Todos los idiomas de alto nivel como C, C++, etc. DBASE, fueron utilizados en esta generación.</p>
          <Boton to="/quinta">Ver la quinta generación</Boton>
          <br />
          <br />
        </div>
      </Col>
    </Row>
  </Container>
  )
}
