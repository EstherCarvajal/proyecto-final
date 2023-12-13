import React from 'react'

export const Formulario = () => {
  return (
    <div className="formulario-container">
      <h2 className="formulario-titulo">Completa el formulario</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
