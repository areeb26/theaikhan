import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import { FooterMotion } from "@/components/motion/FooterMotion";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Nav } from "@/components/hud/Nav";
import { JsonLd } from "@/components/seo/JsonLd";
import { personJsonLd } from "@/components/seo/person-schema";
import { pageTitle, site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle(),
  description: site.definition,
  openGraph: {
    title: pageTitle(),
    description: site.definition,
    url: site.url,
    siteName: site.brand,
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle(),
    description: site.definition,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-ink">
        <JsonLd data={personJsonLd()} />
        <MotionProvider>
          <Nav />
          <div className="flex flex-1 flex-col">{children}</div>
          <FooterMotion />
        </MotionProvider>
      </body>
    </html>
  );
}
