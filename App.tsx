
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProductModal from './components/ProductModal';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const openBuyNow = (product: Product) => {
    setSelectedProduct(product);
  };

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.discountPrice || item.price) * item.quantity, 0);
  }, [cart]);

  const deliveryCharge = cart.length > 0 ? 50 : 0;
  const totalAmount = cartSubtotal + deliveryCharge;

  return (
    <div className="min-h-screen relative">
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      {isCheckoutOpen ? (
        <div className="pt-20">
          <Checkout 
            cart={cart} 
            subtotal={cartSubtotal} 
            deliveryCharge={deliveryCharge} 
            total={totalAmount}
            onBack={() => setIsCheckoutOpen(false)}
          />
        </div>
      ) : (
        <main>
          <Hero onShopClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })} />
          <Services />
          <Portfolio />
          <section id="shop" className="py-20 bg-white">
            <ProductList onAddToCart={addToCart} onBuyNow={openBuyNow} />
          </section>
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
      )}

      <Footer />
      <FloatingWhatsApp />

      {/* Overlays */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        subtotal={cartSubtotal}
        deliveryCharge={deliveryCharge}
        total={totalAmount}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onProceedToCheckout={(product, qty) => {
            // Add to cart first then go to checkout
            setCart([{ ...product, quantity: qty }]);
            setSelectedProduct(null);
            setIsCheckoutOpen(true);
          }}
        />
      )}
    </div>
  );
};

export default App;
