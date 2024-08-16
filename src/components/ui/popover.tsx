"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

const basePopoverClasses = "z-50 rounded-md border p-4 text-popover-foreground shadow-md outline-none"

const sizes = {
  sm: "w-48",
  md: "w-64",
  lg: "w-80",
  xl: "w-96",
}

const colors = {
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
  red: "bg-red-500 text-white",
  yellow: "bg-yellow-500 text-white",
  purple: "bg-purple-500 text-white",
  teal: "bg-teal-500 text-white",
  gray: "bg-gray-500 text-white",
  orange: "bg-orange-500 text-white",
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    size?: keyof typeof sizes
    color?: keyof typeof colors
  }
>(({ className, size = "md", color = "blue", align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        basePopoverClasses,
        sizes[size],
        colors[color],
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const HoverPopover = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    size?: keyof typeof sizes
    color?: keyof typeof colors
  }
>(({ className, size = "md", color = "blue", ...props }, ref) => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger asChild>
      <button className={`px-4 py-2 rounded-md ${colors[color]}`}>
        Hover me
      </button>
    </PopoverPrimitive.Trigger>
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        basePopoverClasses,
        sizes[size],
        colors[color],
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      sideOffset={8}
    >
      <p>This popover appears on hover.</p>
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Root>
))

HoverPopover.displayName = "HoverPopover"

const CornerPopover = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    size?: keyof typeof sizes
    color?: keyof typeof colors
  }
>(({ className, size = "md", color = "blue", ...props }, ref) => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger asChild>
      <button className={`px-4 py-2 rounded-md ${colors[color]}`}>
        Open Corner Popover
      </button>
    </PopoverPrimitive.Trigger>
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        basePopoverClasses,
        sizes[size],
        colors[color],
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      align="start"
      sideOffset={4}
    >
      <p>This popover aligns to the start of the trigger.</p>
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Root>
))

CornerPopover.displayName = "CornerPopover"

const DynamicPopover = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    size?: keyof typeof sizes
    color?: keyof typeof colors
  }
>(({ className, size = "md", color = "blue", ...props }, ref) => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger asChild>
      <button className={`px-4 py-2 rounded-md ${colors[color]}`}>
        Open Dynamic Popover
      </button>
    </PopoverPrimitive.Trigger>
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        basePopoverClasses,
        sizes[size],
        colors[color],
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      align="center"
      sideOffset={6}
      side="bottom"
    >
      <div>
        <p>This popover aligns dynamically based on the trigger.</p>
        <p>Content can be as long as needed.</p>
      </div>
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Root>
))

DynamicPopover.displayName = "DynamicPopover"

const TitlePopover = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    size?: keyof typeof sizes
    color?: keyof typeof colors
  }
>(({ className, size = "md", color = "blue", ...props }, ref) => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger asChild>
      <button className={`px-4 py-2 rounded-md ${colors[color]}`}>
        Open Title Popover
      </button>
    </PopoverPrimitive.Trigger>
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        basePopoverClasses,
        sizes[size],
        colors[color],
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      align="center"
      sideOffset={6}
    >
      <div>
        <h3 className="font-bold text-lg">Popover Title</h3>
        <p className="text-sm">This is a subtitle or additional information.</p>
      </div>
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Root>
))

TitlePopover.displayName = "TitlePopover"

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  HoverPopover,
  CornerPopover,
  DynamicPopover,
  TitlePopover,
}
