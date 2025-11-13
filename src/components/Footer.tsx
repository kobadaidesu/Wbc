import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001f3f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4">侍ジャパン</h3>
            <p className="text-sm opacity-75">
              野球日本代表の公式サイト。WBC、オリンピック、プレミア12など、国際大会での活躍をお届けします。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4">メニュー</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#news" className="hover:opacity-100">ニュース</a></li>
              <li><a href="#schedule" className="hover:opacity-100">試合日程</a></li>
              <li><a href="#team" className="hover:opacity-100">選手名簿</a></li>
              <li><a href="#gallery" className="hover:opacity-100">ギャラリー</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4">インフォメーション</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#" className="hover:opacity-100">チケット情報</a></li>
              <li><a href="#" className="hover:opacity-100">グッズ</a></li>
              <li><a href="#" className="hover:opacity-100">アクセス</a></li>
              <li><a href="#" className="hover:opacity-100">お問い合わせ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">SNS</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#BC002D] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#BC002D] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#BC002D] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-[#BC002D] transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 SAMURAI JAPAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
