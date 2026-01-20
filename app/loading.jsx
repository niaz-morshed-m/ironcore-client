export default function Loading() {
  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-10"></div>
      
      {/* Loading Content */}
      <div className="relative z-20 text-center">
        {/* IronCore Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-background-dark font-bold text-2xl">
              exercise
            </span>
          </div>
          <span className="text-3xl font-bold tracking-tighter uppercase italic text-white">
            IronCore<span className="text-primary">Fitness</span>
          </span>
        </div>

        {/* Loading Animation */}
        <div className="relative mb-8">
          {/* Rotating Barbell */}
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-4 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl animate-pulse">
                fitness_center
              </span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-black uppercase italic tracking-tighter text-white">
            Forging Your Experience
          </h2>
          <p className="text-white/50 text-sm uppercase tracking-widest font-bold">
            Loading Industrial-Grade Content
          </p>
        </div>

        {/* Progress Bars */}
        <div className="mt-8 space-y-3 max-w-xs mx-auto">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse" style={{width: '60%'}}></div>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse delay-150" style={{width: '40%'}}></div>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-pulse delay-300" style={{width: '80%'}}></div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/20 rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-primary/20 -rotate-45"></div>
      </div>
    </div>
  )
}