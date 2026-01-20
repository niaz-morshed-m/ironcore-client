export default function AboutLoading() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display overflow-x-hidden">
      {/* Grain Overlay for Texture */}
      <div className="fixed inset-0 grain-overlay z-50"></div>

      <main className="relative">
        {/* Hero Section Skeleton */}
        <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-surface-dark animate-pulse"></div>
          <div className="relative z-20 text-center px-4 max-w-4xl">
            <div className="bg-primary/20 h-6 w-32 mx-auto rounded animate-pulse mb-6"></div>
            <div className="space-y-4 mb-8">
              <div className="bg-white/20 h-16 w-full rounded animate-pulse"></div>
              <div className="bg-white/20 h-16 w-3/4 mx-auto rounded animate-pulse"></div>
            </div>
            <div className="bg-white/10 h-6 w-2/3 mx-auto rounded animate-pulse"></div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <div className="w-px h-24 bg-primary/20 animate-pulse"></div>
          </div>
        </section>

        {/* Our Story Section Skeleton */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="bg-primary/20 h-4 w-24 rounded animate-pulse"></div>
                <div className="space-y-2">
                  <div className="bg-white/20 h-12 w-full rounded animate-pulse"></div>
                  <div className="bg-white/20 h-12 w-2/3 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-6 border-l-2 border-primary/30 pl-8">
                <div className="space-y-2">
                  <div className="bg-white/10 h-4 w-full rounded animate-pulse"></div>
                  <div className="bg-white/10 h-4 w-full rounded animate-pulse"></div>
                  <div className="bg-white/10 h-4 w-3/4 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/10 h-4 w-full rounded animate-pulse"></div>
                  <div className="bg-white/10 h-4 w-2/3 rounded animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/20 h-4 w-full rounded animate-pulse"></div>
                  <div className="bg-white/20 h-4 w-1/2 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 z-0"></div>
              <div className="relative z-10 overflow-hidden bg-surface-dark">
                <div className="w-full h-[500px] bg-surface-dark animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="bg-white/20 h-4 w-32 rounded animate-pulse"></div>
                      <div className="bg-white/10 h-3 w-24 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section Skeleton */}
        <section className="bg-surface-dark py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 hazard-border opacity-30"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="bg-white/20 h-12 w-64 mx-auto rounded animate-pulse mb-4"></div>
              <div className="w-20 h-1 bg-primary/20 mx-auto animate-pulse"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-background-dark p-10 border border-white/5">
                  <div className="w-16 h-16 mb-8 bg-primary/10 rounded-sm animate-pulse"></div>
                  <div className="bg-white/20 h-6 w-32 rounded animate-pulse mb-4"></div>
                  <div className="space-y-2">
                    <div className="bg-white/10 h-4 w-full rounded animate-pulse"></div>
                    <div className="bg-white/10 h-4 w-full rounded animate-pulse"></div>
                    <div className="bg-white/10 h-4 w-2/3 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section Skeleton */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="bg-white/20 h-12 w-64 rounded animate-pulse"></div>
              <div className="bg-white/10 h-4 w-48 rounded animate-pulse"></div>
            </div>
            <div className="h-px flex-grow mx-8 bg-white/10 hidden md:block"></div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 rounded animate-pulse"></div>
              <div className="w-12 h-12 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-surface-dark mb-4 border border-white/5 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="bg-white/20 h-6 w-32 rounded animate-pulse"></div>
                  <div className="bg-primary/20 h-4 w-24 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section Skeleton */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto bg-primary/20 p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center rounded animate-pulse">
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <div className="bg-background-dark/20 h-16 w-80 mx-auto rounded animate-pulse"></div>
                <div className="bg-background-dark/20 h-16 w-64 mx-auto rounded animate-pulse"></div>
              </div>
              <div className="bg-background-dark/20 h-6 w-96 mx-auto rounded animate-pulse"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <div className="bg-background-dark/20 h-12 w-40 rounded animate-pulse"></div>
                <div className="bg-background-dark/20 h-12 w-32 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Loading Indicator */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-primary text-background-dark px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <div className="w-4 h-4 border-2 border-background-dark border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-black uppercase tracking-widest">Loading Story</span>
          </div>
        </div>
      </main>
    </div>
  )
}