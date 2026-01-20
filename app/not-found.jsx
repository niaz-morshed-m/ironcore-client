import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-10"></div>
      
      {/* 404 Content */}
      <div className="relative z-20 text-center max-w-2xl mx-auto px-6">
        {/* 404 Icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-24 bg-primary/10 border-2 border-primary/30 rounded-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-5xl">
              search_off
            </span>
          </div>
        </div>

        {/* 404 Title */}
        <h1 className="text-8xl md:text-9xl font-black italic uppercase leading-none tracking-tighter text-white mb-4">
          404
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-black italic uppercase leading-none tracking-tighter text-primary mb-8">
          Page Not Found
        </h2>

        {/* 404 Message */}
        <div className="space-y-4 mb-8">
          <p className="text-xl text-white/70 font-light">
            This page has been benched. It's either taking a rest day or doesn't exist in our training program.
          </p>
          <div className="bg-surface-dark border border-primary/20 rounded p-4">
            <p className="text-primary text-sm font-black uppercase tracking-widest mb-2">
              Training Suggestion:
            </p>
            <p className="text-white/60 text-sm">
              Check the URL for typos, or navigate back to our main training areas using the buttons below.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="bg-primary text-background-dark px-8 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined">home</span>
            Return to Base
          </Link>
          <Link
            href="/products"
            className="border-2 border-primary text-primary px-8 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-background-dark transition-all flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined">fitness_center</span>
            Browse Equipment
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Link 
            href="/about" 
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 p-4 rounded transition-all group"
          >
            <span className="material-symbols-outlined text-primary text-2xl mb-2 block group-hover:scale-110 transition-transform">
              info
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
              About Us
            </p>
          </Link>
          
          <Link 
            href="/blog" 
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 p-4 rounded transition-all group"
          >
            <span className="material-symbols-outlined text-primary text-2xl mb-2 block group-hover:scale-110 transition-transform">
              article
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
              Training Intel
            </p>
          </Link>
          
          <Link 
            href="/login" 
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 p-4 rounded transition-all group"
          >
            <span className="material-symbols-outlined text-primary text-2xl mb-2 block group-hover:scale-110 transition-transform">
              login
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
              Member Login
            </p>
          </Link>
          
          <div className="bg-white/5 border border-white/10 p-4 rounded opacity-50">
            <span className="material-symbols-outlined text-white/30 text-2xl mb-2 block">
              support_agent
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30">
              Support
            </p>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="bg-surface-dark border border-white/10 rounded p-6">
          <h3 className="text-primary text-sm font-black uppercase tracking-widest mb-4">
            Looking for Something Specific?
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="SEARCH OUR TRAINING ARSENAL"
              className="flex-1 bg-black/40 border border-white/10 rounded px-4 py-3 text-xs uppercase tracking-widest focus:border-primary focus:ring-0 text-white placeholder-white/40"
            />
            <button className="bg-primary text-background-dark px-6 py-3 rounded text-xs font-black uppercase tracking-widest hover:bg-white transition-all">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-primary/20 rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-primary/20 -rotate-45"></div>
      </div>

      {/* Bottom Hazard Stripe */}
      <div className="absolute bottom-0 left-0 w-full h-2 hazard-border opacity-30"></div>
    </div>
  )
}