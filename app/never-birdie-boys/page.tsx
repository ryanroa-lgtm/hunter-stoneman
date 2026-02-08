import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

export const metadata = {
  title: 'Never Birdie Boys | Hunter Stoneman',
  description: 'Never Birdie Boys - A golf YouTube channel and brand centered around fun, casual golf with friends.',
};

export default function NeverBirdieboysPage() {
  return (
    <Section>
      <PageHeader
        title="Never Birdie Boys"
        subtitle="Golf without the pressure"
      />

      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Never Birdie Boys is a golf YouTube channel and brand centered around fun, casual
            golf with friends — the kind of rounds that are about laughs, banter, bad swings,
            and enjoying the game without pressure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            For Hunter, Never Birdie Boys is a break from competitive golf. It&apos;s a chance to
            play with buddies who don&apos;t take the game as seriously and to show the lighter,
            more relatable side of being a professional golfer.
          </p>
        </div>

        {/* Brand Description */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">The Brand</h3>
          <p className="text-gray-600 leading-relaxed">
            The brand is represented by the Never Birdie Boys logo: a smiling golf ball with
            a single tear, wearing a backwards hat that reads &quot;Never Birdie Boys.&quot;
          </p>
        </div>

        {/* Featured Video Placeholder */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Video</h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500">Video coming soon</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button href="#" variant="primary" external>
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit YouTube
          </Button>
        </div>
      </div>
    </Section>
  );
}
