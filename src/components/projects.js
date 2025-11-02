export default function Projects() {
  const projects = [
    { 
      name: "GUMEL APP", 
      desc: "Platform manajemen nilai guru dengan analisis pembelajaran berbasis AI dan dashboard interaktif", 
      link: "#",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      icon: "📊"
    },
    { 
      name: "AI Generate Text", 
      desc: "Aplikasi generasi konten AI canggih dengan architecture PHP MVC dan integrasi multiple AI models", 
      link: "#",
      tech: ["PHP", "MVC", "OpenAI", "TensorFlow"],
      icon: "🤖"
    },
    { 
      name: "Kurikulum App", 
      desc: "Sistem manajemen kurikulum sekolah modern dengan fitur kolaborasi real-time dan analytics", 
      link: "#",
      tech: ["Vue.js", "Express", "PostgreSQL", "WebSocket"],
      icon: "🎓"
    },
    { 
      name: "EduTech Platform", 
      desc: "Learning Management System dengan virtual classroom, quiz interaktif, dan progress tracking", 
      link: "#",
      tech: ["React", "Firebase", "WebRTC", "Chart.js"],
      icon: "💻"
    },
    { 
      name: "Code Mentor AI", 
      desc: "Asisten AI untuk pemrograman yang memberikan feedback real-time dan personalized learning path", 
      link: "#",
      tech: ["Python", "FastAPI", "GPT-4", "Docker"],
      icon: "👨‍🏫"
    },
    { 
      name: "Smart Attendance", 
      desc: "Sistem presensi digital dengan facial recognition dan reporting analytics untuk institusi pendidikan", 
      link: "#",
      tech: ["Flutter", "Python", "OpenCV", "MySQL"],
      icon: "👁️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            🚀 Portfolio Karya
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Koleksi proyek yang menggabungkan teknologi modern dengan solusi pendidikan inovatif
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 border border-gray-700"
            >
              <div className="p-1 bg-gradient-to-r from-yellow-400 to-orange-500">
                <div className="bg-gray-800 p-1 rounded-t-2xl flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-center py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <button className="px-4 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300">
                    📖 Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Tertarik melihat lebih banyak?</p>
          <a 
            href="https://github.com/fahri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 font-semibold group"
          >
            <span>📂 Jelajahi GitHub Saya</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
