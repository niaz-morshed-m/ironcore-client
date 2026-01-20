export default function BlogLoading() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8">
        {/* Featured Article Skeleton */}
        <section className="relative w-full mb-12 overflow-hidden rounded-lg">
          <div className="aspect-[21/9] w-full bg-surface-dark animate-pulse rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/20 h-6 w-24 rounded animate-pulse"></div>
              <div className="bg-white/20 h-4 w-16 rounded animate-pulse"></div>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white/20 h-12 w-3/4 rounded animate-pulse"></div>
              <div className="bg-white/20 h-8 w-1/2 rounded animate-pulse"></div>
            </div>
            <div className="bg-white/20 h-6 w-2/3 rounded animate-pulse mb-8"></div>
            <div className="bg-white/20 h-12 w-48 rounded animate-pulse"></div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Feed Skeleton */}
          <div className="flex-1">
            {/* Category Filter Skeleton */}
            <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 border-b border-white/5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/5 h-10 w-24 rounded animate-pulse whitespace-nowrap"></div>
              ))}
            </div>

            {/* Blog Posts Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <article key={i} className="group">
                  <div className="aspect-video overflow-hidden rounded mb-4 bg-surface-dark animate-pulse"></div>
                  <div className="space-y-3">
                    <div className="bg-primary/20 h-4 w-16 rounded animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="bg-white/20 h-6 w-full rounded animate-pulse"></div>
                      <div className="bg-white/20 h-6 w-3/4 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white/10 h-4 w-full rounded animate-pulse"></div>
                      <div className="bg-white/10 h-4 w-2/3 rounded animate-pulse"></div>
                    </div>
                    <div className="bg-primary/20 h-4 w-20 rounded animate-pulse"></div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="mt-16 flex justify-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 bg-white/10 rounded animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <aside className="lg:w-80 space-y-8">
            {/* Newsletter Skeleton */}
            <div className="bg-surface-dark p-6 rounded-lg border border-primary/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary/20 rounded animate-pulse"></div>
                <div className="bg-white/20 h-6 w-24 rounded animate-pulse"></div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="bg-white/10 h-4 w-full rounded animate-pulse"></div>
                <div className="bg-white/10 h-4 w-3/4 rounded animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="bg-black/40 h-12 w-full rounded animate-pulse"></div>
                <div className="bg-primary/20 h-12 w-full rounded animate-pulse"></div>
              </div>
            </div>

            {/* Popular Posts Skeleton */}
            <div className="bg-surface-dark p-6 rounded-lg border border-white/5">
              <div className="bg-white/20 h-6 w-32 rounded animate-pulse mb-6"></div>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 bg-white/10 rounded animate-pulse shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="bg-white/20 h-4 w-full rounded animate-pulse"></div>
                      <div className="bg-white/20 h-4 w-2/3 rounded animate-pulse"></div>
                      <div className="bg-white/10 h-3 w-16 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Skeleton */}
            <div className="bg-surface-dark p-6 rounded-lg border border-white/5">
              <div className="bg-white/20 h-6 w-24 rounded animate-pulse mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white/5 h-8 w-20 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Loading Indicator */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-primary text-background-dark px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <div className="w-4 h-4 border-2 border-background-dark border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-black uppercase tracking-widest">Loading Intel</span>
          </div>
        </div>
      </main>
    </div>
  )
}