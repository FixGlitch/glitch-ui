"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "outline" | "error";
  }
>(({ className, size = "md", variant = "default", ...props }, ref) => {
  // variantes de tama;os
  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  // variantes de estilos
  const variantStyles = {
    default: "border-primary ring-offset-background focus-visible:ring-primary",
    outline:
      "border-gray-300 ring-offset-background focus-visible:ring-gray-300",
    error: "border-red-500 ring-offset-background focus-visible:ring-red-500",
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        variantStyles[variant],
        {
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground":
            variant === "default",
          "data-[state=checked]:bg-gray-300 data-[state=checked]:text-gray-800":
            variant === "outline",
          "data-[state=checked]:bg-red-500 data-[state=checked]:text-white":
            variant === "error",
        },
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check
          className={cn(
            size === "sm"
              ? "h-3.5 w-3.5"
              : size === "md"
              ? "h-4 w-4"
              : "h-5 w-5"
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
