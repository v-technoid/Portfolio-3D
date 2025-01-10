import { useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  useEffect(() => {
    const myText = new SplitType("#animated-text");

    gsap.to(".char", {
      y: -10,
      stagger: 0.02,
      delay: 0.01,
      duration: 0,
    });

    // Clean up split elements when component unmounts
    return () => {
      myText.revert();
    };
  }, []);

  return (
    <p
      id="animated-text"
      className={`max-w-4xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-justify ${className}`}
    >
      {text.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
          <br />
        </span>
      ))}
    </p>
  );
};

export default AnimatedText;
