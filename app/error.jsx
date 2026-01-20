'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-10"></div>
      
      {/* Error Content */}
      <div className="relative z-20 text-center max-w-2xl mx-auto px-6">
        {/* Error Icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-24 bg-red-500/10 border-2 border-red-500/30 rounded-sm flex items-center justify-center">
            <span className="material-symbols-outlined text-red-500 text-5xl">
              error
            </span>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter text-white mb-6">
          System <span className="text-red-500">Failure</span>
        </h1>

        {/* Error Message */}
        <div className="space-y-4 mb-8">
          <p className="text-xl text-white/70 font-light">
            Something went wrong in the iron forge. Our engineers are on it.
          </p>
          <div className="bg-surface-dark border border-red-500/20 rounded p-4 text-left">
            <p className="text-red-400 text-sm font-mono mb-2">ERROR DETAILS:</p>
            <p className="text-white/60 text-sm font-mono break-all">
              {error?.message || 'An unexpected error occurred'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={reset}
            className="bg-primary text-background-dark px-8 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined">refresh</span>
            Retry Operation
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="border-2 border-primary text-primary px-8 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-background-dark transition-all flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined">home</span>
            Return to Base
          </button>
        </div>

        {/* Error Code */}
        <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded">
          <p className="text-red-400 text-xs font-black uppercase tracking-widest">
            Error Code: {error?.digest || 'UNKNOWN'}
          </p>
        </div>

        {/* Support Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">
            Need Immediate Support?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-xs">
            <a 
              href="mailto:support@ironcorefitness.com" 
              className="text-primary hover:text-white transition-colors uppercase tracking-widest"
            >
              support@ironcorefitness.com
            </a>
            <span className="text-white/20 hidden sm:block">|</span>
            <a 
              href="tel:+1-800-IRONCORE" 
              className="text-primary hover:text-white transition-colors uppercase tracking-widest"
            >
              1-800-IRONCORE
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-500/20 rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-red-500/20 rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-red-500/20 -rotate-45"></div>
      </div>

      {/* Hazard Stripes */}
      <div className="absolute bottom-0 left-0 w-full h-2 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-red-500 via-primary to-red-500"></div>
      </div>
    </div>
  )
}