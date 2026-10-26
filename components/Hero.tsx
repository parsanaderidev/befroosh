"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ValueProps from "./ValueProps";
import CustomerMarquee from "./CustomerMarquee";

const tabs = [
  { name: "Smart DM", image: "/marketing/dashboard-stats.png", alt: "Befroosh smart direct message automation" },
  { name: "Smart Comments", image: "/marketing/dashboard-profile.png", alt: "Befroosh smart comment auto-reply" },
  { name: "Storefront", image: "/marketing/dashboard-funnels.png", alt: "Befroosh in-chat storefront builder" },
  { name: "Lead Capture", image: "/marketing/dashboard-performance.png", alt: "Befroosh automated lead and phone capture" },
  { name: "Orders", image: "/marketing/dashboard-realtime.png", alt: "Befroosh automated Instagram order taking" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const shimmerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let animId: number;
    let start: number | null = null;
    const duration = 2500; // 2.5s cycle matching live site

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) % duration;
      const progress = elapsed / duration;
      // Linear sweep from 130% down to -30% matching live site exactly
      const x = 130 - progress * 160;
      if (shimmerRef.current) {
        shimmerRef.current.style.setProperty("--mask-x", `${x.toFixed(4)}%`);
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-40 pb-16 bg-background flex flex-col gap-16 relative overflow-hidden">
      {/* Top CTA / Headline Area */}
      <div className="w-full max-w-3xl mx-auto px-5 flex flex-col items-center text-center gap-4">
        <Link
          href="#features"
          prefetch={false}
          className="inline-flex items-center gap-2 pl-2.5 pr-2.5 py-1.5 rounded-full bg-sky-a1 text-sm font-medium text-sky-4 hover:bg-sky-a2/70 transition-colors"
        >
          <svg
            className="h-3.5 w-auto select-none shrink-0"
            fill="none"
            viewBox="0 0 288 191"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Meta Logo"
          >
            <defs>
              <linearGradient
                id="heroMetaGrad1"
                x1="61"
                y1="117"
                x2="259"
                y2="127"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0064e1" offset="0" />
                <stop stopColor="#0064e1" offset="0.4" />
                <stop stopColor="#0073ee" offset="0.83" />
                <stop stopColor="#0082fb" offset="1" />
              </linearGradient>
              <linearGradient
                id="heroMetaGrad2"
                x1="45"
                y1="139"
                x2="45"
                y2="66"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0082fb" offset="0" />
                <stop stopColor="#0064e0" offset="1" />
              </linearGradient>
            </defs>
            <path
              fill="#0081fb"
              d="m31.06,125.96c0,10.98 2.41,19.41 5.56,24.51 4.13,6.68 10.29,9.51 16.57,9.51 8.1,0 15.51-2.01 29.79-21.76 11.44-15.83 24.92-38.05 33.99-51.98l15.36-23.6c10.67-16.39 23.02-34.61 37.18-46.96 11.56-10.08 24.03-15.68 36.58-15.68 21.07,0 41.14,12.21 56.5,35.11 16.81,25.08 24.97,56.67 24.97,89.27 0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75l0-31.02c17.63,0 22.03-16.2 22.03-34.74 0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16.05c-18.2,32.27-22.81,39.62-31.91,51.75-15.95,21.24-29.57,29.29-47.5,29.29-21.27,0-34.72-9.21-43.05-23.09-6.8-11.31-10.14-26.15-10.14-43.06z"
            />
            <path
              fill="url(#heroMetaGrad1)"
              d="m24.49,37.3c14.24-21.95 34.79-37.3 58.36-37.3 13.65,0 27.22,4.04 41.39,15.61 15.5,12.65 32.02,33.48 52.63,67.81l7.39,12.32c17.84,29.72 27.99,45.01 33.93,52.22 7.64,9.26 12.99,12.02 19.94,12.02 17.63,0 22.03-16.2 22.03-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71l-25.79-43.08c-12.94-21.62-24.81-37.74-31.68-45.04-7.39-7.85-16.89-17.33-32.05-17.33-12.27,0-22.69,8.61-31.41,21.78z"
            />
            <path
              fill="url(#heroMetaGrad2)"
              d="m82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78-12.33,18.61-19.88,46.33-19.88,72.95 0,10.98 2.41,19.41 5.56,24.51l-26.48,17.44c-6.8-11.31-10.14-26.15-10.14-43.06 0-30.75 8.44-62.8 24.49-87.55 14.24-21.95 34.79-37.3 58.36-37.3z"
            />
          </svg>
          <span
            ref={shimmerRef}
            className="relative inline-block"
            style={{
              maskImage: "linear-gradient(90deg, black 40%, transparent 50%, black 60%)",
              WebkitMaskImage: "linear-gradient(90deg, black 40%, transparent 50%, black 60%)",
              maskSize: "200% 100%",
              WebkitMaskSize: "200% 100%",
              maskPosition: "var(--mask-x, 130%)",
              WebkitMaskPosition: "var(--mask-x, 130%)",
              animation: "shimmer-mask 2.5s infinite linear",
            }}
          >
            Built with Official Instagram API (Meta Verified)
          </span>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            className="-ml-1"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <h1 className="text-6xl md:text-6xl/16 tracking-tighter text-fg-4 font-semibold text-center max-w-lg">
          All-in-one <br />
          <span className="inline-flex items-center justify-center gap-2.5">
            <span>Instagram</span>
            <Image
              src="/marketing/instagram.png"
              alt="Instagram"
              width={55}
              height={55}
              priority
              className="size-9 md:size-11 object-contain drop-shadow-md transition-transform duration-300 select-none shrink-0"
            />
          </span>{" "}
          <br />
          sales platform
        </h1>

        <p className="w-full max-w-md font-medium text-lg/6">
          Befroosh automatically replies to Instagram comments and DMs, collects customer leads, grows followers, and increases sales.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="/register" prefetch={false}>
            <button
              data-slot="button"
              className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium [&:disabled]:cursor-not-allowed transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&:disabled_svg]:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none aria-invalid:focus-visible:ring-0 corner-superellipse/1.125 bg-purple-4 text-white enabled:hover:opacity-90 disabled:bg-purple-2 disabled:text-white dark:disabled:bg-bg-3 dark:disabled:text-white px-5 h-11 gap-2 rounded-full active:scale-99 data-[pressed]:scale-99 w-[320px] md:w-auto"
            >
              Start 7-day free trial
            </button>
          </Link>
          <Link href="#features" prefetch={false}>
            <button
              data-slot="button"
              className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium [&:disabled]:cursor-not-allowed transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&:disabled_svg]:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none aria-invalid:focus-visible:ring-0 corner-superellipse/1.125 bg-bg-a1 text-fg-3 hover:bg-bg-a2 dark:bg-bg-a3 dark:hover:bg-bg-a4 hover:text-fg-3 disabled:bg-bg-2 disabled:text-fg-a1/50 px-5 h-11 gap-2 rounded-full active:scale-99 data-[pressed]:scale-99 w-[320px] md:w-auto"
            >
              See live demo
            </button>
          </Link>
        </div>
      </div>

      {/* Customer Marquee Ticker */}
      <CustomerMarquee />

      {/* Hero Showcase with Background Webp and Interactive Tabs */}
      <div
        className="w-full py-8 pt-20 md:py-20 md:pt-28 relative"
        style={{
          backgroundImage: "url('/marketing/bg-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-13 bg-background flex items-center md:items-start px-5 rounded-b-4xl">
          <div
            className="absolute top-0 -left-[31px] w-8 h-8"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, transparent 32px, var(--color-background) 32.5px)",
            }}
          />
          <div
            className="absolute top-0 -right-[31px] w-8 h-8"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, transparent 32px, var(--color-background) 32.5px)",
            }}
          />

          {/* Desktop Tabs */}
          <div className="hidden md:contents">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`relative text-sm font-medium cursor-pointer transition-colors h-9 px-3 ${
                    isActive ? "text-fg-4" : "text-fg-2 hover:text-fg-4"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full bg-bg-a2"
                      style={{ opacity: 1 }}
                    />
                  )}
                  <span className="relative">{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Tab Cycler */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous tab"
              className="text-fg-2 hover:text-fg-3 size-6 rounded-full bg-bg-a1 flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="mr-px">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="text-sm font-medium text-center text-fg-4 w-24">
              {tabs[activeTab].name}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next tab"
              className="text-fg-2 hover:text-fg-3 size-6 rounded-full bg-bg-a1 flex items-center justify-center cursor-pointer transition-colors"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="ml-px">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Preview Screenshot with Smooth Fade */}
        <div className="max-w-5xl mx-auto px-5 relative">
          <Image
            key={tabs[activeTab].image}
            src={tabs[activeTab].image}
            alt={tabs[activeTab].alt}
            width={2880}
            height={1800}
            priority
            className="w-full h-auto rounded-md shadow-sm transition-opacity duration-300"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          />
        </div>
      </div>

      {/* 3-Column Value Props */}
      <ValueProps />
    </div>
  );
}
