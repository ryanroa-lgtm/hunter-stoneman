'use client'

import { useState } from 'react';

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/results', label: 'Results' },
    { href: '/bag', label: 'Bag' },
    { href: '/partners', label: 'Partners' },
    { href: '/never-birdie-boys', label: 'Never Birdie Boys' },
  ];

  return (
    <nav className="sticky top-0 border-b border-zinc-200 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tight text-zinc-900">HUNTER STONEMAN</a>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  active === link.label
                    ? 'text-zinc-900 hover:text-zinc-600 font-medium border-b-2 border-emerald-600'
                    : 'text-zinc-700 hover:text-zinc-900 font-medium'
                }
              >
                {link.label}
              </a>
            ))}
            <a href="/contact" className={
              active === 'Contact'
                ? 'bg-zinc-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition border-b-2 border-emerald-600'
                : 'bg-zinc-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition'
            }>Contact</a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-zinc-900"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  active === link.label
                    ? 'block text-zinc-900 font-semibold'
                    : 'block text-zinc-700 hover:text-zinc-900 font-medium'
                }
              >
                {link.label}
              </a>
            ))}
            <a href="/contact" className="block bg-zinc-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition text-center">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
