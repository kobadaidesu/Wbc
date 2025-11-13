import { Calendar, Trophy, Users, Plane, Star } from 'lucide-react';

const timelineEvents = [
  {
    date: '2023.01.12',
    title: 'メンバー発表',
    description: '栗山英樹監督が率いる侍ジャパンの30名のメンバーが発表される。大谷翔平、ダルビッシュ有ら豪華メンバーが集結。',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    date: '2023.02.28',
    title: '宮崎キャンプ開始',
    description: 'チームが宮崎に集結し、本格的な強化合宿がスタート。チームの一体感を醸成。',
    icon: Star,
    color: 'bg-green-500'
  },
  {
    date: '2023.03.06',
    title: '日本へ帰国',
    description: '宮崎でのキャンプを終え、いよいよ本戦が行われる東京へ。',
    icon: Plane,
    color: 'bg-purple-500'
  },
  {
    date: '2023.03.09',
    title: '初戦 vs 中国',
    description: '東京ドームで開幕戦。8-1で快勝し、幸先の良いスタートを切る。',
    icon: Calendar,
    color: 'bg-[#BC002D]',
    score: '8-1'
  },
  {
    date: '2023.03.10',
    title: '第2戦 vs 韓国',
    description: '因縁の対決で打線が爆発。13-4の圧勝で存在感を示す。',
    icon: Calendar,
    color: 'bg-[#BC002D]',
    score: '13-4'
  },
  {
    date: '2023.03.11',
    title: '第3戦 vs チェコ',
    description: '10-2で快勝。3連勝で準々決勝進出を決める。',
    icon: Calendar,
    color: 'bg-[#BC002D]',
    score: '10-2'
  },
  {
    date: '2023.03.12',
    title: '第4戦 vs オーストラリア',
    description: 'プール戦最終戦も7-1で勝利。4戦全勝で1位通過を果たす。',
    icon: Calendar,
    color: 'bg-[#BC002D]',
    score: '7-1'
  },
  {
    date: '2023.03.14',
    title: 'マイアミへ出発',
    description: '決勝トーナメントが行われるマイアミへ移動。世界一への決戦の地へ。',
    icon: Plane,
    color: 'bg-purple-500'
  },
  {
    date: '2023.03.16',
    title: '準々決勝 vs イタリア',
    description: '9-3で勝利し、ベスト4進出。吉田正尚が猛打賞の活躍。',
    icon: Calendar,
    color: 'bg-[#BC002D]',
    score: '9-3'
  },
  {
    date: '2023.03.21',
    title: '準決勝 vs メキシコ',
    description: '延長戦の激闘。村上宗隆の9回裏逆転サヨナラ2ランで劇的勝利！',
    icon: Trophy,
    color: 'bg-[#FFD700]',
    score: '6-5',
    highlight: true
  },
  {
    date: '2023.03.22',
    title: '決勝 vs アメリカ',
    description: '大谷翔平が最後のマウンドに立ち、同僚トラウトを三振に仕留め優勝！3-2で世界一に輝く。',
    icon: Trophy,
    color: 'bg-[#FFD700]',
    score: '3-2',
    highlight: true,
    championship: true
  },
  {
    date: '2023.03.23',
    title: '凱旋帰国',
    description: '優勝トロフィーを手に日本へ凱旋。成田空港には多くのファンが出迎える。',
    icon: Plane,
    color: 'bg-purple-500'
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002868]">優勝への道のり</h2>
          <p className="text-gray-600">CHAMPIONSHIP TIMELINE</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#002868] via-[#BC002D] to-[#FFD700]"></div>

            {/* Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className={`relative ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                  {/* Date Circle */}
                  <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#002868] flex items-center justify-center z-10 shadow-lg">
                    <event.icon className="w-6 h-6 text-[#002868]" />
                  </div>

                  {/* Content Card */}
                  <div className={`${event.championship ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] border-4 border-[#002868]' : event.highlight ? 'bg-gradient-to-br from-[#BC002D] to-[#9a0024] text-white' : 'bg-white'} rounded-xl shadow-lg p-6 ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'} hover:shadow-2xl transition-shadow`}>
                    
                    {/* Mobile Icon */}
                    <div className="md:hidden flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-sm ${event.championship ? 'text-[#002868]' : event.highlight ? 'text-white' : 'text-gray-500'}`}>
                        {event.date}
                      </div>
                    </div>

                    {/* Desktop Date */}
                    <div className={`hidden md:block text-sm mb-2 ${event.championship ? 'text-[#002868]' : event.highlight ? 'text-white' : 'text-gray-500'}`}>
                      {event.date}
                    </div>

                    {/* Title with Score */}
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className={`text-xl md:text-2xl ${event.championship ? 'text-[#002868]' : event.highlight ? 'text-white' : 'text-[#002868]'}`}>
                        {event.title}
                      </h3>
                      {event.score && (
                        <span className={`text-2xl ${event.championship ? 'text-[#002868]' : event.highlight ? 'text-[#FFD700]' : 'text-[#BC002D]'} px-3 py-1 rounded-full ${event.championship ? 'bg-white/50' : event.highlight ? 'bg-white/20' : 'bg-gray-100'}`}>
                          {event.score}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className={`${event.championship ? 'text-[#002868]' : event.highlight ? 'text-white' : 'text-gray-600'}`}>
                      {event.description}
                    </p>

                    {/* Championship Badge */}
                    {event.championship && (
                      <div className="mt-4 flex items-center gap-2 justify-center md:justify-start">
                        <Trophy className="w-5 h-5 text-[#002868]" />
                        <span className="text-[#002868]">🏆 世界一達成</span>
                        <Trophy className="w-5 h-5 text-[#002868]" />
                      </div>
                    )}
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
