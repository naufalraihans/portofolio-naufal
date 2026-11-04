# naufalrs.cv

Portfolio site — SvelteKit + adapter-static, built from the 8B fashion-brand template (see `plan/`).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → build/  (static, upload anywhere)
npm run preview  # preview the build
```

## Isi data

Semua konten ada di [`content/`](content/README.md) (JSON). Foto di `static/images/`.
Tidak perlu sentuh kode untuk mengisi.

## Deploy ke naufalrs.cv

`npm run build`, lalu upload isi `build/`.

- **Netlify**: build command `npm run build`, publish directory `build`
- **Vercel**: framework SvelteKit, output `build`
- **GitHub Pages**: push `build/` ke branch `gh-pages`, lalu Settings → Pages → Custom domain `naufalrs.cv`

DNS di registrar: `A` record ke IP host (atau `CNAME` ke host kalau pakai subdomain). SSL aktif otomatis setelah DNS propagates.

## Struktur

```
content/           data lo (JSON) — edit di sini
static/images/     foto lo
src/app.css        design system template (1:1 dari index.html)
src/lib/motion.js  motion kit template
src/lib/components/  satu komponen per section
scripts/           build-css.mjs (kalau template di-update)
```

Animasi scroll = CSS scroll-driven animation. Chrome/Edge 111+, Safari 16.2+, Firefox 113+.
Tanpa dukungan atau dengan reduced-motion, halaman tampil statis lengkap.
