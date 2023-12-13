import React from 'react'
import { Link } from 'react-router-dom';
export const Boton = ({ to, children }) => {
  return (
    <Link to={to} className="boton-enlace">
      {children}
    </Link>
  )
}
