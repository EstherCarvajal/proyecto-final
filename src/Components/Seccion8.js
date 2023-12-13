import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import gen6 from '../img2/gen6.png';
import gen6a from '../img2/gen6a.png';
import gen6b from '../img2/gen6b.png';
import gen6c from '../img2/gen6c.png';
import gen6d from '../img2/gen6d.png';
import { Boton } from './Boton';
import { Tarjeta } from './Tarjeta';
import { Card } from 'react-bootstrap';
import { CardText } from './CardText';
export const Seccion8 = () => {
  const textoEjemplo = "La sexta generación será desarrollada en torno a las computadoras inteligentes basadas en redes neuronales artificiales.";
  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            <h2 className="header-title">Sexta Generación (1991-2003)</h2>
            <p>La sexta generación de computadoras se enfocó en la conectividad e interconexión global. Con el uso del Internet, las computadoras se volvieron más interconectadas y se desarrollaron nuevas tecnologías como el correo electrónico y la World Wide Web. También se mejoró significativamente el hardware y el software de las computadoras.</p>
            <Tarjeta
              imagenSrc={gen6a}
              titulo="Era de las computadoras
              inteligentes"
              texto="La sexta generación se podría llamar a la era de las computadoras
              inteligentes basadas en redes neuronales artificiales o 'cerebros artificiales'. Serían
              computadoras que utilizarían superconductores como materia-prima para sus
              procesadores, lo cual permitirían no malgastar electricidad en calor debido a su nula
              resistencia, ganando rendimiento y economizando energía. La ganancia de
              rendimiento sería de aproximadamente 30 veces la de un procesador de misma
              frecuencia que utilice metales comunes.
              Todo esto está en pleno desarrollo, por el momento las únicas novedades
              han sido el uso de procesadores en paralelo, o sea, la división de tareas en múltiples
              unidades de procesamiento operando simultáneamente. Otra novedad es la
              incorporación de chips de procesadores especializados en las tareas de vídeo y
              sonido. "
            />
            <br />
            <Tarjeta
              imagenSrc={gen6b}
              titulo=" Computadoras inteligentes basadas en redes neuronales artificiales. "
              texto="Una de las características que definirán a la sexta generación serán las computadoras inteligentes basadas en redes neuronales artificiales. También llamadas “cerebros artificiales”, estas supercomputadoras utilizarán materiales semiconductores, que como primera ventaja, permiten aprovechar toda su energía sin disiparla en calor.

              Esto significa que toda la potencia sea puesta al servicio de realizar cálculos, en lugar de perderse en calor generado por su funcionamiento. Usando materiales superconductores, los científicos especulan que se pueden obtener hasta 30 veces más potencia que un procesador de silicio en la misma frecuencia. Imaginen lo que podremos hacer con eso en nuestros escritorios."
            />
            <br />
            <br />
            <Card className="custom">
                    <Card.Body className="custom-card-body">
                      <CardText texto={textoEjemplo} />
                    </Card.Body>
                  </Card>
                  <br />
          <br />
            <div className="video-wrapper">
            <iframe width="300" height="310" src="https://www.youtube.com/embed/RTgWcOJ-pYI" title="6ª GENERACIÓN DE COMPUTADORAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br />
          <br />
          
          </div>
        </Col>
        <Col md={6}>
          <div className="section-content">
          <div className="flotante">
              <img className="imagen-flotante" src={gen6} alt="Texto alternativo" />
            </div>
            <br/>
            <br/>
            <br/>
            <p></p>
            <Tarjeta
              imagenSrc={gen6c}
              titulo="Características de la sexta generación de computadoras"
              texto="Interacción constante con los servicios de internet, conexión inalámbrica con dispositivos y 5G: el internet de las cosas y el aumento en el tráfico de red y operaciones realizadas en la web hace necesario un dispositivo capacitado para el análisis y aprovechamiento de esta red.
              Implementación de arquitecturas paralelas: son sistemas orientados aumentar la velocidad de procesamiento por medio de la ejecución de múltiples tareas diferentes unidades de procesamiento que a su vez complementan la información y generan una respuesta más rápida por parte del sistema operativo.
              Expansión en la capacidad de almacenamiento: el implemento de programas de interacción directa, así como el continuo desarrollo de las imágenes y elementos multimedia de Ultra HD, y por ende mayor peso, requiere de un sistema de almacenamiento y procesamiento capaz de gestionar las múltiples funciones que el dispositivo debe ejecutar.
              Reducción del tamaño de los componentes y aumento del rendimiento: una tendencia constante en los sistemas de cómputo. Implica simplicidad, aumento de la velocidad y disminución del costo. 
              Implemento de inteligencia artificial: A pesar de estar en una etapa temprana, se espera crear ordenadores inteligentes basados en redes neuronales artificiales (o cerebro artificial).
              Multifuncionalidad: Además del desarrollo de dispositivos para uso personal, la sexta generación de computadoras también sería utilizado por las grandes industrias para apoyar sus actividades tales como el diseño de aeronaves, previsión del tiempo, y la gestión administrativa."
            />
            <br />
            <Tarjeta
              imagenSrc={gen6d}
              titulo="Los científicos hacen milagros con los procesadores"
              texto="Lamentablemente, todavía falta para que eso se haga realidad, sin embargo se encuentra en pleno desarrollo, por lo cual seguramente tendremos noticias en pocos años más. De cualquier manera, los científicos hacen milagros con los procesadores, logrando que sean cada vez más pequeños, potentes y que requieran menos energía para funcionar.

              Otro punto de vista que está siendo considerado, y quizás sea el enfoque más aceptado en el futuro, es el uso del procesamiento paralelo. Este procesamiento paralelo, dicho en una forma muy básica, no es otra cosa que múltiples procesadores trabajando juntos."
            />
            <br />
            <br />
            <Boton to="/septima">Ver la séptima generación</Boton>
            <br />
            <br />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
