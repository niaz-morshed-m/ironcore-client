import ProductCard from './ProductCard'
import productsData from '../../data.json'

export default function FeaturedProducts() {
  // Get featured products (products with high ratings or specific criteria)
  const featuredProducts = productsData
    .filter(product => product.ratings.average >= 4.8 || product.pricing.discountPercentage >= 15)
    .slice(0, 4)

  return (
    <section className="py-20 px-4" id="products">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight mb-2">
            Featured Products
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showBadge={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}