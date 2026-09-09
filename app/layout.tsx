import type { Metadata } from "next";
import { site, siteStructuredData } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.organizer, url: site.organizerUrl }],
  creator: site.organizer,
  publisher: site.organizer,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: site.title,
    title: site.title,
    description: site.description,
    images: [{
      url: site.image,
      secureUrl: `${site.url}${site.image}`,
      width: 1200,
      height: 630,
      type: "image/jpeg",
      alt: site.imageAlt,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: site.image, alt: site.imageAlt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: { url: "/congreso-icon.png", type: "image/png" },
    apple: { url: "/congreso-icon.png", type: "image/png" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
