import React from "react";

import Mail from "./mail.svg";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";

// Icons taken from: https://simpleicons.org/

export interface SocialIconProps {
  kind: keyof typeof components;
  href: string;
  size?: number;
}

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

const SocialIcon = (props: SocialIconProps) => {
  const { kind, href } = props;
  const size = props.size ?? 8;

  if (!href || (kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
