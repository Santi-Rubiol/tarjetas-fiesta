import React from 'react'
import './CeremoniaFiesta.css'

type CeremoniaFiestaProps = {
  ceremonia: {
    fecha: string
    hora: string
    lugar: string
  }
  fiesta: {
    fecha: string
    hora: string
    lugar: string
  }
}

const CeremoniaFiesta: React.FC<CeremoniaFiestaProps> = ({
  ceremonia,
  fiesta,
}) => {
  return (
    <section className="ceremonia-container">
      <h2 className="ceremonia-titulo">Ceremonia</h2>
      <p className="ceremonia-texto">
        Te esperamos para celebrar juntos este día tan especial.
      </p>

      <div className="ceremonia-detalle">
        <p>
          <strong>📍 Lugar:</strong> {ceremonia.lugar}
        </p>
        <p>
          <strong>🕒 Hora:</strong> {ceremonia.hora}
        </p>
        <p>
          <strong>📅 Fecha:</strong> {ceremonia.fecha}
        </p>
      </div>

      <p className="ceremonia-mensaje">
        Luego de la ceremonia, nos quedamos a festejar con comida rica, música y
        mucha alegría 💕
      </p>

      <h2 className="ceremonia-titulo">Fiesta</h2>

      <div className="ceremonia-detalle">
        <p>
          <strong>📍 Lugar:</strong> {fiesta.lugar}
        </p>
        <p>
          <strong>🕒 Hora:</strong> {fiesta.hora}
        </p>
        <p>
          <strong>📅 Fecha:</strong> {fiesta.fecha}
        </p>
      </div>
    </section>
  )
}

export default CeremoniaFiesta
