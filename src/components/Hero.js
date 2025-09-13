import React from 'react';

function Hero({ onNav }) {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 pt-20 px-6 relative overflow-hidden section-dark"
    >
      {/* Background decorative elements with animations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/15 rounded-full blur-2xl animate-pulse-slow"></div>
      
      {/* Left side - Image with animation */}
      <div className="relative animate-slide-in-left">
        <div className="w-80 h-80 rounded-3xl relative shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 overflow-hidden">
          <img 
            src="/profile-photo.jpg" 
            alt="Foto de perfil" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center" style={{display: 'none'}}>
            <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">512 × 512</span>
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse-slow">
              Disponible
            </span>
          </div>
        </div>
      </div>

      {/* Right side - Content with animations */}
      <div className="max-w-2xl space-y-8 animate-slide-in-right">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            Hola, soy <span className="text-gradient">Felipe Diaz</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Ingeniero de Sistemas
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Transformo ideas en experiencias digitales impactantes y de alto rendimiento. Especialista en React, interfaces modernas y automatización con IA, siempre enfocado en usabilidad y escalabilidad.
          </p>
        </div>

        {/* Call to action buttons with enhanced animations */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button
            onClick={() => onNav('sobre-mi')}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-3xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 font-semibold text-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2"
          >
            Sobre mí
          </button>
          <button
            onClick={() => onNav('proyectos')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl hover:from-purple-700 hover:to-blue-700 transition-all duration-500 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 border-0"
          >
            Ver proyectos
          </button>
          <button
            onClick={() => onNav('contacto')}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-3xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 font-semibold text-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-2"
          >
            Contacto
          </button>
        </div>

        {/* Social icons with SVG icons */}
        <div className="flex gap-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 cursor-pointer group">
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
          <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 cursor-pointer group">
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 cursor-pointer group">
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;