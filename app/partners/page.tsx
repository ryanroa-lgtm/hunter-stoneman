import Nav from '../components/Nav';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav active="Partners" />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Partners</h1>
          <p className="text-xl text-emerald-100">Brands and partners supporting the journey.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Partner - Cindtoro */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Featured Partner</h2>
          <div className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Content */}
              <div className="p-8 md:p-12">
                <h3 className="text-4xl font-bold text-zinc-900 mb-6">Cindtoro</h3>
                <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                  Cindtoro has been a major part of my success on the golf course.
                </p>
                <div className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 mb-6">
                  <p className="text-zinc-600">
                    Cindtoro is a digital marketing agency specializing in web design, SEO, PPC advertising, and digital PR. They help brands build their online presence and reach the right audience. From website development to search engine strategy, Cindtoro provides the tools and expertise to grow in the digital space - and they've been a key partner in building Hunter's brand off the course.
                  </p>
                </div>
                <a
                  href="https://www.cindtoro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded transition"
                >
                  Learn More About Cindtoro →
                </a>
              </div>
              
              {/* Right side - Logo space */}
              <div className="bg-zinc-50 p-8 md:p-12 flex items-center justify-center border-l border-zinc-200">
                <img
                  src="/images/cindtoro-logo.png"
                  alt="Cindtoro Logo"
                  className="max-w-[400px] w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Additional Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Howard G Cigars */}
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg hover:border-emerald-500 transition text-center">
              <div className="w-full h-32 flex items-center justify-center mb-6">
                <img
                  src="/images/howardg-logo.png"
                  alt="Howard G Cigars Logo"
                  className="max-h-32 w-auto"
                />
              </div>
              <a
                href="https://www.howardgcigars.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-zinc-900 mb-3 hover:text-emerald-700 transition inline-block"
              >
                Howard G Cigars
              </a>
              <p className="text-zinc-600 text-sm mt-3">
                Orlando-based cigar brand bringing a fresh perspective to cigar culture. Howard G Cigars combines quality craftsmanship with a modern approach, offering a premium experience for cigar enthusiasts.
              </p>
            </div>

            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg hover:border-emerald-500 transition text-center">
              <div className="w-full h-32 bg-zinc-50 rounded-xl border-2 border-dashed border-zinc-300 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-zinc-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-zinc-400 text-xs">Partner Logo</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Partner Name</h3>
              <p className="text-zinc-600 text-sm">Partner description coming soon.</p>
            </div>

            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg hover:border-emerald-500 transition text-center">
              <div className="w-full h-32 bg-zinc-50 rounded-xl border-2 border-dashed border-zinc-300 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-zinc-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-zinc-400 text-xs">Partner Logo</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Partner Name</h3>
              <p className="text-zinc-600 text-sm">Partner description coming soon.</p>
            </div>
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 p-12 text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Partnership Opportunities</h2>
          <p className="text-lg text-emerald-800 mb-8 max-w-2xl mx-auto">
            Interested in partnering with Hunter Stoneman? We're always looking for brands that align 
            with our values of excellence, professionalism, and growth in the game of golf.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded transition"
          >
            Get in Touch
          </a>
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