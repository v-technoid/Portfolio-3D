import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["35deg", "-65deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <div
      className="sticky flex items-center justify-center h-full overflow-hidden px-4 md:px-0"
      ref={targetRef}
    >
      <motion.p
        style={{ skewX, x }}
        className="origin-bottom-left whitespace-nowrap text-4xl font-black uppercase text-gray-400 opacity-80 leading-[0.85] md:text-8xl md:leading-[0.85]"
      >
        MY EDUCATION JOURNEY
      </motion.p>
    </div>
  );
};

export default VelocityText;
