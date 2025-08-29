import React from 'react';

function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vasukox?tab=repositories' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andres-felipe-d%C3%ADaz-bernal-875073268/' },
    { name: 'Twitter', url: 'https://x.com/FelipeB63666943' },
    { name: 'Instagram', url: 'https://www.instagram.com/felipw.bl/' }
  ];

  const SocialIcon = ({ name }) => {
    const baseProps = { className: 'w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors', fill: 'currentColor', 'aria-hidden': true };
    switch (name) {
      case 'GitHub':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'Twitter':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'Instagram':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7z"/>
            <circle cx="12" cy="12" r="3.5"></circle>
            <circle cx="17.5" cy="6.5" r="1"></circle>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M4 4h16v16H4z"/>
          </svg>
        );
    }
  };

  return (
    <footer className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left animate-fade-in-up">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              © 2025 Felipe Diaz. Hecho con ❤️ y React.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Desarrollado con React, Tailwind CSS y mucho café ☕
            </p>
          </div>
          
          <div className="flex space-x-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                aria-label={social.name}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;