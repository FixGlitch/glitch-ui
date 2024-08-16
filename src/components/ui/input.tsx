import * as React from "react";
import { cn } from "@/lib/utils";

// Define variantes para los estilos del Input
type InputVariant =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "rounded"
  | "outline"
  | "dashed"
  | "filled"
  | "dark";

// Define tamaños del Input
type InputSize = "small" | "medium" | "large" | "extra-small" | "extra-large";

// Define propiedades del Input
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  size?: InputSize;
  fullWidth?: boolean; // Add a prop to make the input full width
}

// Mapea variantes a clases CSS
const variantClasses = {
  default: "border-gray-300 bg-white text-black",
  primary: "border-blue-500 bg-blue-100 text-blue-700",
  secondary: "border-gray-500 bg-gray-100 text-gray-700",
  error: "border-red-500 bg-red-100 text-red-700",
  success: "border-green-500 bg-green-100 text-green-700",
  rounded: "rounded-full",
  outline: "border-2 border-gray-300 bg-transparent",
  dashed: "border-dashed border-gray-300 bg-transparent",
  filled: "border-transparent bg-gray-100 text-gray-700",
  dark: "border-gray-700 bg-gray-800 text-gray-100",
};

// Mapea tamaños a clases CSS
const sizeClasses = {
  "extra-small": "h-6 px-2 text-xs",
  small: "h-8 px-2 text-xs",
  medium: "h-10 px-3 text-sm",
  large: "h-12 px-4 text-md",
  "extra-large": "h-14 px-5 text-lg",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant = "default",
      size = "medium",
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={cn(
          "flex rounded-md border ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? "w-full" : "w-auto",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
