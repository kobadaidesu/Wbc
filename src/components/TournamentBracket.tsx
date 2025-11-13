export function TournamentBracket() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002868]">トーナメント表</h2>
          <p className="text-gray-600">TOURNAMENT BRACKET</p>
        </div>

        {/* Pool Stage */}
        <div className="mb-16">
          <h3 className="text-2xl text-center mb-8 text-[#002868]">1次ラウンド（プール戦）</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Pool A */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-center mb-4 pb-4 border-b-2 border-gray-300">
                <h4 className="text-xl text-[#BC002D]">Pool A</h4>
                <p className="text-sm text-gray-600">台湾</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span>🇹🇼 台湾</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">1位</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span>🇨🇺 キューバ</span>
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">2位</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇮🇹 イタリア</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇳🇱 オランダ</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇵🇦 パナマ</span>
                </div>
              </div>
            </div>

            {/* Pool B - Japan's Pool */}
            <div className="bg-gradient-to-br from-[#002868] to-[#001f3f] text-white rounded-lg p-6 shadow-lg">
              <div className="text-center mb-4 pb-4 border-b-2 border-white/30">
                <h4 className="text-xl text-[#FFD700]">Pool B</h4>
                <p className="text-sm opacity-75">東京ドーム</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-[#FFD700] text-[#002868] rounded">
                  <span>🇯🇵 日本</span>
                  <span className="text-xs bg-[#BC002D] text-white px-2 py-1 rounded">1位</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/20 rounded">
                  <span>🇰🇷 韓国</span>
                  <span className="text-xs bg-white/30 px-2 py-1 rounded">2位</span>
                </div>
                <div className="p-2 bg-white/10 rounded opacity-60">
                  <span>🇦🇺 オーストラリア</span>
                </div>
                <div className="p-2 bg-white/10 rounded opacity-60">
                  <span>🇨🇿 チェコ</span>
                </div>
                <div className="p-2 bg-white/10 rounded opacity-60">
                  <span>🇨🇳 中国</span>
                </div>
              </div>
            </div>

            {/* Pool C */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-center mb-4 pb-4 border-b-2 border-gray-300">
                <h4 className="text-xl text-[#BC002D]">Pool C</h4>
                <p className="text-sm text-gray-600">アリゾナ</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span>🇺🇸 アメリカ</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">1位</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span>🇲🇽 メキシコ</span>
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">2位</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇨🇦 カナダ</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇨🇴 コロンビア</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇬🇧 イギリス</span>
                </div>
              </div>
            </div>

            {/* Pool D */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-center mb-4 pb-4 border-b-2 border-gray-300">
                <h4 className="text-xl text-[#BC002D]">Pool D</h4>
                <p className="text-sm text-gray-600">マイアミ</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span>🇻🇪 ベネズエラ</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">1位</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span>🇮🇱 イスラエル</span>
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">2位</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇵🇷 プエルトリコ</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇩🇴 ドミニカ</span>
                </div>
                <div className="p-2 bg-white rounded opacity-60">
                  <span>🇳🇮 ニカラグア</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knockout Stage */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl text-center mb-8 text-[#002868]">決勝トーナメント</h3>
          
          {/* Desktop Tournament Bracket */}
          <div className="hidden md:block">
            <div className="grid grid-cols-7 gap-4 items-center">
              {/* Quarterfinals */}
              <div className="col-span-2 space-y-12">
                <div className="text-center mb-2 text-sm text-gray-600">準々決勝</div>
                
                {/* Match 1 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 border-b-2 border-[#FFD700] bg-[#002868] text-white flex justify-between items-center">
                    <span>🇯🇵 日本</span>
                    <span className="text-xl">9</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <span>🇮🇹 イタリア</span>
                    <span className="text-xl text-gray-400">3</span>
                  </div>
                </div>

                {/* Match 2 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 flex justify-between items-center">
                    <span>🇻🇪 ベネズエラ</span>
                    <span className="text-xl text-gray-400">5</span>
                  </div>
                  <div className="p-3 border-t-2 border-green-500 flex justify-between items-center">
                    <span>🇺🇸 アメリカ</span>
                    <span className="text-xl">9</span>
                  </div>
                </div>

                {/* Match 3 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 flex justify-between items-center">
                    <span>🇵🇷 プエルトリコ</span>
                    <span className="text-xl text-gray-400">4</span>
                  </div>
                  <div className="p-3 border-t-2 border-green-500 flex justify-between items-center">
                    <span>🇲🇽 メキシコ</span>
                    <span className="text-xl">5</span>
                  </div>
                </div>

                {/* Match 4 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 flex justify-between items-center">
                    <span>🇦🇺 オーストラリア</span>
                    <span className="text-xl text-gray-400">3</span>
                  </div>
                  <div className="p-3 border-t-2 border-green-500 flex justify-between items-center">
                    <span>🇨🇺 キューバ</span>
                    <span className="text-xl">4</span>
                  </div>
                </div>
              </div>

              {/* Connector Lines */}
              <div className="flex items-center justify-center">
                <div className="w-full h-px bg-gray-300"></div>
              </div>

              {/* Semifinals */}
              <div className="col-span-2 space-y-32">
                <div className="text-center mb-2 text-sm text-gray-600">準決勝</div>
                
                {/* Semi 1 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-4 border-b-2 border-[#FFD700] bg-[#002868] text-white flex justify-between items-center">
                    <span className="text-lg">🇯🇵 日本</span>
                    <span className="text-2xl">6</span>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-lg">🇲🇽 メキシコ</span>
                    <span className="text-2xl text-gray-400">5</span>
                  </div>
                  <div className="bg-[#BC002D] text-white text-xs text-center py-1">
                    延長戦
                  </div>
                </div>

                {/* Semi 2 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-lg">🇨🇺 キューバ</span>
                    <span className="text-2xl text-gray-400">2</span>
                  </div>
                  <div className="p-4 border-t-2 border-green-500 flex justify-between items-center">
                    <span className="text-lg">🇺🇸 アメリカ</span>
                    <span className="text-2xl">14</span>
                  </div>
                </div>
              </div>

              {/* Connector Lines */}
              <div className="flex items-center justify-center">
                <div className="w-full h-px bg-gray-300"></div>
              </div>

              {/* Final */}
              <div className="col-span-2">
                <div className="text-center mb-6 text-sm text-gray-600">決勝</div>
                <div className="bg-gradient-to-br from-[#002868] to-[#001f3f] rounded-lg overflow-hidden shadow-2xl border-4 border-[#FFD700]">
                  <div className="p-6 border-b-4 border-[#FFD700] bg-[#FFD700] text-[#002868] flex justify-between items-center">
                    <div>
                      <div className="text-2xl">🇯🇵 日本</div>
                      <div className="text-xs mt-1">🏆 優勝</div>
                    </div>
                    <span className="text-4xl">3</span>
                  </div>
                  <div className="p-6 text-white flex justify-between items-center">
                    <div className="text-2xl">🇺🇸 アメリカ</div>
                    <span className="text-4xl opacity-50">2</span>
                  </div>
                  <div className="bg-[#BC002D] text-white text-center py-2">
                    <div className="text-sm">2023年3月22日</div>
                    <div className="text-xs opacity-75">ローンデポ・パーク（マイアミ）</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Tournament Bracket */}
          <div className="md:hidden space-y-8">
            {/* Quarterfinals Mobile */}
            <div>
              <h4 className="text-lg mb-4 text-[#002868] text-center">準々決勝</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 border-l-4 border-[#FFD700] flex justify-between items-center">
                    <span>🇯🇵 日本</span>
                    <span className="text-xl">9 - 3</span>
                    <span>🇮🇹 イタリア</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 border-l-4 border-green-500 flex justify-between items-center">
                    <span>🇻🇪 ベネズエラ</span>
                    <span className="text-xl">5 - 9</span>
                    <span>🇺🇸 アメリカ</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 border-l-4 border-green-500 flex justify-between items-center">
                    <span>🇵🇷 プエルトリコ</span>
                    <span className="text-xl">4 - 5</span>
                    <span>🇲🇽 メキシコ</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow">
                  <div className="p-3 border-l-4 border-green-500 flex justify-between items-center">
                    <span>🇦🇺 オーストラリア</span>
                    <span className="text-xl">3 - 4</span>
                    <span>🇨🇺 キューバ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Semifinals Mobile */}
            <div>
              <h4 className="text-lg mb-4 text-[#002868] text-center">準決勝</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border-l-4 border-[#FFD700]">
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-lg">🇯🇵 日本</span>
                    <span className="text-2xl">6 - 5</span>
                    <span className="text-lg">🇲🇽 メキシコ</span>
                  </div>
                  <div className="bg-[#BC002D] text-white text-xs text-center py-1">延長戦</div>
                </div>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border-l-4 border-green-500">
                  <div className="p-4 flex justify-between items-center">
                    <span className="text-lg">🇨🇺 キューバ</span>
                    <span className="text-2xl">2 - 14</span>
                    <span className="text-lg">🇺🇸 アメリカ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Mobile */}
            <div>
              <h4 className="text-lg mb-4 text-[#002868] text-center">🏆 決勝</h4>
              <div className="bg-gradient-to-br from-[#002868] to-[#001f3f] rounded-lg overflow-hidden shadow-2xl border-4 border-[#FFD700]">
                <div className="p-6 border-b-4 border-[#FFD700] bg-[#FFD700] text-[#002868]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl">🇯🇵 日本</span>
                    <span className="text-4xl">3</span>
                  </div>
                  <div className="text-xs">🏆 優勝</div>
                </div>
                <div className="p-6 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl">🇺🇸 アメリカ</span>
                    <span className="text-4xl opacity-50">2</span>
                  </div>
                </div>
                <div className="bg-[#BC002D] text-white text-center py-2">
                  <div className="text-sm">2023年3月22日</div>
                  <div className="text-xs opacity-75">ローンデポ・パーク（マイアミ）</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
