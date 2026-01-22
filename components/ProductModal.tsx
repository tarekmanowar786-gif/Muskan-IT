
import React, { useState } from 'react';
import { X, Minus, Plus, Truck, CreditCard, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onProceedToCheckout: (p: Product, qty: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onProceedToCheckout }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl animate-slideUp">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 z-10">
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="md:w-1/2 p-6 md:p-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{product.name}</h2>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-black text-blue-600">${product.discountPrice || product.price}</span>
              {product.discountPrice && (
                <span className="text-lg text-slate-400 line-through">${product.price}</span>
              )}
            </div>
            
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {product.description} This digital service package is designed for high performance and results. 100% Satisfaction guaranteed.
            </p>

            <div className="mb-6">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 hover:bg-slate-50 text-slate-600"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-3 hover:bg-slate-50 text-slate-600"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Truck className="w-5 h-5 text-blue-500" />
                <span>Instant Delivery (Digital Goods)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CreditCard className="w-5 h-5 text-blue-500" />
                <span>Secure SSL Encrypted Payment</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span>Full After-Sales Support</span>
              </div>
            </div>

            <button 
              onClick={() => onProceedToCheckout(product, quantity)}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-100 hover:scale-[1.02] transition-transform"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
