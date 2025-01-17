"use client";

import React, { useRef } from "react";
import { ChevronsRight, Github, Link } from "lucide-react";
import { TimelineContent } from "../../utility/framertime";
import VelocityText from "../Elements/VelocityText";

function TimelineAnimation() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

  return (
    <div className="px-4 space-y-10">
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        ref={heroRef}
      >
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <img
            src="https://chennai.vit.ac.in/wp-content/uploads/2020/03/campus-banner.jpg"
            className="w-full h-96 object-cover rounded-3xl"
            alt="Vellore Institute of Technology, Chennai"
          />
        </TimelineContent>
        <TimelineContent animationNum={1} timelineRef={heroRef}>
          <div className="space-y-4">
            <h1
              className="text-4xl leading-[110%] font-black"
              style={{ fontFamily: "'Rammetto One', serif" }}
            >
              Vellore Institute of Technology, Chennai
            </h1>
            <p className="text-xl leading-[110%]">
              Bachelor of Technology in Computer Science with Specialization in
              Artificial Intelligence and Machine Learning
              <br />
              <br />
              CGPA: 8.46
            </p>
            <a
              href="https://chennai.vit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center w-fit bg-gray-800 rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              <Link />
              Know more!
            </a>
          </div>
        </TimelineContent>
      </section>

      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        ref={aboutRef}
      >
        <TimelineContent animationNum={2} timelineRef={aboutRef}>
          <div className="space-y-4 text-right text-md">
            <h1 className="text-4xl leading-[110%]" style={{ fontFamily: "'Rammetto One', serif" }}>
              VIKAASA SCHOOL, MADURAI
            </h1>
            <p className="text-2xl leading-[110%]">
              Secondary (ICSE) & Higher Secondary Education (ISC)
            </p>
            <p className="text-xl leading-[110%]">
            Score: 91%
            </p>
            <a
              href="https://chennai.vit.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex gap-2 items-center w-fit bg-gray-800 rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              <Link />
              Know more!
            </a>
          </div>
        </TimelineContent>
        <TimelineContent animationNum={3} timelineRef={aboutRef}>
          <img
            src="https://www.lentlo.com/wp-content/uploads/2024/05/Vikaasa-School-Heritage-Campus-3.jpg"
            className="w-full h-96 object-cover rounded-3xl"
            alt="Vikaasa School"
          />
        </TimelineContent>
      </section>
    </div>
  );
}

export default TimelineAnimation;
