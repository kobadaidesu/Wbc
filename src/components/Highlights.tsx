import { Play, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    id: 1,
    title: '【決勝】大谷翔平 vs マイク・トラウト 最後の対決',
    description: '9回裏、大谷が同僚トラウトを三振に仕留め優勝を決める。WBC史上最高の瞬間。',
    duration: '3:45',
    views: '28M',
    category: '決勝戦',
    thumbnail: 'https://images.unsplash.com/photo-1761189464901-ad97229f1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBsYXllciUyMGFjdGlvbnxlbnwxfHx8fDE3NjI5NzYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: 2,
    title: '【準決勝】村上宗隆 劇的サヨナラ2ラン',
    description: '9回裏、1点ビハインドの場面で村上が起死回生の逆転サヨナラ2ラン！',
    duration: '5:23',
    views: '24M',
    category: '準決勝',
    thumbnail: 'https://images.unsplash.com/photo-1519879709058-11082644047d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBpdGNofGVufDF8fHx8MTc2MzAwNzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true
  },
  {
    id: 3,
    title: '【決勝】大谷翔平 完璧なクローザー',
    description: '決勝9回、世界最高の打者たちを相手に完璧な投球を見せる大谷翔平。',
    duration: '4:12',
    views: '19M',
    category: '決勝戦',
    thumbnail: 'https://images.unsplash.com/photo-1762257690450-51d5ec8b3ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHRlYW0lMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjI4OTczMjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: '【1次R】吉田正尚 3連続長打',
    description: '韓国戦で吉田正尚が見せた圧倒的な打撃。3打席連続長打の快音。',
    duration: '2:58',
    views: '15M',
    category: '1次ラウンド',
    thumbnail: 'https://images.unsplash.com/photo-1464701116432-f476204d6c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYyOTc1NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: '【準々決勝】佐々木朗希 160km/h超の剛速球',
    description: 'イタリア戦で佐々木朗希が見せた圧巻の投球。最速163km/hを計測。',
    duration: '3:34',
    views: '12M',
    category: '準々決勝',
    thumbnail: 'https://images.unsplash.com/photo-1761189464901-ad97229f1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBsYXllciUyMGFjdGlvbnxlbnwxfHx8fDE3NjI5NzYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    title: '【全試合】侍ジャパン 全ホームラン集',
    description: '7試合で放った全本塁打を一挙公開。村上、岡本、大谷らの豪快な一発。',
    duration: '8:45',
    views: '18M',
    category: 'ハイライト集',
    thumbnail: 'https://images.unsplash.com/photo-1519879709058-11082644047d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBpdGNofGVufDF8fHx8MTc2MzAwNzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Highlights() {
  const featuredHighlights = highlights.filter(h => h.featured);
  const regularHighlights = highlights.filter(h => !h.featured);

  return (
    <section className="py-20 bg-[#001f3f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">ハイライト動画</h2>
          <p className="text-gray-400">HIGHLIGHTS</p>
        </div>

        {/* Featured Videos */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredHighlights.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden shadow-2xl mb-4">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#BC002D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Duration & Views */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm mb-2">
                      <Clock size={16} />
                      <span>{video.duration}</span>
                      <span className="ml-auto">{video.views} 回視聴</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FFD700] text-[#002868] px-3 py-1 rounded-full text-sm">
                      {video.category}
                    </span>
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-xl text-white mb-2 group-hover:text-[#FFD700] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Videos */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl text-white mb-8 px-2">その他のハイライト</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {regularHighlights.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative rounded-lg overflow-hidden shadow-lg mb-3">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[#BC002D] ml-0.5" fill="#BC002D" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2">
                    <span className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#BC002D] text-white px-2 py-0.5 rounded text-xs">
                      {video.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-white text-sm mb-1 group-hover:text-[#FFD700] transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {video.views} 回視聴
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a href="#all-videos" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#002868] transition-colors">
            すべての動画を見る
          </a>
        </div>
      </div>
    </section>
  );
}
