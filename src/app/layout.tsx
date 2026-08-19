import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { business } from "@/config/business";
import { generateLocalBusinessSchema } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "iElectrician | Licensed Electricians Across California",
    template: "%s | iElectrician",
  },
  description: business.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.domain,
    siteName: business.name,
    title: "iElectrician | Licensed Electricians Across California",
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "iElectrician | Licensed Electricians Across California",
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: business.domain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
