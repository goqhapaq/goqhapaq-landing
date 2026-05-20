# Qhapaq Landing Page 🏔️

Landing page moderna y premium para **Qhapaq** - Plataforma inteligente de rutas y exploración para LATAM.

![Qhapaq](https://img.shields.io/badge/Status-Beta-green)
![Astro](https://img.shields.io/badge/Astro-4.5-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue)

## 🚀 Stack Tecnológico

- **Framework**: Astro 4.5
- **Styling**: TailwindCSS 3.4
- **Language**: TypeScript
- **Performance**: Optimizado para Lighthouse 95+
- **Fonts**: Inter + Outfit (Google Fonts)

## 🎨 Diseño

Inspirado en startups tecnológicas modernas como:
- **AllTrails** - Cards de rutas y exploración
- **Waze** - Alertas en tiempo real
- **Airbnb** - Diseño limpio y fotografía
- **Notion** - Minimalismo y tipografía
- **Tesla** - Premium y tecnológico
- **Gaia GPS** - Outdoor y aventura

### Paleta de Colores

- **Verdes oscuros** (`qhapaq-green`): Naturaleza y exploración
- **Tonos tierra** (`qhapaq-earth`): Conexión con los Andes
- **Negro/Grises** (`qhapaq-dark`): Modernidad y tecnología
- **Acentos tecnológicos**: Premium y futurista

Ver `DESIGN_SYSTEM.md` para detalles completos del sistema de diseño.

## 🛠️ Desarrollo

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd goqhapaq-landing

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env
```

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo (http://localhost:4321)
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview

# Verificar tipos TypeScript
npm run astro check
```

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Problem.astro
│   │   │   ├── About.astro
│   │   │   ├── Features.astro
│   │   │   ├── Adventure.astro
│   │   │   ├── Technology.astro
│   │   │   ├── Roadmap.astro
│   │   │   └── CTA.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       └── Card.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── DESIGN_SYSTEM.md
├── DEPLOYMENT.md
└── README.md
```

## 🎯 Características

- ✅ **Responsive Design** - Optimizado para móvil, tablet y desktop
- ✅ **SEO Optimizado** - Meta tags, Open Graph, sitemap
- ✅ **Performance** - Lighthouse 95+, lazy loading, optimización de assets
- ✅ **Animaciones Suaves** - Reveal on scroll, hover effects, microinteracciones
- ✅ **Accesibilidad** - WCAG AA, semántica HTML, ARIA labels
- ✅ **Código Limpio** - TypeScript, componentes reutilizables, arquitectura escalable
- ✅ **Glassmorphism** - Efectos modernos de vidrio y blur
- ✅ **Gradientes Premium** - Colores vibrantes y profesionales

## 📄 Secciones del Sitio

1. **Hero** - Presentación impactante con branding fuerte
2. **Problem** - Problemas que Qhapaq resuelve
3. **About** - Qué es Qhapaq y su propuesta de valor
4. **Features** - 12 características principales
5. **Adventure** - Enfoque en exploración y trekking
6. **Technology** - Stack técnico y arquitectura
7. **Roadmap** - Visión a futuro (Q2 2024 - Q3 2025)
8. **CTA** - Call to action para unirse al beta

## 🚀 Despliegue

Ver `DEPLOYMENT.md` para instrucciones detalladas de despliegue en:
- Vercel (Recomendado)
- Netlify
- Cloudflare Pages

### Quick Deploy

```bash
# Vercel
npm i -g vercel
vercel

# Netlify
npm i -g netlify-cli
netlify deploy
```

## 🎨 Sistema de Diseño

Consulta `DESIGN_SYSTEM.md` para:
- Paleta de colores completa
- Tipografía y escalas
- Componentes reutilizables
- Animaciones y efectos
- Principios de diseño
- Guidelines de accesibilidad

## 🔧 Personalización

### Cambiar Colores

Edita `tailwind.config.mjs`:

```js
colors: {
  qhapaq: {
    green: { /* tus colores */ },
    earth: { /* tus colores */ },
  }
}
```

### Agregar Secciones

1. Crea componente en `src/components/sections/`
2. Importa en `src/pages/index.astro`
3. Agrega al layout principal

### Modificar Animaciones

Edita `tailwind.config.mjs` en la sección `animation` y `keyframes`.

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Bundle Size**: < 200KB (gzipped)

## 🌐 Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 🤝 Contribución

Este es un proyecto privado. Para contribuir:

1. Crea un branch desde `main`
2. Realiza tus cambios
3. Asegúrate de que el build funcione (`npm run build`)
4. Crea un Pull Request

## � Notas Importantes

- **Imágenes**: Agrega imágenes optimizadas en `public/images/`
- **Fuentes**: Se cargan desde Google Fonts (Inter + Outfit)
- **Iconos**: SVG inline para mejor performance
- **Formularios**: El form de beta es un placeholder, conectar a backend

## 🐛 Troubleshooting

### Build falla
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Estilos no se aplican
- Verifica que TailwindCSS esté instalado
- Revisa imports en `global.css`
- Limpia caché del navegador

### TypeScript errors
```bash
npm run astro check
```

## 📞 Contacto

Para preguntas o soporte, contacta al equipo de desarrollo de Qhapaq.

## �📄 Licencia

Todos los derechos reservados - Qhapaq © 2024

---

**Hecho con ❤️ para exploradores**
