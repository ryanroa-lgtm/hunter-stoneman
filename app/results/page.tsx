import Section from '../components/Section';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'Results | Hunter Stoneman',
  description: 'Tournament results and competitive history for Hunter Stoneman.',
};

const results = [
  {
    tournament: 'Willow Creek Invitational',
    location: 'Knoxville, TN',
    result: 'WIN',
    scores: '68, 65',
    highlight: true,
  },
  {
    tournament: 'Tennessee Players Championship',
    location: 'Nashville, TN',
    result: 'T-1 (Am Division)',
    scores: '69, 72 (-1)',
    highlight: true,
  },
  {
    tournament: 'Southern Amateur Qualifier',
    location: 'Chattanooga, TN (The Honors Course)',
    result: 'Qualified (T-1)',
    scores: '65 (-7)',
    highlight: true,
  },
  {
    tournament: 'Harold Eller Pro-Am',
    location: 'Nashville, TN',
    result: 'Missed Cut',
    scores: '76, 71',
    highlight: false,
  },
  {
    tournament: 'Foothills Invitational',
    location: 'Knoxville, TN',
    result: 'T-5 (Weather-shortened)',
    scores: '66 (-5)',
    highlight: false,
  },
  {
    tournament: 'Sanderson Farms Championship Pre-Qualifier',
    location: 'Jackson, MS',
    result: '4th',
    scores: '74, 66',
    highlight: false,
  },
  {
    tournament: 'Sanderson Farms Monday Qualifier',
    location: '',
    result: 'Qualified',
    scores: '70 (-2)',
    note: 'Did not advance',
    highlight: false,
  },
];

export default function ResultsPage() {
  return (
    <Section>
      <PageHeader
        title="Results"
        subtitle="2024-2025 Season"
      />

      <div className="max-w-4xl mx-auto">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tournament
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Result
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Scores
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((result, index) => (
                <tr key={index} className={result.highlight ? 'bg-green-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {result.tournament}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{result.location || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        result.result === 'WIN'
                          ? 'bg-green-100 text-green-800'
                          : result.highlight
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {result.result}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{result.scores}</div>
                    {result.note && (
                      <div className="text-xs text-gray-500">{result.note}</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 border ${
                result.highlight ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900">{result.tournament}</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    result.result === 'WIN'
                      ? 'bg-green-100 text-green-800'
                      : result.highlight
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {result.result}
                </span>
              </div>
              {result.location && (
                <p className="text-xs text-gray-500 mb-2">{result.location}</p>
              )}
              <p className="text-sm text-gray-700">
                <span className="font-medium">Scores:</span> {result.scores}
              </p>
              {result.note && <p className="text-xs text-gray-500 mt-1">{result.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
