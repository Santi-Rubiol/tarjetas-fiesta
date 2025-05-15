import React, { useEffect, useRef, useState } from 'react'
import './Countdown.css'

type CountdownProps = {
  targetDate: string
  title?: string
  accentColor?: string
  bgColor?: string
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  title = '¡Falta muy poco!',
  accentColor = 'accent-default',
  bgColor = 'bg-default',
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' }
    }
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        '0'
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        '0'
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        '0'
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ]

  return (
    <div
      ref={containerRef}
      className={`countdown-container ${bgColor} ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="countdown-title">{title}</h2>
      <div className="countdown-grid">
        {timeUnits.map(({ label, value }) => (
          <div
            key={label}
            className="countdown-item"
          >
            <div className={`countdown-value ${accentColor}`}>{value}</div>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
