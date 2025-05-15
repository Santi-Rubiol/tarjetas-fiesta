import React from 'react'
import Countdown from '../Contdown/Countdown'
import './HeroRomantico.css'

const HeroRomantico: React.FC = () => {
  const fechaCasamiento = '2025-12-15T17:00:00'

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-nombres">Sofía & Matías</h1>
        <p className="hero-frase">
          ¡Nos casamos y queremos compartir este momento con vos!
        </p>

        <Countdown
          targetDate={fechaCasamiento}
          title="Faltan..."
          accentColor="accent-romantic"
          bgColor="bg-romantic"
        />

        <button className="hero-boton">Ver invitación</button>

        <p className="hero-ubicacion">
          15 de Diciembre de 2025 • Rosario, Argentina
        </p>
      </div>
    </section>
  )
}

export default HeroRomantico
