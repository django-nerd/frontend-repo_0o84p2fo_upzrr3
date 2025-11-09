import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Reviews() {
  const [approved, setApproved] = useState([]);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    rating: 5,
    text: '',
    email: '',
    phone: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch(`${API}/reviews`)
      .then(r => r.json())
      .then(setApproved)
      .catch(() => setApproved([]));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMsg('');
    try {
      const res = await fetch(`${API}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: form.first_name.trim(),
          last_name: form.last_name.trim(),
          rating: Number(form.rating),
          text: form.text.trim(),
          email: form.email || undefined,
          phone: form.phone || undefined
        })
      });
      if (!res.ok) throw new Error('Failed');
      setForm({ first_name: '', last_name: '', rating: 5, text: '', email: '', phone: '' });
      setMsg('Thank you! Your review has been submitted for approval.');
    } catch (err) {
      setMsg('Could not submit review. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl text-amber-900">Reviews</h2>
        <p className="mt-2 text-amber-800/80">Share your experience. Reviews appear after admin approval.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <form onSubmit={submit} className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-amber-800">First Name*</label>
                <input
                  className="mt-1 w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  value={form.first_name}
                  onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm text-amber-800">Last Name*</label>
                <input
                  className="mt-1 w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  value={form.last_name}
                  onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-amber-800">Rating*</label>
                <select
                  className="mt-1 w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: e.target.value })}
                  required
                >
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Star{n>1?'s':''}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm text-amber-800">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-amber-800">Phone</label>
              <input
                className="mt-1 w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <label className="text-sm text-amber-800">Review*</label>
              <textarea
                rows={4}
                className="mt-1 w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white px-6 py-3 rounded-full shadow-md transition"
            >
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
            {msg && <p className="mt-3 text-amber-700">{msg}</p>}
          </form>

          <div className="grid gap-4">
            {approved.length === 0 && (
              <p className="text-amber-800/80">No reviews yet. Be the first to share your experience!</p>
            )}
            {approved.map((r) => (
              <div key={r.id} className="bg-white border border-amber-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-amber-900">{r.first_name} {r.last_name}</p>
                  <div className="flex text-amber-500">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-amber-800/90">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
