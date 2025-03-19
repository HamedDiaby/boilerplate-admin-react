import { FC, ReactNode } from "react";

interface TitleProps {
  className?: string;
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ className = "", children }) => {
  return <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>;
};
