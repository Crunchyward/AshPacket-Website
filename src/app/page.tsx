import { Header } from "@/components/header";
import {
  About,
  Contact,
  Footer,
  Hero,
  Services,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
