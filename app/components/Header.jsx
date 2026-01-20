'use client'

import { Dumbbell, Search, ShoppingBasket, Truck, User, Settings, DollarSign, Headphones, LogOut, UserCircle, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
  }

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="text-primary text-3xl w-8 h-8" />
            <span className="font-display font-bold text-xl tracking-tighter">
              IRONCORE<span className="text-primary">.</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="hover:text-primary transition-colors" href="/products">Shop</Link>
            <Link className="hover:text-primary transition-colors" href="/about">About</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <div className="flex items-center gap-4 flex-1 md:flex-none max-w-sm">
           
            
           <Link href="/login"><button className="bg-primary text-slate-900 font-bold px-4 py-2  tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
            Login
          </button></Link>

            {/* Mobile Cart Icon */}
            <div className="md:hidden relative cursor-pointer">
              <ShoppingBasket className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-slate-900 text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4 text-sm font-bold tracking-widest uppercase">
              <Link 
                className="hover:text-primary transition-colors py-2" 
                href="/"
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </Link>
              <Link 
                className="hover:text-primary transition-colors py-2" 
                href="/products"
                onClick={() => setShowMobileMenu(false)}
              >
                Shop
              </Link>
              <Link 
                className="hover:text-primary transition-colors py-2" 
                href="#"
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </Link>
              <Link 
                className="hover:text-primary transition-colors py-2" 
                href="#"
                onClick={() => setShowMobileMenu(false)}
              >
                Blog
              </Link>
              <Link 
                className="hover:text-primary transition-colors py-2" 
                href="#"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Authentication */}
              <hr className="border-slate-700 my-2" />
              {isAuthenticated ? (
                <>
                  <Link 
                    className="hover:text-primary transition-colors py-2 flex items-center gap-2" 
                    href="/profile"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <UserCircle className="w-4 h-4" />
                    {user?.firstName}'s Profile
                  </Link>
                  <button 
                    className="hover:text-red-400 transition-colors py-2 flex items-center gap-2 text-left" 
                    onClick={() => {
                      handleLogout()
                      setShowMobileMenu(false)
                    }}
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  className="bg-primary text-black px-4 py-3 hover:bg-white transition-colors font-bold text-center rounded" 
                  href="/login"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
      
      <div className="bg-slate-950/50 py-2 border-t border-slate-800/50">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex justify-between items-center gap-8 text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap opacity-80">
            <div className="flex items-center gap-2">
              <Truck className="w-3 h-3" /> 
              Free Shipping Up to $50
            </div>
            <div className="flex items-center gap-2">
              <User className="w-3 h-3" /> 
              Online Coach
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-3 h-3" /> 
              After Sale Maintenance
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-3 h-3" /> 
              Money Back Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-3 h-3" /> 
              Free Support 24/7
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}