'use client'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Failed to load recipe: {error.message}
        </h2>
        <button
          onClick={reset}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}