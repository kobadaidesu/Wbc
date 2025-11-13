import { Trophy, Target, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    label: '大会成績',
    value: '7戦全勝',
    description: '完全優勝'
  },
  {
    icon: Target,
    label: '得点',
    value: '56点',
    description: '大会トップクラス'
  },
  {
    icon: Users,
    label: 'チーム打率',
    value: '.282',
    description: '全30選手が貢献'
  },
  {
    icon: TrendingUp,
    label: 'チーム防御率',
    value: '2.23',
    description: '鉄壁の投手陣'
  }
];

const highlights = [
  {
    title: '決勝：vs アメリカ',
    score: '3-2',
    description: '大谷翔平が最後のマウンドに立ち、エンゼルスの同僚トラウトを三振に仕留め優勝を決める。',
    moment: '劇的な幕切れ'
  },
  {
    title: '準決勝：vs メキシコ',
    score: '6-5',
    description: '村上宗隆の9回裏逆転サヨナラ2ランで延長戦を制す。',
    moment: '奇跡の逆転劇'
  },
  {
    title: '準々決勝：vs イタリア',
    score: '9-3',
    description: '吉田正尚が猛打賞の活躍。投打がかみ合い快勝。',
    moment: '圧倒的な強さ'
  },
  {
    title: '1次R：vs 韓国',
    score: '13-4',
    description: '因縁の対決で圧勝。村上宗隆、大谷翔平らが本塁打を放つ。',
    moment: '打線爆発'
  }
];

export function Championship() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#002868] to-[#001f3f] text-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">大会成績</h2>
          <p className="opacity-90">TOURNAMENT STATISTICS</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
              <div className="text-sm opacity-75 mb-2">{stat.label}</div>
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-sm opacity-75">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">ハイライト</h2>
          <p className="opacity-90">KEY MOMENTS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-colors border-l-4 border-[#FFD700]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl">{highlight.title}</h3>
                <span className="text-3xl text-[#FFD700]">{highlight.score}</span>
              </div>
              <div className="inline-block bg-[#BC002D] px-3 py-1 rounded-full text-sm mb-4">
                {highlight.moment}
              </div>
              <p className="opacity-90">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
