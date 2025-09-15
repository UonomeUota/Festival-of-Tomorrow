// components/ui/badge.tsx
"use client";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, color = "bg-blue-500", className }) => {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded ${color} ${className ?? ""}`}>
      {children}
    </span>
  );
};
