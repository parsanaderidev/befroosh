"use client";

import React, { useState } from "react";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-16 flex flex-col gap-12 relative overflow-hidden" id="faq">
      <div className="w-full max-w-3xl mx-auto px-5 flex flex-col items-center text-center gap-5">
        <span
          data-slot="badge"
          className="flex items-center justify-center border font-medium w-fit whitespace-nowrap [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow] border-transparent bg-bg-a1 text-fg-a2 h-[24px] min-w-[24px] text-sm pl-2 pr-2 gap-1 rounded-sm"
        >
          FAQ
        </span>
        <h2 className="text-4xl tracking-tight leading-11 font-medium text-fg-4 text-balance max-w-md">
          Frequently asked questions
        </h2>
        <p className="w-full max-w-sm font-medium">
          Quick answers to common questions about pricing, privacy, setup, and more.
        </p>
      </div>

      <div className="w-full max-w-xl mx-auto px-5">
        <div
          data-orientation="vertical"
          dir="ltr"
          role="region"
          data-slot="accordion"
          className="w-full flex flex-col gap-0.5 overflow-hidden"
        >
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                data-orientation="vertical"
                data-index={index}
                data-slot="accordion-item"
                {...(isOpen ? { "data-open": "" } : { "data-closed": "" })}
                className="bg-background-subtle hover:bg-bg-2 transition-colors rounded-lg corner-superellipse/1.125"
              >
                <h3
                  data-orientation="vertical"
                  data-index={index}
                  className="flex"
                  {...(isOpen ? { "data-open": "" } : { "data-closed": "" })}
                >
                  <button
                    type="button"
                    data-value={item.id}
                    data-orientation="vertical"
                    data-index={index}
                    tabIndex={0}
                    aria-disabled="false"
                    aria-expanded={isOpen}
                    id={`faq-trigger-${item.id}`}
                    aria-controls={`faq-content-${item.id}`}
                    data-slot="accordion-trigger"
                    {...(isOpen ? { "data-panel-open": "", "data-open": "" } : {})}
                    onClick={() => toggle(item.id)}
                    className="text-fg-4 focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 pl-4 pr-3 py-2.5 text-left font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-open]>svg]:rotate-180 hover:cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                      className={`text-purple-4 pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  data-orientation="vertical"
                  data-index={index}
                  {...(isOpen ? { "data-open": "" } : { "data-closed": "" })}
                  id={`faq-content-${item.id}`}
                  aria-labelledby={`faq-trigger-${item.id}`}
                  role="region"
                  data-slot="accordion-content"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-4 text-balance [&_a]:inline">
                    <div className="pt-0 pb-4 flex flex-col gap-2.5 text-fg-3 font-normal text-base leading-6">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
