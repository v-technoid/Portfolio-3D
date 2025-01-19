'use client'
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <main className={styles.main}>
    <div className={styles.sliderContainer}>
      <div ref={slider} className={styles.slider}>
        <p
          ref={firstText}
          className="text-7xl xs:text-8xl sm:text-[112px] md:text-9xl lg:text-[160px] xl:text-[208px] 2xl:text-[256px] tracking-tight font-righteous text-stroke text-transparent overflow-hidden mt-8 lg:mt-16 mb-20"
        >
         Code. Create. Innovate. Repeat.{'ㅤ·ㅤ'}Code. Create. Innovate. Repeat.{'ㅤ·ㅤ'}
        </p>
        <p
          ref={secondText}
          className="text-7xl xs:text-8xl sm:text-[112px] md:text-9xl lg:text-[160px] xl:text-[208px] 2xl:text-[256px] tracking-tight font-righteous text-stroke text-transparent overflow-hidden mt-8 lg:mt-16 mb-20"
        >
      Code. Create. Innovate. Repeat.{'ㅤ·ㅤ'}Code. Create. Innovate. Repeat.{'ㅤ·ㅤ'}
        </p>
      </div>
    </div>
  </main>
  
  )
}