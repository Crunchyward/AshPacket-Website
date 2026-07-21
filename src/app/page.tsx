import { DowntimeCalculator } from "@/components/downtime-calculator";
import { Header } from "@/components/header";
import {
  Builds,
  Contact,
  Faq,
  Footer,
  Hero,
  Plans,
  Process,
  Projects,
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
        <Plans />
        <Projects />
        <Builds />
        <DowntimeCalculator />
        <WhyUs />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
