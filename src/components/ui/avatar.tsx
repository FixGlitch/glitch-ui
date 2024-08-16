"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

// Componente Avatar
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    size?: "small" | "medium" | "large"; // Variantes para el tamaño
  }
>(({ className, size = "medium", ...props }, ref) => {
  // Estilos basados en el tamaño
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12",
  };

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

// Componente AvatarImage
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// Componente AvatarFallback
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// Componente AvatarFallbackWithIcon
type AvatarFallbackWithIconProps = React.ComponentPropsWithoutRef<
  typeof AvatarFallback
> & {
  icon?: IconType; // Propiedad opcional para el ícono
};

const AvatarFallbackWithIcon = React.forwardRef<
  React.ElementRef<typeof AvatarFallback>,
  AvatarFallbackWithIconProps
>(({ className, icon: Icon, ...props }, ref) => (
  <AvatarFallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  >
    {Icon && <Icon className="text-muted-foreground" />}
  </AvatarFallback>
));
AvatarFallbackWithIcon.displayName = "AvatarFallbackWithIcon";

// Exportar los componentes
export { Avatar, AvatarImage, AvatarFallback, AvatarFallbackWithIcon };
