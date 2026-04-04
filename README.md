# NicaPage - Guía Turística de Nicaragua

Sitio web informativo sobre la riqueza cultural, turística e histórica de Nicaragua. Proyecto desarrollado con HTML5, CSS3 y vanilla JavaScript, inspirado en el proyecto "Nicaragua Conócenos".

## Descripción

NicaPage es un sitio web multipágina que permite a los usuarios explorar diferentes aspectos de Nicaragua: historia, gastronomía, lugares turísticos, cultura y naturaleza. Cuenta con navegación fluida, diseño adaptable (mobile-first), theme toggle y contenido multimedia.

## Tecnologías

- **HTML5** — estructura semántica (`header`, `main`, `footer`, `nav`, `section`) con comentarios estructurales detallados
- **CSS3** — estilos puros sin pre-procesadores
- **CSS Custom Properties** — variables para colores, tipografía, espaciado y sombras
- **CSS-only hamburger menu** — navegación móvil sin JavaScript usando checkbox hack
- **SVG icons** — iconos vectoriales inline para mejor rendimiento
- **JavaScript (ES6+)** — interacciones, theme toggle y animations

## Características

- **Diseño responsive** — mobile-first, adaptado para mobile (< 768px), tablet (768px+) y desktop (1024px+)
- **Theme toggle** — modo claro/oscuro con persistencia en localStorage
- **Navegación accesible** — skip link, `aria-label`, `aria-labelledby`, menú keyboard-navigable
- **SEO básico** — meta tags, Open Graph, sitemap
- **Performance** — CSS preload, carga diferida de imágenes (`loading="lazy"`)
- **Animaciones CSS** — efectos de fade-in y transitions suaves
- **Acordeón nativo** — FAQs y secciones expansibles con `<details>`/`<summary>`

## Estructura del proyecto

```
.
├── index.html              # Página principal
├── html/
│   ├── turismo.html
│   ├── gastronomia.html
│   ├── historia.html
│   ├── historia-curiosidades.html
│   ├── cultura-festividades.html
│   ├── naturaleza-aventura.html
│   └── curiosidades.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── favicon/
│   ├── img/
│   ├── social/
│   └── video/
└── README.md
```

## Páginas del sitio

1. **Inicio** — hero con video, secciones informativas sobre Nicaragua
2. **Turismo** — destinos turísticos con tarjetas (Granada, León, Managua, etc.)
3. **Gastronomía** — platos típicos, bebidas y tradiciones culinarias
4. **Historia** — línea temporal de Nicaragua desde la época precolombina
5. **Historia y Curiosidades** — historia + datos curiosos fascinantes
6. **Cultura y Festividades** — tradiciones, bailes típicos y celebraciones
7. **Naturaleza y Aventura** — flora, fauna, áreas protegidas y deportes extremos

## Cómo ver el proyecto

No requiere instalación ni build. Abrir `index.html` directamente en el navegador.

- Opción 1: Abrir localmente el archivo `index.html`
- Opción 2: [Ver en Netlify](https://nicapage.netlify.app)

## Autor

**Bryan14Saenz**

- GitHub: [@Bryan14Saenz](https://github.com/Bryan14Saenz)
- Correo: 14bryansaenz@gmail.com