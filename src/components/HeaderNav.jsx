import React from 'react';
import { Phone, Star } from 'lucide-react';

const HeaderNav = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-amber-50/70 border-b border-amber-200/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 shadow-inner" />
          <div className="leading-tight">
            <p className="font-serif text-2xl text-amber-800 tracking-wide">Grahini Ghee</p>
            <p className="text-xs text-amber-700/80">Pure • Traditional • Premium</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-amber-800">
          <a href="#products" className="hover:text-amber-600 transition-colors">Products</a>
          <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
          <a href="#reviews" className="hover:text-amber-600 transition-colors flex items-center gap-1"><Star size={16} className="text-amber-500"/>Reviews</a>
          <a href="#contact" className="hover:text-amber-600 transition-colors flex items-center gap-1"><Phone size={16}/>Contact</a>
        </nav>
        <a href="#contact" className="md:inline-flex hidden items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md shadow">
          <Phone size={16}/> Order by Phone
        </a>
      </div>
    </header>
  );
};

export default HeaderNav;
