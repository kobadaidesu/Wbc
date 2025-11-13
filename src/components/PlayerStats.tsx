import { Trophy, Award, TrendingUp, Zap } from 'lucide-react';

const mvpData = {
  name: '大谷 翔平',
  team: 'ロサンゼルス・エンゼルス',
  number: '16',
  stats: {
    batting: { games: 7, avg: '.435', hr: 1, rbi: 8, hits: 13 },
    pitching: { games: 4, era: '1.86', wins: 2, strikeouts: 11, innings: '9.2' }
  }
};

const battingLeaders = [
  { rank: 1, name: '大谷 翔平', avg: '.435', hr: 1, rbi: 8, team: 'エンゼルス' },
  { rank: 2, name: '吉田 正尚', avg: '.429', hr: 1, rbi: 13, team: 'レッドソックス' },
  { rank: 3, name: '村上 宗隆', avg: '.375', hr: 2, rbi: 9, team: 'ヤクルト' },
  { rank: 4, name: '岡本 和真', avg: '.346', hr: 2, rbi: 9, team: '巨人' },
  { rank: 5, name: 'ヌートバー', avg: '.333', hr: 1, rbi: 6, team: 'カージナルス' },
];

const pitchingLeaders = [
  { rank: 1, name: '大谷 翔平', era: '1.86', wins: 2, strikeouts: 11, innings: '9.2' },
  { rank: 2, name: '佐々木 朗希', era: '1.50', wins: 1, strikeouts: 11, innings: '6.0' },
  { rank: 3, name: 'ダルビッシュ有', era: '1.35', wins: 1, strikeouts: 10, innings: '6.2' },
  { rank: 4, name: '山本 由伸', era: '1.35', wins: 1, strikeouts: 9, innings: '6.2' },
  { rank: 5, name: '今永 昇太', era: '2.08', wins: 1, strikeouts: 13, innings: '8.2' },
];

const awards = [
  { name: '大谷 翔平', award: 'MVP', category: '最優秀選手' },
  { name: '村上 宗隆', award: 'オールWBCチーム', category: '三塁手' },
  { name: '吉田 正尚', award: 'オールWBCチーム', category: '外野手' },
  { name: 'ダルビッシュ有', award: 'オールWBCチーム', category: '投手' },
  { name: '山本 由伸', award: 'オールWBCチーム', category: '投手' },
];

export function PlayerStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002868]">個人成績・表彰</h2>
          <p className="text-gray-600">PLAYER STATISTICS & AWARDS</p>
        </div>

        {/* MVP Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-12 h-12 text-[#002868]" />
              <h3 className="text-3xl md:text-4xl text-[#002868]">大会MVP</h3>
              <Trophy className="w-12 h-12 text-[#002868]" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 items-center bg-white/30 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-6xl mb-4">⚾</div>
                <div className="text-4xl text-[#002868] mb-2">{mvpData.name}</div>
                <div className="text-lg text-gray-700">#{mvpData.number}</div>
                <div className="text-sm text-gray-600">{mvpData.team}</div>
              </div>
              
              <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm text-gray-600 mb-3 border-b pb-2">打撃成績</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">打率</span>
                      <span className="text-[#002868]">{mvpData.stats.batting.avg}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">本塁打</span>
                      <span className="text-[#002868]">{mvpData.stats.batting.hr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">打点</span>
                      <span className="text-[#002868]">{mvpData.stats.batting.rbi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">安打</span>
                      <span className="text-[#002868]">{mvpData.stats.batting.hits}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-sm text-gray-600 mb-3 border-b pb-2">投手成績</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">防御率</span>
                      <span className="text-[#002868]">{mvpData.stats.pitching.era}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">勝利</span>
                      <span className="text-[#002868]">{mvpData.stats.pitching.wins}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">奪三振</span>
                      <span className="text-[#002868]">{mvpData.stats.pitching.strikeouts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">投球回</span>
                      <span className="text-[#002868]">{mvpData.stats.pitching.innings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Leaders */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Batting Leaders */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#002868] text-white p-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-2xl">打撃成績トップ5</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {battingLeaders.map((player) => (
                  <div key={player.rank} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      player.rank === 1 ? 'bg-[#FFD700] text-[#002868]' :
                      player.rank === 2 ? 'bg-[#C0C0C0] text-[#002868]' :
                      player.rank === 3 ? 'bg-[#CD7F32] text-white' :
                      'bg-gray-400'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="flex-1">
                      <div className="text-[#002868]">{player.name}</div>
                      <div className="text-xs text-gray-500">{player.team}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="text-xs text-gray-500">打率</div>
                        <div className="text-[#002868]">{player.avg}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">本塁打</div>
                        <div className="text-[#002868]">{player.hr}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">打点</div>
                        <div className="text-[#002868]">{player.rbi}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pitching Leaders */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#BC002D] text-white p-6">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6" />
                <h3 className="text-2xl">投手成績トップ5</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {pitchingLeaders.map((player) => (
                  <div key={player.rank} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      player.rank === 1 ? 'bg-[#FFD700] text-[#002868]' :
                      player.rank === 2 ? 'bg-[#C0C0C0] text-[#002868]' :
                      player.rank === 3 ? 'bg-[#CD7F32] text-white' :
                      'bg-gray-400'
                    }`}>
                      {player.rank}
                    </div>
                    <div className="flex-1">
                      <div className="text-[#002868]">{player.name}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center text-sm">
                      <div>
                        <div className="text-xs text-gray-500">防御率</div>
                        <div className="text-[#002868]">{player.era}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">勝利</div>
                        <div className="text-[#002868]">{player.wins}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">奪三振</div>
                        <div className="text-[#002868]">{player.strikeouts}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#FFD700]" />
              <h3 className="text-2xl text-[#002868]">オールWBCチーム選出</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((award, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <div className="text-lg text-[#002868]">{award.name}</div>
                    <div className="text-sm text-gray-600">{award.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
