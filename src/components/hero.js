export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZiYWUwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative text-center z-10 px-4">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Halo, Saya Fahri
        </h1>
        
        <div className="text-xl md:text-2xl mb-8">
          <span className="typewriter">Pro Player Epep • Seniman Kelas Internasional </span>
        </div>
        
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
         Halo saya Fahri Kurniawan, selamat datang di Portfolio saya.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="group bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 flex items-center gap-2"
          >
            🚀 Jelajahi Proyek Saya
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a 
            href="#contact" 
            className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            💬 Mulai Percakapan
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
