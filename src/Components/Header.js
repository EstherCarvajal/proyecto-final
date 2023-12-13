
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import iclog from '../img2/iclog.png';

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          <img
            className="d-inline-block align-top"
            src={iclog}
            alt="Icono"
            width="35"
            height="35"
            style={{ marginLeft: '20px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/historia">Historia</Nav.Link>
            <NavDropdown title="Generaciones" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/pagina1">
                Primera Generación
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/segunda">
                Segunda Generación
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/tercera">
                Tercera Generación
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/cuarta">
                Cuarta Generación
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/quinta">
                Quinta Generación
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/sexta">
                Sexta Generación
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/septima">
                Séptima Generación
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/octava">
                Octava Generación
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/creditos">Créditos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

