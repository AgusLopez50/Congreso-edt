# Congreso EDT

Landing del Congreso EDT, construida con Next.js, TypeScript y Tailwind CSS.

## Empezar

Instalá las dependencias y levantá el entorno de desarrollo:

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador para ver el sitio.

La página principal está en `app/page.tsx` y se actualiza automáticamente mientras corre el servidor de desarrollo.

## Scripts

```bash
npm run dev    # Entorno de desarrollo
npm run build  # Build de producción
npm run start  # Servir el build de producción
```

## SEO y vistas previas al compartir

La configuración central está en `app/site.ts`: título, descripción, dominio canónico
(`https://congreso.directortecnico.com`) e imagen social. `app/layout.tsx` publica
Open Graph, Twitter Cards, iconos, directivas de indexación y datos estructurados
de la organización, el sitio y la página. Las rutas `/robots.txt` y `/sitemap.xml`
se generan desde los archivos de metadatos de Next.js.

El original de la imagen es `public/thumbnail.png` (1200×630). Se sirve una copia
JPEG optimizada en `public/thumbnail-social.jpg` para reducir el peso sin cambiar
el diseño. Si se cambia el original, hay que volver a exportar esa copia:

```bash
node -e "require('sharp')('public/thumbnail.png').jpeg({ quality: 85, mozjpeg: true }).toFile('public/thumbnail-social.jpg')"
```

Las aplicaciones de mensajería y redes sociales pueden conservar vistas previas
en caché. La web y la imagen deben ser públicas y accesibles sin autenticación.

## Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
