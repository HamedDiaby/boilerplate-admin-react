import { FC } from "react";

export const TemplatePointers: FC = () => {
  return (
    <>
      <h1 className="text-2xl mt-8 font-bold">Admin Dashboard Starter Kit</h1>
      <ul className="mt-4 space-y-2">
        <li>✓ <span className="font-semibold">Light/dark</span> mode toggle</li>
        <li>✓ <span className="font-semibold">Redux toolkit</span> and other utility libraries configured</li>
        <li>✓ <span className="font-semibold">Calendar, Modal, Sidebar</span> components</li>
        <li>✓ User-friendly <span className="font-semibold">documentation</span></li>
        <li>✓ <span className="font-semibold">Daisy UI</span> components, <span className="font-semibold">Tailwind CSS</span> support</li>
      </ul>
    </>
  );
};
