import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { basePath, siteUrl } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const description =
  "AshPacket LLC delivers managed IT, system administration, break/fix support, and custom PC & server builds for businesses that need reliable infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AshPacket LLC | Managed IT, Sysadmin & Custom Builds",
    template: "%s | AshPacket LLC",
  },
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
  openGraph: {
    title: "AshPacket LLC | Managed IT & Infrastructure",
    description,
    type: "website",
    url: siteUrl,
    siteName: "AshPacket LLC",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1024,
        height: 683,
        alt: "AshPacket LLC | Managed IT, Sysadmin & Custom Builds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AshPacket LLC | Managed IT & Infrastructure",
    description,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
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
  email: "support@ashpacket.net",
  image: `${siteUrl}/ashpacket-logo.png`,
  priceRange: "$$",
  knowsAbout: [
    "Managed service provider",
    "System administration",
    "IT break/fix support",
    "Custom PC builds",
    "Server builds",
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
      <body className={`${display.variable} ${mono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <div className="page-bg min-h-screen">{children}</div>
      </body>
    </html>
  );
}
