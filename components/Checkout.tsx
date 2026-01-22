
import React, { useState } from 'react';
import { ChevronLeft, ShieldCheck, MapPin, Phone, User, CreditCard } from 'lucide-react';
import { CartItem, OrderDetails } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CheckoutProps {
  cart: CartItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, subtotal, deliveryCharge, total, onBack }) => {
  const [formData, setFormData] = useState<OrderDetails>({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    area: '',
    paymentMethod: 'Cash on Delivery'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = () => {
    if (!formData.fullName || !formData.phone || !formData.address || !formData.city || !formData.area) {
      alert("Please fill in all required fields!");
      return;
    }

    const productNames = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
    const totalQty = cart.reduce((a, b) => a + b.quantity, 0);

    // EXACT template requested by user
    const message = `Assalamu Alaikum Muskan IT,

I want to place an order.

Product: ${productNames}
Quantity: ${totalQty}
Price: $${subtotal}
Subtotal: $${subtotal}
Delivery: $${deliveryCharge}
Total: $${total}

Name: ${formData.fullName}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.area}, ${formData.city}
Payment: ${formData.paymentMethod}

Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-slideDown">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 font-bold mb-8 hover:text-slate-900 transition-colors group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Shop
      </button>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form Section */}
        <div className="lg:w-2/3 space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <User className="w-6 h-6 text-blue-600" /> Shipping Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700">Full Address *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <input 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House, Road, Block, Area..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">City *</label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Dhaka, Chittagong etc."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Delivery Area *</label>
                <select 
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Area</option>
                  <option value="Inside Dhaka">Inside Dhaka</option>
                  <option value="Suburbs">Suburbs</option>
                  <option value="Outside Dhaka">Outside Dhaka</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-blue-600" /> Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Cash on Delivery', 'bKash', 'Nagad', 'Rocket'].map((method) => (
                <label key={method} className={`relative flex items-center gap-3 p-4 border rounded-2xl cursor-pointer transition-all ${
                  formData.paymentMethod === method ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-slate-200'
                }`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300" 
                  />
                  <span className="font-bold text-slate-800">{method}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="lg:w-1/3">
          <div className="bg-slate-900 text-white p-8 rounded-3xl sticky top-24 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 border-b border-slate-800 pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex gap-3 items-center">
                    <span className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-[10px] font-bold">{item.quantity}x</span>
                    <span className="text-slate-300 line-clamp-1">{item.name}</span>
                  </div>
                  <span className="font-bold">${((item.discountPrice || item.price) * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Delivery Charge</span>
                <span>${deliveryCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-2xl font-black pt-4">
                <span>Total</span>
                <span className="text-blue-400">${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={handleConfirmOrder}
              className="w-full mt-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/40 active:scale-95"
            >
              Confirm Order on WhatsApp
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-xs uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4" /> Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
