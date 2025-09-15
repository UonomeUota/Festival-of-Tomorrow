"use client";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, className, variant = "default", ...props }) => {
  const baseClasses = "px-4 py-2 rounded transition-colors";
  const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-slate-600 text-slate-300 bg-transparent hover:bg-slate-800",
    ghost: "bg-transparent text-slate-300 hover:bg-slate-800",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-slate-700 text-white hover:bg-slate-600",
  };

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};
