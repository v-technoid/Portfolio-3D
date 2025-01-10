import React, { useContext } from "react";
import { ColorThemeContext } from "@/providers";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  const [theme] = useContext(ColorThemeContext);

  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p
        className={`text-center md:text-lg lg:text-xl mt-4 max-w-md mx-auto ${
          theme === "dark"
            ? "text-neutral-300" // Light text for dark theme
            : "text-neutral-700" // Dark text for light theme
        }`}
      >
        {description}
      </p>
    </>
  );
};
