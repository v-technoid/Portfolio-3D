import {
  Hero,
  AboutSection,
  Projects,
  Contact,
  Skills,
  TapeSection,
} from "@/components";
import { useEffect, useState } from 'react'
import Preloader from '../Preloader/Preloader';
import { AnimatePresence } from 'framer-motion';
import { default as Footer } from '../components/Sections/Footer'; 

export function Landing() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main>
       <AnimatePresence mode='wait'>
       {isLoading && <Preloader />}
       </AnimatePresence>
      <Hero />
      <TapeSection />
      <AboutSection />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
