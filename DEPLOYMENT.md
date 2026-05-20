# Guía de Despliegue - Qhapaq Landing

## 🚀 Opciones de Despliegue

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Despliega:
```bash
vercel
```

3. Para producción:
```bash
vercel --prod
```

### Netlify

1. Instala Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Despliega:
```bash
netlify deploy
```

3. Para producción:
```bash
netlify deploy --prod
```

### Cloudflare Pages

1. Conecta tu repositorio a Cloudflare Pages
2. Configuración de build:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `18` o superior

### Build Manual

```bash
# Instalar dependencias
npm install

# Build para producción
npm run build

# El output estará en /dist
```

## ⚙️ Variables de Entorno

Copia `.env.example` a `.env` y configura:

```bash
cp .env.example .env
```

Edita las variables según tu entorno.

## 🔧 Configuración de Dominio

1. Configura tu dominio en el proveedor de hosting
2. Actualiza `site` en `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://tudominio.com',
  // ...
});
```

## 📊 Performance

El sitio está optimizado para:
- ✅ Lighthouse Score 95+
- ✅ Core Web Vitals
- ✅ SEO optimizado
- ✅ Accesibilidad A11y

## 🔒 Seguridad

- Headers de seguridad configurados
- HTTPS obligatorio
- Sin dependencias vulnerables

## 📝 Checklist Pre-Deploy

- [ ] Actualizar URLs en `astro.config.mjs`
- [ ] Configurar variables de entorno
- [ ] Verificar meta tags y OG images
- [ ] Probar responsive en múltiples dispositivos
- [ ] Validar formularios
- [ ] Verificar enlaces de redes sociales
- [ ] Test de performance con Lighthouse
- [ ] Revisar consola del navegador (sin errores)

## 🐛 Troubleshooting

### Build falla
```bash
# Limpia caché y reinstala
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Estilos no se aplican
- Verifica que TailwindCSS esté instalado
- Revisa `tailwind.config.mjs`
- Asegúrate de importar `global.css`

## 📞 Soporte

Para problemas o preguntas, contacta al equipo de desarrollo.
