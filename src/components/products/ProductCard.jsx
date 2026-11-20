import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, FileText } from 'lucide-react';

export default function ProductCard({ product, showCategory = true, onOpenRfq }) {
  return (
    <div 
      className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
      data-component="product-card"
    >
      <Link to={`/products/${product.id}`} className="block flex-1 flex flex-col">
        {/* Product Image */}
        <div className="relative w-full h-48 bg-white overflow-hidden flex items-center justify-center p-3">
          <img 
            src={product.image || '/assets/images/placeholder.svg'} 
            alt={product.name} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/images/placeholder.svg';
            }}
          />
          
          {product.isBestSeller && (
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500 text-white tracking-wider shadow-sm">
                HIGH DEMAND
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
          <div>
            {showCategory && (
              <div className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-1">
                {product.categoryName}
              </div>
            )}
            
            <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-secondary transition-colors line-clamp-2 min-h-[2.5rem]">
              {product.name}
            </h3>
          </div>

          {/* MOQ Status */}
          <div className="flex items-center justify-between text-xs text-muted pt-2.5 border-t border-border-soft mt-2">
            <span>MOQ: <strong className="text-slate-900 font-bold">{product.moq || '1 Unit'}</strong></span>
            <span className="text-[11px] text-secondary font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              <span>View Specs</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>

      {/* Quick Action Bar */}
      {onOpenRfq && (
        <div className="px-4 pb-3 pt-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenRfq(product);
            }}
            className="w-full py-1.5 rounded-lg bg-secondary/10 hover:bg-secondary text-secondary hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Quick Quote</span>
          </button>
        </div>
      )}
    </div>
  );
}

