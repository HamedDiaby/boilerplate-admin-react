import { FC, ReactNode } from "react";

interface SubtitleProps {
  className?: string;
  children: ReactNode;
}

export const Subtitle: FC<SubtitleProps> = ({ className, children }) => {
  return <div className={`text-md font-semibold ${className}`}>{children}</div>;
};
