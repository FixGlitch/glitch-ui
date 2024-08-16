"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

// HoverCard Root and Trigger components
const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

// HoverCardContent with default styles and optional Arrow
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  >
    {props.children}
    <HoverCardPrimitive.Arrow className="fill-current text-popover" />
  </HoverCardPrimitive.Content>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

// Define the type for props including className
type HoverCardSectionProps = React.HTMLAttributes<HTMLDivElement>;

// HoverCardHeader for structured content
const HoverCardHeader: React.FC<HoverCardSectionProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn("pb-2 mb-2 border-b border-gray-200", className)}
    {...props}
  />
);

// HoverCardFooter for structured content
const HoverCardFooter: React.FC<HoverCardSectionProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn("pt-2 mt-2 border-t border-gray-200", className)}
    {...props}
  />
);

// HoverCardContent with variant options
const HoverCardContentVariant = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & {
    variant?: "info" | "warning";
  }
>(
  (
    { className, variant = "info", align = "center", sideOffset = 4, ...props },
    ref
  ) => (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-64 rounded-md p-4 shadow-md outline-none",
        {
          "bg-blue-500 text-white": variant === "info",
          "bg-yellow-500 text-black": variant === "warning",
        },
        className
      )}
      {...props}
    >
      {props.children}
      <HoverCardPrimitive.Arrow className="fill-current" />
    </HoverCardPrimitive.Content>
  )
);
HoverCardContentVariant.displayName = HoverCardPrimitive.Content.displayName;

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardFooter,
  HoverCardContentVariant,
};
