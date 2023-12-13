import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import imagen1 from "../img2/imagen1.jpg";
import s2 from "../img2/s2.jpg";
import com from "../img2/com.jpg";
import { Tarjeta } from './Tarjeta';
import { Carrusel } from './Carrusel';
export const Seccion2 = () => {
  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            
            <h2 className='header-title2'>Historia de las computadoras</h2>
            <p>Desde los inicios de la humanidad, el hombre ha buscado formas de simplificar y optimizar sus actividades cotidianas. Esta necesidad ha dado lugar a la creación de numerosos inventos, entre los que se encuentran las computadoras.

Las primeras computadoras fueron creadas hace más de 2000 años, aunque en aquel entonces se trataba de dispositivos muy sencillos. Con el paso del tiempo y el avance de la tecnología, las computadoras fueron evolucionando hasta convertirse en los sofisticados dispositivos que son hoy en día.

Veamos el avance de las computadoras desde sus orígenes primitivos en el siglo XIX hasta las poderosas máquinas modernas que tenemos hoy en día:</p>
            <Tarjeta
              imagenSrc={imagen1}
              titulo="Evolución de las computadoras durante el Siglo XIX"
              texto="El origen de la evolución de las computadoras modernas lo podemos encontrar en el año 1801, cuando el inventor y comerciante francés, Joseph Marie Jacquard, inventó un tejar que usaba tarjetas de madera para realizar diseños de tela automáticamente.

              En 1821, el matemático inglés Charles Babbage desarrolló una máquina calculadora impulsada por vapor y en 1848 la hija del poeta Lord Byron, Ada Lovelace, escribió el primer programa de computadora de la historia.
              
              Décadas más tarde, en 1853, el inventor sueco Per Georg Scheutz y su hijo Edvard diseñaron la primera calculadora de impresión del mundo.
              
              Y en 1890 Herman Hollerith diseñó un sistema de tarjetas perforadas para ayudar a calcular el censo de Estados Unidos de ese año. Ese sistema le ahorró al gobierno alrededor de 5 millones de dólares y años de cálculos manuales."
            />
            <br />
            <p>Las computadoras, computadores u ordenadores son las herramientas de cálculo más eficientes jamás inventadas. Tienen el suficiente poder de cálculo, autonomía y velocidad de procesamiento para reemplazarnos en muchas tareas, o permitirnos dinámicas de trabajo que nunca antes en la historia habían sido posibles, al punto tal de hacerse hoy en día indispensables.</p>

            <p>Estos aparatos se inventaron en el siglo XX, revolucionando para siempre la manera en que entendemos los procesos industriales, las comunicaciones, la sociedad y muchas otras áreas de la vida.</p>
            <p>Su historia comienza con el primer computador propiamente dicho, cuya autoría no puede adjudicársele estrictamente a ninguna persona en solitario. Desde entonces han cambiado enormemente y nos han cambiado enormemente, por lo que muchos estudiosos consideran su aparición una Segunda Revolución Industrial o incluso una Revolución Digital.</p>
            <br />
            <div className="video-wrapper">
            <iframe width="345" height="315" src="https://www.youtube.com/embed/a8Q2xpI7hbs" title="Historia de la computadora (generaciones)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <br />
          <p>Las computadoras son dispositivos que utilizan programas informáticos para procesar y almacenar datos. Estas permiten a sus usuarios realizar numerosas tareas, tales como la elaboración de textos, diseños gráficos, navegar e investigar por internet, entre muchas otras cosas.</p>
          <div
              className="estilizada-imagen"
            >
              <img
                src={com}
                alt="Estilizada Imagen"
              />
            </div>

          </div>
        </Col>
        <Col md={6}>
          <div className="section-content">
            <Tarjeta
              imagenSrc={s2}
              titulo="Evolución de las computadoras durante el Siglo XX"
              texto="La evolución de las computadoras durante el siglo XX arranca a partir de los años 30, cuando Vannevar Bush inventa y construye el analizador diferencial, la primera computadora analógica y mecánica.

              Durante esa misma década, en 1936, el científico y matemático Alan Turing, presenta un artículo llamado “Sobre los números computables, con una aplicación al problema de la decisión”. El concepto fundamental de lo que es una computadora parte de las ideas de Turing.
              
               
              
              Un año más tarde, en 1937, el profesor de física y matemáticas de la Universidad Estatal de Iowa, John Vincent Atanasoff, propone crear la primera computadora completamente eléctrica.
              
              En 1941 el inventor e ingeniero alemán Konrad Zuse termina el Z3, la primera computadora digital de la historia. En ese mismo año, Atanasoff y su estudiante ya graduado, Clifford Berry, crean la primera computadora electrónica digital llamada Atanasoff-Berry Computer (ABC).
              
              En 1949 un equipo de la Universidad de Cambridge desarrolla EDSAC, la primera computadora práctica con programa almacenado.
              
              Grace Hopper desarrolló el primer lenguaje de programación en 1953, llamado COBOL. Y en 1954, programadores de IBM publican un artículo que describe su propio lenguaje de programación, FORTRAN.
              
              En 1968 Douglas Engelbart revela su prototipo de la computadora moderna que incluía un ratón y una interfaz gráfica de usuario (GUI).
              
              En 1975, Paul Allen y Bill Gates inician su empresa de software, Microsoft. Y en 1976, Steve Jobs y Steve Wozniak cofundan Apple Computer y presentan Apple I, la primera computadora con placa de circuito único y ROM.
              
              Casi una década después, en 1984, Steve Jobs presentó la primera computadora Macintosh, que incluía un teclado, ratón y una pequeña pantalla de 9 pulgadas. Su precio de lanzamiento fue de 2.495 dólares.
              
              En noviembre de 1985, Microsoft lanza su sistema operativo Windows. Y en 1993, el microprocesador Pentium avanza en el uso de gráficos y música en las computadoras.
              
              En 1999 se logra un gran avance con la creación del Wi-Fi, que inicialmente cubre una distancia de 91 metros.
              
              Finalmente, en 2001 nace el sistema operativo macOS, en lugar del Mac estándar. En 2004 se lanza el navegador Mozilla Firefox 1.0, en 2005 Google compra Android y en 2009 Windows lanza al mercado Windows 7."
            />
            <br/>
            <h2 className="header-title2">Antecedentes de la computadora</h2>
            <p>Los antecedentes de la computadora se remontan al año 4.000 a. C. cuando se inventaron las primeras máquinas diseñadas para la aritmética y las primeras reglas de cálculo. Entre ellos se encuentra el ábaco, un importante adelanto en la materia.</p>
            <Carrusel />
            <br />
            <p>Muy posteriormente se crearon inventos más sofisticados, como la máquina de Blaise Pascal (conocida como Máquina de Pascal o Pascalina), creada en 1642. Consistía en una serie de engranajes que permitían realizar operaciones aritméticas mecánicamente. Al mejorarla, en 1671 Gottfried Leibniz dio inicio a las primeras calculadoras, primas cercanas del computador.</p>
            <p>En 1802 Joseph Marie Jacquard inventó un sistema de tarjetas perforadas que le permitiría automatizar sus telares y reducir así la necesidad de mano de obra. En 1822 fueron la inspiración del inglés Charles Babbage en la creación de una máquina de cálculo diferencial. Babbage es «el padre de la computadora» porque en 1834 inventó una suerte de máquina analítica.</p>
            <p>A estos dispositivos que cambiaron nuestras vidas en el siglo XX se les dio el nombre de 'computadoras' porque realizan sus funciones a partir de cálculos, procesando información de manera automática.</p>
            <p>Las primeras computadoras se diseñaron como dispositivos digitales 'biestables', es decir, que calculaban con base en decisiones de elección entre dos valores '0' y '1'. De este modo, la computadora funciona como una herramienta electrónica que realiza operaciones lógicas de acuerdo con las instrucciones que se les proporcionan.</p>
            <br/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
