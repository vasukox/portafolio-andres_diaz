import React from 'react';

function Skills() {
  const habilidades = [
    { nombre: "JavaScript / TypeScript", nivel: 90 },
    { nombre: "React.js / Next.js", nivel: 90 },
    { nombre: "CSS / Tailwind", nivel: 85 },
    { nombre: "Node.js / Express", nivel: 80 },
    { nombre: "Bases de Datos (SQL / NoSQL)", nivel: 75 },
    { nombre: "Git / GitHub", nivel: 85 },
    { nombre: "Cloud (AWS / Firebase)", nivel: 70 },
    { nombre: "Docker / DevOps", nivel: 65 },
    { nombre: "Python", nivel: 80 },
    { nombre: "Automatización con IA", nivel: 80 }
  ];

  const Icono = ({ nombre }) => {
    const baseProps = { className: "w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors", fill: "currentColor" };
    
    switch (nombre) {
      case 'JavaScript / TypeScript':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <text x="4" y="16" fontSize="7" fontFamily="ui-sans-serif, system-ui" fontWeight="700" fill="#ffffff">JS/TS</text>
          </svg>
        );
      case 'React.js / Next.js':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <circle cx="12" cy="12" r="2.5" />
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <ellipse cx="12" cy="12" rx="9" ry="3.5" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-60 12 12)" />
            </g>
          </svg>
        );
      case 'CSS / Tailwind':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M3 10c2.2-3.2 4.8-4.8 7.8-4.8 3 0 4.8 1.6 5.6 4.8-2.2-3.2-4.8-2.4-7.8-1.6C6.6 9.2 4.8 10 3 10zm0 7c2.2-3.2 4.8-4.8 7.8-4.8 3 0 4.8 1.6 5.6 4.8-2.2-3.2-4.8-2.4-7.8-1.6C6.6 16.2 4.8 17 3 17z" />
          </svg>
        );
      case 'Node.js / Express':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M12 2l8.66 5v10L12 22 3.34 17V7L12 2z" />
            <text x="7.5" y="15.5" fontSize="7" fontFamily="ui-sans-serif, system-ui" fontWeight="700" fill="#ffffff">Node</text>
          </svg>
        );
      case 'Bases de Datos (SQL / NoSQL)':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v6c0 1.7 4 3 9 3s9-1.3 9-3V5" />
            <path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
          </svg>
        );
      case 'Git / GitHub':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="12" cy="18" r="2" />
            <path d="M6 8v6c0 1.1.9 2 2 2h2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M18 8v6c0 1.1-.9 2-2 2h-2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        );
      case 'Cloud (AWS / Firebase)':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5-2A5 5 0 0 0 7 18z" />
          </svg>
        );
      case 'Docker / DevOps':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <rect x="3" y="10" width="4" height="4" />
            <rect x="9" y="10" width="4" height="4" />
            <rect x="15" y="10" width="4" height="4" />
            <rect x="9" y="4" width="4" height="4" />
            <rect x="9" y="16" width="4" height="4" />
          </svg>
        );
      case 'Python':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M12 2c-3 0-5 1-5 3v4h10V5c0-2-2-3-5-3zM7 11c-3 0-5 2-5 4s2 4 5 4h10c3 0 5-2 5-4s-2-4-5-4H7z" />
            <text x="6" y="17" fontSize="6" fontFamily="ui-sans-serif, system-ui" fontWeight="700" fill="#ffffff">Py</text>
          </svg>
        );
      case 'Automatización con IA':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="1.5" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M4 4h16v16H4z" />
          </svg>
        );
    }
  };

  return (
    <section id="habilidades" className="py-20 px-6 max-w-6xl mx-auto section-dark">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Habilidades
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Tecnologías y herramientas que domino
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {habilidades.map((skill, index) => (
          <div
            key={skill.nombre}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 cursor-default group">
                <Icono nombre={skill.nombre} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                {skill.nombre}
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mr-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                    style={{ width: `${skill.nivel}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 min-w-[3rem] text-right">
                  {skill.nivel}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;