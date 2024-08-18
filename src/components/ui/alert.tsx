import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        cancel: "bg-red-100 text-red-700 hover:bg-red-200",
        delete: "bg-red-500 text-white hover:bg-red-600",
        destructive: "bg-danger text-white hover:bg-danger/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-white hover:bg-success/80",
        info: "bg-info text-white hover:bg-info/80",
        warning: "bg-warning text-white hover:bg-warning/80",
        loading: "bg-gray-500 text-white hover:bg-gray-400",
        active: "bg-gray-600 text-white hover:bg-gray-500",
        inactive: "bg-gray-300 text-white hover:bg-gray-200",
        blurred: "bg-gray-100 text-gray-600 hover:bg-gray-200",
        gradient: "bg-gradient-to-r from-primary to-secondary text-white",
        rounded: "rounded-full bg-primary text-white hover:bg-primary/80",
        icon: "p-0",
        smooth: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        shadow: "shadow-md bg-gray-800 text-white hover:bg-gray-700",
        doubleBorder:
          "border-2 border-double border-primary bg-background text-primary",
        inverse: "bg-black text-white hover:bg-gray-800",
        hidden: "hidden",
        connectivity: "bg-gray-500 text-white hover:bg-gray-400",
        translucent: "bg-opacity-50 text-primary hover:bg-opacity-70",
        outlinedShadow:
          "border border-primary shadow-md text-primary hover:bg-primary/10",
        neon: "bg-green-400 text-white hover:bg-green-300",
        retro: "bg-yellow-500 text-black hover:bg-yellow-400",
        danger: "bg-red-600 text-white hover:bg-red-500",
        cool: "bg-blue-600 text-white hover:bg-blue-500",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-10 px-6 py-3",
        lg: "h-16 px-10 py-5",
        xl: "h-18 px-12 py-6",
        xxl: "h-20 px-14 py-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, size, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, size }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
