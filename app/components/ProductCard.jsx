'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star, Heart, Eye, Truck, Award, Clock } from 'lucide-react'

export default function ProductCard({ product, showBadge = false, className = "" }) {
  // Extract image data
  const imageUrl = product.images && product.images[0] ? product.images[0].url : '/placeholder-image.jpg'
  const imageAlt = product.images && product.images[0] ? product.images[0].alt : product.title
  
  // Calculate discount and sale status
  const isOnSale = product.pricing.salePrice < product.pricing.regularPrice
  const discountPercentage = product.pricing.discountPercentage
  const savings = product.pricing.regularPrice - product.pricing.salePrice
  
  // Determine badge based on various criteria
  let badge = null
  if (showBadge) {
    if (discountPercentage >= 25) {
      badge = { text: 'MEGA SALE', color: 'bg-red-600 text-white' }
    } else if (discountPercentage >= 15) {
      badge = { text: 'SALE', color: 'bg-green-500 text-white' }
    } else if (discountPercentage >= 10) {
      badge = { text: 'HOT', color: 'bg-orange-500 text-white' }
    } else if (product.stock.quantity < 10) {
      badge = { text: 'LIMITED', color: 'bg-purple-500 text-white' }
    } else if (product.ratings.average >= 4.8) {
      badge = { text: 'TOP RATED', color: 'bg-blue-500 text-white' }
    }
  }

  // Stock status styling
  const getStockStatus = () => {
    if (product.stock.status === 'in_stock') {
      if (product.stock.quantity > 20) {
        return { text: 'In Stock', color: 'text-green-600', icon: '✓' }
      } else if (product.stock.quantity > 5) {
        return { text: `${product.stock.quantity} left`, color: 'text-yellow-600', icon: '⚠' }
      } else {
        return { text: `Only ${product.stock.quantity} left!`, color: 'text-red-600', icon: '🔥' }
      }
    }
    return { text: 'Out of Stock', color: 'text-red-600', icon: '✗' }
  }

  const stockStatus = getStockStatus()

  // Check if product has special features
  const hasShipping = product.features?.some(feature => 
    feature.toLowerCase().includes('shipping') || feature.toLowerCase().includes('delivery')
  )
  const hasWarranty = product.features?.some(feature => 
    feature.toLowerCase().includes('warranty') || feature.toLowerCase().includes('guarantee')
  )

  return (
    <div className={`group ${className}`}>
      <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-xl rounded-xl overflow-hidden">
        
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-[#F1EFE7] dark:bg-[#2D2D2D] p-4">
          <Link href={`/products/${product.id}`}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={300}
              height={300}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Badge */}
          {showBadge && badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className={`px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-md ${badge.color} shadow-lg`}>
                {badge.text}
              </span>
            </div>
          )}

          {/* Discount Percentage */}
          {isOnSale && discountPercentage > 0 && (
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                -{discountPercentage}%
              </span>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Quick View */}
            <button 
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
            
            {/* Add to Wishlist */}
            {product.actions.wishlist && (
              <button 
                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-500 transition-colors"
                title="Add to Wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            )}
            
            {/* Add to Cart */}
            {product.actions.addToCart && product.stock.status === 'in_stock' && (
              <button 
                className="bg-primary text-black p-2 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
                title="Add to Cart"
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Added to cart:', product.title)
                }}
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Special Features Icons */}
          <div className="absolute bottom-3 left-3 flex gap-1">
            {hasShipping && (
              <div className="bg-green-100 text-green-600 p-1 rounded" title="Free Shipping">
                <Truck className="w-3 h-3" />
              </div>
            )}
            {hasWarranty && (
              <div className="bg-blue-100 text-blue-600 p-1 rounded" title="Warranty Included">
                <Award className="w-3 h-3" />
              </div>
            )}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          {product.brand && (
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              {product.brand}
            </div>
          )}

          {/* Rating */}
          {product.ratings && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(product.ratings.average) ? 'fill-primary text-primary' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">
                {product.ratings.average} ({product.ratings.totalReviews})
              </span>
            </div>
          )}
          
          {/* Product Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
              {product.title}
            </h3>
          </Link>
          
          {/* Category */}
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">
            {product.category}
          </div>

          {/* Short Description */}
          {product.shortDescription && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {product.shortDescription}
            </p>
          )}
          
          {/* Price Section */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              {isOnSale && (
                <span className="text-gray-400 line-through text-sm">
                  ${product.pricing.regularPrice.toFixed(2)}
                </span>
              )}
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${product.pricing.salePrice.toFixed(2)}
              </span>
            </div>
            
            {/* Savings Display */}
            {isOnSale && savings > 0 && (
              <div className="text-xs text-green-600 font-medium">
                Save ${savings.toFixed(2)} ({discountPercentage}% off)
              </div>
            )}
          </div>
          
          {/* Stock Status */}
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-medium ${stockStatus.color}`}>
              {stockStatus.icon} {stockStatus.text}
            </span>
            
            {/* Product ID for reference */}
            <span className="text-xs text-gray-400">
              #{product.id.replace('prod_', '')}
            </span>
          </div>

          {/* Key Features Preview */}
          {product.features && product.features.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
                {product.features.length > 2 && (
                  <span className="text-xs text-gray-500">
                    +{product.features.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            {product.stock.status === 'in_stock' ? (
              <button 
                className="flex-1 bg-primary text-black py-2 px-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Added to cart:', product.title)
                }}
              >
                Add to Cart
              </button>
            ) : (
              <button 
                className="flex-1 bg-gray-300 text-gray-500 py-2 px-3 text-xs font-bold uppercase tracking-wider cursor-not-allowed"
                disabled
              >
                Out of Stock
              </button>
            )}
            
            <Link 
              href={`/products/${product.id}`}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View
            </Link>
          </div>

          {/* Created Date (for new products) */}
          {product.createdAt && (
            <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Added {new Date(product.createdAt).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}