import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
export const Formulario2 = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [pais, setPais] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setNombre('');
      setEmail('');
      setPais('');
    };
    return (
        <div className="formulario-container">
        <h2>¡Quiero saber más!</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
  
          <Form.Group controlId="formPais">
            <Form.Label>País</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su país"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Quiero saber más
          </Button>
        </Form>
      </div>
  )
}
