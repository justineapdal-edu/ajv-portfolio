import { Hero } from "@/components/sections/Hero";
import { WorkSection } from "@/components/sections/WorkSection";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <Services />
      <About />
      <Contact />
    </>
  );
}
