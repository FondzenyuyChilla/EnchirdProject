'use client'
import { useState } from 'react'

export default function ShoppingList({ ingredients }) {
  const [list, setList] = useState([])

  const addToCart = (ingredient) => {
    setList(prev => [...prev, {
      id: Date.now(),
      text: ingredient,
      checked: false
    }])
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Shopping List</h3>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center">
            <button 
              onClick={() => addToCart(ingredient.original)}
              className="mr-2 text-green-600 hover:text-green-700"
            >
              +
            </button>
            {ingredient.original}
          </li>
        ))}
      </ul>
    </div>
  )
}