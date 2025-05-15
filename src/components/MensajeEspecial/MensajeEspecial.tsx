import React from 'react'
import './MensajeEspecial.css'

const MensajeEspecial: React.FC = () => {
  return (
    <section className="mensaje-container">
      <h2 className="mensaje-titulo">Un mensaje especial</h2>
      <p className="mensaje-frase">
        "El amor no consiste en mirarse el uno al otro, sino en mirar juntos en
        la misma dirección."
      </p>

      <div className="mensaje-extra">
        Dress code: Elegante y cómodo 🌸
        <br />
        Si podés, elegí tonos claros o pastel 🤍
      </div>
    </section>
  )
}

export default MensajeEspecial
