"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { planTiers as tiers } from "@/data/plans";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [tierIndex, setTierIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentTier = tiers[tierIndex];
  const totalSteps = tiers.length - 1; // 10 steps (0 to 10)

  const updateFromPointer = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = x / rect.width;
    const step = Math.round(percent * totalSteps);
    setTierIndex(Math.max(0, Math.min(step, totalSteps)));
  }, [totalSteps]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateFromPointer(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updateFromPointer(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setTierIndex((prev) => Math.min(prev + 1, totalSteps));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setTierIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setTierIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setTierIndex(totalSteps);
    }
  };

  // Slider geometry matching live reference calculations
  // leftTrackWidth percent:
  const leftTrackPercent = (tierIndex / totalSteps) * 100;
  const leftTrackSubPx = (tierIndex / totalSteps) * 36.36;

  return (
    <div id="pricing" className="py-16 flex flex-col gap-12 relative overflow-hidden">
      {/* Header */}
      <div className="w-full max-w-3xl mx-auto px-5 flex flex-col items-center text-center gap-5">
        <span
          data-slot="badge"
          className="flex items-center justify-center border font-medium w-fit whitespace-nowrap [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow] border-transparent bg-bg-a1 text-fg-a2 h-[24px] min-w-[24px] text-sm pl-2 pr-2 gap-1 rounded-sm"
        >
          Pricing
        </span>
        <h2 className="text-4xl text-fg-4 tracking-tight leading-11 font-medium text-balance max-w-md">
          Fair pricing for everyone
        </h2>
        <p className="w-full max-w-sm font-medium">
          No hidden fees. Scale according to your real Instagram audience size. All features included.
        </p>
      </div>

      {/* Main Pricing Box */}
      <div className="w-full max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl bg-bg-a1 overflow-hidden">
          {/* Left Column: Events, Slider, CTA, Features */}
          <div className="p-8 flex flex-col items-start gap-6 md:border-r border-bg-a2">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-fg-4 text-center md:text-left">
                  Instagram followers
                </h3>
                <p className="text-fg-2 text-sm max-w-64 text-center md:text-left">
                  Tiers are based on your follower count. All features and unlimited messages included.
                </p>
              </div>

              {/* Monthly / Yearly Switcher */}
              <div
                data-orientation="horizontal"
                data-activation-direction="none"
                data-slot="marketing-tabs"
                className="flex gap-2 flex-col"
              >
                <div
                  role="tablist"
                  className="relative inline-flex items-center justify-center bg-background gap-1 rounded-full p-1 border border-bg-4 w-full"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={billingCycle === "monthly"}
                    onClick={() => setBillingCycle("monthly")}
                    className="flex items-center gap-2 cursor-pointer text-sm font-medium whitespace-nowrap h-8 flex-1 px-4 text-fg-4 relative z-10 hover:text-fg-4 transition-all rounded-full"
                  >
                    {billingCycle === "monthly" && (
                      <span className="absolute inset-0 rounded-full bg-bg-a2" />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      Monthly
                    </span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={billingCycle === "yearly"}
                    onClick={() => setBillingCycle("yearly")}
                    className="flex items-center gap-2 cursor-pointer text-sm font-medium whitespace-nowrap h-8 flex-1 px-4 text-fg-4 relative z-10 hover:text-fg-4 transition-all rounded-full pr-2.5"
                  >
                    {billingCycle === "yearly" && (
                      <span className="absolute inset-0 rounded-full bg-bg-a2" />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      Yearly
                      <span
                        data-slot="badge"
                        className="flex items-center justify-center rounded border font-medium w-fit whitespace-nowrap border-transparent bg-amber-a1 text-amber-4 h-[18px] min-w-[18px] text-xs px-1 gap-1"
                      >
                        -20%
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tier & Price Display */}
            <div className="w-full flex flex-col gap-4 md:gap-1.5">
              <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-end md:justify-between gap-2">
                <span className="inline-flex items-center text-5xl font-medium text-purple-4">
                  <span>{currentTier.name}</span>
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-fg-2">for</span>
                    <div className="flex items-baseline gap-px">
                      {billingCycle === "yearly" ? (
                        <>
                          <span className="inline-flex items-center text-2xl font-medium text-fg-1 line-through mr-1">
                            ${currentTier.monthly}
                          </span>
                          <span className="inline-flex items-center text-2xl font-medium text-fg-4">
                            ${currentTier.annuallyDiscounted}
                          </span>
                        </>
                      ) : (
                        <span className="inline-flex items-center text-2xl font-medium text-fg-4">
                          ${currentTier.monthly}
                        </span>
                      )}
                      <span className="text-fg-2 text-2xl">/mo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Slider matching exact DOM */}
              <div className="relative w-full select-none">
                <div
                  ref={sliderRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  className="relative h-12 cursor-grab active:cursor-grabbing"
                >
                  {/* Step dots */}
                  <div className="absolute inset-0 flex items-center pointer-events-none">
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(9.09091% - 2.90909px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(18.1818% - 5.81818px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(27.2727% - 8.72727px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(36.3636% - 11.6364px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(45.4545% - 14.5455px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(54.5455% - 17.4545px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(63.6364% - 20.3636px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(72.7273% - 23.2727px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(81.8182% - 26.1818px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(90.9091% - 29.0909px + 12px)" }} />
                    <div className="absolute size-2 rounded-full bg-bg-a3" style={{ left: "calc(100% - 32px + 12px)" }} />
                  </div>

                  {/* Active Track + Thumb + Inactive Track */}
                  <div className="absolute inset-0 flex items-center gap-1">
                    <div
                      className="h-8 rounded-full bg-gradient-to-r from-sky-2 via-sky-2 to-blue-4 transition-all"
                      style={{
                        width: `calc(${leftTrackPercent}% - ${leftTrackSubPx}px)`,
                      }}
                    />
                    <div
                      role="slider"
                      tabIndex={0}
                      aria-label="Monthly events tier"
                      aria-valuemin={0}
                      aria-valuemax={totalSteps}
                      aria-valuenow={tierIndex}
                      aria-valuetext={`${currentTier.name} events for $${currentTier.monthly} per month`}
                      onKeyDown={handleKeyDown}
                      className="size-8 shrink-0 rounded-full bg-background shadow-md transition-transform ease-out duration-50 outline-none focus-visible:ring-2 focus-visible:ring-purple-4"
                    />
                    <div
                      className="h-8 rounded-full bg-transparent transition-all"
                      style={{
                        width: `calc(${100 - leftTrackPercent}% - ${(totalSteps - tierIndex) * 3.63}px)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button and helper text */}
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
              <Link
                href="/register"
                prefetch={false}
                data-slot="button"
                className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium transition-all focus-visible:ring-2 focus-visible:ring-purple-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none corner-superellipse/1.125 bg-purple-4 text-white hover:opacity-90 px-5 h-11 gap-2 rounded-full active:scale-99 w-full md:w-auto"
              >
                Start 7 day free trial
              </Link>
              <p className="w-full text-xs text-fg-2 max-w-40 text-balance text-center md:text-left">
                Change or cancel your plan at any given moment.
              </p>
            </div>

            {/* 10 Feature Bullets in 2 Columns */}
            <div className="w-full grid md:grid-cols-2 gap-x-4 gap-y-2">
              {/* 1. Official Meta API */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0097 5.52559L6.90358 6.37272C6.64507 6.44322 6.4431 6.64519 6.3726 6.9037L5.52547 10.0098C5.44843 10.2923 5.70761 10.5515 5.99007 10.4745L9.0962 9.62734C9.35471 9.55681 9.55669 9.35483 9.62722 9.09633L10.4743 5.9902C10.5514 5.70774 10.2922 5.44855 10.0097 5.52559Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">Official Meta API</span>
              </div>

              {/* 2. Smart DM automation */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1M8 15C6.22373 15 4.78378 11.866 4.78378 8C4.78378 4.13401 6.22373 1 8 1M8 15C9.77626 15 11.2162 11.866 11.2162 8C11.2162 4.13401 9.77626 1 8 1M14.8108 8H1.18919"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
                <span className="text-fg-4 font-medium">Smart DM automation</span>
              </div>

              {/* 3. Comment auto-reply */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M14 4.08182C14 3.4321 13.5993 2.85527 13.0055 2.64981L8.46 1.07746C8.16138 0.974179 7.83862 0.974179 7.54 1.07746L2.99457 2.64981C2.40063 2.85527 2 3.4321 2 4.08182V7.83346C2 11.5863 5.09091 13.3714 8 15C10.9091 13.3714 14 11.5863 14 7.83346V4.08182Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">Comment auto-reply</span>
              </div>

              {/* 4. In-chat storefront */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M10.2703 6.48649L8.19668 10.4609M14.0541 10.8378H1.94595M12.9497 3.05026C10.2161 0.316581 5.78393 0.316581 3.05026 3.05026C0.316581 5.78391 0.316581 10.2161 3.05026 12.9497C5.78391 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78393 12.9497 3.05026Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">In-chat storefront</span>
              </div>

              {/* 5. Lead capture forms */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M8 4.78378V8L10.6486 10.6486M1 2.51351V5.54054H4.02703M1.37838 10.3333C2.34074 13.0521 4.93743 15 7.98971 15C11.8614 15 15 11.866 15 8C15 4.13401 11.8614 1 7.98971 1C5.08503 1 2.59295 2.76405 1.52933 5.27778"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">Lead capture forms</span>
              </div>

              {/* 6. Follower-only unlocking */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M8 4.5V3.72222M8 11.5V12.2778M9.68428 5.66667C9.34812 5.20171 8.71976 4.88889 8 4.88889H7.78393C6.82937 4.88889 6.05556 5.50795 6.05556 6.27161V6.33097C6.05556 6.8772 6.44132 7.37653 7.05204 7.62083L8.94796 8.37917C9.55867 8.62347 9.94444 9.1228 9.94444 9.66903C9.94444 10.4655 9.13742 11.1111 8.14187 11.1111H8C7.28024 11.1111 6.65188 10.7983 6.31569 10.3333M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">Follower-only unlocking</span>
              </div>

              {/* 7. Order taking & tracking */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse cx="5.55" cy="6.25" rx="1.05" ry="1.05" fill="currentColor" />
                  <ellipse cx="10.45" cy="6.25" rx="1.05" ry="1.05" fill="currentColor" />
                </svg>
                <span className="text-fg-4 font-medium">Order taking & tracking</span>
              </div>

              {/* 8. Abandoned chat recovery */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M7.18034 1V2.15881M11.5505 2.81027L10.7311 3.62967M3.62959 10.7311L2.81018 11.5505M2.15881 7.18034H1M3.62959 3.62959L2.81018 2.81018M9.60341 14.7519L6.71743 7.21634C6.59792 6.90423 6.90423 6.59792 7.21634 6.71743L14.7519 9.60341C15.0512 9.71806 15.0887 10.1265 14.8151 10.2937L12.0883 11.9601C12.036 11.992 11.992 12.036 11.9601 12.0883L10.2937 14.8151C10.1265 15.0887 9.71806 15.0512 9.60341 14.7519Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">Abandoned chat recovery</span>
              </div>

              {/* 9. Unlimited conversations */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" aria-label="Funnel" aria-hidden="true">
                  <path
                    d="M1 15C1 15 2.5 13 4 13M4 13C5.5621 13 8 13 8 13M4 13C4 9.09476 4 6.90524 4 3M8 13V3M8 13C8 13 10.5 10.5 12 10.5M4 3C2.5 3 1 1 1 1M4 3C5.5621 3 8 3 8 3M8 3C8 3 10.5 5.5 12 5.5M15 5.5C15 5.5 13.1716 5.5 12 5.5M15 10.5C15 10.5 13.1716 10.5 12 10.5M12 5.5C12 7.45262 12 8.54738 12 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">Unlimited conversations</span>
              </div>

              {/* 10. 100% money-back guarantee */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-purple-4">
                <svg width="16" fill="none" viewBox="0 0 17 16">
                  <path
                    d="M16 6.25C16 11.2813 9.12497 15 8.5 15C7.87503 15 1 11.2813 1 6.25C1 2.75 3.08333 1 5.16667 1C7.24997 1 8.5 2.3125 8.5 2.3125C8.5 2.3125 9.75003 1 11.8333 1C13.9167 1 16 2.75 16 6.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-fg-4 font-medium">100% money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simulated Realtime & 3D Dot-Matrix Globe */}
          <div className="p-8 relative overflow-hidden flex flex-col min-h-[400px] md:block hidden">
            <div className="w-full flex flex-col items-center gap-8 z-10 relative">
              <p className="font-medium text-fg-2 text-center">
                Simulated response speed for{" "}
                <span className="text-purple-4 uppercase">{currentTier.name}</span> followers
              </p>
              <div className="flex flex-col items-center gap-1">
                <span className="inline-flex items-center text-5xl font-medium text-fg-4">
                  <span>{currentTier.peopleMin}</span>
                </span>
                <span className="text-sm text-fg-2">people/min</span>
              </div>
            </div>

            {/* Centered Globe Canvas / Background Visual */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 pointer-events-none">
              <div
                className="w-[640px] h-[640px] flex items-center justify-center opacity-85"
              >
                <Image
                  src="/marketing/pricing-globe.png"
                  alt="Simulated realtime globe"
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="w-[640px] h-[640px] object-contain drop-shadow-sm select-none"
                />
              </div>
            </div>

            {/* Floating Live Visitor Counter Pill */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 dark bg-background backdrop-blur-md rounded-full shadow-md corner-superellipse/1.125 pl-3 pr-3.5 h-10 flex items-center gap-1.5 z-20 select-none">
              <svg className="text-purple-4" fill="none" height="20" viewBox="0 0 16 16" width="20">
                <path
                  d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1M8 15C6.22373 15 4.78378 11.866 4.78378 8C4.78378 4.13401 6.22373 1 8 1M8 15C9.77626 15 11.2162 11.866 11.2162 8C11.2162 4.13401 9.77626 1 8 1M14.8108 8H1.18919"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
              <span className="text-base font-medium text-purple-4 tabular-nums">
                {currentTier.peopleMin}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
