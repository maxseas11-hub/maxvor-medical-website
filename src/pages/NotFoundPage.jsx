import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, Package } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[70vh] bg-canvas flex items-center justify-center p-6" data-component="not-found-page">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-border-soft shadow-card text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>
        
        <div>
          <span className="text-4xl font-extrabold text-primary font-mono">404</span>
          <h2 className="text-xl font-bold text-primary mt-1">Page Not Found</h2>
          <p className="text-xs text-muted mt-2">
            The medical catalog page or regulatory specification document you requested could not be located.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/"
            className="w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/products"
            className="w-full py-2.5 rounded-xl border border-border text-primary text-xs font-bold flex items-center justify-center gap-2 hover:bg-canvas transition-colors"
          >
            <Package className="w-4 h-4" />
            Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
