import { useState } from 'react';

const positions = ['全て', '投手', '捕手', '内野手', '外野手'];

const players = [
  { name: '大谷 翔平', number: '16', position: '投手', team: 'ロサンゼルス・エンゼルス', award: 'MVP' },
  { name: 'ダルビッシュ有', number: '11', position: '投手', team: 'サンディエゴ・パドレス' },
  { name: '佐々木 朗希', number: '17', position: '投手', team: '千葉ロッテマリーンズ' },
  { name: '山本 由伸', number: '18', position: '投手', team: 'オリックス・バファローズ' },
  { name: '今永 昇太', number: '21', position: '投手', team: '横浜DeNAベイスターズ' },
  { name: '戸郷 翔征', number: '15', position: '投手', team: '読売ジャイアンツ' },
  { name: '宇田川 優希', number: '19', position: '投手', team: 'オリックス・バファローズ' },
  { name: '甲斐 拓也', number: '10', position: '捕手', team: 'ソフトバンクホークス' },
  { name: '中村 悠平', number: '27', position: '捕手', team: '東京ヤクルトスワローズ' },
  { name: '大城 卓三', number: '39', position: '捕手', team: '読売ジャイアンツ' },
  { name: '山田 哲人', number: '1', position: '内野手', team: '東京ヤクルトスワローズ' },
  { name: '源田 壮亮', number: '6', position: '内野手', team: '埼玉西武ライオンズ' },
  { name: '牧 秀悟', number: '3', position: '内野手', team: '横浜DeNAベイスターズ' },
  { name: '村上 宗隆', number: '55', position: '内野手', team: '東京ヤクルトスワローズ' },
  { name: '岡本 和真', number: '25', position: '内野手', team: '読売ジャイアンツ' },
  { name: '中野 拓夢', number: '00', position: '内野手', team: '阪神タイガース' },
  { name: '吉田 正尚', number: '34', position: '外野手', team: 'ボストン・レッドソックス' },
  { name: '鈴木 誠也', number: '51', position: '外野手', team: 'シカゴ・カブス' },
  { name: '近藤 健介', number: '8', position: '外野手', team: 'ソフトバンクホークス' },
  { name: 'ヌートバー', number: '0', position: '外野手', team: 'セントルイス・カージナルス' },
  { name: '周東 佑京', number: '32', position: '外野手', team: 'ソフトバンクホークス' },
];

export function TeamRoster() {
  const [selectedPosition, setSelectedPosition] = useState('全て');

  const filteredPlayers = selectedPosition === '全て' 
    ? players 
    : players.filter(p => p.position === selectedPosition);

  return (
    <section id="team" className="py-20 bg-[#002868] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">優勝メンバー</h2>
          <p className="opacity-90">CHAMPIONSHIP ROSTER</p>
          <p className="mt-4 text-sm opacity-75">監督：栗山 英樹</p>
        </div>

        {/* Position Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {positions.map((position) => (
            <button
              key={position}
              onClick={() => setSelectedPosition(position)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedPosition === position
                  ? 'bg-[#BC002D] text-white'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {position}
            </button>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredPlayers.map((player, idx) => (
            <div 
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors cursor-pointer relative"
            >
              {player.award && (
                <div className="absolute top-4 right-4 bg-[#FFD700] text-[#002868] px-3 py-1 rounded-full text-xs">
                  {player.award}
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl mb-2">{player.name}</div>
                  <div className="text-sm opacity-75">{player.position}</div>
                </div>
                <div className="text-4xl opacity-50">#{player.number}</div>
              </div>
              <div className="text-sm opacity-75 border-t border-white/20 pt-4">
                {player.team}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
