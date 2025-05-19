import React from 'react'
import Countdown from '../Contdown/Countdown'
import './HeroRomantico.css'

type HeroRomanticoProps = {
  nombreNovia: string
  nombreNovio: string
  fechaCasamiento: string
  ubicacion: string
  mensajeEspecial: string
}

const HeroRomantico = ({
  nombreNovia,
  nombreNovio,
  fechaCasamiento,
  ubicacion,
  mensajeEspecial,
}: HeroRomanticoProps) => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-nombres">
          {nombreNovia} & {nombreNovio}
        </h1>
        <p className="hero-frase">{mensajeEspecial}</p>

        <Countdown
          targetDate={fechaCasamiento}
          title="Faltan..."
          accentColor="accent-romantic"
          bgColor="bg-romantic"
        />

        <button className="hero-boton">Ver invitación</button>

        <p className="hero-ubicacion">{ubicacion}</p>
      </div>
    </section>
  )
}

export default HeroRomantico
