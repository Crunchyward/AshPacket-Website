import { Header } from "@/components/header";
import {
  Contact,
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
