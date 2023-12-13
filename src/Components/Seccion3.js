import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import gen1 from '../img2/gen1.png';
import gen1a from '../img2/gen1a.jpeg';
import gen1b from '../img2/gen1b.jpg';
import gen1c from '../img2/gen1c.jpeg';
import { Formulario2 } from './Formulario2';
import { Link } from 'react-router-dom';
export const Seccion3 = () => {
  const buttons = [
    { id: 1, label: "Ver segunda generación ", onClick: () => handleButtonClick(1) },
    
  ];

  const handleButtonClick = (buttonId) => {
    console.log(`Clic clic ${buttonId}`);

  };

  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            <h2 className="header-title3">Primera generación (1937-1958)</h2>
            <p>La primera generación de computadoras fue desarrollada a partir de la invención del tubo de vacío en 1937. Estos dispositivos eran enormes, costosos y requerían una gran cantidad de energía para su funcionamiento. Fueron utilizados principalmente en aplicaciones militares y científicas.</p>
            <p>Los primeros computadores, utilizaban tubos al vacío para circuitos y
            tambores magnéticos para la memoria y ocupaban cuatros enteros.
            Un tambor magnético, es un cilindro de metal recubierto con material
            magnético de óxido de hierro en que los datos y los programas pueden ser
            almacenados. Estos eran utilizados como dispositivos de almacenamiento primario,
            pero desde entonces se han implementado como dispositivos de almacenamiento
            auxiliar.</p>
                        <p>La operación de estos equipos era de alto costo y adicionalmente consumían
            gran cantidad de electricidad, generaban mucho calor la cual era la causa de mal
            funcionamiento. La primera generación de computadoras se basaba en lenguaje
            máquina para realizar operaciones y solo podían resolver un tiempo a la vez.
            Los computadores UNIVAC y ENIAC son ejemplos de componentes de la
            primera generación. LA UNIVAC fue la primera computadora comercial entregada
            a un cliente.</p>
                        <p>El 14 de febrero de 1946, J.P. Eckert y John Mauchly, presentaron el ENIAC,
            que resolvía cinco mil adiciones y sustracciones, trescientos cincuenta
            multiplicaciones o cincuenta divisiones por segundo. Tenía cerca de 19.000
            válvulas sustituidas por año. Esta máquina pesaba 30 toneladas, usaba 200 kW y
            consistía de 18000 tubos al vacío, 1500 relays y cientos de miles de resistores,
            capacitores e inductores. En 1943, antes de la entrada en operación del ENIAC
            Inglaterra ya poseía el Colossus, máquina creada por Turing para descifrar los
            códigos secretos alemanes.
            </p>
            <div
              className="estilizada-imagen"
            >
              <img
                src={gen1c}
                alt="Estilizada Imagen"
              />
            </div>
            <p>El tamaño enorme ocupaban cuartos enteros.
                No tenían sistema operativo, sino de una tarjeta perforada para almacenar toda la información.
                Eran utilizados exclusivamente por las fuerzas militares y la industria científica.</p>
            <p></p>
            <p>Si quieres saber más acerca de este tema registrate en el formulario de abajo :D</p>
              <Formulario2/>
              <br />
              <br />

          </div>
        </Col>
        <Col md={6}>
          <div className="section-content">
          <div className="flotante">
              <img className="imagen-flotante" src={gen1} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p>La primera generación de computadoras se basaba en lenguaje máquina para realizar operaciones y solo podían resolver un tiempo a la vez. Los computadores UNIVAC y ENIAC son ejemplos de componentes de la primera generación. LA UNIVAC fue la primera computadora comercial entregada a un cliente.</p>
            <div
              className="estilizada-imagen"
            >
              <img
                src={gen1a}
                alt="Estilizada Imagen"
              />
            </div>
            <div
              className="estilizada-imagen"
            >
              <img
                src={gen1b}
                alt="Estilizada Imagen"
              />
            </div>
            <p>Las computadoras de esta generación se caracterizaron por estar integradas de relevadores (relés)
              electromecánicos como la MARK I, o de tubos de vacío como la ENIAC. Eran de un
              tamaño tan grande que ocupaban espaciosos salones en las universidades donde fueron
              construidas, por lo que recibieron el nombre de macrocomputadoras. Su capacidad de
              almacenamiento en la memoria era muy reducida como en el caso de la ENIAC, que almacenaba 1
              kB (un kilobyte o 1024 bytes). Se considera 1946 como el inicio de esta generación, porque es a
              partir de ese año cuando comenzaron a operar este tipo de computadoras</p>
              <br />
              <br />
              <div className="buttons-container">
            {buttons.map((button) => (
              <Link to="/segunda">
              <Button className="custom-button" key={button.id} onClick={button.onClick}>
                {button.label}
              </Button>
              </Link>
            ))}
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
