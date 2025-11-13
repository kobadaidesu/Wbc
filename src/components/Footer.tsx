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

        {/* Disclaimer */}
        <div className="border-t border-white/20 pt-8 mb-6">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 max-w-4xl mx-auto">
            <p className="text-xs text-yellow-200 text-center mb-2">
              ⚠️ 免責事項
            </p>
            <p className="text-xs opacity-75 text-center">
              このサイトは<strong>非公式のファンサイト</strong>です。学習・ポートフォリオ目的で作成されました。
              WBC、侍ジャパンおよび選手名などの商標は各権利者に帰属します。
              公式情報は<a href="https://npb.jp" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FFD700]">NPB公式サイト</a>をご確認ください。
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm opacity-75">
          <p>&copy; 2025 非公式ファンサイト. このサイトは公式サイトではありません.</p>
        </div>
      </div>
    </footer>
  );
}
