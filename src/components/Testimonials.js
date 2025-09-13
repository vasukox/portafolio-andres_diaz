import React, { useState } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const feedbacks = [
    {
      nombre: "Ovido Herrera",
      rol: "Ingeniero Senior de Sistemas",
      empresa: "Empresa de Tecnología",
      texto: "Felipe demostró una capacidad excepcional para resolver problemas complejos y entregar soluciones robustas. Su conocimiento técnico y habilidades de comunicación lo convierten en un desarrollador confiable y valioso para cualquier proyecto.",
      avatar: "👨‍💻"
    },
    {
      nombre: "Néstor Diaz",
      rol: "Scrum Master",
      empresa: "Consultora Ágil",
      texto: "Como Scrum Master, he trabajado con muchos desarrolladores, pero Felipe destaca por su compromiso con la calidad del código y su capacidad de adaptarse rápidamente a metodologías ágiles. Siempre entrega a tiempo y con excelente documentación.",
      avatar: "👨‍🏫"
    },
    {
      nombre: "Edgar Bernal",
      rol: "Ingeniero en Machine Learning",
      empresa: "Startup de IA",
      texto: "Felipe tiene una comprensión sólida de las mejores prácticas de desarrollo y una capacidad innata para integrar diferentes tecnologías. Su trabajo en automatización y APIs ha sido fundamental para nuestros proyectos de IA.",
      avatar: "🤖"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <section id="testimonios" className="py-20 px-6 max-w-4xl mx-auto section-light">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Testimonios
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Lo que dicen de mi trabajo
        </p>
      </div>

      <div className="relative animate-scale-in">
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-10 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">💬</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
            "{feedbacks[currentIndex].texto}"
          </p>
          
          <div className="mb-8">
            <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
              {feedbacks[currentIndex].nombre}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {feedbacks[currentIndex].rol}
            </p>
          </div>

          {/* Navigation dots with enhanced styling */}
          <div className="flex justify-center gap-3">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation arrows with enhanced styling */}
        <button
          onClick={prevTestimonial}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-110"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Testimonials;