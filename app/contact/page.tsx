'use client'

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = () => {
    alert('Form submitted! (This is a placeholder - connect to your email service)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <a href="/about" className="text-zinc-700 hover:text-zinc-900 font-medium">About</a>
              <a href="/results" className="text-zinc-700 hover:text-zinc-900 font-medium">Results</a>
              <a href="/bag" className="text-zinc-700 hover:text-zinc-900 font-medium">Bag</a>
              <a href="/partners" className="text-zinc-700 hover:text-zinc-900 font-medium">Partners</a>
              <a href="/never-birdie-boys" className="text-zinc-700 hover:text-zinc-900 font-medium">Never Birdie Boys</a>
              <a href="/contact" className="bg-zinc-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition border-b-2 border-emerald-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Contact</h1>
          <p className="text-xl text-emerald-100">Inquiries, sponsorships, and collaborations.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Send a Message</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-zinc-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-lg transition"
              >
                Send Message
              </button>

              <p className="text-sm text-zinc-500 text-center">
                Note: This form is a placeholder. Connect to an email service to make it functional.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Get in Touch</h2>
            
            {/* Email Card */}
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 mb-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Email</h3>
                  <a 
                    href="mailto:HunterStoneman98@icloud.com" 
                    className="text-emerald-700 hover:text-emerald-800 font-medium text-lg"
                  >
                    HunterStoneman98@icloud.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 mb-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Based In</h3>
                  <p className="text-zinc-700">Sarasota, Florida</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Response Time</h3>
              <p className="text-emerald-800 leading-relaxed">
                I typically respond to inquiries within 24-48 hours. For urgent matters, 
                please indicate that in your subject line.
              </p>
            </div>

            {/* What I'm Open To */}
            <div className="mt-8 bg-zinc-50 rounded-2xl border border-zinc-200 p-8">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Open To</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-700">Sponsorship opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-700">Brand collaborations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-700">Media inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-700">Speaking engagements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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