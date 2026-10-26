import React from "react";
import StepInstall from "./how-it-works/StepInstall";
import StepConnect from "./how-it-works/StepConnect";
import StepInsights from "./how-it-works/StepInsights";

export default function HowItWorks() {
  return (
    <div className="py-16 flex flex-col gap-12 relative overflow-hidden">
      <div className="w-full max-w-3xl mx-auto px-5 flex flex-col items-center text-center gap-5">
        <span
          className="flex items-center justify-center border font-medium w-fit whitespace-nowrap [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow] border-transparent bg-bg-a1 text-fg-a2 h-[24px] min-w-[24px] text-sm pl-2 pr-2 gap-1 rounded-sm"
          data-slot="badge"
        >
          How it works
        </span>
        <h2 className="text-4xl tracking-tight leading-11 font-medium text-fg-4 text-balance max-w-md">
          Launch in minutes
        </h2>
        <p className="w-full max-w-sm font-medium">
          Connecting your Instagram account and configuring your first smart sales flow takes less than 5 minutes. No passwords needed.
        </p>
      </div>
      <div className="w-full max-w-5xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <StepInstall />
        <StepConnect />
        <StepInsights />
      </div>
    </div>
  );
}
