
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Menggunakan FormSpree dengan ID Anda
      const response = await fetch('https://formspree.io/f/mnngekzz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Pesan Baru dari Portfolio Fahri - ${formData.name}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Gagal mengirim pesan');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternatif: Menggunakan mailto langsung (fallback)
  const handleMailTo = () => {
    const subject = "Hubungan dari Portfolio Fahri";
    const body = `Halo Fahri,

Saya tertarik untuk berdiskusi dengan Anda.

Nama: ${formData.name || 'Pengunjung'}
Email: ${formData.email || 'Tidak diisi'}

Salam hangat,
${formData.name || 'Pengunjung'}`;
    
    window.location.href = `mailto:dadibroh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            💬 Mari Terhubung
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Tertarik berkolaborasi, diskusi teknologi, atau sekadar menyapa? 
            Saya selalu senang mendengar cerita dan ide-ide menarik!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">📧 Email Langsung</h3>
              <a 
                href="mailto:dadibroh@gmail.com" 
                className="text-xl text-white hover:text-yellow-400 transition-colors duration-300 break-all"
              >
                dadibroh@gmail.com
              </a>
              <p className="text-gray-400 mt-4">Email langsung ke inbox saya</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">💼 WhatsApp</h3>
              <a 
                href="https://wa.me/6289516323855?text=Halo%20Fahri,%20saya%20tertarik%20dengan%20portfolio%20Anda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-yellow-400 transition-colors duration-300"
              >
                +62 895-1632-3855
              </a>
              <p className="text-gray-400 mt-4">Chat langsung via WhatsApp</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">🐙 GitHub</h3>
              <a 
                href="https://github.com/PahriK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-yellow-400 transition-colors duration-300"
              >
                github.com/PahriK
              </a>
              <p className="text-gray-400 mt-4">Jelajahi proyek open source saya</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                ✅ Pesan terkirim! Saya akan membalasnya segera via email.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                ❌ Gagal mengirim pesan. Silakan coba lagi atau gunakan email langsung.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Ceritakan tentang proyek atau ide yang ingin Anda diskusikan..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '🔄 Mengirim...' : '🚀 Kirimkan dulu le!'}
                </button>
                
                <button
                  type="button"
                  onClick={handleMailTo}
                  className="px-6 py-4 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
                >
                  📧 Email Langsung
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Atau langsung email ke:{" "}
                <a 
                  href="mailto:dadibroh@gmail.com" 
                  className="text-yellow-400 hover:underline break-all"
                >
                  dadibroh@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
