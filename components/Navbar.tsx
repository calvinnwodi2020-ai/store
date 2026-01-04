
import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  onCategorySelect: (category: Category | 'All') => void;
  cartCount: number;
  onOpenCart: () => void;
  activeCategory: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCategorySelect, cartCount, onOpenCart, activeCategory }) => {
  const navItems: (Category | 'All')[] = ['All', 'New Kits', 'Retro Kits', 'Boots', 'Balls', 'Gym Wear'];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onCategorySelect('All')}
          >
            <span className="text-2xl font-black italic text-black tracking-tighter">
              ALL ABOUT <span className="text-blue-600">SPORTS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onCategorySelect(item)}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  activeCategory === item 
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-black">
              <Search size={20} />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 text-gray-500 hover:text-black relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-500">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
