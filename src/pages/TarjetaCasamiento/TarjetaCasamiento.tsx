import React from 'react'
import HeroRomantico from '../../components/HeroRomantico/HeroRomantico'
import CarruselRomantico from '../../components/CarruselRomantico/CarruselRomantico'
import CeremoniaFiesta from '../../components/CeremoniaFiesta/CeremoniaFiesta'
import MensajeEspecial from '../../components/MensajeEspecial/MensajeEspecial'
import ConfirmacionAsistencia from '../../components/ConfirmacionAsistencia/ConfirmacionAsistencia'
import PieRomantico from '../../layout/PieRomantico/PieRomantico'

const TarjetaCasamiento: React.FC = () => {
  return (
    <div>
      <HeroRomantico />
      <CeremoniaFiesta />
      <CarruselRomantico />
      <MensajeEspecial />
      <ConfirmacionAsistencia />
      <PieRomantico />
    </div>
  )
}

export default TarjetaCasamiento
