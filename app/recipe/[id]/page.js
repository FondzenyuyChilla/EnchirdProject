import Layout from '../../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

async function getRecipe(id) {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch recipe (Status: ${res.status})`)
    }

    const data = await res.json()
    
    if (!data || !data.id) {
      throw new Error('Invalid recipe data')
    }

    return data
  } catch (error) {
    console.error('Recipe fetch error:', error)
    return null
  }
}

export default async function RecipeDetail({ params }) {
  const recipe = await getRecipe(params.id)

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button Section */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Recipes
          </Link>
        </div>

        {!recipe ? (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
            <Link
              href="/"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recipe Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Recipe Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900">{recipe.title}</h1>
              
              {/* Recipe Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="bg-secondary text-white px-3 py-1 rounded-full">
                  ⭐ {recipe.spoonacularScore || 'N/A'}
                </div>
                <div className="flex items-center">
                  🕒 {recipe.readyInMinutes} mins
                </div>
                <div className="flex items-center">
                  👨👩👧👦 Serves {recipe.servings}
                </div>
                {recipe.vegetarian && (
                  <div className="flex items-center">🌱 Vegetarian</div>
                )}
              </div>

              {/* Ingredients Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {recipe.extendedIngredients?.map((ingredient, index) => (
                    <li 
                      key={`${recipe.id}-${ingredient.id}-${index}`}
                      className="flex items-center text-gray-700"
                    >
                      <span className="mr-2">•</span>
                      <span className="truncate">
                        {ingredient.original}
                        {ingredient.aisle && (
                          <span className="ml-2 text-xs text-gray-500">
                            ({ingredient.aisle})
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                {recipe.analyzedInstructions?.[0]?.steps ? (
                  <ol className="space-y-4">
                    {recipe.analyzedInstructions[0].steps.map((step) => (
                      <li 
                        key={`${recipe.id}-step-${step.number}`}
                        className="flex items-start space-x-4"
                      >
                        <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">
                          {step.number}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{step.step}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-gray-500">No instructions available</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}