import React, { useEffect, useRef } from 'react'
import './CarruselRomantico.css'

const imagenes = [
  '/images/ejemplo1.jpg',
  '/images/ejemplo2.jpg',
  '/images/ejemplo3.jpg',
  '/images/ejemplo4.jpg',
]

const CarruselRomantico: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Reinicia el scroll al llegar al final
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      // Si estamos cerca del final, reiniciamos sin que se note
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0
      }
    }

    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  // Duplicamos las imágenes para efecto de bucle visual
  const imagenesDobles = [...imagenes, ...imagenes]

  return (
    <section className="carrusel-container">
      <h2 className="carrusel-titulo">Nuestros momentos</h2>
      <div
        className="carrusel-scroll"
        ref={scrollRef}
      >
        {imagenesDobles.map((src, idx) => (
          <div
            key={idx}
            className="carrusel-item"
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="carrusel-img"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CarruselRomantico
