
import React, { useState, useMemo } from 'react';
import { ShoppingBag, ChevronRight, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import { PRODUCTS } from './data';
import { Product, Category, CartItem } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onCategorySelect={setActiveCategory} 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        activeCategory={activeCategory}
      />

      {/* Hero Section */}
      {activeCategory === 'All' && (
        <div className="relative h-[600px] overflow-hidden bg-black flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
              alt="Stadium" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-blue-600 rounded-full">
                New Arrival: 25/26 Collection
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 italic tracking-tighter">
                ELEVATE YOUR <br /> GAME TODAY.
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-lg">
                Discover the latest 2025/2026 authentic kits, premium football boots, and professional training gear. Performance meets style.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setActiveCategory('New Kits')}
                  className="px-8 py-4 bg-white text-black font-black uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center rounded-sm"
                >
                  Shop New Kits <ChevronRight className="ml-2" />
                </button>
                <button 
                  onClick={() => setActiveCategory('Boots')}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all transform hover:scale-105 rounded-sm"
                >
                  Browse Boots
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Banner */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-4 bg-blue-50 rounded-full mb-4">
              <Truck className="text-blue-600" />
            </div>
            <h3 className="font-bold">Fast Global Shipping</h3>
            <p className="text-sm text-gray-500">Free delivery on orders over $150</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-green-50 rounded-full mb-4">
              <ShieldCheck className="text-green-600" />
            </div>
            <h3 className="font-bold">100% Authentic Gear</h3>
            <p className="text-sm text-gray-500">Official merchandise direct from brands</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4 bg-purple-50 rounded-full mb-4">
              <RefreshCcw className="text-purple-600" />
            </div>
            <h3 className="font-bold">Hassle-Free Returns</h3>
            <p className="text-sm text-gray-500">30-day money-back guarantee</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black italic tracking-tight text-gray-900">
              {activeCategory === 'All' ? 'LATEST RELEASES' : activeCategory.toUpperCase()}
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            Showing {filteredProducts.length} premium products selected for your performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-black italic tracking-tighter mb-6 block">
                ALL ABOUT <span className="text-blue-600">SPORTS</span>
              </span>
              <p className="text-gray-400 mb-8 max-w-md">
                We are more than a store. We are the pulse of the game. Providing athletes and fans with the best equipment since 2010.
              </p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">F</div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">I</div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">T</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-gray-500">Shop</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><button onClick={() => setActiveCategory('New Kits')} className="hover:text-white transition-colors">25/26 Kits</button></li>
                <li><button onClick={() => setActiveCategory('Retro Kits')} className="hover:text-white transition-colors">Retro Collection</button></li>
                <li><button onClick={() => setActiveCategory('Boots')} className="hover:text-white transition-colors">Football Boots</button></li>
                <li><button onClick={() => setActiveCategory('Gym Wear')} className="hover:text-white transition-colors">Training Gear</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-gray-500">Support</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © 2025 All About Sports. All rights reserved. Designed for the obsessed.
          </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;
