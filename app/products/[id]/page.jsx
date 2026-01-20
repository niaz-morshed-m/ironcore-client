'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ZoomIn, Minus, Plus, Shield, Headphones, Settings, DollarSign, Wrench, Dumbbell, Search, ShoppingBasket, Facebook, Instagram, AtSign } from 'lucide-react'
import productsData from '../../../data.json'

// Get product by ID from JSON data
const getProductById = (id) => {
  return productsData.find(product => product.id === id) || null
}

export default function ProductPage({ params }) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  
  const product = getProductById(params.id)
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-[#121212] text-white py-4 px-6 md:px-12 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2">
              <Dumbbell className="text-black w-6 h-6 font-bold" />
            </div>
            <span className="text-2xl font-black tracking-tighter font-display">
              IRONCORE <span className="text-primary">FITNESS</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <Link className="hover:text-primary transition" href="/">Home</Link>
            <Link className="hover:text-primary transition" href="/products">Shop</Link>
            <Link className="hover:text-primary transition" href="#">About</Link>
            <Link className="hover:text-primary transition" href="#">Blog</Link>
            <Link className="hover:text-primary transition" href="#">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center">
              <input 
                className="bg-white text-black px-4 py-2 text-sm w-48 lg:w-64 focus:outline-none border-none" 
                placeholder="Search product" 
                type="text"
              />
              <button className="bg-primary px-3 py-2 text-black flex items-center justify-center">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingBasket className="text-2xl w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-[#1A1A1A] border-t border-gray-800 py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center text-[10px] md:text-xs uppercase tracking-widest text-gray-400">
          <Link className="hover:text-white" href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link className="hover:text-white" href="/products">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-bold">{product.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative border border-primary/30 dark:border-primary/20 p-8 flex items-center justify-center bg-white dark:bg-[#1A1A1A]">
            <Image
              src={product.images[0]?.url || '/placeholder-image.jpg'}
              alt={product.images[0]?.alt || product.title}
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="absolute top-4 right-4 text-gray-400">
              <ZoomIn className="w-6 h-6 cursor-zoom-in" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight font-display uppercase">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-6">
              <Link className="hover:text-primary" href="/">Home</Link>
              <span>/</span>
              <Link className="hover:text-primary" href="/products">{product.category}</Link>
              <span>/</span>
              <span className="text-gray-400">{product.title}</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              {product.pricing.salePrice < product.pricing.regularPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.pricing.regularPrice.toFixed(2)}
                </span>
              )}
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.pricing.salePrice.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex border border-gray-300 dark:border-gray-700">
                <button 
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  className="w-12 text-center border-none focus:ring-0 bg-transparent font-bold" 
                  type="text" 
                  value={quantity}
                  readOnly
                />
                <button 
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex-grow bg-primary hover:bg-yellow-500 text-black font-bold uppercase tracking-widest py-4 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Free Shipping Up To $54</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <Headphones className="w-4 h-4" />
                <span>Available Online Coach</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <Wrench className="w-4 h-4" />
                <span>After Sale Maintenance</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <DollarSign className="w-4 h-4" />
                <span>Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-gray-600 dark:text-gray-400">
                <Settings className="w-4 h-4" />
                <span>Free Support 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-20">
          <div className="flex border-b border-gray-200 dark:border-gray-800">
            <button 
              className={`px-8 py-3 font-bold uppercase text-xs tracking-widest transition ${
                activeTab === 'description' 
                  ? 'bg-white dark:bg-background-dark border-t border-x border-gray-200 dark:border-gray-800' 
                  : 'text-gray-400 hover:text-black dark:hover:text-white'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`px-8 py-3 font-bold uppercase text-xs tracking-widest transition ${
                activeTab === 'reviews' 
                  ? 'bg-white dark:bg-background-dark border-t border-x border-gray-200 dark:border-gray-800' 
                  : 'text-gray-400 hover:text-black dark:hover:text-white'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (0)
            </button>
          </div>
          
          <div className="py-10">
            {activeTab === 'description' && (
              <>
                <h3 className="text-2xl font-bold mb-6 tracking-tight font-display">Description</h3>
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                  <p>{product.description}</p>
                  
                  {/* Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Specifications */}
                  {product.specifications && (
                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3">Specifications:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            
            {activeTab === 'reviews' && (
              <>
                <h3 className="text-2xl font-bold mb-6 tracking-tight font-display">Reviews</h3>
                <p className="text-gray-600 dark:text-gray-400">No reviews yet. Be the first to review this product!</p>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-12 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2">
                <Dumbbell className="text-black w-6 h-6 font-bold" />
              </div>
              <span className="text-2xl font-black font-display">
                IRONCORE <span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              High-quality fitness equipment for professional athletes and home enthusiasts. 
              Built to last, engineered for performance.
            </p>
            <div className="flex gap-4">
              <a className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                <Facebook className="w-4 h-4" />
              </a>
              <a className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                <Instagram className="w-4 h-4" />
              </a>
              <a className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                <AtSign className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest mb-6">Quick Links</h5>
            <ul className="space-y-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
              <li><Link className="hover:text-primary transition" href="/products">Shop All</Link></li>
              <li><Link className="hover:text-primary transition" href="#">New Arrivals</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Gym Essentials</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Sale Items</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest mb-6">Help & Info</h5>
            <ul className="space-y-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
              <li><Link className="hover:text-primary transition" href="#">Shipping Policy</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Return Policy</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Warranty</Link></li>
              <li><Link className="hover:text-primary transition" href="#">Contact Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <p>© 2024 IronCore Fitness. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  )
}