import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'

async function getRecipes(searchQuery) {
  try {
    // Verify API key is present
    if (!process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY) {
      throw new Error('API key is missing. Please check your .env.local file')
    }

    const apiUrl = new URL('https://api.spoonacular.com/recipes/complexSearch')
    apiUrl.searchParams.append('query', searchQuery)
    apiUrl.searchParams.append('number', 12)
    apiUrl.searchParams.append('addRecipeInformation', 'true')
    apiUrl.searchParams.append('apiKey', process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY)

    const response = await fetch(apiUrl.toString(), {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    // Handle HTTP errors
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API request failed: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    
    // Handle API-specific errors
    if (data.status === 'failure') {
      throw new Error(data.message || 'Unknown API error')
    }

    return data

  } catch (error) {
    console.error('Recipe fetch error:', {
      message: error.message,
      stack: error.stack,
      apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY ? '***' : 'MISSING'
    })
    
    return {
      results: [],
      error: error.message.replace(process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY, '***')
    }
  }
}

export default async function Home({ searchParams }) {
  const searchQuery = searchParams?.search || ''
  const { results: recipes = [], error } = await getRecipes(searchQuery)

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Delicious Recipes
            </h1>
            <SearchBar initialQuery={searchQuery} />
          </div>

          {error ? (
            <div className="text-center py-12 space-y-4">
              <div className="text-red-500 text-lg font-medium">
                ⚠️ Error: {error}
              </div>
              <p className="text-gray-600">
                Please check:
                <ul className="list-disc list-inside mt-2 text-left max-w-xs mx-auto">
                  <li>API key in .env.local</li>
                  <li>Internet connection</li>
                  <li>Search terms</li>
                </ul>
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>

              {recipes.length === 0 && (
                <div className="text-center py-12 text-gray-600">
                  No recipes found. Try another search!
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}