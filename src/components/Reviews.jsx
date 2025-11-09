import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const StarRow = ({ value }) => {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} size={16} className={i <= value ? 'text-amber-500 fill-amber-500' : 'text-amber-300'} />
      ))}
    </div>
  );
};

const Reviews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ first_name: '', last_name: '', rating: 5, review: '', email: '', phone: '' });
  const [submitState, setSubmitState] = useState({ ok: null, msg: '' });

  const fetchReviews = async () => {
    try {
      const res = await fetch(`${API_BASE}/reviews`);
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReviews(); }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitState({ ok: null, msg: '' });
    try {
      const res = await fetch(`${API_BASE}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitState({ ok: true, msg: 'Thanks! Your review was submitted for approval.' });
      setForm({ first_name: '', last_name: '', rating: 5, review: '', email: '', phone: '' });
      fetchReviews();
    } catch (e) {
      setSubmitState({ ok: false, msg: 'Could not submit. Please try again.' });
    }
  };

  return (
    <section id="reviews" className="py-14 bg-amber-50/60">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl text-amber-900">Reviews</h2>
        <p className="text-amber-800/90 mt-2">Your words keep us going. Share your experience with Grahini Ghee.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-xl border border-amber-200 bg-white p-5 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-amber-800 mb-1">First Name*</label>
                <input required value={form.first_name} onChange={(e)=>setForm(f=>({...f, first_name:e.target.value}))} className="w-full rounded-md border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm text-amber-800 mb-1">Last Name*</label>
                <input required value={form.last_name} onChange={(e)=>setForm(f=>({...f, last_name:e.target.value}))} className="w-full rounded-md border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-amber-800 mb-1">Rating*</label>
                <select required value={form.rating} onChange={(e)=>setForm(f=>({...f, rating:Number(e.target.value)}))} className="w-full rounded-md border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400">
                  {[1,2,3,4,5].map(n=> <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-amber-800 mb-1">Email</label>
                <input type="email" value={form.email} onChange={(e)=>setForm(f=>({...f, email:e.target.value}))} className="w-full rounded-md border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-amber-800 mb-1">Phone</label>
                <input value={form.phone} onChange={(e)=>setForm(f=>({...f, phone:e.target.value}))} className="w-full rounded-md border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-amber-800 mb-1">Review*</label>
              <textarea required rows={4} value={form.review} onChange={(e)=>setForm(f=>({...f, review:e.target.value}))} className="w-full rounded-md border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-md">Submit Review</button>
            {submitState.msg && (
              <p className={`text-sm ${submitState.ok ? 'text-green-700' : 'text-red-700'}`}>{submitState.msg}</p>
            )}
          </form>

          <div className="space-y-4">
            {loading ? (
              <p className="text-amber-800">Loading reviews...</p>
            ) : items.length === 0 ? (
              <p className="text-amber-800">No reviews yet. Be the first to share!</p>
            ) : (
              items.map((r) => (
                <div key={r._id} className="rounded-xl border border-amber-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-amber-900">{r.first_name} {r.last_name}</p>
                    <StarRow value={r.rating} />
                  </div>
                  <p className="mt-2 text-amber-800/90">{r.review}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
