import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Card } from 'react-bootstrap';
import { CardText } from './CardText';
import gen8 from '../img2/gen8.png';
import gen8a from '../img2/gen8a.png';
import gen8b from '../img2/gen8b.png';
import gen8c from '../img2/gen8c.png';
export const Seccion10 = () => {
  const textoEjemplo = "La octava generación de computadoras se refiere fundamentalmente a la exploración y expansión de la nanotecnología, la realidad virtual y la computación cuántica, para así llegar a producir en un futuro cambios importantes en los equipos informáticos."
  const textoEjemplo2 = "En la octava generación de computadoras no se necesitarán periféricos de ningún tipo para operarla, ya que contaremos con implantes de nanotecnología y servicios alojados en la nube."

  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            <h2 className="header-title4">Octava generación (2011-presente)</h2>
            <p>La octava generación de computadoras se enfoca en la integración de la realidad virtual y la inteligencia artificial en la vida diaria. Los avances en la tecnología de los procesadores y la memoria RAM han permitido la producción de dispositivos más sofisticados, como los asistentes virtuales y las plataformas de juegos en línea.</p>
            <br />
            <Card className="custom">
                    <Card.Body className="custom-card-body">
                      <CardText texto={textoEjemplo} />
                    </Card.Body>
                  </Card>
                  <br />
                  <div className="flotante">
              <img className="imagen-flotante" src={gen8a} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <h1 className="header-title4">Características</h1>
            <p className="subtitulo">– Computación cuántica</p>
            <p>Permitirá desarrollar nuevos materiales y químicos, además de acelerar los progresos que se vienen dando en inteligencia artificial y poder responder interrogantes primordiales sobre los orígenes del universo.

              Para resolver los problemas más desafiantes del mundo una computadora cuántica podría encontrar una solución en apenas horas, donde las computadoras actuales requerirían varios millones de años.</p>
              <p className="subtitulo">– Nanotecnología</p>
              <p>Nanocables
                  Son cables con un diámetro a veces tan pequeño como 1 nanómetro. Los científicos esperan usarlos para construir pequeños transistores para chips de computadora.

                  Nanotubos de carbono
                  Son cilindros de átomos de carbono de tamaño nano. Pueden ser semiconductores efectivos con la disposición correcta de los átomos.</p>
                  <p className="subtitulo">– Realidad virtual</p>
                  <p>Esto es una experiencia de simulación que puede ser totalmente diferente o similar al mundo real. Entre las aplicaciones se puede encontrar diversión y fines educativos, como entrenamiento militar o médico.

                  Otros tipos distintos de tecnología al estilo de la realidad virtual incluyen la realidad aumentada y realidad mixta.

                  La experiencia de la realidad virtual involucra toda la plataforma, no solo un componente. Se requiere una combinación ideal de procesador, gráficos, conectividad de entrada/salida, pantalla y audio.</p>
                  <div className="flotante">
              <img className="imagen-flotante" src={gen8c} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <h1 className="header-title4">Software</h1>
            <p className="subtitulo">– Realidad virtual</p>
            <p>Las pantallas de los receptores de realidad virtual se basan en la tecnología desarrollada para los teléfonos inteligentes. Incluyen giroscopios y sensores de movimiento (para rastrear posiciones de la cabeza, manos y cuerpo), pantallas HD estereoscópicas y también pequeños procesadores, livianos y rápidos.

              La creación de realidad virtual ha aumentado considerablemente gracias al avance existente en cámaras omnidireccionales, con la capacidad de grabar fotografías y así poder transmitir videos en línea.</p>
              <p className="subtitulo">– Juegos en la nube</p>
              <p>PlayStation Now permite juegos en la nube para PlayStation 2, 3 y 4, juegos para las consolas PlayStation actuales y para computadoras personales.

                  Microsoft comenzó a desarrollar un servicio comparable (xCloud) para juegos de Xbox y también para Windows.

                  Google lanzó Stadia, una plataforma de juegos en la nube diseñada en torno a latencia reducida y características avanzadas que no son típicas de estas otras opciones de juegos en la nube.</p>
                  <br/>
            <br/>
          </div>
        </Col>
        <Col md={6}>
          <div className="section-content">
          <div className="flotante">
              <img className="imagen-flotante" src={gen8} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p>Según la cronología de evolución de las computadoras, se considera que el comienzo de la octava generación tuvo lugar en 2012, cuando Nintendo lanzó al mercado la Wii U, considerada como la primera consola de esta generación.

                Sin embargo, aunque se sitúe la octava generación de computadoras a partir de 2012, se puede decir que aún no ha alcanzado una gran masificación, debido principalmente a que las características de los componentes que la conforman tienen un costo demasiado elevado para el hogar común.</p>
                <br />
            <Card className="custom">
                    <Card.Body className="custom-card-body">
                      <CardText texto={textoEjemplo2} />
                    </Card.Body>
                  </Card>
                  <br />
                  <p>A pesar que la tecnología cada día que pasa nos asombra más con sus descubrimientos y avances, lo cierto es que cada cierto tiempo se llega a un cuello de botella. Este cuello impide que se pueda seguir avanzando hasta tener todas las respuestas.

                      Sin embargo, los científicos no dejan de alucinar, y de teorizar. Es por ello que los que veremos a continuación es posible que sólo lo veamos en una peli de ciencia ficción. Sin embargo, quien diría en los años 1950 que investigaríamos la superficie de Marte con unos robots a control remoto. Sólo en una película.</p>
                      <div className="flotante">
              <img className="imagen-flotante" src={gen8b} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
                      
                      <h1 className="header-title4">Hardware</h1>
                      <p className="subtitulo">– Procesadores</p>
                      <p>Los procesadores pueden tener hasta seis núcleos, permitiendo aumentar la frecuencia máxima hasta 4,7 GHz y hasta 12 MB de memoria caché. Una RAM DDR4 permite tener hasta 64 GB de memoria.

                      Cada núcleo del procesador puede trabajar en dos tareas simultáneamente, acelerando los flujos de trabajo al ofrecer un soporte multitarea de hasta 12 vías.</p>
                      <p className="subtitulo">– Computación cuántica</p>
                      <p>Para el procesamiento se aprovechan las propiedades de la física cuántica, permitiendo resolver los retos más difíciles a través del manejo de dispositivos a nanoescala.

                          La unidad de información es el bit cuántico (qubit). Así como el bit clásico contiene un solo valor binario (1 o 0), un qubit puede contener ambos valores al mismo tiempo.

                          Cuando múltiples qubits actúan coherentemente, pueden procesar múltiples opciones simultáneamente.</p>
                          <p className="subtitulo">– Realidad virtual</p>
                      <p>Las pantallas de los receptores de realidad virtual se basan en la tecnología desarrollada para los teléfonos inteligentes. Incluyen giroscopios y sensores de movimiento (para rastrear posiciones de la cabeza, manos y cuerpo), pantallas HD estereoscópicas y también pequeños procesadores, livianos y rápidos.

                        La creación de realidad virtual ha aumentado considerablemente gracias al avance existente en cámaras omnidireccionales, con la capacidad de grabar fotografías y así poder transmitir videos en línea.</p>
                        <div className="video-wrapper">
                        <iframe width="345" height="315" src="https://www.youtube.com/embed/EJHmmIAqrpM" title="Capitulo 8 : Octava generación de las computadoras" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br/>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
