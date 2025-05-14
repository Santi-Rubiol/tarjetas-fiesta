import React, { useEffect, useState } from 'react'

type CountdownProps = {
  targetDate: string
  title?: string
  accentColor?: string // Tailwind color class
  bgColor?: string // Tailwind background class
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  title = '¡Falta muy poco!',
  accentColor = 'text-rose-500',
  bgColor = 'bg-white/10',
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ]

  return (
    <div
      className={`w-full px-4 py-8 rounded-2xl shadow-xl text-center ${bgColor}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
        {title}
      </h2>
      <div className="flex justify-center gap-3 sm:gap-6">
        {timeUnits.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center"
          >
            <div
              className={`text-5xl sm:text-6xl font-extrabold leading-tight ${accentColor} drop-shadow-md`}
            >
              {value}
            </div>
            <span className="text-xs sm:text-sm text-white uppercase tracking-wide mt-2">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
