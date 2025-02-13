export default function Loading() {
    return (
      <div className="animate-pulse max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button Skeleton */}
        <div className="mb-8 h-8 bg-gray-200 rounded-full w-32"></div>
  
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section Skeleton */}
          <div className="space-y-6">
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute top-2 right-2 h-8 w-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
  
          {/* Content Section Skeleton */}
          <div className="space-y-6">
            {/* Title Skeleton */}
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
  
            {/* Metadata Skeleton */}
            <div className="flex flex-wrap gap-4">
              <div className="h-8 bg-gray-200 rounded-full w-24"></div>
              <div className="h-8 bg-gray-200 rounded-full w-24"></div>
              <div className="h-8 bg-gray-200 rounded-full w-24"></div>
            </div>
  
            {/* Ingredients & Shopping List Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ingredients Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
  
              {/* Shopping List Column */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
            </div>
  
            {/* Instructions Skeleton */}
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }