// components/ui/card.tsx
"use client";
import React from "react";

// シンプルなクラス結合ユーティリティ
const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn("border rounded-lg shadow p-4", className)}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div {...props} className={cn("mb-2 font-bold", className)}>{children}</div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, className, ...props }) => (
  <h3 {...props} className={cn("text-lg font-semibold", className)}>{children}</h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => (
  <p {...props} className={cn("text-gray-600", className)}>{children}</p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div {...props} className={cn("mt-2", className)}>{children}</div>
);
