// components/ui/accordion.tsx
"use client";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="border rounded-md">{children}</div>;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-2 bg-gray-800 hover:bg-gray-600"
      >
        {title}
      </button>
      {open && <div className="p-2">{children}</div>}
    </div>
  );
};

export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const AccordionContent = ({ children }: { children: React.ReactNode }) => <>{children}</>;
