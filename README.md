<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Sanity_CMS-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<h1 align="center">🏫 Website Profil Resmi SDN Parang 5</h1>

<p align="center">
  <b>Sistem Informasi Sekolah Berbasis Headless CMS & Static Site Generation (SSG)</b><br />
  <i>Program Kerja Pengabdian Masyarakat KKN Universitas Negeri Malang di Desa Parang, Kediri</i>
</p>

<p align="center">
  <a href="https://sdnparang5.vercel.app/"><strong>🌐 Lihat Website Utama</strong></a> |
  <a href="#-fitur-utama"><strong>✨ Fitur Utama</strong></a> |
  <a href="#-sustainability--cms"><strong>📖 Panduan CMS Guru</strong></a>
</p>

---

## 📸 Preview & Mockup Tampilan

<p align="center">
  <!-- Ganti link gambar di bawah ini dengan URL foto mockup yang sudah kamu buat -->
  <img src="https://github.com/AdhyDa/SDN-Parang-5/blob/2d13fee468fdef95940ab476c581bd4f6f6aee17/Screenshot%202026-07-27%20151846.png" alt="SDN Parang 5 Website Mockup" width="100%">
</p>

---

## 💡 Latar Belakang & Dampak Sosial (Social Impact)

Sebelumnya, **SDN Parang 5** di Desa Parang, Kabupaten Kediri, hanya memiliki *micro-site* sederhana berbasis tautan singkat. Melalui program kerja KKN ini, dilakukan transformasi digital dengan membangun **website profil sekolah resmi** yang modern, cepat, dan mudah diakses.

### 🎯 Key Highlights:
* **_Zero-Cost Infrastructure_:** Website menggunakan arsitektur modern (*Jamstack*) yang di-hosting gratis di **Vercel**, sehingga sekolah tidak terbebankan biaya *hosting* bulanan.
* **Keberlanjutan (_Sustainability_):** Dilengkapi dengan **Sanity Headless CMS** yang intuitif. Guru dan staf sekolah dapat menambah berita, mengunggah foto kegiatan, dan mengubah pengumuman secara mandiri tanpa perlu memahami *coding*.
* **Aksesibilitas Tinggi:** Mengingat beragamnya perangkat warga, website dirancang super ringan dan *responsive* untuk jaringan internet bergerak.

---

## 🛠️ Tech Stack & Arsitektur

* **Frontend Framework:** [Next.js 14](https://nextjs.org/) (React Framework with App Router & SSG)
* **Content Management System (CMS):** [Sanity.io](https://www.sanity.io/) (Headless CMS)
* **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment & Hosting:** [Vercel](https://vercel.com/)

---

## ✨ Fitur Utama

- [x] **Hero & Profil Sekolah:** Visi, Misi, dan identitas resmi sekolah.
- [x] **Pengumuman Dynamic (Alert Banner):** Pengumuman penting yang dapat diaktifkan/dimatikan guru secara *real-time*.
- [x] **Management Berita & Artikel:** Sistem penerbitan artikel kegiatan sekolah berbasis Sanity Studio.
- [x] **Galeri Foto & Prestasi:** Etalase dokumentasi kegiatan siswa secara visual.
- [x] **Profil Tenaga Pendidik:** Daftar guru beserta pesan motivasi.
- [x] **Informasi Kontak & Peta:** Integrasi alamat fisik dan kontak cepat sekolah.

---

## 🚀 Panduan Jalankan Lokal (Local Development)

Jika ingin menjalankan proyek ini di komputer lokal:

1. **Clone Repositori**
   ```bash
   git clone [https://github.com/AdhyDa/SDN-Parang-5.git](https://github.com/AdhyDa/SDN-Parang-5.git)
   cd SDN-Parang-5
   ```

2. **Instal Dependensi*
   ```bash
   npm install
   ```
   
   3. **Konfigurasi Environment Variable**
   Buat file `.env.local` di akar proyek dan isi kredensial Sanity Anda:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
   
   4. **Jalankan Server Lokal**
   ```bash
   npm run dev
   ```
   
## 👨‍💻 Kontributor

Proyek ini dirancang dan dikembangkan oleh:

- **Adhyaksa Daudi** - _Lead Web Developer & Sie PDD UM-BBM Desa Parang_ ([@AdhyDa](https://www.google.com/search?q=https://github.com/AdhyDa))

_Dipersembahkan untuk civitas akademika SDN Parang 5 dan masyarakat Desa Parang, Kediri._ 
