import Nav from '../components/Nav';

export default function NeverBirdieBoysPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav active="Never Birdie Boys" />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-block bg-blue-700 text-blue-100 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              YouTube Channel & Brand
            </div>
            <h1 className="text-6xl font-bold tracking-tight mb-6">
              Never Birdie Boys
            </h1>
            <p className="text-2xl text-blue-100 mb-8 leading-relaxed">
              Never Birdie Boys is a golf YouTube channel and lifestyle brand built around playing fun, 
              relaxed golf with the boys – not competitive tournament golf.
            </p>
            <p className="text-xl text-blue-200 leading-relaxed">
              This is where Hunter gets to step away from tournament pressure, enjoy the game, and play 
              alongside friends who may not be as good — but bring great vibes, laughs, challenges, and 
              stories to every round.
            </p>
          </div>
        </div>
      </div>

      {/* Content Coming Soon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-12 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Content Coming Soon</h2>
            <p className="text-xl text-blue-800 mb-8">
              Episodes, challenges, and behind-the-scenes golf content are currently in production. 
              The Never Birdie Boys channel and merch will be launching soon.
            </p>
            <div className="inline-block bg-blue-900 text-blue-100 px-6 py-3 rounded-lg font-semibold">
              Stay tuned – first drops coming soon
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Fun Content</h3>
              <p className="text-zinc-600 leading-relaxed">
                Relaxed rounds, challenges, and behind-the-scenes moments with friends on the course.
              </p>
            </div>

            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">The Boys</h3>
              <p className="text-zinc-600 leading-relaxed">
                Playing golf with friends who bring energy, laughs, and memorable stories to every round.
              </p>
            </div>

            <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">Merch</h3>
              <p className="text-zinc-600 leading-relaxed">
                Never Birdie Boys apparel and gear launching alongside the channel content.
              </p>
            </div>
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="bg-zinc-900 rounded-2xl overflow-hidden">
          <div className="px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Be the First to Know
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Follow on social media for updates on when the channel launches and exclusive behind-the-scenes content.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#" 
                className="bg-white hover:bg-zinc-100 text-zinc-900 font-semibold px-8 py-4 rounded transition inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
                Follow on Instagram
              </a>
              <a 
                href="#" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded transition inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </a>
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