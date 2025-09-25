import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-24 h-6" />
            </div>
            <Skeleton className="w-80 h-10" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="w-10 h-10" />
            <Skeleton className="w-10 h-10" />
            <Skeleton className="w-32 h-10" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Skeleton */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <Skeleton className="w-12 h-4 mb-4" />
            <div className="space-y-2">
              {Array.from({ length: 7 }, (_, i) => (
                <Skeleton key={i} className="w-full h-10" />
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Skeleton */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <Skeleton className="w-32 h-8 mb-2" />
            <Skeleton className="w-96 h-5" />
          </div>

          {/* Filters Skeleton */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Skeleton className="w-32 h-10" />
              <Skeleton className="w-32 h-10" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-24 h-10" />
              <Skeleton className="w-32 h-10" />
            </div>
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div>
                        <Skeleton className="w-32 h-5 mb-2" />
                        <Skeleton className="w-24 h-4" />
                      </div>
                    </div>
                    <Skeleton className="w-20 h-6 rounded-full" />
                  </div>

                  <div className="space-y-3">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-3/4 h-4" />
                    <Skeleton className="w-full h-4" />
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <Skeleton className="w-full h-10" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}