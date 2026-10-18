# Landing Page UMKM Dapur Manis Kue Kering Bandung

Landing page modern, ultra-fast loading, dan fully responsive untuk UMKM **Dapur Manis Artisan Home Bakery**, dibuat dengan presisi 100% berdasarkan desain Figma:
- **Figma Design URL**: [FGl4N3x8XNZkeLmEimE0TY - LP Kue Kering](https://www.figma.com/design/FGl4N3x8XNZkeLmEimE0TY/LP-Kue-Kering?node-id=0-1&p=f&t=fN6GJdLzaSKmrX2d-0)

---

## 📁 Struktur Folder & File

```text
lp-kue-kering/
├── index.html                   # File HTML utama (Semantic HTML5 & SEO-ready)
├── css/
│   └── style.css                # Styling kustom, variabel token warna Figma, & Google Fonts
├── js/
│   └── main.js                  # Interaktivitas ringan & event tracking klik WhatsApp
└── assets/
    ├── images/                  # Aset gambar beresolusi tinggi langsung dari Figma
    │   ├── logo.png             # Logo Dapur Manis
    │   ├── hero_kue_kering.png  # Foto hero toples nastar & kastengel
    │   ├── nastar_keju.png      # Foto produk Nastar Keju Lumer
    │   ├── kastengel_edam.png   # Foto produk Kastengel Keju Edam
    │   ├── putri_salju.png      # Produk Putri Salju Pandan
    │   ├── choco_cashew.png     # Produk Choco Cashew Cookies
    │   └── cta_banner.png       # Background banner CTA
    └── icons/                   # Vektor SVG bersih dari Figma
        ├── icon_whatsapp.svg
        ├── icon_fresh.svg
        ├── icon_star.svg
        ├── icon_quality.svg
        ├── icon_oven.svg
        ├── icon_delivery.svg
        ├── icon_leaf.svg
        ├── icon_cookie.svg
        ├── icon_arrow_right.svg
        ├── icon_cta_sparkle.svg
        ├── icon_instagram.svg
        ├── icon_location.svg
        ├── icon_clock.svg
        └── icon_contact.svg
```

---

## 🎯 Implementasi Kriteria & SEO (Sesuai Modul Pembelajaran)

### 1. Semantic HTML Structure (Modul SEO Hal. 2)
- Menggunakan tag semantik standar HTML5: `<header>`, `<main>`, `<section>`, `<article>`, `<blockquote>`, `<address>`, `<aside>`, dan `<footer>`.
- **Hierarki Header Ketat**:
  - **Tepat 1 tag `<h1>`** di Hero Section:  
    `<h1>Kue Kering Lezat & Renyah khas Dapur Manis - Resep Asli Rumahan</h1>`
  - **Tag `<h2>` untuk setiap judul Section**:
    - Section Keunggulan: `<h2>Mengapa Memilih Kue Kering Kami?</h2>`
    - Section Katalog: `<h2>Varian Kue Kering Favorit</h2>`
    - Section Testimoni: `<h2>Kata Mereka yang Sudah Mencoba</h2>`
    - Section CTA: `<h2>Siap Nikmati Kue Kering Renyah Hari Ini?</h2>`
  - Sub-judul dalam kartu menggunakan tag `<h3>` dan `<h4>`.

### 2. Image Optimization & SEO Gambar (Modul SEO Hal. 4-5)
- Setiap elemen `<img>` dilengkapi atribut `alt="..."` yang kaya kata kunci relevan (*kue kering*, *nastar keju lumer*, *kastengel keju edam*, *100% wijsman*, dll).
- Seluruh gambar produk di bawah layar (*below-the-fold*) memiliki atribut `loading="lazy"` untuk kecepatan loading maksimal.
- Gambar Hero Section menggunakan `loading="eager"` dan `fetchpriority="high"` untuk mengoptimalkan metrik LCP (*Largest Contentful Paint*).
- Setiap gambar memiliki dimensi `width` dan `height` eksplisit untuk mencegah CLS (*Cumulative Layout Shift*).

### 3. Clean Code & Fast Performance (Modul SEO Hal. 4 & Hal. 9)
- Kode rapi, terstruktur, dan terdokumentasi dengan komentar jelas.
- Desain 100% Mobile-Friendly & Responsive menggunakan utilitas Tailwind CSS.
- Dilengkapi **Sticky Mobile Bottom Bar** yang memudahkan pengunjung memesan langsung saat scrolling di layar ponsel.
- Tipografi Google Fonts: `Playfair Display` (Serif untuk heading bernuansa hangat & premium) dan `Plus Jakarta Sans` (Sans-serif modern untuk keterbacaan tinggi).

### 4. Interactive Elements & CTA WhatsApp (Modul SEO Hal. 3)
- Seluruh tombol CTA mengarah langsung ke WhatsApp API (`https://wa.me/6281234567890`) dengan pesan otomatis (*pre-filled message*) sesuai produk yang dipilih.
- Anchor text ringkas, jelas, dan deskriptif.

### 5. Meta Tags & Title Tag (Modul SEO Hal. 11)
- `<title>`: 52 karakter (standar 50-60 karakter) mengandung kata kunci utama:  
  `Kue Kering Lezat & Renyah Dapur Manis - UMKM Bandung`
- `<meta name="description">`: 157 karakter (standar 150-160 karakter):  
  `Pesan kue kering lezat & renyah Dapur Manis Bandung. Dibuat 100% butter Wijsman tanpa pengawet. Tersedia Nastar, Kastengel & Putri Salju. Kirim se-Indonesia!`
- Dilengkapi Open Graph meta tags, Canonical tag, Twitter Card, Favicon, dan Schema.org JSON-LD Structured Data untuk `Bakery` & `Product`.

---

## 🚀 Cara Menjalankan Secara Lokal

Buka file `index.html` langsung di browser, atau gunakan static web server lokal:

```bash
# Menggunakan Node.js npx serve
npx serve .

# Atau menggunakan Python 3
python -m http.server 3000
```

Buka URL `http://localhost:3000/` di browser.
