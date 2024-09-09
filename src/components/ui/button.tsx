import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        cancel: "bg-danger-light text-danger-dark hover:bg-danger-lightHover",
        delete: "bg-danger-primary text-white hover:bg-danger-primaryHover",
        destructive: "bg-danger text-white hover:bg-danger/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-white hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success-primary text-white hover:bg-success-primaryHover",
        info: "bg-infoLight text-white hover:bg-infoDark",
        warning: "bg-warning-primary text-white hover:bg-warning-primaryHover",
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
        danger: "bg-danger-primary text-white hover:bg-danger-primaryHover",
        cool: "bg-blue-600 text-white hover:bg-blue-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 px-10 py-3",
        xxl: "h-14 px-12 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
