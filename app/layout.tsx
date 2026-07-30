import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sdnparang5.vercel.app"),
  title: {
    default: "SDN Parang 5 Kediri - Website Resmi Sekolah",
    template: "%s | SDN Parang 5 Kediri",
  },
  description:
    "Portal informasi resmi SD Negeri Parang 5, Kec. Banyakan, Kab. Kediri. Menampilkan profil sekolah, pengumuman, kegiatan siswa, dan galeri prestasi.",
  keywords: [
    "SDN Parang 5",
    "SDN Parang 5 Kediri",
    "SD Negeri Parang 5",
    "Sekolah Dasar Kediri",
    "SD Banyakan Kediri",
    "Pendidikan Desa Parang",
    "PPDB SDN Parang 5",
    "Sekolah Dasar Banyakan",
  ],
  authors: [{ name: "Adhyaksa Daudi" }],
  openGraph: {
    title: "SDN Parang 5 Kediri - Website Resmi Sekolah",
    description:
      "Mewujudkan generasi cerdas, berkarakter, dan berbudaya di Desa Parang, Kediri.",
    url: "https://sdnparang5.vercel.app",
    siteName: "SDN Parang 5 Kediri",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SDN Parang 5 Kediri",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LZO8t5Y5mUkG2Atixr4WGF_eNXPMmei7cUzhm0hRPkQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
