"use client";
import { TextGenerateEffect } from "../../hooks/text-generate-effects";

// Use '\n' for line breaks
const words = `
Hi there!👋 I am Vishnuppriyan, a Final Year Undergraduate Student, who is all about Networking, Technologies, and Graphic design. Like everyone around, I aspire to turn my dream starting with the phrase "One Day" into "Day One" in my life!

My passion for Artificial Intelligence brought me to the Vellore Institute of Technology. I always had a strong hanker on the way to the road of acquiring new skills in various fields. My projects span diverse domains, showcasing my ability to innovate and solve real-world challenges.

As a proactive leader, I’ve gained significant experience through roles such as Design Head of VITeach Club and Student Coordinator for multiple events, strengthening my organizational and collaborative skills.

I am currently honing my knowledge in cloud computing and AI while contributing to hackathons, community initiatives, and research projects. I aim to leverage my skills to drive meaningful technological advancements and excel in my career journey.
`;

export default function TextGenerateEffectDemo() {
  return (
    <div className="max-w-4xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-justify font-normal">
      <TextGenerateEffect words={words} />
    </div>
  );
}
