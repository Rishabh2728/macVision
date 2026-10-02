import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MaviChatbot from "@/components/chat/MaviChatbot";
import { SCHOOL_INFO } from "@/data/schoolInfo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://macvision.org"),
  title: "MacVision Aviraj World School | Dharuhera",
  description:
    "MacVision Aviraj World School is a premier co-educational CBSE day-boarding institution on Rajpura Road, Dharuhera, Haryana. Fostering academic rigor, character, leadership, and modern experiential learning.",
  keywords: [
    "MacVision Aviraj World School",
    "Aviraj World School Dharuhera",
    "CBSE School Dharuhera",
    "Best school in Dharuhera Rewari",
    "Day boarding school Dharuhera Haryana",
    "MacVision Group of Schools",
  ],
  authors: [{ name: "MacVision Aviraj World School" }],
  openGraph: {
    title: "MacVision Aviraj World School | Dharuhera",
    description:
      "A forward-thinking learning environment where knowledge, creativity, discipline and character come together to help every child discover their potential.",
    url: "https://macvision.org",
    siteName: "MacVision Aviraj World School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/campus_dual_view.jpg",
        width: 1200,
        height: 630,
        alt: "MacVision Aviraj World School Campus",
      },
    ],
  },
  icons: {
    icon: "/images/logo_crest_raw.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SCHOOL_INFO.name,
    alternateName: "Aviraj World School",
    url: "https://macvision.org",
    logo: "https://macvision.org/images/logo.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rajpura Road, Alamgirpur",
      addressLocality: "Dharuhera",
      addressRegion: "Haryana",
      postalCode: "123106",
      addressCountry: "IN",
    },
    telephone: SCHOOL_INFO.phone,
    email: SCHOOL_INFO.email,
    sameAs: [SCHOOL_INFO.socials.facebook, SCHOOL_INFO.googleMapsUrl],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F6F7FA] text-[#101828] selection:bg-[#F4C62E] selection:text-[#102A63]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MaviChatbot />
      </body>
    </html>
  );
}
