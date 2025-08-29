import React from 'react';

function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6 max-w-7xl mx-auto section-light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Image with animation */}
        <div className="relative animate-slide-in-left">
          <div className="w-full h-96 rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 overflow-hidden">
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
              <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">800 × 520</span>
            </div>
          </div>
        </div>

        {/* Right side - Content with animations */}
        <div className="space-y-8 animate-slide-in-right">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in-up">
              Sobre mí
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Una breve introducción...
            </p>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Soy un desarrollador full‑stack apasionado por la tecnología, capaz de moverme con soltura entre el frontend, el backend, las bases de datos, el diseño UI/UX y hasta el despliegue en la nube.
Me encanta aprender nuevas herramientas y llevar las ideas a otro nivel, creando soluciones digitales que combinan creatividad y eficiencia.
Si hay algo que no sé, lo aprendo rápido y lo resuelvo.
          </p>

          {/* Stats cards with enhanced animations */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <p className="text-white text-sm font-medium mb-2">Años de experiencia</p>
              <p className="text-white text-3xl font-bold">1+</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform hover:-translate-y-2">
              <p className="text-white text-sm font-medium mb-2">Proyectos</p>
              <p className="text-white text-3xl font-bold">10+</p>
            </div>
          </div>

          {/* Download CV button with enhanced styling */}
          <button className="flex items-center gap-3 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 font-semibold group animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="w-5 h-5 border-2 border-purple-600 dark:border-purple-400 rounded-full group-hover:bg-purple-600 dark:group-hover:bg-purple-400 transition-all duration-300"></div>
            <span className="group-hover:translate-x-1 transition-transform duration-300">Descargar CV</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;