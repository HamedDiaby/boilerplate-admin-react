import { FC, ReactNode } from "react";
import { Subtitle } from "../Typography";

interface TitleCardProps {
  title: string;
  children: ReactNode;
  topMargin?: string;
  className?: string
  TopSideButtons?: ReactNode;
}

export const CardWithTitle: FC<TitleCardProps> = ({ 
    title, 
    children, 
    topMargin = "mt-6", 
    className,
    TopSideButtons,
}) => {
  return (
    <div className={`card w-full p-6 bg-base-100 shadow-xl ${topMargin} ${className}`}>
      {/* Title for Card */}
      <Subtitle className={TopSideButtons ? "inline-block" : ""}>
        {title}

        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className="inline-block float-right ml-2">{TopSideButtons}</div>
        )}
      </Subtitle>

      <div className="divider mt-2"></div>

      {/* Card Body */}
      <div className="h-full w-full pb-6 bg-base-100">
        {children}
      </div>
    </div>
  );
};
