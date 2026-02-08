import Section from '../components/Section';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'Partners | Hunter Stoneman',
  description: 'The partners and sponsors supporting Hunter Stoneman.',
};

const partners = [
  {
    name: 'Cindtoro',
    description:
      'Cindtoro has been a major part of my success on the golf course, providing support that allows me to focus on preparation, competition, and continued growth as a professional golfer.',
  },
];

export default function PartnersPage() {
  return (
    <Section>
      <PageHeader
        title="Partners"
        subtitle="Proud to represent these trusted brands"
      />

      <div className="max-w-3xl mx-auto">
        <div className="grid gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#1e3a5f]/5 rounded-lg p-8 border border-[#1e3a5f]/10">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Interested in partnering?
            </h3>
            <p className="text-gray-600 mb-4">
              I&apos;m always open to connecting with brands that align with my values and goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
