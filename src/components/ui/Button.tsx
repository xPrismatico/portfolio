import React from "react";
import { cn } from "@/libs/utils"; // Usamos tu utilidad para mezclar clases

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}: ButtonProps) {
  
  // Definimos estilos base y variantes
  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-foreground/70 hover:text-foreground hover:bg-muted/50",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}