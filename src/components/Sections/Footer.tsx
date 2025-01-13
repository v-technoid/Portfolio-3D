import React, { useEffect, useRef, useState, useContext } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import toast from "react-hot-toast";
import IndiaTime from "../../hooks/time"; // Adjust path as needed
import { sendEmail } from "../../hooks/sendemail.ts"; // Adjust path as needed
import { ColorThemeContext } from "../../providers"; // Import your context
import Day from "../Elements/Day";
import audioFile from '../../assets/images/spacebar-click-keyboard-199448.mp3';
import {
  FaXTwitter,
  FaInstagram,
  FaMedium,
  FaMapLocationDot,
  FaAt,
  FaUpRightFromSquare,
  FaPhoneVolume,
  FaDownload,
  FaFileLines
} from "react-icons/fa6";
import RandomizedTextEffect from "../../hooks/text-randomised";
import AnimatedText from "../Elements/RiseUp";

const currentYear = new Date().getFullYear();
import "../../index.css"; // Assuming global styles include the font import

import BackToTopButton from "../Elements/BacktoTop";

const playAudio = () => {
    console.log("Audio function triggered");
    const audio = new Audio(audioFile);
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  };

// Contact Details Component
const ContactDetails: React.FC = () => {
  const [theme] = useContext(ColorThemeContext);
  return (
    <div
      className={`flex flex-col items-start space-y-4 px-4 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <div className="flex items-center space-x-2">
    <h2 className="text-2xl font-medium">Contact Details</h2>
    <FaPhoneVolume className="text-xl" />
  </div>
      <ul className="w-full">
        <li className="flex items-center space-x-2">
          <a
            href="tel:+19052994235"
            className="underline-hover-effect-alt !pb-0"
          >
            +91 9944033851
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <a
            href="mailto:bilal.ikr@outlook.com?subject=Hello%20there&body=Hi%2C%20I%20have%20a%20question%20about..."
            className="underline-hover-effect-alt !pb-0"
          >
            vishnutechnophile@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

// Social Links Component
const SocialLinks: React.FC = () => {
  const [theme] = useContext(ColorThemeContext);

  return (
    <div
      className={`flex flex-col items-start space-y-4 p-4 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <div className="flex items-center space-x-2">
    <h2 className="text-2xl font-medium">My Digital Space</h2>
    <FaUpRightFromSquare className="text-s" />
  </div>

      <ul className="w-full">
      <li className="flex items-center space-x-2 mb-1" onClick={playAudio}>
          <FaFileLines className="text-lg" />
          <a
            href="https://drive.google.com/file/d/1Kddf3r_AugP7_ZxZ3Fkjn-imK7UwzbbN/view?usp=sharing"
            className="underline-hover-effect-alt !pb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </li>
        <li className="flex items-center space-x-2 mb-1" onClick={playAudio}>
          <FaGithub className="text-lg" />
          <a
            href="https://github.com/v-technoid"
            className="underline-hover-effect-alt !pb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li className="flex items-center space-x-2 mb-1" onClick={playAudio}>
          <FaLinkedinIn className="text-lg" />
          <a
            href="https://www.linkedin.com/in/vishnuppriyan/"
            className="underline-hover-effect-alt !pb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center space-x-2 mb-1" onClick={playAudio}>
          <FaXTwitter className="text-lg" />
          <a
            href="https://x.com/vishnuppriyan_"
            className="underline-hover-effect-alt !pb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className="flex items-center space-x-2 mb-1" onClick={playAudio}>
          <FaInstagram className="text-lg" />
          <a
            href="https://www.instagram.com/vishnuppriyan_"
            className="underline-hover-effect-alt !pb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li className="flex items-center space-x-2 mb-1" onClick={playAudio}>
          <FaMedium className="text-lg" />
          <a
            href="https://medium.com/@vishnuppriyan_"
            className="underline-hover-effect-alt !pb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </li>
      </ul>
    </div>
  );
};

// Footer Form Component
const FooterForm: React.FC = () => {
  const [pending, setPending] = useState(false);
  const [theme] = useContext(ColorThemeContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setPending(true);

    try {
      const { data, error } = await sendEmail(formData);
      if (error) {
        toast.error(error);
      } else {
        toast.success("Email sent successfully!");
      }
    } catch (error) {
      toast.error("Failed to send email.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      className={`flex flex-col space-y-8 ${theme === "dark" ? "text-white bg-black" : "text-black bg-[#f5f5f5]"} overflow-x-hidden`}
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className={`input w-1/2 mr-4 p-3 border-2 ${theme === "dark" ? "border-[#f5f5f5] bg-black text-[#f5f5f5] placeholder-[#f5f5f5]" : "border-black bg-#f5f5f5 text-black placeholder-black"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5f5f5]`}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          name="senderEmail"
          className={`input w-1/2 ml-2 p-3 border-2 ${theme === "dark" ? "border-[#f5f5f5] bg-black text-[#f5f5f5] placeholder-[#f5f5f5]" : "border-black bg-#f5f5f5 text-black placeholder-black"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5f5f5]`}
          required
        />
      </div>
      <textarea
        placeholder="Your message"
        name="message"
        className={`input p-3 border-2 ${theme === "dark" ? "border-[#f5f5f5] bg-black text-[#f5f5f5] placeholder-[#f5f5f5]" : "border-black bg-#f5f5f5 text-black placeholder-black"} h-18 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5f5f5]`}
        required
      ></textarea>
      <div>
        <button
          type="submit"
          className={`group flex items-center justify-center gap-2 ml-2 mb-2 h-[3rem] w-[8rem] 
  ${
    theme === "dark"
      ? "bg-[#f5f5f5] text-black border-black hover:bg-black hover:text-[#f5f5f5] hover:border-white"
      : "bg-black text-white border-white hover:bg-[#f5f5f5] hover:text-black hover:border-black"
  } 
  border-2 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65`}
          disabled={pending}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

// Footer Content Component
const FooterContent: React.FC<{ scrollProgress: any }> = ({
  scrollProgress,
}) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  const [theme] = useContext(ColorThemeContext);

  return (
    <section style={{ y }} className="overflow-x-hidden mt-12 sm:mt-8">
      <div
        className={`text-[#f6f2e5] w-[100vw] ${theme === "dark" ? "text-white bg-black" : "text-black bg-[#f5f5f5]"} overflow-x-hidden`}
      >
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden">
          <div className="md:col-span-2 flex flex-col gap-4">
            <AnimatedText />
            {/* <h2 className="text-4xl font-medium mb-8">Let's talk</h2> */}
            <h3 className="text-xl font-normal mb-8">
              I am currently looking for internships or full-time opportunities.
              Feel free to reach out if you want to just talk!
            </h3>
            <FooterForm />
          </div>
          <div className="flex flex-col md:mx-auto justify-between">
            <ContactDetails />
            <SocialLinks />
            <div
              className={`flex flex-col items-start space-y-4 p-4 ${theme === "dark" ? "text-white bg-black" : "text-black bg-[#f5f5f5]"}`}
            >
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-medium">Locale</h2>
                <FaMapLocationDot className="text-2xl text-current" />
              </div>

              <ul className="w-full">
                <li className="flex items-center space-x-2">
                  <span>
                    <Day />
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>India, Tamil Nadu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <IndiaTime />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 flex flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row align-text-bottom">
              <div
                className="flex flex-col sm:flex-row mr-1"
                style={{ fontFamily: "'Doto', serif" }}
              >
                <div className="flex items-center space-x-2">
                  <FaAt className="text-s text-current" />{" "}
                  {/* Use `text-xs` for smaller size */}
                  <span className="ml-1">{currentYear}</span>{" "}
                  {/* Optional additional margin */}
                </div>
                <p
                  className="font-semibold ml-1"
                  id="contact"
                  style={{ fontFamily: "'Doto', serif" }}
                ></p>
                <RandomizedTextEffect
                  className="font-semibold ml-1"
                  id="contact"
                  style={{ fontFamily: "'Doto', serif" }}
                  text="VISHNUPPRIYAN PL"
                />
                . All rights reserved.
              </div>
            </div>
            <p style={{ fontFamily: "'Borel', italic" }}>Coded with ❤️</p>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const paths = useRef<(SVGTextPathElement | null)[]>([]);
  const [offset, setOffset] = useState(["start end", "end end"]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: offset as any,
  });

  return (
    <div ref={container}>
      <FooterContent scrollProgress={scrollYProgress} />
    </div>
  );
};

export default Footer;
