export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">F</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Fahri's Portfolio
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Membangun masa depan dengan kode dan pendidikan
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-4">
              <a 
                href="#projects" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Contact
              </a>
              <a 
                href="https://github.com/fahri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Fahri's Portfolio 
              <span className="mx-2">•</span>
              Dibangun dengan <span className="text-yellow-400">❤️</span> + React & Tailwind
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
          </p>
        </div>
      </div>
    </footer>
  );
}
