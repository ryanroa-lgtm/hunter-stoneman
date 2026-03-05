export default function BagPage() {
  const bag = [
    { category: "Driver", item: "Titleist TSR 2", details: "Shaft: Ventus Black TR 7X" },
    { category: "3 Wood", item: "TaylorMade Qi35", details: "Shaft: Ventus TR 8X" },
    { category: "Irons", item: "Srixon ZX7 (5-PW)", details: "Shaft: C-Taper 120S" },
    { category: "3 Iron", item: "Srixon U", details: "Shaft: Ventus TR 8X" },
    { category: "Wedges", item: "Callaway Jaws Raw", details: "60 / 55 / 50" },
    { category: "Putter", item: "L.A.B. DF3 (Broomstick)", details: "" },
    { category: "Ball", item: "Titleist Pro V1", details: "" }
  ];

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
              <a href="/bag" className="text-zinc-900 hover:text-zinc-600 font-medium border-b-2 border-emerald-600">Bag</a>
              <a href="/partners" className="text-zinc-700 hover:text-zinc-900 font-medium">Partners</a>
              <a href="/never-birdie-boys" className="text-zinc-700 hover:text-zinc-900 font-medium">Never Birdie Boys</a>
              <a href="/contact" className="bg-zinc-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-zinc-800 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">What's In The Bag</h1>
          <p className="text-xl text-emerald-100">Current setup and equipment specs.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bag.map((club, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 hover:shadow-lg hover:border-emerald-500 transition group"
            >
              <div className="mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {club.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-emerald-700 transition">
                {club.item}
              </h3>
              {club.details && (
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {club.details}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Additional Equipment Info */}
        <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Equipment Philosophy</h2>
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            Equipment selection is critical for consistent performance at the professional level. 
            This setup is optimized for accuracy, distance control, and versatility across different 
            course conditions.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Specs and equipment may change throughout the season based on performance data and course requirements.
          </p>
        </div>

        {/* Equipment Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">Power</h3>
            <p className="text-blue-700 text-sm">
              Driver and woods optimized for maximum distance with control
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 p-8">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Precision</h3>
            <p className="text-emerald-700 text-sm">
              Irons designed for accuracy and shot-shaping capability
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 p-8">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">Versatility</h3>
            <p className="text-purple-700 text-sm">
              Wedge setup for all short game situations and conditions
            </p>
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