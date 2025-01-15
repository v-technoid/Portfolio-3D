import { Icon } from '@/components';
import { FaMedium } from "react-icons/fa6"; 

type ContactLinksProps = {
  classNames?: {
    list?: string;
    item?: string;
    link?: string;
    icon?: string;
  };
};

export function ContactLinks({ classNames }: ContactLinksProps) {
  return (
    <ul className={classNames?.list}>
      <li className={classNames?.item}>
        <a target="_blank" href="mailto:vishnutechnophile@gmail.com" className={classNames?.link}>
          <Icon type="mail" className={classNames?.icon} />
        </a>
      </li>
      <li className={classNames?.item}>
        <a target="_blank" href="https://github.com/v-technoid" className={classNames?.link}>
          <Icon type="github" className={classNames?.icon} />
        </a>
      </li>
      <li className={classNames?.item}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vishnuppriyan/"
          className={classNames?.link}
        >
          <Icon type="linkedin" className={classNames?.icon} />
        </a>
      </li>
      <li className={classNames?.item}>
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://medium.com/@vishnuppriyan_" // Replace with your Medium profile link
    className={classNames?.link}
  >
    <FaMedium className={`${classNames?.icon} text-3xl`} style={{ position: "relative", top: "4px" }} /> {/* Use Medium icon here */}
  </a>
</li>
    </ul>
  );
}
