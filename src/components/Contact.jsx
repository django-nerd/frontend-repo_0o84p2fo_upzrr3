import React from 'react';
import { Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl text-amber-900">Contact</h2>
        <p className="text-amber-800/90 mt-2">We take orders over the phone. Reach out to us anytime.</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-amber-200 bg-white p-5">
            <p className="font-medium text-amber-900 flex items-center gap-2"><Phone size={18} className="text-amber-600"/> Order Numbers</p>
            <div className="mt-3 space-y-1 text-amber-800/90">
              <a href="tel:+919999999999" className="hover:text-amber-900">+91 99999 99999</a>
              <p className="text-sm">Available 9am – 8pm IST</p>
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-white p-5">
            <p className="font-medium text-amber-900">Addresses</p>
            <div className="mt-3 space-y-2 text-amber-800/90">
              <p>Jaipur, Rajasthan</p>
              <p>Jodhpur, Rajasthan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
