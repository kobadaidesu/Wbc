import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1762257690450-51d5ec8b3ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHRlYW0lMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjI4OTczMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'WBC 2023 優勝'
  },
  {
    src: 'https://images.unsplash.com/photo-1761189464901-ad97229f1d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBsYXllciUyMGFjdGlvbnxlbnwxfHx8fDE3NjI5NzYxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '激闘のワンシーン'
  },
  {
    src: 'https://images.unsplash.com/photo-1519879709058-11082644047d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHBpdGNofGVufDF8fHx8MTc2MzAwNzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '魂のピッチング'
  },
  {
    src: 'https://images.unsplash.com/photo-1464701116432-f476204d6c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYyOTc1NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '満員のスタジアム'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[#002868]">感動の瞬間</h2>
          <p className="text-gray-600">MEMORABLE MOMENTS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer h-80"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#all-photos" className="inline-block border-2 border-[#002868] text-[#002868] px-8 py-3 rounded-full hover:bg-[#002868] hover:text-white transition-colors">
            もっと見る
          </a>
        </div>
      </div>
    </section>
  );
}
