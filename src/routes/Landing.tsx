import {
  Hero,
  AboutSection,
  Projects,
  Contact,
  Skills,
  TapeSection
} from "@/components";

export function Landing() {
  return (
    <main>
      <Hero />
      <TapeSection />
      <AboutSection />
      {/* <Skills />
      <Projects /> */}
      {/* <Contact /> */}
    </main>
  );
}
