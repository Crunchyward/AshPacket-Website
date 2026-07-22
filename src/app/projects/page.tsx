import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Contact, Footer, Projects } from "@/components/sections";
import { siteUrl } from "@/lib/site";

const description =
  "Fixed-price IT projects from AshPacket LLC: server setup, migrations, security hardening, backup drills, and more.";

export const metadata: Metadata = {
  title: "One-time Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "One-time Projects | AshPacket LLC",
    description,
    type: "website",
    url: `${siteUrl}/projects`,
    siteName: "AshPacket LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "One-time Projects | AshPacket LLC",
    description,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-16 sm:pt-20">
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
