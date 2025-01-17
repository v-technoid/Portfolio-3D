import clsx from "clsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Carousel, Icon, projects, ProjectsPopup } from "@/components";
import { ProjectType } from "@/types";
import { useDisclosure, usePreviousValue } from "@/hooks";
import {
  normalizeAngle,
  nextArrElement,
  prevArrElement,
  isAngleInAngleSpan,
} from "@/utility";
import TimelineAnimation from "../Elements/TimeEntry";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative select-none [&_*]:select-none flex items-center py-10"
    >
      <TimelineAnimation />
    </section>
  );
}
