import React from 'react';
import { Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-amber-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl text-amber-900">Contact Us To Order Pure Ghee</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-amber-900 flex items-center gap-2"><Phone className="w-4 h-4"/> Phone Numbers</h3>
            <ul className="mt-3 space-y-2 text-amber-800">
              <li>
                <a href="tel:+916375931910" className="hover:underline">+91 6375931910</a>
                <span className="text-amber-600"> — Tanay Joshi</span>
              </li>
              <li>
                <a href="tel:+919610290317" className="hover:underline">+91 9610290317</a>
                <span className="text-amber-600"> — Shard Pareek</span>
              </li>
            </ul>
          </div>
          <div className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-amber-900">Addresses</h3>
            <ul className="mt-3 space-y-2 text-amber-800">
              <li>Pareek Chowk, Jassusar Gate, Bikaner, Rajasthan</li>
              <li>Behind M.M. Ground, Jawahar Nagar, Bikaner, Rajasthan</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-amber-700">We currently accept orders via phone only. Call us to place your order for 1L (₹650) or 2L (₹1300) bottles.</p>
      </div>
    </section>
  );
}
