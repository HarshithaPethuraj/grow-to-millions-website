# Favicon and logo — manual replacements

The audit removed the broken favicon (`favicon.png` was a 1536×1536 JPEG mislabeled as PNG, 95 KB) and shipped an SVG fallback. To complete the favicon set:

1. **`favicon.ico`** — Generate a multi-resolution `.ico` containing 16×16, 32×32, 48×48 from your real logo. Use https://realfavicongenerator.net/ or https://favicon.io/. Drop into `public/favicon.ico`.

2. **`apple-touch-icon.png`** — Export your logo at 180×180 PNG (with a colored background, never transparent — iOS gives transparent icons a black halo). Drop into `public/apple-touch-icon.png`.

3. **`favicon.svg`** — Optional. The current placeholder (a green bar-chart silhouette) works; replace it with your real logo as SVG when available.

4. **`og-image.png`** — Create a 1200×630 social share image (used by `<meta property="og:image">`). Brand it: logo, headline, navy background. Drop into `public/og-image.png`.

5. **`logo.png`** in `src/assets/` is currently a 512×512 / 134 KB raster. If you can get the source SVG, replace `import logo from '../assets/logo.png'` in `Navbar.jsx` and `Footer.jsx` with `import logo from '../assets/logo.svg'`. Otherwise compress the PNG to ≤30 KB at 2× display size (~120×120 actual, since it renders at `h-14`).

None of these are required for the build to succeed — the SVG favicon is enough to remove the audit warning. They're polish items for production launch.
