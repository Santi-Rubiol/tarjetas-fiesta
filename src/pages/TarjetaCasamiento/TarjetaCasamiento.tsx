import React from 'react'
import HeroRomantico from '../../components/HeroRomantico/HeroRomantico'
import CarruselRomantico from '../../components/CarruselRomantico/CarruselRomantico'
import CeremoniaFiesta from '../../components/CeremoniaFiesta/CeremoniaFiesta'
import MensajeEspecial from '../../components/MensajeEspecial/MensajeEspecial'
import ConfirmacionAsistencia from '../../components/ConfirmacionAsistencia/ConfirmacionAsistencia'
import PieRomantico from '../../layout/PieRomantico/PieRomantico'

type DatosPrincipales = {
  nombreNovia: string
  nombreNovio: string
  fechaCasamiento: string
  ubicacion: {
    nombreSalon: string
    direccion: string
    mapa: string
  }
  mensajeEspecial: string
}

type DatosCeremoniaFiesta = {
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

const TarjetaCasamiento: React.FC<{
  datosPrincipales: DatosPrincipales
  datosCeremoniaFiesta: DatosCeremoniaFiesta
}> = ({ datosPrincipales, datosCeremoniaFiesta }) => {
  return (
    <div>
      <HeroRomantico
        nombreNovia={datosPrincipales.nombreNovia}
        nombreNovio={datosPrincipales.nombreNovio}
        fechaCasamiento={datosPrincipales.fechaCasamiento}
        ubicacion={datosPrincipales.ubicacion?.direccion}
        mensajeEspecial={datosPrincipales.mensajeEspecial}
      />
      <CeremoniaFiesta
        ceremonia={datosCeremoniaFiesta.ceremonia}
        fiesta={datosCeremoniaFiesta.fiesta}
      />
      <CarruselRomantico />
      <MensajeEspecial />
      <ConfirmacionAsistencia />
      <PieRomantico />
    </div>
  )
}

export default TarjetaCasamiento
