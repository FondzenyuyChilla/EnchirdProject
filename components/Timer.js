'use client'
import { useState, useEffect } from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'

export default function Timer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => {
          if (s === 0) {
            setMinutes(m => m - 1)
            return 59
          }
          return s - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <ClockIcon className="h-6 w-6 text-gray-600" />
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Math.max(0, e.target.value))}
          className="w-16 px-2 py-1 border rounded"
          disabled={isActive}
        />
        :
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Math.max(0, Math.min(59, e.target.value)))}
          className="w-16 px-2 py-1 border rounded"
          disabled={isActive}
        />
        <button
          onClick={() => setIsActive(!isActive)}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90"
        >
          {isActive ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}