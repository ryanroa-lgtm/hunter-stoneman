import Section from '../components/Section';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: "What's In The Bag | Hunter Stoneman",
  description: "The equipment Hunter Stoneman uses on the course.",
};

const equipment = [
  {
    category: 'Driver',
    items: [
      { name: 'Titleist TSR2', detail: 'Shaft: Ventus Black TR 7X' },
    ],
  },
  {
    category: 'Fairway Wood',
    items: [
      { name: 'TaylorMade Qi35 3-Wood', detail: 'Shaft: Ventus TR 8X' },
    ],
  },
  {
    category: 'Irons',
    items: [
      { name: 'Srixon ZX7 (5-PW)', detail: 'Shaft: KBS C-Taper 120S' },
    ],
  },
  {
    category: 'Utility',
    items: [
      { name: 'Srixon U (3-Iron)', detail: 'Shaft: Ventus TR 8X' },
    ],
  },
  {
    category: 'Wedges',
    items: [
      { name: 'Callaway Jaws Raw', detail: '50°, 55°, 60°' },
    ],
  },
  {
    category: 'Putter',
    items: [
      { name: 'LAB DF 3', detail: 'Broomstick' },
    ],
  },
  {
    category: 'Ball',
    items: [
      { name: 'Titleist Pro V1', detail: '' },
    ],
  },
];

export default function BagPage() {
  return (
    <Section>
      <PageHeader
        title="What's In The Bag"
        subtitle="The equipment behind the performance"
      />

      <div className="max-w-3xl mx-auto">
        <div className="grid gap-6">
          {equipment.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-xs font-semibold text-[#2d5a3d] uppercase tracking-wider mb-3">
                {section.category}
              </h3>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg font-medium text-gray-900">{item.name}</span>
                  {item.detail && (
                    <span className="text-sm text-gray-600 mt-1 sm:mt-0">{item.detail}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
