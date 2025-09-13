import React from 'react';

function Portfolio() {
  const proyectos = [
    {
      nombre: "Dashboard Analytics",
      desc: "Panel interactivo con React y gráficos en tiempo real.",
      img: "https://placehold.co/600x400",
      tecnologias: ["React", "Tailwind"],
      link: "#"
    },
    {
      nombre: "E-commerce UI",
      desc: "Interfaz de compras moderna con carrito de compras.",
      img: "https://placehold.co/600x400",
      tecnologias: ["React", "UI/UX"],
      link: "#"
    },
    {
      nombre: "Landing SaaS",
      desc: "Página de marketing optimizada para conversiones.",
      img: "https://placehold.co/600x400",
      tecnologias: ["Next.js", "Tailwind"],
      link: "#"
    },
    {
      nombre: "App Móvil",
      desc: "Aplicación móvil híbrida con React Native.",
      img: "https://placehold.co/600x400",
      tecnologias: ["React Native", "Firebase"],
      link: "#"
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto section-light">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Proyectos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Selección de trabajos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {proyectos.map((p, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-2 animate-fade-in-up"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">600 × 400</span>
            </div>
            <div className="p-8">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                {p.nombre}
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {p.tecnologias.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-2xl font-medium shadow-lg">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                Ver proyecto
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;