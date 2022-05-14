import React, { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>;
};
