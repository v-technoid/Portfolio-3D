'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Intro from './Intro.tsx';
import Description from './Description.tsx';
import Section from './Section.tsx';
export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Description />
      <Section />
    </main>
  );
}