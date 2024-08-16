"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";
type Color = "primary" | "secondary" | "tertiary";
type ProgressType = "default" | "striped" | "animated";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  size?: Size;
  color?: Color;
  type?: ProgressType;
  value: number;
}

const sizeClasses = {
  sm: "h-2",
  md: "h-4",
  lg: "h-6",
};

const colorClasses = {
  primary: "bg-blue-500",
  secondary: "bg-gray-300",
  tertiary: "bg-green-500",
};

const typeClasses = {
  default: "relative",
  striped:
    "relative bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-[length:200%_100%] bg-[position:0_0]",
  animated:
    "relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-[length:200%_100%] animate-[progress-bar_2s_linear_infinite]",
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      size = "md",
      color = "primary",
      type = "default",
      value,
      ...props
    },
    ref
  ) => {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "w-full overflow-hidden rounded-full",
          sizeClasses[size],
          colorClasses[color],
          typeClasses[type],
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "absolute top-0 left-0 h-full transition-all",
            type === "striped"
              ? "bg-[linear-gradient(45deg,_#e0e0e0_25%,_transparent_25%,_transparent_50%,_#e0e0e0_50%,_transparent_75%,_#e0e0e0_75%,_transparent)]"
              : colorClasses[color],
            size === "sm" ? "w-1/2" : size === "md" ? "w-full" : "w-full"
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
