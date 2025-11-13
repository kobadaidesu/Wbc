import { Trophy, TrendingUp, Users, Target } from 'lucide-react';

const wbcEditions = [
  {
    year: 2006,
    host: 'アメリカ・日本',
    champion: '🇯🇵 日本',
    manager: '王貞治',
    mvp: '松坂大輔',
    record: '5勝3敗',
    finalScore: '10-6 vs キューバ',
    keyPlayers: ['松坂大輔', 'イチロー', '大塚晶文', '福留孝介'],
    highlight: '初代王者！松坂大輔が大会MVPに輝く',
    isJapanChampion: true
  },
  {
    year: 2009,
    host: 'アメリカ・日本・メキシコ・プエルトリコ',
    champion: '🇯🇵 日本',
    manager: '原辰徳',
    mvp: '松坂大輔',
    record: '7勝2敗',
    finalScore: '5-3 vs 韓国',
    keyPlayers: ['ダルビッシュ有', 'イチロー', '城島健司', '内川聖一'],
    highlight: '2連覇達成！イチローの決勝タイムリー',
    isJapanChampion: true
  },
  {
    year: 2013,
    host: 'アメリカ・日本・プエルトリコ・台湾',
    champion: '🇩🇴 ドミニカ共和国',
    manager: '山本浩二',
    mvp: 'ロビンソン・カノ',
    record: '4勝3敗',
    finalScore: '準決勝敗退',
    keyPlayers: ['前田健太', '内川聖一', '井端弘和', '阿部慎之助'],
    highlight: '準決勝でプエルトリコに敗退',
    isJapanChampion: false
  },
  {
    year: 2017,
    host: 'アメリカ・日本・韓国',
    champion: '🇺🇸 アメリカ',
    manager: '小久保裕紀',
    mvp: 'マーカス・ストローマン',
    record: '4勝2敗',
    finalScore: '準決勝敗退',
    keyPlayers: ['菊池涼介', '筒香嘉智', '千賀滉大', '小林誠司'],
    highlight: '準決勝でアメリカに敗退',
    isJapanChampion: false
  },
  {
    year: 2023,
    host: 'アメリカ・日本・台湾',
    champion: '🇯🇵 日本',
    manager: '栗山英樹',
    mvp: '大谷翔平',
    record: '7勝0敗',
    finalScore: '3-2 vs アメリカ',
    keyPlayers: ['大谷翔平', 'ダルビッシュ有', '村上宗隆', '吉田正尚'],
    highlight: '完全優勝！大谷vsトラウトの劇的な幕切れ',
    isJapanChampion: true,
    current: true
  }
];

const championshipStats = {
  japan: {
    championships: 3,
    appearances: 5,
    winRate: '60%',
    bestRecord: '7勝0敗 (2023)'
  }
};

export function WBCHistory() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#002868] to-[#001f3f] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">歴代WBC成績</h2>
          <p className="opacity-90">WBC HISTORY</p>
        </div>

        {/* Overall Stats */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#FFD700]">
            <h3 className="text-2xl md:text-3xl text-center mb-8 text-[#FFD700]">日本代表 通算成績</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-3 text-[#FFD700]" />
                <div className="text-4xl mb-2">{championshipStats.japan.championships}回</div>
                <div className="text-sm opacity-75">優勝回数</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-3 text-[#FFD700]" />
                <div className="text-4xl mb-2">{championshipStats.japan.appearances}回</div>
                <div className="text-sm opacity-75">出場回数</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-3 text-[#FFD700]" />
                <div className="text-4xl mb-2">{championshipStats.japan.winRate}</div>
                <div className="text-sm opacity-75">優勝率</div>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-3 text-[#FFD700]" />
                <div className="text-4xl mb-2">7-0</div>
                <div className="text-sm opacity-75">最高成績 (2023)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Editions */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {wbcEditions.map((edition, idx) => (
              <div 
                key={idx} 
                className={`${edition.current ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-[#002868] border-4 border-white shadow-2xl scale-105' : edition.isJapanChampion ? 'bg-white/10 backdrop-blur-sm border-2 border-[#FFD700]' : 'bg-white/5 backdrop-blur-sm border border-white/20'} rounded-xl p-6 md:p-8 transition-all hover:scale-105`}
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Year & Trophy */}
                  <div className="md:col-span-2 text-center">
                    <div className={`text-5xl md:text-6xl mb-2 ${edition.current ? 'text-[#002868]' : ''}`}>
                      {edition.year}
                    </div>
                    {edition.isJapanChampion && (
                      <div className="flex justify-center gap-1">
                        <Trophy className={`w-8 h-8 ${edition.current ? 'text-[#002868]' : 'text-[#FFD700]'}`} />
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="md:col-span-7">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className={`text-2xl ${edition.current ? 'text-[#002868]' : ''}`}>
                          {edition.champion}
                        </h3>
                        {edition.isJapanChampion && (
                          <span className={`px-3 py-1 rounded-full text-sm ${edition.current ? 'bg-[#002868] text-white' : 'bg-[#FFD700] text-[#002868]'}`}>
                            優勝
                          </span>
                        )}
                      </div>
                      <div className={`text-sm ${edition.current ? 'text-[#002868]' : 'opacity-75'}`}>
                        開催地: {edition.host}
                      </div>
                    </div>

                    <div className={`grid md:grid-cols-2 gap-4 mb-4 text-sm ${edition.current ? 'text-[#002868]' : ''}`}>
                      <div>
                        <span className="opacity-75">監督:</span> <span>{edition.manager}</span>
                      </div>
                      <div>
                        <span className="opacity-75">MVP:</span> <span>{edition.mvp}</span>
                      </div>
                      <div>
                        <span className="opacity-75">成績:</span> <span>{edition.record}</span>
                      </div>
                      <div>
                        <span className="opacity-75">決勝:</span> <span>{edition.finalScore}</span>
                      </div>
                    </div>

                    <div className={`${edition.current ? 'bg-white/50' : 'bg-white/10'} rounded-lg p-4 mb-4`}>
                      <div className={`text-sm mb-2 ${edition.current ? 'text-[#002868]' : 'opacity-75'}`}>
                        ハイライト
                      </div>
                      <div className={`${edition.current ? 'text-[#002868]' : ''}`}>
                        {edition.highlight}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edition.keyPlayers.map((player, pIdx) => (
                        <span 
                          key={pIdx} 
                          className={`px-3 py-1 rounded-full text-sm ${edition.current ? 'bg-white/50 text-[#002868]' : 'bg-white/10'}`}
                        >
                          {player}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  <div className="md:col-span-3 text-center">
                    {edition.current ? (
                      <div>
                        <div className="text-6xl mb-2">🏆</div>
                        <div className="text-[#002868]">最新優勝</div>
                      </div>
                    ) : edition.isJapanChampion ? (
                      <div>
                        <div className="text-6xl mb-2">🥇</div>
                        <div className="text-sm opacity-75">世界一</div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-4xl mb-2 opacity-50">⚾</div>
                        <div className="text-sm opacity-50">出場</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next WBC */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl mb-4">次回WBC 2026</h3>
            <p className="opacity-90 mb-6">
              2026年、日本は連覇を目指して再び世界の舞台へ。
            </p>
            <div className="text-4xl">🔜 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
