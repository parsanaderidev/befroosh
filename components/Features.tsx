import React from "react";
import RevenueCard from "./features/RevenueCard";
import RealtimeCard from "./features/RealtimeCard";
import ProfilesCard from "./features/ProfilesCard";
import PerformanceCard from "./features/PerformanceCard";
import PrivacyCard from "./features/PrivacyCard";
import IntegrationsCard from "./features/IntegrationsCard";

export default function Features() {
  return (
    <div className="w-full max-w-5xl px-5 mx-auto py-16 flex flex-col gap-12">
      <div className="flex flex-col items-center text-center gap-5">
        <span
          className="flex items-center justify-center border font-medium w-fit whitespace-nowrap [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow] border-transparent bg-bg-a1 text-fg-a2 h-[24px] min-w-[24px] text-sm pl-2 pr-2 gap-1 rounded-sm"
          data-slot="badge"
        >
          Features
        </span>
        <h2 className="text-4xl tracking-tighter text-fg-4 leading-11 font-medium text-balance max-w-lg">
          Everything modern Instagram businesses need to scale sales
        </h2>
        <p className="w-full max-w-md font-medium text-lg/6">
          Eliminate manual messaging, answer comments in seconds, capture phone numbers, and turn conversations into revenue automatically.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RevenueCard />
        <RealtimeCard />
        <ProfilesCard />
        <PerformanceCard />
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <PrivacyCard />
          <IntegrationsCard />
        </div>
      </div>
    </div>
  );
}
