import Link from 'next/link'
import ProductCard from './ProductCard'
import productsData from '../../data.json'

export default function NewArrivals() {
  // Get the 4 most recent products based on createdAt date
  const newProducts = productsData
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4)

  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">
            New Arrivals
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover our latest collection of premium fitness equipment designed to elevate your workout experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showBadge={true}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products"><button className="bg-primary text-slate-900 font-bold px-8 py-4 uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
            View All Products
          </button></Link>
        </div>
      </div>
    </section>
  )
}