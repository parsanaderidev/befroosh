import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="pt-16 flex flex-col gap-16 relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-5">
        <div className="flex flex-col items-center gap-5 bg-background-subtle rounded-3xl px-8 py-8 md:py-16">
          <h2 className="text-4xl text-center font-medium tracking-tight text-fg-4 leading-11 text-balance max-w-md">
            Free consultation with Befroosh experts
          </h2>
          <p className="w-full max-w-sm text-center font-medium">
            Ready to implement smart Instagram DM automation? Our team is available for free personalized guidance.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/register" prefetch={false}>
              <button
                data-slot="button"
                className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium [&:disabled]:cursor-not-allowed transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&:disabled_svg]:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none aria-invalid:focus-visible:ring-0 corner-superellipse/1.125 bg-purple-4 text-white enabled:hover:opacity-90 disabled:bg-purple-2 disabled:text-white dark:disabled:bg-bg-3 dark:disabled:text-white px-5 h-11 gap-2 rounded-full active:scale-99 data-[pressed]:scale-99 w-[288px] md:w-auto"
              >
                Start 7-day free trial
              </button>
            </Link>
            <Link href="https://t.me/befroosh_support" target="_blank" rel="noopener noreferrer" prefetch={false}>
              <button
                data-slot="button"
                className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium [&:disabled]:cursor-not-allowed transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&:disabled_svg]:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none aria-invalid:focus-visible:ring-0 corner-superellipse/1.125 bg-bg-a1 text-fg-3 hover:bg-bg-a2 dark:bg-bg-a3 dark:hover:bg-bg-a4 hover:text-fg-3 disabled:bg-bg-2 disabled:text-fg-a1/50 px-5 h-11 gap-2 rounded-full active:scale-99 data-[pressed]:scale-99 w-[288px] md:w-auto"
              >
                Telegram: @befroosh_support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
