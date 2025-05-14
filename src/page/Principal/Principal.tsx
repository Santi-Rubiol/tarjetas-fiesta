import Header from './Header'
import Footer from './Footer'
import Countdown from '../../components/Contador/Countdown'

export default function Principal() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-pink-50 text-gray-800 p-4">
      <Header />
      <Countdown
        targetDate="2025-06-01T20:00:00"
        title="¡Nos vemos en el evento!"
        accentColor="text-fuchsia-500"
        bgColor="bg-black/30"
      />

      {/* <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 max-w-md w-full text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            ¡Estás invitado!
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-2">Cumpleaños de</p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Sofía
          </p>

          <p className="text-gray-700 text-base mb-1">📅 Sábado 25 de Mayo</p>
          <p className="text-gray-700 text-base mb-4">🕒 18:00 hs</p>
          <Countdown
            targetDate="2025-06-01T20:00:00"
            title="¡Comienza el evento en!"
            accentColor="text-indigo-500"
            bgColor="bg-black/30"
          />

          <p className="text-gray-700 text-base mb-4">
            📍 Salón Alegría, Tucumán
          </p>

          <div className="my-6">
            <img
              src="https://source.unsplash.com/400x200/?party"
              alt="Fiesta"
              className="rounded-xl shadow-md mx-auto"
            />
          </div>

          <p className="text-sm text-gray-500 mt-4">
            ¡Te esperamos para celebrar juntos!
          </p>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}
