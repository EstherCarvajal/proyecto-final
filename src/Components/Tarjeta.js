import React from 'react'
import { Card } from 'react-bootstrap';
export const Tarjeta = ({ imagenSrc, titulo, texto }) => {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={imagenSrc} alt={titulo} />
      <Card.Body>
        <Card.Title className="custom-title">{titulo}</Card.Title>
        <Card.Text className="custom-text">{texto}</Card.Text>
      </Card.Body>
    </Card>
  )
}
