'use client'

import { useState, useEffect } from 'react';

export default function AboutPage() {
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
      {/* Navigation */}
      <nav className="sticky top-0 border-b border-zinc-200 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold tracking-tight text-zinc-900">HUNTER STONEMAN</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-zinc-700 hover:text-zinc-900 font-medium">Home</a>
              <a href="/about" className="text-zinc-900 hover:text-zinc-600 font-medium border-b-2 border-emerald-600">About</a>
              <a href="/results" className="text-zinc-700 hover:text-zinc-900 font-medium">Results</a>
              <a href="/bag" className="text-zinc-700 hover:text-zinc-900 font-medium">Bag</a>
              <a href="/partners" className="text-zinc-700 hover:text-zinc-900 font-medium">Partners</a>
              <a href="/never-birdie-boys" className="text-zinc-700 hover:text-zinc-900 font-medium">Never Birdie Boys</a>
              <a href="/contact" className="bg-zinc-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <div className="relative h-[600px] overflow-hidden">
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                About Hunter
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Professional golfer based in Sarasota, Florida, competing in events across the United States.
              </p>
            </div>
          </div>
        </div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Professional Golfer</h2>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Hunter Stoneman competes in professional events across the United States. This page will include a full bio, background, and current focus areas (schedule, training, and goals).
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Background</h2>
              <div className="text-zinc-600 leading-relaxed space-y-4">
                <p>
                  Golf has been part of Hunter Stoneman's life since he was three years old, growing up in Lake Mary, Florida. Introduced to the game by his grandfather, he began formal lessons at six and tournament play at ten.
                </p>
                <p>
                  He earned his first tournament victory at 13 and went on to win his first club championship at 16 - signs of a competitor developing early.
                </p>
                <p>
                  As a teenager, Hunter stepped away from high school to help care for his grandmother, a responsibility he continues to honor. The experience shaped his resilience and perspective - both on and off the course.
                </p>
                <p>
                  Choosing to bypass college, Hunter turned professional in November 2025 and is now fully committed to earning his place on the PGA Tour.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Current Focus</h2>
              <div className="text-zinc-600 leading-relaxed space-y-4">
                <p>
                  As a newly turned professional, Hunter's primary focus is gaining tournament experience and continuing to sharpen the areas of his game that create scoring opportunities. Known for his length and accuracy off the tee, he continues to build consistency with his driver while doubling down on the short game and putting that have become his biggest weapons.
                </p>
                <p>
                  Each season is about growth, competition, and earning opportunities that move him closer to his ultimate goal of competing on the PGA Tour.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Playing Style</h2>
              <div className="text-zinc-600 leading-relaxed space-y-4">
                <p>
                  Hunter Stoneman combines length and control off the tee with a reliable short game that consistently separates him from the field. Known for driving the ball both long and straight, he frequently puts himself in strong scoring positions.
                </p>
                <p>
                  Around the greens is where Hunter truly excels. His touch on chips and pitches, paired with a confident and accurate putting stroke, allows him to convert opportunities and save strokes when it matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-zinc-900 text-white py-12 mt-16">
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