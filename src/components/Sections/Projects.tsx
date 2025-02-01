import clsx from "clsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Carousel, Icon, projects, ProjectsPopup } from "@/components";
import { ProjectType } from "@/types";
import { useDisclosure, usePreviousValue } from "@/hooks";
import ScrollCard from "../ScrollCard/page.jsx";
import FlowingMenu from "../Elements/Flowing";
import TextPressure from "../Elements/TextPressure";
import RollingGallery from "../Elements/RollingGallery";
import {
  normalizeAngle,
  nextArrElement,
  prevArrElement,
  isAngleInAngleSpan,
} from "@/utility";

const demoItems = [
  {
    link: "#",
    text: "VITeach Learning App",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "AI Based SAAS Application",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Therapy Application with Reminders",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Deep Learning based Content Moderation in Social Media",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div style={{ position: "relative", height: "400px" }}>
        <TextPressure
          text="Projects"
          flex={true}
          alpha={true}
          stroke={true}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </section>
  );
}
