"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const aspectRatioVariants = {
  square: "aspect-w-1 aspect-h-1",
  widescreen: "aspect-w-16 aspect-h-9",
  portrait: "aspect-w-9 aspect-h-16",
  custom: (width: number, height: number) => `aspect-w-${width} aspect-h-${height}`, 
};

const defaultAspectRatio = aspectRatioVariants.square;

export {
  AspectRatio,
  aspectRatioVariants,
  defaultAspectRatio,
};
