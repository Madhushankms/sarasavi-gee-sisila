import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Abhaya_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const abhaya = Abhaya_Libre({
  subsets: ["sinhala"],
  weight: ["400", "600", "700"],
  variable: "--font-abhaya",
});

export const metadata: Metadata = {
  title: "Sarasavi Gee Sisila",
  description:
    "Where classical music, timeless artistry, and cultural heritage converge at a prestigious Sri Lankan university stage.",
  openGraph: {
    title: "Sarasavi Gee Sisila",
    type: "website",
    url: "https://sarasavi-gee-sisila-nextjs.web.app/og-image.jpg",
    images: [
      {
        url: "https://sarasavi-gee-sisila-nextjs.web.app/og-image.jpg",
        alt: "sarasavi gee sisila",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${abhaya.variable}   antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
