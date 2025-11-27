"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item.question}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <button
            className="flex w-full items-center justify-between text-left text-lg font-semibold text-slate-900"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          <div
            className={cn(
              "mt-3 text-sm text-slate-600 transition-all",
              openIndex === index ? "max-h-40" : "max-h-0 overflow-hidden"
            )}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

