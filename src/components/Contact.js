import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xovnjljj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 max-w-7xl mx-auto section-dark">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Contacto
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          ¿Hablamos?
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left side - Contact form with animations */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl animate-slide-in-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 dark:text-white font-bold mb-3">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 hover:shadow-lg"
              />
            </div>
            
            <div>
              <label className="block text-gray-900 dark:text-white font-bold mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 hover:shadow-lg"
              />
            </div>
            
            <div>
              <label className="block text-gray-900 dark:text-white font-bold mb-3">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                placeholder="Tu mensaje..."
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white resize-none transition-all duration-300 hover:shadow-lg"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl transition-all duration-500 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-700 hover:to-blue-700'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-2xl animate-fade-in-up">
                ¡Mensaje enviado exitosamente! Te responderé pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-2xl animate-fade-in-up">
                Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
              </div>
            )}
          </form>
        </div>

        {/* Right side - Information with animations */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl animate-slide-in-right">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Información
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Estoy disponible para proyectos freelance y posiciones full-time. 
            Escríbeme y coordinamos.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-6 h-6 border-2 border-purple-600 dark:border-purple-400 rounded-full group-hover:bg-purple-600 dark:group-hover:bg-purple-400 transition-all duration-300"></div>
              <a href="mailto:andresfelieodiaz@gmail.com" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
                andresfelieodiaz@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-6 h-6 border-2 border-purple-600 dark:border-purple-400 rounded-full group-hover:bg-purple-600 dark:group-hover:bg-purple-400 transition-all duration-300"></div>
              <span className="text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                Bogotá, Colombia
              </span>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-6 h-6 border-2 border-purple-600 dark:border-purple-400 rounded-full group-hover:bg-purple-600 dark:group-hover:bg-purple-400 transition-all duration-300"></div>
              <a href="https://portfolio-felipe-diaz.vercel.app/" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
                https://portfolio-felipe-diaz.vercel.app/
              </a>
            </div>
          </div>
          
          {/* Social media placeholders with enhanced styling */}
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/vasukox" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 cursor-pointer group flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/andres-felipe-diaz-bernal-875073268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 cursor-pointer group flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;