import React from 'react'
import Background from '../../assets/images/BWPROFILE.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["-400vh", "150vh"])
  
    return (
      <div className='h-screen overflow-hidden z-100'>
        <motion.div style={{y}} className='relative h-full opacity-70'>
          <img src={Background} fill alt="image" style={{objectFit: "cover"}}/>
        </motion.div>
      </div>
    )
}