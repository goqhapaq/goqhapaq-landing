# 🚀 Quick Start - Qhapaq Landing

## Inicio Rápido en 3 Pasos

### 1️⃣ Instalar Dependencias

```bash
cd goqhapaq-landing
npm install
```

Esto instalará:
- Astro 4.5
- TailwindCSS 3.4
- TypeScript
- Todas las dependencias necesarias

**Tiempo estimado**: 1-2 minutos

---

### 2️⃣ Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:4321**

Verás algo como:
```
🚀 astro v4.5.0 started in 123ms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

**Hot Reload**: Los cambios se reflejan automáticamente

---

### 3️⃣ Explorar el Sitio

Abre tu navegador en `http://localhost:4321` y verás:

✅ **Hero Section** - Presentación impactante
✅ **Problem** - 6 problemas que resuelve Qhapaq
✅ **About** - Qué es la plataforma
✅ **Features** - 12 características principales
✅ **Adventure** - Enfoque en exploración
✅ **Technology** - Stack técnico
✅ **Roadmap** - Visión a futuro
✅ **CTA** - Formulario beta

---

## 🎨 Personalización Rápida

### Cambiar Colores

Edita `tailwind.config.mjs`:

```js
colors: {
  qhapaq: {
    green: {
      500: '#TU_COLOR', // Cambia este
    }
  }
}
```

### Modificar Textos

Edita los archivos en `src/components/sections/`:
- `Hero.astro` - Título principal
- `About.astro` - Descripción de Qhapaq
- `Features.astro` - Lista de características
- etc.

### Agregar Imágenes

1. Coloca imágenes en `public/images/`
2. Referencia en componentes: `/images/tu-imagen.jpg`
3. Usa WebP para mejor performance

---

## 📦 Build para Producción

```bash
npm run build
```

Esto genera:
- Archivos optimizados en `/dist`
- HTML minificado
- CSS optimizado
- JavaScript comprimido

**Preview del build**:
```bash
npm run preview
```

---

## 🚀 Deploy Rápido

### Vercel (Recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Producción
vercel --prod
```

### Netlify

```bash
# Instalar CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## 🔧 Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor desarrollo |
| `npm run build` | Build producción |
| `npm run preview` | Preview del build |
| `npm run astro check` | Verificar TypeScript |

---

## 📁 Archivos Importantes

```
📄 package.json          → Dependencias
📄 astro.config.mjs      → Config Astro
📄 tailwind.config.mjs   → Config TailwindCSS
📄 src/pages/index.astro → Página principal
📄 src/styles/global.css → Estilos globales
```

---

## 🎯 Próximos Pasos

### Antes de Lanzar

1. **Agregar Imágenes**
   - Hero background (paisaje andino)
   - Screenshots de la app
   - Fotos de aventuras

2. **Conectar Formulario**
   - Integrar con Mailchimp/ConvertKit
   - Configurar endpoint de API
   - Agregar validación

3. **Configurar Analytics**
   - Google Analytics 4
   - Hotjar/Clarity
   - Configurar eventos

4. **SEO Final**
   - Verificar meta tags
   - Generar sitemap
   - Configurar robots.txt

5. **Testing**
   - Mobile responsive
   - Cross-browser
   - Performance (Lighthouse)
   - Accesibilidad

### Después del Lanzar

- Monitor analytics
- A/B testing de CTAs
- Recoger feedback
- Iterar y mejorar

---

## 🐛 Problemas Comunes

### Error: Cannot find module 'astro'

**Solución**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Estilos no se aplican

**Solución**:
- Verifica que `global.css` esté importado en `BaseLayout.astro`
- Limpia caché del navegador (Cmd+Shift+R)
- Reinicia el servidor dev

### TypeScript errors

**Solución**:
```bash
npm run astro check
```

Los errores de tsconfig se resolverán al instalar dependencias.

---

## 📚 Documentación Completa

- **README.md** - Guía completa del proyecto
- **DESIGN_SYSTEM.md** - Sistema de diseño y estilos
- **DEPLOYMENT.md** - Guía de despliegue detallada
- **UX_RECOMMENDATIONS.md** - Mejoras y optimizaciones
- **PROJECT_SUMMARY.md** - Resumen ejecutivo

---

## 💡 Tips

**Desarrollo**
- Usa `console.log()` para debug
- Revisa la consola del navegador
- Hot reload es automático

**Performance**
- Optimiza imágenes antes de subir
- Usa WebP cuando sea posible
- Lazy load para imágenes below the fold

**SEO**
- Actualiza meta tags en `BaseLayout.astro`
- Agrega alt text a todas las imágenes
- Usa headings jerárquicos (h1 → h2 → h3)

---

## ✅ Checklist Pre-Launch

- [ ] `npm install` ejecutado
- [ ] Sitio funciona en localhost
- [ ] Imágenes agregadas y optimizadas
- [ ] Textos revisados (sin typos)
- [ ] Formulario conectado a backend
- [ ] Analytics configurado
- [ ] Meta tags actualizados
- [ ] Testing en mobile
- [ ] Testing en diferentes navegadores
- [ ] Performance > 90 en Lighthouse
- [ ] Build exitoso (`npm run build`)
- [ ] Deploy configurado

---

## 🎉 ¡Listo!

Tu landing page de Qhapaq está lista para:
- ✅ Desarrollo local
- ✅ Personalización
- ✅ Deploy a producción

**Siguiente paso**: `npm install && npm run dev`

---

**¿Necesitas ayuda?**
- Revisa la documentación en los archivos .md
- Consulta [Astro Docs](https://docs.astro.build)
- Revisa [TailwindCSS Docs](https://tailwindcss.com)

**¡Buena suerte con el lanzamiento de Qhapaq! 🏔️**
