import { FC } from "react";
import { TemplatePointers } from "./TemplatePointers";

export const LandingIntro: FC = () => {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12 flex flex-col items-center">
        <div className="max-w-md text-center space-y-6">

          <h1 className="text-3xl font-bold flex items-center justify-center">
            <img
              src="/logo192.png"
              className="w-12 mr-2 mask mask-circle"
              alt="admin-react-logo"
            />
            Admin React
          </h1>

          <img
            src="/intro.png"
            alt="Admin React Admin Template"
            className="w-48 mx-auto"
            loading="lazy"
          />

          {/* Importing pointers component */}
          <TemplatePointers />
          
        </div>
      </div>
    </div>
  );
};
