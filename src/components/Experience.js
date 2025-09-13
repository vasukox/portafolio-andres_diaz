import React from 'react';

function Experience() {
  const experiencias = [
    {
      empresa: "Hermoditex",
      puesto: "Desarrollador Full Stack",
      periodo: "2024 - Agosto 2025",
      descripcion: "Creación de interfaz para conectar el sistema interno con API de la DIAN para automatizar el envío de facturas electrónicas.",
      tecnologias: ["Python", "React", "JavaScript", "Git", "Node.js", "MySQL"]
    },
    {
      empresa: "Trabajo Independiente",
      puesto: "Desarrollador Full Stack Freelance",
      periodo: "2023",
      descripcion: "Desarrollo de soluciones software integrales para diversos sectores empresariales, incluyendo plataformas de e-commerce, sistemas de gestión para emprendimientos, integraciones con APIs de terceros y automatización de procesos contables. Especialización en crear experiencias digitales escalables y de alto rendimiento.",
      tecnologias: ["JavaScript", "PHP", "CSS", "MySQL", "Postman", "React", "Node.js"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-6 max-w-6xl mx-auto section-dark">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Experiencia
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Mi recorrido profesional
        </p>
      </div>

      <div className="relative">
        {/* Timeline line with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-blue-600 h-full rounded-full"></div>

        <div className="space-y-16">
          {experiencias.map((exp, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
              {/* Timeline dot with animation */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full z-10 shadow-lg animate-pulse-slow"></div>
              
              {/* Content card with enhanced styling */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-2">
                  <div className="text-gradient font-semibold mb-3 text-lg">
                    {exp.periodo}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">
                    {exp.puesto} · {exp.empresa}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tecnologias.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs rounded-2xl font-medium shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;