import Section from './components/Section';
import Button from './components/Button';
import Card from './components/Card';

const photoCards = [
  { title: 'Tournament', description: 'Competing at the highest level' },
  { title: 'Practice', description: 'Perfecting the craft' },
  { title: 'On Course', description: 'Strategic play in action' },
  { title: 'Training', description: 'Building strength and endurance' },
  { title: 'Competition', description: 'Under pressure moments' },
  { title: 'Victory', description: 'Celebrating success' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Hunter Stoneman
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Professional Golfer &bull; Sarasota, Florida
            </p>
            <div className="w-24 h-1 bg-[#2d5a3d] mx-auto mb-12"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10">
            Hunter Stoneman is a professional golfer competing in regional and national events
            across the United States. Based in Sarasota, Florida, Hunter continues to build
            momentum through disciplined preparation, strong scoring performances, and consistent
            tournament play.
          </p>
          <Button href="/contact">Contact Hunter</Button>
        </div>
      </Section>

      {/* Photo Grid Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">On and Off the Course</h2>
          <p className="text-gray-600">Moments from the journey</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoCards.map((card, index) => (
            <Card key={index} className="group hover:bg-gray-100 transition-colors">
              <div className="aspect-[4/3] bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
