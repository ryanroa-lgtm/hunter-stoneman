import Nav from '../components/Nav';

export default function ResultsPage() {
  const results = [
    { event: "Willow Creek Invitational", location: "Knoxville, TN", result: "Win – 11 rounds of 68, 65" },
    { event: "Tennessee Players Championship", location: "Nashville, TN", result: "T-1 (Am Division) – Rounds 69, 72" },
    { event: "Southern Amateur Qualifier (The Honors Course)", location: "Chattanooga, TN", result: "Qualified – 65 (T-1, -7)" },
    { event: "Harold Eller Pro-Am", location: "Nashville, TN", result: "MC – Rounds 76, 71" },
    { event: "Foothills Invitational", location: "Knoxville, TN", result: "T-5 – 66 (-5) (1-day event due to weather)" },
    { event: "Sanderson Farms Pre-Qualifier (PGA Tour Event)", location: "Jackson, MI", result: "4th – Rounds 74, 66" },
    { event: "Monday Qualifier Follow-Up", location: "Jackson, MI", result: "Qualified (-2) – 70 (did not advance Monday)" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav active="Results" />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Results</h1>
          <p className="text-xl text-emerald-100">2024-2025 tournament results and qualifiers.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Results Table */}
        <div className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-900 uppercase tracking-wide">Event</th>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-900 uppercase tracking-wide">Location</th>
                  <th className="px-6 py-4 text-sm font-semibold text-zinc-900 uppercase tracking-wide">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {results.map((r, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 transition">
                    <td className="px-6 py-5 text-zinc-900 font-medium">{r.event}</td>
                    <td className="px-6 py-5 text-zinc-700">{r.location}</td>
                    <td className="px-6 py-5 text-zinc-700">{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Season Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 p-8">
              <div className="text-5xl font-bold text-emerald-900 mb-2">1</div>
              <div className="text-lg font-semibold text-emerald-800">Tournament Win</div>
              <div className="text-sm text-emerald-700 mt-2">Willow Creek Invitational</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-8">
              <div className="text-5xl font-bold text-blue-900 mb-2">7</div>
              <div className="text-lg font-semibold text-blue-800">Events Played</div>
              <div className="text-sm text-blue-700 mt-2">2024-2025 Season</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 p-8">
              <div className="text-5xl font-bold text-purple-900 mb-2">-7</div>
              <div className="text-lg font-semibold text-purple-800">Best Round</div>
              <div className="text-sm text-purple-700 mt-2">65 at The Honors Course</div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-zinc-50 rounded-2xl border border-zinc-200 p-8">
          <h3 className="text-2xl font-bold text-zinc-900 mb-4">About These Results</h3>
          <p className="text-zinc-700 leading-relaxed">
            Tournament results are updated regularly throughout the season. Results include professional events, 
            qualifiers, and amateur competitions across the United States.
          </p>
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