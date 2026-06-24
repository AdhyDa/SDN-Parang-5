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
  title: {
    default: "SDN Parang 5 — Sekolah Dasar Negeri Unggulan",
    template: "%s | SDN Parang 5",
  },
  description:
    "Website resmi SDN Parang 5. Sekolah dasar negeri dengan program unggulan pembentukan karakter, literasi, lingkungan, dan teknologi. Temukan informasi profil, guru, prestasi, dan pendaftaran siswa baru.",
  keywords: [
    "SDN Parang 5",
    "sekolah dasar",
    "pendidikan",
    "PPDB",
    "sekolah unggulan",
  ],
  openGraph: {
    title: "SDN Parang 5 — Sekolah Dasar Negeri Unggulan",
    description:
      "Website resmi SDN Parang 5. Sekolah dasar negeri dengan program unggulan pembentukan karakter.",
    type: "website",
    locale: "id_ID",
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
