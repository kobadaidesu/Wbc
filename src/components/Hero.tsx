import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1464701116432-f476204d6c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYyOTc1NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Baseball Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002868]/90 to-[#BC002D]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="inline-block bg-[#FFD700] text-[#002868] px-6 py-2 rounded-full mb-4">
          🏆 世界一 優勝
        </div>
        <h2 className="text-6xl md:text-8xl mb-6">侍ジャパン</h2>
        <p className="text-2xl md:text-3xl mb-8">WORLD BASEBALL CLASSIC 2023</p>
        <p className="text-xl mb-4 max-w-2xl mx-auto">3大会ぶり3度目の世界一</p>
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">2023年3月、栗山ジャパンが世界の頂点に輝いた感動の軌跡</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#results" className="bg-[#BC002D] px-8 py-4 rounded-full hover:bg-[#9a0024] transition-colors">
            試合結果を見る
          </a>
          <a href="#team" className="bg-white text-[#002868] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
            優勝メンバー
          </a>
        </div>
      </div>
    </section>
  );
}
