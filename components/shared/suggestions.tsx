import type { JSX } from "react";

import { Camera, Figma, Paperclip, Sliders } from "lucide-react";
import React from "react";

import { Badge } from "../ui/badge";

const suggest: { icon: JSX.Element; name: string } = [
  {
    icon: <Camera />,
    name: "Camera",
  },
  {
    icon: <Figma />,
    name: "Figma",
  },
  {
    icon: <Paperclip />,
    name: "upload file",
  },
  {
    icon: <Sliders />,
    name: "Landing page",
  },
];

export function Suggestions() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2
     w-full max-w-4xl   "
    >

      {
        suggest.map((item) => {
          return (
            <Badge variant="outline" key={item.name} className="flex text-sm items-center gap-2">
              {item.icon}
              {item.name}
            </Badge>
          );
        })

      }

    </div>
  );
}
