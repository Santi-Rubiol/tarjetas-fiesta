import React from 'react'
import './ConfirmacionAsistencia.css'

const ConfirmacionAsistencia: React.FC = () => {
  return (
    <section className="confirmacion-container">
      <h2 className="confirmacion-titulo">¿Podés acompañarnos?</h2>
      <p className="confirmacion-texto">
        Por favor confirmá tu asistencia y dejanos alguna nota si hay algo que
        debamos tener en cuenta 🕊️
      </p>

      <form className="confirmacion-form">
        <input
          type="text"
          placeholder="Tu nombre"
          className="confirmacion-input"
        />

        <textarea
          placeholder="¿Alguna nota? (opcional)"
          className="confirmacion-textarea"
        ></textarea>

        <button
          type="submit"
          className="confirmacion-boton"
        >
          Confirmar asistencia
        </button>
      </form>
    </section>
  )
}

export default ConfirmacionAsistencia
