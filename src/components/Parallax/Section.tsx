import Background from '../../assets/images/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-screen h-full flex flex-col justify-between'>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>True innovation and excellence in technology require patience and precision, even in a world racing towards instant results.</p>
            <p className='text-[5vw] uppercase mix-blend-difference' style={{ fontFamily: "'Rammetto One', serif" }}> VISHNUPPRIYAN PL</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <img src={Background} alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>
    )
}