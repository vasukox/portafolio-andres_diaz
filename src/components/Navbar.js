import React from 'react';

function Navbar({ isDark, setIsDark, onNav }) {
  const navItems = [
    { label: "Sobre mí", id: "sobre-mi" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Experiencia", id: "experiencia" },
    { label: "Testimonios", id: "testimonios" },
    { label: "Contacto", id: "contacto" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-6 py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with animation */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNav('inicio')}>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"></div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gradient transition-all duration-300">Felipe Diaz</h1>
        </div>

        {/* Navigation links with enhanced animations */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => onNav(item.id)}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 font-medium relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Dark mode toggle with enhanced styling */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          <div className="w-5 h-5 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white to-gray-200 rounded-lg group-hover:rotate-180 transition-all duration-500"></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;