import { Header } from "@/components/header";
import {
  Contact,
  Faq,
  Footer,
  Hero,
  Process,
  Services,
  WhyUs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
