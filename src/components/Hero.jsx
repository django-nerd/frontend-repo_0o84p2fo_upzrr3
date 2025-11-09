import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 leading-tight">
            A spoonful of tradition, crafted with care.
          </h1>
          <p className="mt-4 text-amber-800/90">
            Grahini Ghee brings the warmth of home to your kitchen. Slow-cooked, richly aromatic, and made from the finest milk—just the way our grandmothers did.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-md shadow">Contact to Order</a>
            <a href="#products" className="px-5 py-3 rounded-md border border-amber-300 text-amber-800 hover:bg-amber-100">View Products</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-amber-200 via-yellow-100 to-amber-50 shadow-inner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
