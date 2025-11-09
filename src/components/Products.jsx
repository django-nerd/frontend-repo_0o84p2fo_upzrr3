import React from 'react';
import { IndianRupee } from 'lucide-react';

const products = [
  {
    id: '1l',
    title: 'Grahini Ghee — 1 L Bottle',
    price: 650,
    size: '1 L',
    desc: 'Ideal for small families and daily cooking rituals.',
  },
  {
    id: '2l',
    title: 'Grahini Ghee — 2 L Bottle',
    price: 1300,
    size: '2 L',
    desc: 'Great value for regular use and festive cooking.',
  },
];

const ProductCard = ({ title, price, size, desc }) => (
  <div className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <h3 className="font-serif text-xl text-amber-900">{title}</h3>
      <span className="inline-flex items-center gap-1 text-amber-800 font-semibold">
        <IndianRupee size={16} /> {price}
      </span>
    </div>
    <p className="text-sm text-amber-700 mt-1">Pack Size: {size}</p>
    <p className="text-amber-800/90 mt-3">{desc}</p>
    <a href="#contact" className="mt-4 inline-block text-amber-700 hover:text-amber-900 font-medium">Order by phone →</a>
  </div>
);

const Products = () => {
  return (
    <section id="products" className="py-14 bg-amber-50/60">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl text-amber-900">Our Products</h2>
        <p className="text-amber-800/90 mt-2">Premium, small-batch ghee made using traditional methods.</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
