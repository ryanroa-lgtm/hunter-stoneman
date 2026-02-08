import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

export const metadata = {
  title: 'About | Hunter Stoneman',
  description: 'Learn more about Hunter Stoneman, a professional golfer based in Sarasota, Florida.',
};

export default function AboutPage() {
  return (
    <Section>
      <PageHeader title="About" />

      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Hunter Stoneman is a professional golfer based in Sarasota, Florida, competing in
          high-level regional and national events throughout the U.S. Known for steady play
          and low-scoring rounds, Hunter focuses on continual improvement, preparation, and
          performance while representing trusted partners both on and off the course.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Location</h3>
            <p className="text-gray-600">Sarasota, Florida</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Focus</h3>
            <p className="text-gray-600">Regional & National Tournament Play</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact">Get in Touch</Button>
        </div>
      </div>
    </Section>
  );
}
