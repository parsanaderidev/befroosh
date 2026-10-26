import React from "react";
import ComparisonTable from "./comparison/ComparisonTable";
import ComparisonMobile from "./comparison/ComparisonMobile";

export default function Comparison() {
  return (
    <div className="py-16 relative overflow-hidden flex flex-col gap-12">
      <div className="w-full max-w-3xl mx-auto px-5 flex flex-col items-center text-center gap-5">
        <span
          className="flex items-center justify-center border font-medium w-fit whitespace-nowrap [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow] border-transparent bg-bg-a1 text-fg-a2 h-[24px] min-w-[24px] text-sm pl-2 pr-2 gap-1 rounded-sm"
          data-slot="badge"
        >
          Comparison
        </span>
        <h2 className="text-4xl tracking-tighter text-fg-4 leading-11 font-medium text-balance max-w-lg">
          How Befroosh compares
        </h2>
        <p className="w-full max-w-md font-medium text-lg/6">
          See how Befroosh compares to manual Instagram responses and traditional chatbots.
        </p>
      </div>
      <div className="w-full max-w-5xl mx-auto px-5">
        <div className="w-full">
          <ComparisonTable />
          <ComparisonMobile />
        </div>
      </div>
    </div>
  );
}
