export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-24 h-6 bg-gray-200 rounded"></div>
              <div className="w-80 h-10 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded"></div>
              <div className="w-10 h-10 bg-gray-200 rounded"></div>
              <div className="w-32 h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar skeleton */}
          <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-10 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Main content skeleton */}
          <div className="flex-1 p-6">
            <div className="mb-6">
              <div className="w-32 h-8 bg-gray-200 rounded mb-2"></div>
              <div className="w-96 h-4 bg-gray-200 rounded"></div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`bg-white rounded-lg border p-6 ${i === 0 ? "col-span-2" : ""}`}>
                  <div className="w-32 h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="space-y-4">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="w-full h-10 bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
