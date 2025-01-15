import { HashLink } from "react-router-hash-link";
import { Suspense } from "react";
("use client");
import React, { useEffect, useRef, useState, useContext } from "react";
import { SectionHeader } from "../Elements/SectionHeader";
import { Card } from "../Elements/Card";
import { CardHeader } from "../Elements/CardHeader";
import { ToolboxItems } from "../Elements/ToolboxItems";
import { motion } from "framer-motion";
import { AboutMeCanvas, Loader } from "@/components";
import { ColorThemeContext } from "../../providers";
import "/Users/vishnuppriyanpl/Desktop/Portfolio Project/Portfolio/src/index.css";
import { RevealLinks } from "../Elements/RevealLinks";
import bookcover from "../../assets/images/bookcover.png";
import { ReactComponent as Nextjs } from "../../assets/images/Nextjs.svg";
import { ReactComponent as Type } from "../../assets/images/Type.svg";
import { ReactComponent as Tailwindcss } from "../../assets/images/Tailwindcss.svg";
import { ReactComponent as Html5 } from "../../assets/images/Html5.svg";
import { ReactComponent as Reacticon } from "../../assets/images/Reacticon.svg";
import { ReactComponent as Github } from "../../assets/images/Github.svg";
import mapImage from "../../assets/images/mapImage.png";
import memojiavatar4 from "../../assets/images/memojiavatar4.png";
import GridGlobe from "../Elements/GridGlobe";
import BackgroundLinesDemo from "../Elements/AboutContent";
import AnimatedText from "../Elements/TextReveal";
import TextGenerateEffectDemo from "../Elements/Text-Generate";
import CanvasRevealEffectDemo from "../Elements/canvasrevealeffect";
import BoxReveal from "../Elements/LineShadow";
const toolboxItems = [
  { title: "Next.js", iconType: Nextjs },
  { title: "TypeScript", iconType: Type },
  { title: "CSS Tailwind", iconType: Tailwindcss },
  { title: "HTML5", iconType: Html5 },
  { title: "React", iconType: Reacticon },
  { title: "GitHub", iconType: Github },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "50%", top: "5%" },
  { title: "Reading", emoji: "📚", left: "10%", top: "35%" },
  { title: "Fitness", emoji: "🧎‍♀️", left: "35%", top: "40%" },
  { title: "Music", emoji: "🎧", left: "70%", top: "45%" },
  { title: "Shopping", emoji: "👠👜", left: "5%", top: "65%" },
  { title: "Movies", emoji: "🍿", left: "45%", top: "70%" },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <>
      <section id="about-me">
        <RevealLinks />
        <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Software Engineer Intern @ Visteon
        </p>
        <TextGenerateEffectDemo />
        <div className="py-5 lg:py-5">
          <div className="container">
            <SectionHeader
              eyebrow="Artificial Intelligence | Machine Learning | Deep Learning"
              title="Exploring My Universe"
              description="Dive into my journey, discover my passions, and uncover what drives my creativity."
            />
            <div className="mt-20 flex flex-col gap-8">
              {/* Toolbox Section */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                  <CardHeader
                    title="My Reads"
                    description="Explore the books shaping my perspectives."
                  />
                  <div className="w-40 mx-auto mt-2 md:mt-0">
                    <img src={bookcover} alt="Book Cover" />
                  </div>
                </Card>
                <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
                  <CardHeader
                    title="My Toolbox"
                    description="Explore the technologies and tools I use to craft exceptional digital experiences."
                  />
                  <ToolboxItems
                    items={toolboxItems}
                    itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                  />
                  <ToolboxItems
                    items={toolboxItems}
                    className="mt-6"
                    itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                  />
                </Card>
              </div>
              {/* Hobbies Section */}
              <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                  <CardHeader
                    title="Beyond the Code"
                    description="Explore my interests and hobbies beyond the digital realm."
                    className="px-6 py-6"
                  />
                  <div className="relative flex-1" ref={constraintRef}>
                    {hobbies.map((hobby) => (
                      <motion.div
                        key={hobby.title}
                        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                        style={{ left: hobby.left, top: hobby.top }}
                        drag
                        dragConstraints={constraintRef}
                      >
                        <span className="font-medium text-gray-950">
                          {hobby.title}
                        </span>
                        <span>{hobby.emoji}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
                <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                  <CardHeader
                    title="Time Flexibility"
                    description="I'm very flexible with time zone communications."
                  />
                  {/* <img
                    src={mapImage}
                    alt="map"
                    className="h-full w-full object-cover object-left-top"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">
                        <img
                          src={memojiavatar4}
                          alt="profile image"
                          className="size-20 border-emerald-600"
                        />
                      </div>
                    </div>
                  </div> */}
                  <GridGlobe />
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-[3.5rem] font-bold"  style={{ fontFamily: "'Londrina Solid', serif" }}>
                MY <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#20BFD1FF] to-[#D37DE9FF] bg-[200%_auto] bg-clip-text text-4xl md:text-6xl xs:text-7xl font-extrabold text-transparent">APPROACH</span>
              </p>
            </BoxReveal>
          </div>
          <CanvasRevealEffectDemo />
        </div>
      </section>
    </>
  );
};
