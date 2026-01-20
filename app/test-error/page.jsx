'use client'

import { useState } from 'react'

export default function TestErrorPage() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error('This is a test error to demonstrate the error boundary')
  }

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-4xl font-black uppercase italic text-white">
          Error Testing Page
        </h1>
        <p className="text-white/70">
          Click the button below to trigger an error and see the error page in action.
        </p>
        <button
          onClick={() => setShouldError(true)}
          className="bg-red-500 text-white px-8 py-4 text-sm font-black uppercase tracking-[0.2em] hover:bg-red-600 transition-all"
        >
          Trigger Error
        </button>
      </div>
    </div>
  )
}