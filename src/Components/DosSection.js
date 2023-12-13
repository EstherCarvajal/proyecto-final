import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Carrusel } from './Carrusel';
import { Carrusel2 } from './Carrusel2';
import { Formulario } from './Formulario';
import { Link } from 'react-router-dom';
import comp2 from '../img2/comp2.png';
export const DosSection = () => {

  const buttons = [
    { id: 1, label: "Ver más contenido", onClick: () => handleButtonClick(1) },
    
  ];

  const handleButtonClick = (buttonId) => {
    console.log(`Clic clic ${buttonId}`);

  };


  return (
    <div className="dos-columnas-section">
      <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            <Carrusel />
            <br />
            <h2 className="header-title">Primera Generación</h2>
            <p>Se les llamó generación 1940 pues ocupó este periodo histórico entre 1946 a 1955 y cuya tecnología utilizada eran los tubos al vacío y de las cuales las más reconocidas  por sus actualizaciones fueron la EDVAC y la ENIAC. Se caracterizaban principalmente por:</p>
            <p>El tamaño enorme ocupaban cuartos enteros.
                No tenían sistema operativo, sino de una tarjeta perforada para almacenar toda la información.
                Eran utilizados exclusivamente por las fuerzas militares y la industria científica. </p>
                <h2 className="header-title">Tercera Generación</h2>
                <p>Entramos con ella a dos décadas de la primera generación de computadoras y con cambios muy evidentes pues  aparecen los primeros discos magnéticos y los componentes electrónicos se integran en una sola pieza o chip que albergan en su interior condensadores, transistores y diodos. Algunas características eran: </p>
                <p>Aumento de la velocidad de carga.
                    Reducción del consumo de energía eléctrica. 
                    Mayor flexibilidad y fiabilidad, ser de menor tamaño y ocupar poco espacio. </p>
                    <h2 className="header-title">Quinta Generación</h2>
                    <p>La quinta generación de computadoras es el conjunto de computadoras diseñadas a partir de 1981 y que representan el paso más reciente en la evolución de este tipo de tecnología. Sus primeros modelos se produjeron y comercializaron en Japón, y apuntaban al desarrollo de sistemas informáticos dotados de los tipos de arquitectura informática VLSI (del inglés Very Large Scale Integration, “integración a muy gran escala”) y ULSI (del inglés Ultra Large Scale Integration, “integración a escala ultra grande”).</p>
                    <h2 className="header-title">Séptima Generación</h2>
                    <p>La séptima generación comienza en el año 1999 donde popularizan las pantallas plana LCD 2 y hacen a un lado a los rayos catódicos, en donde se han dejado los DVD y los formatos de disco duro óptico. </p>
                    <p>La nueva generación de almacenamiento de datos de alta densidad con una capacidad de almacenamiento que llega a las 50 GB, aunque se ha confirmado que esta lista puede recibir 16 capas de 400 GB. A La sexta generación se podría llamar a la era de las computadoras inteligentes basadas en redes neuronales artificiales o “cerebros artificiales”.</p>
                    <div className="video-wrapper">
            <iframe width="345" height="315" src="https://www.youtube.com/embed/z5IIWdgdMEo" title="Generaciones de las Computadoras" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
          </div>
          <div className="flotante">
              <img className="imagen-flotante" src={comp2} alt="Texto alternativo" />
            </div>
            <br />
          <div className="buttons-container">
            {buttons.map((button) => (
              <Link to="/historia">
              <Button className="custom-button" key={button.id} onClick={button.onClick}>
                {button.label}
              </Button>
              </Link>
            ))}
          </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="section-content">
            <Carrusel2 />
            <br />
            <h2 className="header-title">Segunda Generación</h2>
                <p>Entre 1958 a 1964 cuya gran hazaña o progreso fue la sustitución de válvulas de vacío por los transistores, acompañada del uso de memorias de núcleo de ferritas y tambores magnéticos para almacenar la información, los cuales permitieron la fabricación de computadoras de menor tamaño, caracterizadas por una mejor potencia, rapidez y fiabilidad. </p>
                <p>La segunda generación de las computadoras reemplazó las válvulas de vacío por los transistores.</p>
                <h2 className="header-title">Cuarta Generación</h2>
                    <p>La cuarta generación de computadoras se refiere al tipo de computadoras que fueron empleadas durante la fase que comenzó en 1972.Entre 1971 y 1981 las computadoras personales se convierten en las protagonistas de la informática. Todos los elementos que conforman la CPU ahora se almacenan en un circuito integrado conocido como microprocesadores.</p>
                    <p>Los ordenadores tenian piezas más pequeñas y más precisas. Con todos estos avances las empresas pudieron crear las primeras computadoras personales.</p>
                    <h2 className="header-title">Sexta Generación</h2>
                    <p>La sexta generación de computadoras será el siguiente paso en la evolución de las computadoras, a partir de la construcción de “redes neuronales” o “cerebros artificiales”, esto es, grandes sistemas descentralizados de procesamiento de información, de la mano de la inteligencia artificial y los superconductores. Se trata de una generación de computadoras por venir, de la cual apenas se pueden especular ciertas tendencias, por lo que su aparición plena se producirá en el futuro. </p>
                    <h2 className="header-title">Octava Generación</h2>
                    <p>La octava generación de computadoras se refiere fundamentalmente a la exploración y expansión de la nanotecnología, la realidad virtual y la computación cuántica, para así llegar a producir en un futuro cambios importantes en los equipos informáticos.</p>
                    <p>Componentes tales como el disco duro desaparecerán en su concepción como dispositivos físicos y mecánicos, teniendo una velocidad significativa porque funcionarán de manera orgánica e independiente, basados en impulsos electromagnéticos.</p>
                    <p>Según la cronología de evolución de las computadoras, se considera que el comienzo de la octava generación tuvo lugar en 2012, cuando Nintendo lanzó al mercado la Wii U, considerada como la primera consola de esta generación.</p>
                    <p>Sin embargo, aunque se sitúe la octava generación de computadoras a partir de 2012, se puede decir que aún no ha alcanzado una gran masificación, debido principalmente a que las características de los componentes que la conforman tienen un costo demasiado elevado para el hogar común.</p>
                    <p>Por ese motivo, se debe esperar a que la nanotecnología se vaya convirtiendo en un componente habitual y accesible en el mercado para la mayoría.</p>
                    <br />
                <Formulario />
                <br />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
