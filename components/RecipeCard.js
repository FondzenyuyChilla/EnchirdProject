import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="group block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full">
        <div className="relative h-48">
          <Image
            src={recipe.image || '/placeholder.jpg'}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary truncate">
            {recipe.title}
          </h3>
          <div className="mt-2 flex items-center text-sm text-gray-600 space-x-2">
            <span className="flex items-center">
              ⭐ {recipe.spoonacularScore || 'N/A'}
            </span>
            <span>•</span>
            <span className="flex items-center">
              🕒 {recipe.readyInMinutes} mins
            </span>
            {recipe.vegetarian && <span className="ml-2">🌱 Vegetarian</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}