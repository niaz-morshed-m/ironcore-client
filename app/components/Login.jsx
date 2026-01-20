'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dumbbell, Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
     
      await new Promise(resolve => setTimeout(resolve, 1000))
      
     
      if (formData.email === "robiul@gmail.com" && formData.password === "123Abc") {
     
        document.cookie = "auth=true; path=/"
        router.push("/products")
      } else {
       
        alert("Invalid email or password. Please try again.")
      }
    } catch (error) {
      console.error('Login error:', error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* Top Navigation */}
    <Header></Header>

      {/* Main Content */}
      <main className="gym-bg flex-1 flex items-center justify-center p-6 relative">
        <div className="w-full max-w-[440px] z-10">
          {/* Login Card */}
          <div className="bg-card-dark/95 backdrop-blur-md border border-primary/20 rounded-lg p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col items-center mb-10">
              <Dumbbell className="text-primary w-12 h-12 mb-2" />
              <h1 className="text-white text-2xl font-bold tracking-widest uppercase">
                Member Login
              </h1>
              <p className="text-zinc-500 text-sm mt-1 uppercase tracking-tighter font-medium">
                Strength starts within
              </p>
              {/* Demo credentials */}
              <div className="mt-4 p-3 bg-zinc-800/50 rounded border border-zinc-700">
                <p className="text-zinc-400 text-xs font-medium mb-1">Demo Credentials:</p>
                <p className="text-zinc-300 text-xs">Email: robiul@gmail.com</p>
                <p className="text-zinc-300 text-xs">Password: 123Abc</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block">
                  <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                    Email Address
                  </span>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-12 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display"
                      placeholder="Enter your email"
                      required
                      type="email"
                    />
                  </div>
                </label>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    Password
                  </label>
                  <Link 
                    href="/forgot-password"
                    className="text-primary/70 hover:text-primary text-[10px] uppercase tracking-widest font-bold transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-12 py-4 pr-12 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display"
                    placeholder="Enter your password"
                    required
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-primary hover:bg-white text-background-dark font-bold text-sm tracking-widest py-5 rounded transition-all duration-300 uppercase shadow-lg shadow-primary/10 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background-dark border-t-transparent rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Authenticate</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] font-medium">
                <span className="bg-card-dark px-4 text-zinc-600">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 py-3 rounded text-zinc-300 hover:text-white transition-all text-xs font-bold uppercase tracking-tighter">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-3 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 py-3 rounded text-zinc-300 hover:text-white transition-all text-xs font-bold uppercase tracking-tighter">
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                Facebook
              </button>
            </div>

            {/* Signup Link */}
            <div className="mt-12 text-center">
              <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.1em]">
                Don't have an account?{' '}
                <Link 
                  href="/signup"
                  className="text-primary font-bold hover:underline underline-offset-4 ml-1 transition-all"
                >
                  Create Profile
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-12 right-12 hidden lg:block text-right">
          <p className="text-primary text-5xl font-black italic uppercase leading-tight opacity-20">
            No Excuses<br />
            Only Results
          </p>
        </div>
      </main>

      {/* Footer Status */}
    <Footer></Footer>
    </div>
  )
}