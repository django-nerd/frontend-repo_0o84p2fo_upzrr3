import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-3xl text-amber-900">About Us</h2>
            <p className="mt-4 text-amber-800/90">Young founders from Bikaner bringing you pure, chemical-free, handmade ghee prepared traditionally with authenticity, trust and care.</p>
            <p className="mt-3 text-amber-800/80">We are committed to preserving the age-old methods of ghee making while ensuring modern standards of hygiene and quality. Every bottle is crafted with patience and pride.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-amber-100 rounded-xl p-5 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-amber-100/80" />
              <p className="mt-4 font-semibold text-amber-900">Tanay Joshi</p>
              <p className="text-amber-700">Age ~20</p>
            </div>
            <div className="bg-white border border-amber-100 rounded-xl p-5 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-amber-100/80" />
              <p className="mt-4 font-semibold text-amber-900">Shard Pareek</p>
              <p className="text-amber-700">Age ~24</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
