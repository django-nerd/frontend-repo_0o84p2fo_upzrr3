import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-amber-900">
      <HeaderNav />
      <Hero />
      <Products />
      <About />
      <Reviews />
      <Contact />
      <footer className="border-t border-amber-200 bg-amber-50/60">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-amber-800/90 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Grahini Ghee. All rights reserved.</p>
          <p>Crafted with warmth and tradition.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
