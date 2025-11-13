import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#002868] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#BC002D] text-xl">⚾</span>
            </div>
            <div>
              <h1 className="text-xl">侍ジャパン</h1>
              <p className="text-xs opacity-90">SAMURAI JAPAN</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#news" className="hover:text-[#BC002D] transition-colors">ニュース</a>
            <a href="#schedule" className="hover:text-[#BC002D] transition-colors">試合日程</a>
            <a href="#team" className="hover:text-[#BC002D] transition-colors">選手名簿</a>
            <a href="#gallery" className="hover:text-[#BC002D] transition-colors">ギャラリー</a>
            <a href="#tickets" className="bg-[#BC002D] px-6 py-2 rounded-full hover:bg-[#9a0024] transition-colors">チケット</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="#news" className="block hover:text-[#BC002D] transition-colors">ニュース</a>
            <a href="#schedule" className="block hover:text-[#BC002D] transition-colors">試合日程</a>
            <a href="#team" className="block hover:text-[#BC002D] transition-colors">選手名簿</a>
            <a href="#gallery" className="block hover:text-[#BC002D] transition-colors">ギャラリー</a>
            <a href="#tickets" className="block bg-[#BC002D] px-6 py-2 rounded-full hover:bg-[#9a0024] transition-colors text-center">チケット</a>
          </nav>
        )}
      </div>
    </header>
  );
}
