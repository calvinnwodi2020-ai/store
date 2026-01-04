
import React from 'react';
import { Star, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Kit Tag */}
      {product.kitType && product.kitType !== 'N/A' && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded text-white ${
            product.kitType === 'Home' ? 'bg-blue-600' : 
            product.kitType === 'Away' ? 'bg-black' : 'bg-green-600'
          }`}>
            {product.kitType} Kit
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="aspect-h-4 aspect-w-3 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-xs font-medium text-gray-500">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="p-2 bg-black text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg"
            title="Add to Cart"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
