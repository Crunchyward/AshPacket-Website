import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { basePath, siteUrl } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "AshPacket LLC provides system administration, break/fix support, and full-service IT consulting for businesses.";

export const metadata: Metadata = {
  title: "AshPacket LLC | IT Consulting & Support",
  description,
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
  openGraph: {
    title: "AshPacket LLC | IT Consulting",
    description,
    type: "website",
    url: siteUrl,
    siteName: "AshPacket LLC",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1024,
        height: 683,
        alt: "AshPacket LLC, IT Consulting & Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AshPacket LLC | IT Consulting",
    description,
    images: [`${siteUrl}/og-image.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AshPacket LLC",
  description,
  url: siteUrl,
  email: "hello@ashpacket.com",
  image: `${siteUrl}/ashpacket-logo.png`,
  priceRange: "$$",
  knowsAbout: [
    "System administration",
    "IT break/fix support",
    "Networking",
    "Cloud services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jetbrains.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <div className="page-bg min-h-screen">{children}</div>
      </body>
    </html>
  );
}
