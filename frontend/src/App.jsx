import React from 'react'
import HeaderNav from './components/HeaderNav'
import Hero from './components/Hero'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-amber-900">
      <HeaderNav />
      <main>
        <Hero />
        <About />
        <Reviews />
        <Contact />
      </main>
      <footer className="py-8 border-t border-amber-200 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-amber-700 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Grahini Ghee · Bikaner, Rajasthan</p>
          <p>Pure Homemade Goodness</p>
        </div>
      </footer>
    </div>
  )
}

export default App
