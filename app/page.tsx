'use client'

import { useState, useEffect } from 'react';
import Nav from './components/Nav';

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    '/images/hunter-swing-1.jpg',
    '/images/hunter-swing-2.jpg', 
    '/images/hunter-swing-3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav active="Home" />

      {/* Hero Carousel */}
      <div className="relative h-[700px] overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Hunter Stoneman action shot ${idx + 1}`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
        ))}
        
        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Hunter Stoneman
              </h1>
              <p className="text-2xl text-white/90 mb-8">
                Professional golfer based in Sarasota, Florida, competing in events across the United States.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/results" className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition">
                  View Results
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-900 transition">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImage === idx ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Recent Highlight */}
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-2">Latest Result</p>
              <h2 className="text-3xl font-bold text-zinc-900 mb-2">Willow Creek Invitational - Win</h2>
              <p className="text-zinc-600">Knoxville, TN • Rounds of 68, 65</p>
            </div>
            <a href="/results" className="mt-4 md:mt-0 text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-2">
              See All Results 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* About Card */}
            <a href="/about" className="group bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition">
                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition">About</h3>
              <p className="text-zinc-600 mb-4">
                Professional golfer competing across the United States.
              </p>
              <span className="text-emerald-700 font-semibold group-hover:underline inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Results Card */}
            <a href="/results" className="group bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition">Results</h3>
              <p className="text-zinc-600 mb-4">
                2024-2025 tournament results and qualifiers.
              </p>
              <span className="text-emerald-700 font-semibold group-hover:underline inline-flex items-center gap-2">
                View Results
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Bag Card */}
            <a href="/bag" className="group bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition">
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition">What's In The Bag</h3>
              <p className="text-zinc-600 mb-4">
                Current equipment setup and specs.
              </p>
              <span className="text-emerald-700 font-semibold group-hover:underline inline-flex items-center gap-2">
                See Equipment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Partners Card */}
            <a href="/partners" className="group bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition">
                <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition">Partners</h3>
              <p className="text-zinc-600 mb-4">
                Brands supporting the journey.
              </p>
              <span className="text-emerald-700 font-semibold group-hover:underline inline-flex items-center gap-2">
                Meet Partners
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Never Birdie Boys Card */}
            <a href="/never-birdie-boys" className="group bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl border border-blue-800 p-8 hover:shadow-lg transition text-white">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Never Birdie Boys</h3>
              <p className="text-blue-100 mb-4">
                YouTube channel & brand — content coming soon.
              </p>
              <span className="text-blue-300 font-semibold group-hover:underline inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Contact Card */}
            <a href="/contact" className="group bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:border-emerald-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition">
                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-700 transition">Contact</h3>
              <p className="text-zinc-600 mb-4">
                Inquiries, sponsorships, and collaborations.
              </p>
              <span className="text-emerald-700 font-semibold group-hover:underline inline-flex items-center gap-2">
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hunter Stoneman</h3>
              <p className="text-zinc-400">Professional Golfer</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/about" className="block text-zinc-400 hover:text-white">About</a>
                <a href="/results" className="block text-zinc-400 hover:text-white">Results</a>
                <a href="/bag" className="block text-zinc-400 hover:text-white">Bag</a>
                <a href="/partners" className="block text-zinc-400 hover:text-white">Partners</a>
                <a href="/never-birdie-boys" className="block text-zinc-400 hover:text-white">Never Birdie Boys</a>
                <a href="/contact" className="block text-zinc-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-zinc-400">
                <a href="mailto:HunterStoneman98@icloud.com" className="hover:text-white">
                  HunterStoneman98@icloud.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
            <p>© 2026 Hunter Stoneman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}