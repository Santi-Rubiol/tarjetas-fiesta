import React from 'react'
import './PieRomantico.css'

const PieRomantico: React.FC = () => {
  return (
    <footer className="pie-container">
      <p className="pie-frase">
        Gracias por ser parte de este momento tan especial 💖
      </p>

      <div className="pie-autor">
        Sitio creado con amor por{' '}
        <a
          href="https://tumarca.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tu Marca
        </a>
      </div>

      <div className="pie-redes">
        {/* Íconos de redes (pueden ser svg o emojis por ahora) */}
        <a
          href="#"
          className="pie-icono"
          aria-label="Instagram"
        >
          📷
        </a>
        <a
          href="#"
          className="pie-icono"
          aria-label="Facebook"
        >
          📘
        </a>
        <a
          href="#"
          className="pie-icono"
          aria-label="Sitio Web"
        >
          🌐
        </a>
      </div>
    </footer>
  )
}

export default PieRomantico
