import React from 'react'
import './CeremoniaFiesta.css'

const CeremoniaFiesta: React.FC = () => {
  return (
    <section className="ceremonia-container">
      <h2 className="ceremonia-titulo">Ceremonia & Fiesta</h2>
      <p className="ceremonia-texto">
        Te esperamos para celebrar juntos este día tan especial.
      </p>

      <div className="ceremonia-detalle">
        <p>
          <strong>📍 Lugar:</strong> Jardines del Alma, Rosario
        </p>
        <p>
          <strong>🕒 Hora:</strong> 17:00 hs
        </p>
        <p>
          <strong>📅 Fecha:</strong> 15 de Diciembre de 2025
        </p>
      </div>

      <p className="ceremonia-mensaje">
        Luego de la ceremonia, nos quedamos a festejar con comida rica, música y
        mucha alegría 💕
      </p>
    </section>
  )
}

export default CeremoniaFiesta
