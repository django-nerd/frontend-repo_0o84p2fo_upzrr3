import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl text-amber-900">Our Story</h2>
        <p className="mt-3 text-amber-800/90 max-w-3xl">
          Founded by two passionate food lovers from Rajasthan, Grahini Ghee celebrates the art of slow-cooked, pure ghee. Every batch is crafted with care, inspired by the warmth and wisdom of our grandmothers.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-amber-200 p-5 bg-white">
            <p className="font-serif text-xl text-amber-900">Tanay Joshi</p>
            <p className="text-amber-700">Co-founder</p>
            <p className="mt-3 text-amber-800/90">Exploring traditional culinary practices and bringing them to modern kitchens with authenticity and love.</p>
          </div>
          <div className="rounded-xl border border-amber-200 p-5 bg-white">
            <p className="font-serif text-xl text-amber-900">Shard Pareek</p>
            <p className="text-amber-700">Co-founder</p>
            <p className="mt-3 text-amber-800/90">Committed to quality and community, ensuring every bottle reflects our values of purity and care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
