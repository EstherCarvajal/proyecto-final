import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import cr1 from '../img2/cr1.png';
export const Seccion12 = () => {
  return (
    <Container className="two-column-section">
      <Row>
        <Col md={6}>
          <div className="section-content">
            <h2 className="header-title">GENERACIONES DE COMPUTADORAS</h2>
            <p className="subtitulo">REALIZADA POR:</p>
            <h1 className="titulo-especial">Esther Mayerly Carvajal Quispe</h1>
          </div>
        </Col>
        <Col md={6}>
          <div className="section-content">
          <div className="flotante">
              <img className="imagen-flotante" src={cr1} alt="Texto alternativo" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
