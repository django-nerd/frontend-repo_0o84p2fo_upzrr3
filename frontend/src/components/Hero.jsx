import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-yellow-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-amber-900 leading-tight">
              Grahini Ghee
            </h1>
            <p className="mt-3 text-amber-700 text-lg">Pure Homemade Goodness From Rajasthan</p>
            <p className="mt-4 text-amber-800/80">Crafted traditionally in Bikaner with authenticity, trust and care. Experience the golden richness of pure, chemical-free, handmade ghee.</p>
            <div className="mt-8 flex items-center gap-4">
              <button onClick={scrollToContact} className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full shadow-md transition">
                Contact To Order
              </button>
              <a href="#about" className="text-amber-700 hover:text-amber-900 underline underline-offset-4">Learn more</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-amber-100 p-4 shadow-xl shadow-amber-100/40">
              <div className="aspect-[3/4] w-full rounded-xl bg-amber-100/60 flex items-center justify-center text-amber-800">1L Bottle Image</div>
              <div className="mt-3">
                <p className="font-medium text-amber-900">1 Liter Bottle</p>
                <p className="text-amber-700">₹650</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-amber-100 p-4 shadow-xl shadow-amber-100/40">
              <div className="aspect-[3/4] w-full rounded-xl bg-amber-100/60 flex items-center justify-center text-amber-800">2L Bottle Image</div>
              <div className="mt-3">
                <p className="font-medium text-amber-900">2 Liter Bottle</p>
                <p className="text-amber-700">₹1300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
