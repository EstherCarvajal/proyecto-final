import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import gen5 from '../img2/gen5.png';
import gen5a from '../img2/gen5a.jpg';
import gen5b from '../img2/gen5b.jpg';
import gen5c from '../img2/gen5c.png';
import { Card } from 'react-bootstrap';
import { CardText } from './CardText';
import { Boton } from './Boton';
export const Seccion7 = () => {
  const textoEjemplo = "Las computadoras de quinta generación son equipos muy complejos, pero que a la vez son muy sencillos de usar, ya que no requieren conocimientos especiales para usarlas.";

  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            <h2 className="header-title4">Quinta generación (1985-1990)</h2>
            <p>La quinta generación de computadoras se enfocó en la inteligencia artificial y el procesamiento de lenguaje natural. Algunas de las tecnologías más destacadas de esta generación incluyen el desarrollo del lenguaje de programación Prolog y el proyecto R&D de quinta generación del gobierno japonés.</p>
            <div
              className="estilizada-imagen"
            >
              <img
                src={gen5a}
                alt="Estilizada Imagen"
              />
            </div>
            <p>Cada vez se hace más difícil la identificación de las generaciones de computadoras, porque los
              grandes avances y nuevos descubrimientos ya no nos sorprenden como sucedió a mediados del
              siglo xx. Hay quienes consideran que la cuarta generación es la última, ya que no ha cambiado la
              tecnología de los microprocesadores para la construcción de las modernas computadoras. Sin
              embargo muchos proponen que el inicio de la quinta generación se da a partir de 1982. Hay que
              mencionar dos grandes avances tecnológicos que tal vez sirvan como parámetro para el inicio de
              la quinta generación: la creación en 1982 de la primera supercomputadora con capacidad de
              proceso paralelo, diseñada por Seymour Cray (1925-1996) y el anuncio por parte del
              gobierno japonés del proyecto quinta generación, que según se acordó con seis de las más
              grandes empresas japonesas de computación, debería terminar en 1992.</p>
          </div>
          <div
              className="estilizada-imagen"
            >
              <img
                src={gen5b}
                alt="Estilizada Imagen"
              />
            </div>
          
            <p>Otras tecnologías que se desarrollarían en esta generación son: la holografía; la nanotecnología; la robótica; las redes neurales; las fibras ópticas; las telecomunicaciones de banda
                  ancha; las redes inalámbricas; la inteligencia artificial distribuida; la teoría del caos, los sistemas
                  difusos, los transistores ópticos, la biotecnología, etcétera.
                  Se han creado computadoras capaces de realizar más de un millón de millones de operaciones
                  aritméticas de punto flotante por segundo (teraflops).</p>
        </Col>
        <Col md={6}>
          <div className="section-content">
          <div className="flotante">
              <img className="imagen-flotante" src={gen5} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p>La mayoría de los avances y tecnologías propuestos siguen en pleno desarrollo, aunque el
              proyecto se dio por terminado desde 1995, cuando todas las instituciones participantes de los
              diferentes países, cancelaron las iniciativas relacionadas con este proyecto, ya que no se
              obtuvieron los resultados esperados, contra los presupuestos destinados a ello.</p>
              <div
              className="estilizada-imagen"
            >
              <img
                src={gen5c}
                alt="Estilizada Imagen"
              />
            </div>
            <p>Cuando hablamos de computadoras de quinta generación, estamos hablando de equipos que están asociados a altas tecnologías como la inteligencia artificial, la nanotecnología, el procesamiento paralelo y la computación cuántica.

              Esta generación de computadoras se nutre de los invenciones que han tenido lugar en las generaciones anteriores, pero llevadas mucho más allá. Quizás por este motivo sea un poco difícil distinguir su tecnología de las otras generaciones.</p>
              <p>Llegamos a la quinta generación de computadoras gracias a muchas innovaciones, tanto de software como de hardware.


                Desde los nuevos lenguajes de programación de alto nivel como la tecnología de integración de ultra gran escala, ULSI, que permite fabricar microprocesadores pequeños pero que en su interior albergan millones de componentes electrónicos.</p>
                  <Card>
                    <Card.Body>
                      <CardText texto={textoEjemplo} />
                    </Card.Body>
                  </Card>
                  <br/>
                  <Boton to="/sexta">Ver la sexta generación</Boton>
          <br />
          <br />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
