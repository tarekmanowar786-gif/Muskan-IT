
import React from 'react';
import { Star, ShoppingCart, Zap } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductListProps {
  onAddToCart: (p: Product) => void;
  onBuyNow: (p: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart, onBuyNow }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Digital Products</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Boost your productivity and marketing results with our premium assets and service packages.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {product.badge && (
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider ${
                  product.badge === 'Best Seller' ? 'bg-orange-500' : 
                  product.badge === 'New' ? 'bg-blue-500' : 'bg-green-500'
                }`}>
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                ))}
                <span className="text-xs text-slate-400 ml-1">({product.rating})</span>
              </div>
              
              <h3 className="font-bold text-lg text-slate-900 mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-1">{product.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900">${product.discountPrice || product.price}</span>
                  {product.discountPrice && (
                    <span className="text-sm text-slate-400 line-through">${product.price}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="flex items-center justify-center gap-2 py-3 px-2 border border-blue-600 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" /> Add
                </button>
                <button 
                  onClick={() => onBuyNow(product)}
                  className="flex items-center justify-center gap-2 py-3 px-2 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
                >
                  <Zap className="w-4 h-4 fill-white" /> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
