import Link from 'next/link'
import { Dumbbell } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import productsData from '../../data.json'

export default function ProductsPage() {
  const products = productsData

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
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
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-[#1A1A1A] border-t border-gray-800 py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center text-[10px] md:text-xs uppercase tracking-widest text-gray-400">
          <Link className="hover:text-white" href="/">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-bold">Products</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight font-display uppercase">
            Our Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Discover our complete range of professional-grade fitness equipment
          </p>
        </div>

        {/* Filter/Sort Options */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Showing {products.length} products
            </span>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm rounded focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showBadge={true}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-black font-bold px-8 py-4 uppercase tracking-widest hover:bg-yellow-500 transition-colors">
            Load More Products
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-12 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-primary p-2">
              <Dumbbell className="text-black w-6 h-6 font-bold" />
            </div>
            <span className="text-2xl font-black font-display">
              IRONCORE <span className="text-primary">FITNESS</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 IronCore Fitness. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}