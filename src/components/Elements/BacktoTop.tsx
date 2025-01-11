import React, { useRef, useContext } from 'react';
import audioFile from '../../assets/images/spacebar-click-keyboard-199448.mp3';
import { ColorThemeContext } from "../../providers";


const BackToTopButton: React.FC = () => {
  // Reference to the audio element
  const [theme] = useContext(ColorThemeContext);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    // Play audio on click
    if (audioRef.current) {
      audioRef.current.play();
    }
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Audio Element (Place it inside the component) */}
      <audio ref={audioRef} src={audioFile} preload="auto" />

      <a
        href="#top"
        onClick={handleClick} // Handle click to play audio and scroll to top
        className="group font-normal flex flex-row items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:-translate-y-1 transition"
        >
          <path
            d="M6 11L12 5L18 11"
            stroke={theme === "dark" ? "#f5f5f5" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 19L12 13L18 19"
            stroke={theme === "dark" ? "#f5f5f5" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to the top
      </a>
    </>
  );
};

export default BackToTopButton;
