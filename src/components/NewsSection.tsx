import { Calendar, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const newsItems = [
  {
    id: 1,
    title: '日本が3大会ぶり世界一！決勝でアメリカを破る',
    date: '2023.03.22',
    category: '速報',
    image: 'https://images.unsplash.com/photo-1762257690450-51d5ec8b3ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHRlYW0lMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjI4OTczMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: 'WBC決勝、日本が3-2でアメリカを破り、3大会ぶり3度目の世界一に輝きました。'
  },
  {
    id: 2,
    title: '大谷翔平、大会MVPに輝く',
    date: '2023.03.22',
    category: '表彰',
    image: 'https://images.unsplash.com/photo-1761189464901-ad97229f1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBsYXllciUyMGFjdGlvbnxlbnwxfHx8fDE3NjI5NzYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: '大谷翔平選手が大会MVPを獲得。決勝では最後のマウンドに立ち、劇的な勝利を演出しました。'
  },
  {
    id: 3,
    title: '村上宗隆、準決勝で逆転サヨナラ2ラン',
    date: '2023.03.21',
    category: 'ハイライト',
    image: 'https://images.unsplash.com/photo-1519879709058-11082644047d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBpdGNofGVufDF8fHx8MTc2MzAwNzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    excerpt: '準決勝メキシコ戦、村上宗隆選手の9回裏逆転サヨナラ2ランで劇的勝利。'
  }
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002868]">優勝への軌跡</h2>
          <p className="text-gray-600">ROAD TO VICTORY</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((news) => (
            <article key={news.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#BC002D] text-white px-3 py-1 rounded-full text-sm">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <time>{news.date}</time>
                </div>
                <h3 className="text-xl mb-3 text-[#002868]">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="flex items-center text-[#BC002D] hover:gap-2 transition-all">
                  <span>詳しく見る</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#all-news" className="inline-block border-2 border-[#002868] text-[#002868] px-8 py-3 rounded-full hover:bg-[#002868] hover:text-white transition-colors">
            ニュース一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
}
