import { MapPin, Clock } from 'lucide-react';

const scheduleData = [
  {
    round: '1次ラウンド（Pool B）',
    matches: [
      { date: '3月9日', opponent: '🇨🇳 中国', venue: '東京ドーム', score: '8-1', result: '勝利' },
      { date: '3月10日', opponent: '🇰🇷 韓国', venue: '東京ドーム', score: '13-4', result: '勝利' },
      { date: '3月11日', opponent: '🇨🇿 チェコ', venue: '東京ドーム', score: '10-2', result: '勝利' },
      { date: '3月12日', opponent: '🇦🇺 オーストラリア', venue: '東京ドーム', score: '7-1', result: '勝利' },
    ]
  },
  {
    round: '準々決勝',
    matches: [
      { date: '3月16日', opponent: '🇮🇹 イタリア', venue: 'マイアミ', score: '9-3', result: '勝利' },
    ]
  },
  {
    round: '準決勝',
    matches: [
      { date: '3月21日', opponent: '🇲🇽 メキシコ', venue: 'マイアミ', score: '6-5', result: '勝利（延長）' },
    ]
  },
  {
    round: '決勝 🏆',
    matches: [
      { date: '3月22日', opponent: '🇺🇸 アメリカ', venue: 'マイアミ', score: '3-2', result: '優勝' },
    ]
  }
];

export function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002868]">試合結果</h2>
          <p className="text-gray-600">MATCH RESULTS</p>
          <div className="mt-4 inline-block bg-[#FFD700] text-[#002868] px-6 py-2 rounded-full">
            全試合勝利 7戦7勝 🏆
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {scheduleData.map((round, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl mb-6 text-[#BC002D] border-l-4 border-[#BC002D] pl-4">
                {round.round}
              </h3>
              <div className="space-y-4">
                {round.matches.map((match, matchIdx) => (
                  <div key={matchIdx} className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow border-l-4 border-[#FFD700]">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="text-center md:text-left">
                        <div className="text-[#002868] mb-1">{match.date}</div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm justify-center md:justify-start">
                          <MapPin size={16} />
                          <span>{match.venue}</span>
                        </div>
                      </div>
                      <div className="md:col-span-2 text-center">
                        <div className="flex items-center justify-center gap-4 mb-2">
                          <span className="text-xl">🇯🇵 日本</span>
                          <span className="text-2xl text-[#BC002D]">{match.score}</span>
                          <span className="text-xl">{match.opponent}</span>
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <span className="inline-block bg-[#BC002D] text-white px-4 py-1 rounded-full text-sm">
                          {match.result}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
