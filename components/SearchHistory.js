'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchHistory() {
  const [history, setHistory] = useState([])
  const router = useRouter()

  useEffect(() => {
    const saved = localStorage.getItem('searchHistory')
    if (saved) setHistory(JSON.parse(saved))
  }, [])

  const handleSearch = (term) => {
    router.push(`/?search=${encodeURIComponent(term)}`)
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {history.slice(0, 5).map((term, index) => (
        <button
          key={index}
          onClick={() => handleSearch(term)}
          className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 text-sm"
        >
          {term}
        </button>
      ))}
    </div>
  )
}