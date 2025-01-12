import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Split the text into characters
    const myText = new SplitType(textRef.current, { types: "chars" });

    // Animate the characters
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 5,
      duration: 0.1,
      ease: "power1.out",
    });

    // Optional Cleanup (if needed)
    return () => {
      myText.revert(); // Revert SplitType changes when component unmounts
    };
  }, []);

  return (
    <div>
      <h2
        id="my-text"
        ref={textRef}
        className="text-6xl font-medium mb-8 overflow-hidden"
      >
        Let's Interface!
      </h2>
    </div>
  );
};

export default AnimatedText;
