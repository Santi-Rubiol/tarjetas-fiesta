import TarjetaCasamiento from './pages/TarjetaCasamiento/TarjetaCasamiento'

export default function App() {
  const datosPrincipales = {
    nombreNovia: 'Sofía',
    nombreNovio: 'Matías',
    fechaCasamiento: '2025-12-15T17:00:00',
    ubicacion: {
      nombreSalon: 'Salón de Eventos La Esperanza',
      direccion: 'Av. Libertador 1234, Buenos Aires, Argentina',
      mapa: 'https://goo.gl/maps/xyz123',
    },
    mensajeEspecial:
      'Estamos muy felices de compartir este momento con ustedes. ¡Los esperamos!',
  }

  const datosCeremoniaFiesta = {
    ceremonia: {
      fecha: '2025-12-15',
      hora: '17:00',
      lugar: 'Iglesia San José',
    },
    fiesta: {
      fecha: '2025-12-15',
      hora: '20:00',
      lugar: 'Salón de Eventos La Esperanza',
    },
  }

  return (
    <div>
      <TarjetaCasamiento
        datosPrincipales={datosPrincipales}
        datosCeremoniaFiesta={datosCeremoniaFiesta}
      />
    </div>
  )
}
