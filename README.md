# DIJAWAINAJADULU

Platform digital untuk mempelajari, memahami, menulis, menerjemahkan, dan mendengarkan bahasa Jawa.

---

## Fitur Utama

- **Kamus Bahasa Jawa** — Terintegrasi dengan KBJI (Kamus Bahasa Jawa–Indonesia) resmi
- **Konversi Aksara Jawa** — Latin ↔ Aksara Jawa Unicode
- **Penerjemah** — Jawa ↔ Indonesia
- **Suara (TTS)** — Pelafalan bahasa Jawa
- **Riwayat & Favorit** — Tersimpan lokal di browser

---

## Setup Pengembangan

### 1. Clone & Install

```bash
git clone https://github.com/your-repo/dijawainajadulu.git
cd dijawainajadulu
npm install
```

### 2. Konfigurasi Environment

Salin template env dan isi nilai yang diperlukan:

```bash
cp .env.example .env.local
```

Buka `.env.local` dan isi variabel berikut:

| Variabel | Wajib | Keterangan |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | Ya | URL aplikasi (`http://localhost:3000` untuk lokal) |
| `KBJI_API_KEY` | Untuk kamus resmi | API key dari Balai Bahasa Provinsi DIY |
| `GOOGLE_TRANSLATE_API_KEY` | Opsional | Untuk fitur terjemah |
| `GOOGLE_TTS_API_KEY` | Opsional | Untuk fitur suara |

### 3. Jalankan Dev Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## Integrasi KBJI (Kamus Bahasa Jawa–Indonesia)

### Tentang KBJI

KBJI adalah kamus digital resmi bahasa Jawa yang dikelola oleh **Balai Bahasa Provinsi Daerah Istimewa Yogyakarta**, Kementerian Pendidikan Dasar dan Menengah.

- Website: [https://kbji.kemendikdasmen.go.id/](https://kbji.kemendikdasmen.go.id/)
- Email: balaibahasadiy@kemendikdasmen.go.id
- Telepon: +62274562070

### Cara Mendapatkan API Key KBJI

1. Buka [https://kbji.kemendikdasmen.go.id/](https://kbji.kemendikdasmen.go.id/)
2. Cari bagian **"API KBJI untuk Pengembang"** di halaman utama
3. Hubungi pengelola (email/telepon di atas) untuk mendaftar sebagai mitra pengembang
4. Setelah menerima API key, tambahkan ke `.env.local`:
   ```
   KBJI_API_KEY=api_key_anda_dari_kbji
   ```
5. Restart dev server — halaman `/kamus` akan langsung menggunakan data resmi KBJI

### Status Integrasi Saat Ini

| Komponen | Status |
|---|---|
| UI Halaman Kamus | ✅ Selesai |
| Server-side Adapter (`/api/kbji/search`) | ✅ Selesai |
| Endpoint Status (`/api/kbji/status`) | ✅ Selesai |
| Penanganan fallback tanpa API key | ✅ Selesai |
| Referensi sumber KBJI di footer halaman | ✅ Selesai |
| Koneksi ke API KBJI aktif | ⏳ Menunggu API key dari pengelola |
| Pengujian dengan data resmi | ⏳ Belum terverifikasi (belum ada API key) |

> **Catatan Penting**: Integrasi ini hanya akan mengambil data dari respons API KBJI yang nyata.
> Tidak ada data contoh yang disamarkan sebagai data resmi.
> Selama `KBJI_API_KEY` belum dikonfigurasi, halaman akan menampilkan
> pemberitahuan dan tautan langsung ke situs KBJI.

### Arsitektur Keamanan API Key

```
Browser → /api/kbji/search (Next.js Route Handler) → KBJI API
                ↑
         X-API-Key dikirim server-side
         TIDAK pernah dikirim ke browser
```

- API key hanya tersedia di `process.env.KBJI_API_KEY` (server)
- Tidak menggunakan `NEXT_PUBLIC_` prefix
- Tidak disimpan di localStorage atau client-side state

---

## Struktur Folder

```
src/
├── app/
│   ├── api/
│   │   ├── kamus/          # Kamus lokal (data internal)
│   │   └── kbji/
│   │       ├── search/     # Pencarian KBJI (server-side)
│   │       └── status/     # Status konfigurasi KBJI
│   └── kamus/              # Halaman /kamus
├── components/
│   └── kamus/
│       ├── KamusKbjiPage.tsx   # Halaman kamus utama (KBJI)
│       ├── KartuKbji.tsx       # Kartu hasil KBJI
│       └── PanelStatusKbji.tsx # Panel status & referensi
├── lib/
│   └── kbji/
│       ├── adapter.ts      # Adapter API KBJI (server-side only)
│       └── types.ts        # Type definitions KBJI
└── types/
    └── index.ts            # Type global aplikasi
```

---

## Skrip NPM

```bash
npm run dev      # Dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Jalankan production build
npm run lint     # ESLint check
npm run test     # Vitest unit tests
npm run typecheck # TypeScript check
```

---

## Lisensi

Proyek ini dibuat untuk tujuan edukasi. Data kamus bersumber dari KBJI yang dikelola
oleh Balai Bahasa Provinsi Daerah Istimewa Yogyakarta — Kemendikdasmen.
Penggunaan data mengikuti ketentuan yang ditetapkan oleh pengelola KBJI.
