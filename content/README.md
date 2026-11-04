# content/

Folder ini tempat kamu input semua data portofolio.

## Cara pakai

1. Edit file JSON di folder ini (pakai editor apa saja).
2. Taruh foto/gambar di `images/` (atau subfolder di dalamnya).
3. Jalankan `npm run dev`, perubahan langsung kelihatan.
4. Deploy: `npm run build` → folder `build/` siap di-upload (Netlify/Vercel/GitHub Pages).

## File

| File | Isi |
|---|---|
| `site.json` | Nama, tagline, role, lokasi, email, sosmed, SEO |
| `hero.json` | 2 kata raksasa di layar pembuka + kalimat pendek |
| `about.json` | Statement besar + catatan tentang dirimu |
| `projects.json` | Proyek unggulan (4 kartu, seperti "looks") |
| `index.json` | Kategori proyek untuk bagian Index |
| `voice.json` | Testimoni/quote |
| `arrivals.json` | Bagian "Just landed", proyek terbaru |
| `palette.json` | 5 warna favorit + kegunaannya (teks bebas) |
| `experience.json` | Riwayat kerja (job) |
| `education.json` | Pendidikan |
| `research.json` | Riset/publikasi |
| `docs.json` | Dokumentasi/foto aktifitas, 6 foto Street Notebook |
| `faq.json` | Tanya-jawab |
| `contact.json` | Lokasi/kota + form |

## Foto

Taruh file di `static/images/`, lalu di JSON tulis path-nya, contoh:
`"image": "/images/proyek-saya.jpg"`

Foto ideal: rasio 4:5 (potret) untuk kartu proyek, 1:1 (kotak) untuk dokumentasi.
Selama field gambar kosong, kotak abu-abu placeholder yang tampil, situs tetap jalan.

## Aturan penting

- **Kata raksasa** (hero, palette, footer): bebas berapa huruf, sistem menghitung otomatis.
- Jangan pakai karakter `<` atau `>` di teks JSON.
- Kosongkan field yang belum ada isinya, bagian itu otomatis disembunyikan.
