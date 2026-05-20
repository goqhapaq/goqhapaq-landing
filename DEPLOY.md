# Desplegar en Cloudflare Pages

## Pasos para desplegar:

### 1. Preparar el repositorio
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Subir a GitHub
- Crea un repositorio en GitHub
- Conecta tu repositorio local:
```bash
git remote add origin https://github.com/TU_USUARIO/goqhapaq-landing.git
git branch -M main
git push -u origin main
```

### 3. Configurar Cloudflare Pages

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Selecciona **Pages** en el menú lateral
3. Click en **Create a project**
4. Conecta tu cuenta de GitHub
5. Selecciona el repositorio `goqhapaq-landing`

### 4. Configuración de Build

Usa esta configuración:

- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`
- **Node version**: `18`

### 5. Variables de entorno (si las necesitas)
No se requieren variables de entorno para este proyecto.

### 6. Desplegar
Click en **Save and Deploy**

Tu sitio estará disponible en: `https://goqhapaq-landing.pages.dev`

## Despliegues automáticos
Cada vez que hagas push a `main`, Cloudflare Pages desplegará automáticamente.

## Dominio personalizado
Puedes agregar tu propio dominio en:
**Pages > Tu proyecto > Custom domains**
