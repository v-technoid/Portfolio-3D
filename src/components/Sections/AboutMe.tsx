import { HashLink } from "react-router-hash-link";
import { Suspense } from "react";
("use client");
import { SectionHeader } from "../Elements/SectionHeader";
import { Card } from "../Elements/Card";
import { CardHeader } from "../Elements/CardHeader";
import { ToolboxItems } from "../Elements/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { AboutMeCanvas, Loader } from "@/components";
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

// export function AboutMe() {
//   return (
//     <section className="main-layout" id="about-me">
//       <RevealLinks/>
//       <div className="w-full px-6 2xs:px-8 lg:px-0 relative lg:h-screen rounded-3xl lg:rounded-none flex flex-col bg-main-reverse-1 dark:bg-main-1 text-default transition-colors duration-300 lg:bg-transparent lg:dark:bg-transparent">
//         <div className="max-h-[calc(100vh_-_400px)] min-h-[400px] lg:max-h-max lg:h-full lg:ml-[500px] lg:z-10 pt-8 pb-4 relative flex flex-col gap-4">
//           <h2 className="shrink-0 text-4xl 2xs:text-5xl sm:text-6xl uppercase font-righteous text-center lg:text-left">
//             About me
//           </h2>
//           <div className="shrink sm:text-lg grow space-y-2 overflow-auto pb-6 hide-scrollbar highlight-links">
//             <p>
//               Hello there, my name is Kirill Cherepanov, and I'm a junior full stack web developer
//               with an emphasis on front-end and MERN plus Typescript stack. Here is my{' '}
//               <HashLink smooth to="/#skills">
//                 full list of skills
//               </HashLink>{' '}
//               and{' '}
//               <HashLink smooth to="/#projects">
//                 projects
//               </HashLink>
//               .
//             </p>
//             <p>
//               I'm a junior (3rd year) at Belarussian State University studying theoretical mechanics
//               and mathematical modeling. Despite that I have quite a lot of time on my hands -
//               thanks to the very flexible curriculum - that I put into studying web development. It
//               is my entrepreneurial mindset and drive for constant improvement that propel me
//               forward and motivate me to take on increasingly challenging projects. Be it software,
//               data science, or mathematics - I enjoy learning all of it by solving related problems.
//             </p>
//             <p>
//               As a child, I was fascinated by all the technological advances around me, often
//               finding myself dreaming for hours about the endless possibilities that technology
//               provides. I've stayed true to that childhood dream, and even now the sincerest desire
//               I harbor is to observe the evolution of human technology and improve myself alongside
//               it. I'm very excited about what the future might bring to us, and I want to witness
//               and experience the most of that myself.
//             </p>
//             <p>
//               About 6 years ago, I decided to take a serious approach to studying English. Since
//               then, I have been constantly studying through periods of active and passive learning
//               via self-exposure to western media and book reading, all of which I grew accustomed to
//               and they became my favorite pastimes at this point. Although my lack of experience in
//               the speech department is inevitable, since I have not yet had enough opportunities to
//               communicate with native speakers, I still take great pride in my relatively abundant
//               vocabulary (for a non-native, that is) and a knack for writing English texts. I also
//               tried learning other languages, such as Japanese. For now, though, I decided to double
//               down on learning English to finally get rid of the remnants of my accent and improve
//               my ability to read more difficult books (e.g. Lovecraft).
//             </p>
//             <p>
//               Regarding my past times, I can't imagine myself without music. I love listening to
//               almost every kind of music - in fact I probably listen to it too much - ranging from
//               hard rock to classical music, and from country to technological to{' '}
//               <a target="_blank" href="https://en.wikipedia.org/wiki/A_cappella">
//                 A cappella
//               </a>
//               . I also enjoy playing rhythm games at times.
//             </p>
//             <p>
//               To keep myself in touch with the world I regularly read and listen to news articles,
//               as well as literature on many different fields of study such as economics, physics,
//               psychology, history, and many others.
//             </p>
//             <p>
//               I also enjoy reading - mainly novels, but not exclusively - having read over 60
//               volumes of them in 2021.
//             </p>
//           </div>
//           <div className="flex items-center gap-4 shrink">
//             <button>
//               <div className="scroll-down-mouse" />
//             </button>
//             <div className="uppercase font-bold shrink-0">Scroll text</div>
//           </div>
//         </div>

//         <Suspense
//           fallback={
//             <div className="h-[360px] lg:absolute lg:h-full lg:w-[500px] flex items-center justify-center">
//               <Loader />
//             </div>
//           }
//         >
//           <div className="h-[360px] lg:absolute lg:left-[calc(-100%_+_10em)] lg:w-[200%] lg:h-full">
//             <AboutMeCanvas />
//           </div>
//         </Suspense>
//       </div>
//     </section>
//   );
// }

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <>
    <section id="about-me">
      <RevealLinks />
      < p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
    Software Engineer Intern @ Visteon
      </p>

   <TextGenerateEffectDemo/>

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
                    title="My Zone"
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
                  <GridGlobe/>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
