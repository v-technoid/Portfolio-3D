import { memo, MouseEventHandler } from "react";
import { HashLink } from "react-router-hash-link";
import deepEqual from "deep-equal";
import clickSound from "../../assets/images/spacebar-click-keyboard-199448.mp3"; // Adjust the path to your sound file

type NavigationLinksProps = {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  classNames?: {
    list?: string;
    item?: string;
    link?: string;
  };
};

export function NavigationLinks_({ onClick, classNames }: NavigationLinksProps) {
  const playClickSound = () => {
    const audio = new Audio(clickSound); // Create a new audio instance
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  };

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    playClickSound(); // Play the sound
    if (onClick) {
      onClick(event); // Call the original onClick handler if provided
    }
  };

  return (
    <ul className={classNames?.list}>
      <li className={classNames?.item}>
        <HashLink
          className={classNames?.link}
          onClick={handleClick}
          smooth
          to="/#top"
        >
          Home
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink
          className={classNames?.link}
          onClick={handleClick}
          smooth
          to="/#about-me"
        >
          About Me
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink
          className={classNames?.link}
          onClick={handleClick}
          smooth
          to="/#projects"
        >
          Projects
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink
          className={classNames?.link}
          onClick={handleClick}
          smooth
          to="/#skills"
        >
          Skills
        </HashLink>
      </li>
      <li className={classNames?.item}>
        <HashLink
          className={classNames?.link}
          onClick={handleClick}
          smooth
          to="/#contact"
        >
          Contact
        </HashLink>
      </li>
    </ul>
  );
}

export const NavigationLinks = memo(NavigationLinks_, deepEqual);
