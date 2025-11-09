import React from 'react';
import { Star } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-amber-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-inner shadow-amber-600" />
          <div className="leading-tight">
            <p className="font-serif text-xl text-amber-800">Grahini Ghee</p>
            <p className="text-xs text-amber-600">Pure • Traditional • Premium</p>
          </div>
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          <a href="#about" className="text-amber-800 hover:text-amber-600 transition">About</a>
          <a href="#reviews" className="text-amber-800 hover:text-amber-600 transition">Reviews</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full shadow-md transition">
            <Star className="w-4 h-4" /> Contact To Order
          </a>
        </nav>
      </div>
    </header>
  );
}
