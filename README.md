# 🚀 Mi Portafolio Personal

Un portafolio web moderno y responsive desarrollado con React y Tailwind CSS.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con modo oscuro/claro
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- 🎯 **Navegación Suave**: Scroll suave entre secciones
- 🌙 **Modo Oscuro**: Toggle automático con persistencia en localStorage
- 📝 **Formulario de Contacto**: Funcional con validación
- 🎭 **Animaciones**: Transiciones suaves y efectos hover

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd mi-portafolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
mi-portafolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Portfolio.js
│   │   ├── Experience.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Personalización

### Cambiar Información Personal

1. **Hero Section** (`src/components/Hero.js`)
   - Actualiza tu nombre y título profesional
   - Cambia la imagen de perfil

2. **About Section** (`src/components/About.js`)
   - Modifica la descripción personal
   - Ajusta tus valores y experiencia

3. **Skills Section** (`src/components/Skills.js`)
   - Agrega o modifica tus habilidades
   - Ajusta los niveles de experiencia

4. **Portfolio Section** (`src/components/Portfolio.js`)
   - Incluye tus proyectos reales
   - Agrega enlaces a repositorios o demos

5. **Experience Section** (`src/components/Experience.js`)
   - Actualiza tu historial laboral
   - Incluye tecnologías utilizadas

6. **Contact Section** (`src/components/Contact.js`)
   - Actualiza información de contacto
   - Configura el envío del formulario

### Cambiar Colores y Estilos

- **Colores principales**: Modifica `tailwind.config.js`
- **Fuentes**: Cambia en `src/index.css`
- **Componentes**: Edita las clases de Tailwind en cada componente

## 🚀 Despliegue

### Netlify (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `build`

### Vercel

1. Conecta tu repositorio a Vercel
2. Configura automáticamente para React
3. Despliega con un clic

### GitHub Pages

1. Instala `gh-pages`: `npm install --save-dev gh-pages`
2. Agrega scripts al `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Ejecuta: `npm run deploy`

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de webpack (irreversible)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: tuemail@ejemplo.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tuperfil)
- **GitHub**: [@tusuario](https://github.com/tusuario)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
