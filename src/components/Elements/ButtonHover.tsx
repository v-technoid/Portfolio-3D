import AnimatedGradientText from "./AnimatedText"; // Ensure you have this component in place
import { cn } from "../../utility/animaback";
import { ColorThemeContext } from "../../providers/ColorThemeProvider";

const ButtonRotatingBackgroundGradient = () => {
  return (
      <button className="inline-flex items-center justify-center rounded-full px-8 py-2 text-sm font-medium">
        <AnimatedGradientText>
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#F84242FF] via-[#504F4FFF] to-[#75006DFF] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent animate-shimmer`
            )}
          >
            Download Resume
          </span>
        </AnimatedGradientText>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200%;
          }
          100% {
            background-position: 200%;
          }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 10s linear infinite;
        }
      `}</style>
      </button>
  );
};

export default ButtonRotatingBackgroundGradient;
