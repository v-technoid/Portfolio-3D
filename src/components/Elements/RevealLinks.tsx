import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ColorThemeContext } from "@/providers"; // Import theme context

export const RevealLinks = () => {
  const [theme] = useContext(ColorThemeContext); // Access theme context

  return (
    <section
      className={`grid place-content-center gap-2 px-8 py-5 text-black ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <FlipLink href="#">About Me</FlipLink>
    </section>
  );
};

// FlipLink component (unchanged)
const DURATION = 0.25;
const STAGGER = 0.025;

type FlipLinkProps = {
  children: string;
  href: string;
};

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
            style={{ whiteSpace: "pre" }} // Preserve spaces
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
            style={{ whiteSpace: "pre" }} // Preserve spaces
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
