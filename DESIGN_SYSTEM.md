# Sistema de Diseño - Qhapaq

## 🎨 Paleta de Colores

### Colores Principales

**Qhapaq Green** (Identidad de marca)
- `qhapaq-green-50` → `#f0fdf4`
- `qhapaq-green-500` → `#22c55e`
- `qhapaq-green-700` → `#15803d`
- `qhapaq-green-950` → `#052e16`

**Earth Tones** (Conexión con los Andes)
- `qhapaq-earth-300` → `#d9c9b0`
- `qhapaq-earth-500` → `#b5936b`
- `qhapaq-earth-700` → `#8c6a4f`

**Dark** (Modernidad y tecnología)
- `qhapaq-dark-900` → `#3d3d3d`
- `qhapaq-dark-950` → `#0a0a0a`
- `black` → `#000000`

### Uso de Colores

- **Primario**: Verde Qhapaq para CTAs, enlaces importantes, acentos
- **Secundario**: Tonos tierra para elementos complementarios
- **Fondo**: Negro y grises oscuros para contraste premium
- **Texto**: Blanco y grises claros para legibilidad

## 📝 Tipografía

### Fuentes

**Display/Headings**: Outfit
- Weights: 400, 500, 600, 700, 800, 900
- Uso: Títulos, headings, elementos destacados

**Body/Text**: Inter
- Weights: 300, 400, 500, 600, 700, 800, 900
- Uso: Párrafos, textos generales, UI

### Escala Tipográfica

```css
text-5xl → 3rem (48px)    /* Hero mobile */
text-6xl → 3.75rem (60px) /* Hero tablet */
text-7xl → 4.5rem (72px)  /* Hero desktop */
text-8xl → 6rem (96px)    /* Hero large */

text-4xl → 2.25rem (36px) /* Section headings */
text-3xl → 1.875rem (30px) /* Subsections */
text-2xl → 1.5rem (24px)   /* Card titles */
text-xl → 1.25rem (20px)   /* Large body */
text-lg → 1.125rem (18px)  /* Medium body */
text-base → 1rem (16px)    /* Body text */
text-sm → 0.875rem (14px)  /* Small text */
```

## 🎭 Efectos Visuales

### Glassmorphism

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Gradientes

**Gradient Text** (Títulos destacados)
```css
.gradient-text {
  background: linear-gradient(to right, #4ade80, #16a34a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Button Gradients**
```css
background: linear-gradient(to right, #16a34a, #15803d);
```

### Sombras

```css
/* Soft shadow */
shadow-lg → box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Glow effect */
shadow-qhapaq-green-500/50 → box-shadow con color verde
```

## 🔘 Componentes

### Botones

**Primary Button**
```html
<button class="btn-primary">
  Texto del botón
</button>
```
- Fondo: Gradiente verde
- Hover: Scale 1.05 + sombra verde
- Padding: px-8 py-4
- Border radius: rounded-full

**Secondary Button**
```html
<button class="btn-secondary">
  Texto del botón
</button>
```
- Fondo: Glass effect
- Border: Blanco/20
- Hover: Más opacidad

### Cards

**Feature Card**
```html
<div class="feature-card">
  <!-- Contenido -->
</div>
```
- Padding: p-8
- Border radius: rounded-2xl
- Hover: Translate -8px + sombra verde

### Inputs

```html
<input class="px-6 py-4 rounded-full bg-white/10 border border-white/20 
              focus:ring-2 focus:ring-qhapaq-green-500" />
```

## ✨ Animaciones

### Reveal on Scroll

```html
<div class="reveal-on-scroll">
  <!-- Se anima al hacer scroll -->
</div>
```

### Animaciones Disponibles

- `animate-fade-in` → Fade in suave
- `animate-slide-up` → Desliza desde abajo
- `animate-slide-down` → Desliza desde arriba
- `animate-scale-in` → Escala desde 0.9
- `animate-float` → Flotación continua
- `animate-pulse` → Pulso suave
- `animate-bounce` → Rebote

### Delays

```html
<div class="reveal-on-scroll" style="animation-delay: 0.2s;">
  <!-- Retraso de 200ms -->
</div>
```

## 📐 Espaciado

### Section Padding

```css
.section-padding {
  padding-top: 5rem;    /* 80px */
  padding-bottom: 5rem;
  
  @media (min-width: 768px) {
    padding-top: 8rem;    /* 128px */
    padding-bottom: 8rem;
  }
}
```

### Container

```css
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
}
```

## 📱 Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🎯 Principios de Diseño

1. **Minimalismo Premium**: Menos es más, cada elemento tiene propósito
2. **Jerarquía Visual Clara**: Guiar al usuario con tamaños y contrastes
3. **Espacios Generosos**: Breathing room para contenido
4. **Animaciones Sutiles**: Mejoran UX sin distraer
5. **Consistencia**: Mismo estilo en toda la aplicación
6. **Accesibilidad**: Contraste WCAG AA mínimo
7. **Performance**: Optimizar imágenes y animaciones

## 🌐 Inspiración

- **AllTrails**: Cards de rutas, mapas
- **Waze**: Alertas en tiempo real
- **Airbnb**: Diseño limpio, fotografía
- **Notion**: Minimalismo, tipografía
- **Tesla**: Premium, tecnológico
- **Gaia GPS**: Outdoor, aventura

## 📋 Checklist de Diseño

- [ ] Contraste de texto suficiente (4.5:1 mínimo)
- [ ] Touch targets mínimo 44x44px
- [ ] Animaciones respetan `prefers-reduced-motion`
- [ ] Imágenes con alt text
- [ ] Focus visible en elementos interactivos
- [ ] Responsive en todos los breakpoints
- [ ] Consistencia en espaciado
- [ ] Jerarquía tipográfica clara
