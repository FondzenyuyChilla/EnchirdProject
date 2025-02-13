'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('recipeFavorites')
    if (saved) setFavorites(JSON.parse(saved))
  }, [])

  const toggleFavorite = (recipe) => {
    setFavorites(prev => {
      const newFavorites = prev.some(f => f.id === recipe.id)
        ? prev.filter(f => f.id !== recipe.id)
        : [...prev, recipe]
      localStorage.setItem('recipeFavorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)