// components/ui/input.tsx
"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
