'use client'

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Failed to load recipe: {error.message}
        </h2>
        <button
          onClick={reset}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Try Again
        </button>
        <p className="mt-6 text-gray-600">
          If the problem persists, please check:
        </p>
        <ul className="mt-2 text-gray-600 list-disc list-inside text-left inline-block">
          <li>Your internet connection</li>
          <li>API key validity</li>
          <li>Recipe ID validity</li>
        </ul>
      </div>
    </div>
  )
}