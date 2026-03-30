export default function PageLoader() {
  return (
    <div className="animate-pulse space-y-6 p-6">
      
      {/* Hero Skeleton */}
      <div className="h-[300px] bg-gray-300 rounded-2xl"></div>

      {/* Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-[150px] bg-gray-300 rounded-xl"></div>
        <div className="h-[150px] bg-gray-300 rounded-xl"></div>
        <div className="h-[150px] bg-gray-300 rounded-xl"></div>
      </div>

      {/* Content Blocks */}
      <div className="space-y-3">
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="h-[100px] bg-gray-300 rounded-xl"></div>

    </div>
  )
}