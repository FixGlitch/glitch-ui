import * as React from "react";
import { cn } from "@/lib/utils";

const cardVariants = {
  default: "rounded-lg border bg-card text-card-foreground shadow-sm",
  outline: "rounded-lg border border-gray-300 bg-white text-card-foreground shadow-sm",
  shadow: "rounded-lg border bg-card text-card-foreground shadow-md",
  elevated: "rounded-lg border bg-card text-card-foreground shadow-lg",
  small: "rounded-lg border bg-card text-card-foreground shadow-sm p-4",
  medium: "rounded-lg border bg-card text-card-foreground shadow-md p-6",
  large: "rounded-lg border bg-card text-card-foreground shadow-lg p-8",
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: keyof typeof cardVariants; size?: keyof typeof cardVariants }
>(({ className, variant = "default", size = "medium", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants[variant], cardVariants[size], className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { spacing?: string }
>(({ className, spacing = "space-y-1.5", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`flex flex-col ${spacing} p-6`, className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { size?: string }
>(({ className, size = "text-2xl", ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(`${size} font-semibold leading-none tracking-tight`, className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { size?: string }
>(({ className, size = "text-sm", ...props }, ref) => (
  <p
    ref={ref}
    className={cn(`${size} text-muted-foreground`, className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
