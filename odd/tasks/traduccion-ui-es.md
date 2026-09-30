# Traducción de la UI al español — nica-page

## Objetivo

Traducir al español todo el contenido visible del sitio NicaPage: capa de UI
(componentes, layouts, páginas), metadatos SEO y el idioma del documento.

## Problema / Por qué

El contenido editorial (21 archivos Markdown en `src/content/`) ya está en
español, pero toda la capa de presentación sigue en inglés. El sitio se lee
mezclado: tarjetas en español, botones y navegación en inglés. Además
`<html lang="en">` contradice el contenido y `og:locale` ya declara `es_NI`.

## Alcance (confirmado por el usuario)

Incluido:

- Cadenas visibles en pantalla de `src/pages/`, `src/layouts/`,
  `src/components/`.
- Etiquetas de datos en `src/data/links.ts`.
- Metadatos SEO en `src/metadata/metadata.ts` (`description`, `keywords`,
  `title`).
- `<html lang="en">` -> `<html lang="es">` en `src/layouts/Layout.astro`.
- `aria-labels`, `alt` y texto de fallback del `<video>`.
- Corrección del typo preexistente `"Ver mas"` -> `"Ver más"`.

Excluido explícitamente:

- Títulos `<title>` únicos por página (siguen siendo `"Nica-Page"` en las 6
  páginas; decisión de SEO futura, fuera de este alcance).
- Texto editorial de `src/content/` (ya está en español).

## Constraints — NO traducir

Estructural, debe permanecer byte-idéntico:

- Rutas y slugs: `/nica-page/`, `/nica-page/tourism/`, `id`, `url`,
  `moreInfoUrl`, `buttonLink`.
- Claves del schema Zod en `src/content.config.ts`: `title`, `description`,
  `image`, `imageAlt`, `attractions`, `name`, `url`, `moreInfoUrl`, `id`.
- Nombres de archivo, rutas de imagen, nombres de iconos (`lucide:*`,
  `simple-icons:*`).
- Nombres de clase CSS y tokens de Tailwind.
- `meta.author`, `meta.canonical`, `meta.image` (identidad, no UI).
- Todo el bloque `<script>` de `src/layouts/Discover.astro`.
- `dist/` (build output, se regenera).
- Topónimos propios que ya son correctos: Granada, León, Managua, Gallo
  Pinto, etc.

## Riesgo técnico identificado

`src/layouts/Featured.astro` usa `` label=`Explore ${label} ->` ``: la prop
`label` es simultáneamente texto del pill y prefijo del botón. Traducir la prop
en `index.astro` cambia ambos sitios de forma consistente. Verificar que no
exista otra comparación o condición que dependa del valor literal en inglés.

## Restricciones de delegación

- Ruta elegida: **delegated direct** (16 archivos no triviales -> trigger de
  writer). Fallback a direct inline si el runtime de sub-agentes no está
  disponible (limitación de tier observada en esta sesión).
- Modo TDD resuelto: **off**. El proyecto no define runner de tests
  (`package.json` no expone script `test`).
- Runner de verificación: `pnpm check && pnpm lint && pnpm format:check && pnpm build`.

## Checklist

- [x] T1 — `src/data/links.ts` + `src/metadata/metadata.ts` (9 labels + 3 campos SEO)
- [x] T2 — `src/layouts/Layout.astro` (`lang`, skip link)
- [x] T3 — Layouts: `Hero`, `Discover`, `Cities`, `Featured`, `Footer`
- [x] T4 — Componentes: `Navbar`, `CitiesCard`
- [x] T5 — Páginas: `index`, `tourism`, `history`, `culture`, `gastronomy`, `nature`
- [x] T6 — Verificación integral + grep de regresión de inglés residual

## Criterios de aceptación

- `pnpm check`, `pnpm lint`, `pnpm format:check`, `pnpm build` en verde.
- Grep de regresión sin coincidencias en inglés residual en
  `src/**/*.{astro,ts}` para las cadenas de UI.
- Ningún slug, ruta, clase, icono ni clave de schema alterado.
- Cada tarea cierra con un commit convencional.

## Pronóstico de entrega

~80 líneas cambiadas en 16 archivos. Por debajo del umbral de 400: entrega
simple, sin PRs encadenados. Estrategia de delivery: `single-pr` local
(commit en `develop`, sin remoto configurado).

## Progreso

- **Completado.** 16 archivos cambiados, +82/−80 líneas.
- Alcance real ejecutado: UI + SEO + `lang="es"` (confirmado por el usuario).
  Excluidos como se acordó: títulos `<title>` únicos por página.
- Cadena detectada durante la implementación y resuelta: el writer tradujo
  además 5 cadenas visibles no enumeradas en el plan (`Hero.astro` párrafo,
  `Footer.astro` párrafo y los `h3`/`aria-label` del pie). Todas caen dentro
  del alcance aprobado de "cadenas visibles en pantalla".
- `Featured.astro`: `` label=`Explore ${label} ->` `` migrado a
  ``label={`Explora ${label} ->`}`` — la interpolación dinámica se
  preservó; requirió convertir el template literal sin comillas en expresión
  entre llaves para que el literal con tilde sea válido.

### Verificación observada

| Comando             | Resultado                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm check`        | 0 errores, 0 warnings, 0 hints (25 archivos)                                                                                               |
| `pnpm lint`         | exit 0                                                                                                                                     |
| `pnpm format:check` | exit 0 (falló en 1ª corrida; `pnpm format` corrigió `Footer.astro` y `Hero.astro`)                                                         |
| `pnpm build`        | exit 0, 6 páginas generadas                                                                                                                |
| Grep de regresión   | sin inglés residual en UI (solo matchea el identificador `Discover`)                                                                       |
| Readback de `dist/` | `<html lang="es">`, nav en Inicio/Turismo/Gastronomía/Historia/Cultura/Naturaleza, footer y CTAs en español, rutas `/nica-page/*` intactas |

- WARN preexistente en build: `[astro-icon] Failed to load icons from "src/icons"` — no relacionado con este cambio.
- Pendiente: commit de unidad de trabajo.
