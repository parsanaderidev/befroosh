"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function PerformanceCard() {
  return (
        <div className="flex flex-col bg-bg-a1 rounded-xl min-h-[280px] overflow-hidden relative">
          <canvas
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{
              background:
                'url("data:image/png;base64,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") center/100% 100% no-repeat',
            }}
          ></canvas>
          <div className="flex flex-col p-6 px-8 gap-3 items-start">
            <span className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-white flex items-center justify-center">
              <svg
                className="text-amber-4"
                fill="none"
                height="20"
                viewBox="0 0 16 16"
                width="20"
              >
                <path
                  d="M10.2703 6.48649L8.19668 10.4609M14.0541 10.8378H1.94595M12.9497 3.05026C10.2161 0.316581 5.78393 0.316581 3.05026 3.05026C0.316581 5.78391 0.316581 10.2161 3.05026 12.9497C5.78391 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78393 12.9497 3.05026Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </span>
            <div className="flex flex-col gap-0.5 max-w-72">
              <h3 className="text-2xl/7 font-medium text-amber-4">
                Smart comment auto-reply
              </h3>
              <p className="text-2xl/7 font-medium text-fg-4">
                Every comment under your posts is answered automatically, guiding users into sales DMs.
              </p>
            </div>
            <ul className="list-style-none flex flex-col gap-1">
              <li className="flex items-center gap-2">
                <svg
                  className="text-amber-4"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    d="M10.2703 6.48649L8.19668 10.4609M14.0541 10.8378H1.94595M12.9497 3.05026C10.2161 0.316581 5.78393 0.316581 3.05026 3.05026C0.316581 5.78391 0.316581 10.2161 3.05026 12.9497C5.78391 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78393 12.9497 3.05026Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-fg-4">
                  Instant comment responses
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  aria-label="Check Circle"
                  className="text-amber-4"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M4.78516 8.69855L6.91353 10.8378L10.4608 5.54053"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-fg-4">
                  Automated DM trigger from comments
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="text-amber-4"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    d="M8 15C4.13793 15 1 13.069 1 13.069V1.96552C1 1.96552 4.62069 2.93103 8 2.93103M8 15V2.93103M8 15C11.8621 15 15 13.069 15 13.069V1.96552M8 2.93103C10.4138 2.93103 12.1034 1 12.1034 1V12.8276C12.1034 12.8276 10.4138 14.7586 8 14.7586"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-fg-4">
                  Keyword-based smart triggers
                </span>
              </li>
            </ul>
            <a
              className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium [&amp;:disabled]:cursor-not-allowed transition-all [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 [&amp;:disabled_svg]:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none aria-invalid:focus-visible:ring-0 corner-superellipse/1.125 bg-background dark:bg-bg-3 text-fg-4 shadow-[0px_1px_1px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(0,0,0,0.05)] hover:shadow-[0px_1px_1px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(0,0,0,0.1)] dark:shadow-[0px_1px_1px_rgba(0,0,0,0.08),inset_0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:enabled:hover:shadow-[0px_1px_1px_rgba(0,0,0,0.1),inset_0px_0px_0px_1px_rgba(255,255,255,0.2)] active:bg-bg-1 dark:active:bg-bg-4 data-[pressed]:bg-bg-1 dark:data-[pressed]:bg-bg-4 disabled:text-fg-1 h-[32px] px-2.5 text-sm rounded-full active:scale-99 data-[pressed]:scale-99 gap-1 pr-1.5 mt-1"
              data-slot="button"
              href="/performance"
            >
              Learn more
              <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.25"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-full h-[320px] p-6 px-8 pt-0 flex flex-col gap-4 items-center justify-center">
            <div className="flex-1 flex flex-col gap-4 items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="flex items-center justify-center relative">
                  <svg height="128" width="128" className="select-none">
                    {/* Background track ring */}
                    <circle
                      cx="64"
                      cy="64"
                      r="58.4"
                      fill="none"
                      stroke="currentColor"
                      className="text-bg-3/60 dark:text-bg-3/40"
                      strokeWidth="11.2"
                    />
                    {/* Active filled green ring */}
                    <circle
                      cx="64"
                      cy="64"
                      r="58.4"
                      fill="none"
                      stroke="currentColor"
                      className="text-green-4 transition-all duration-700 ease-out"
                      strokeWidth="11.2"
                      strokeDasharray="366.94"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      transform="rotate(-90 64 64)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-4xl text-green-4 font-semibold tabular-nums">
                      100
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xl font-medium text-green-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-4 animate-pulse"></span>
                100% Automated
              </span>
              <p className="text-sm text-fg-3 text-center text-balance max-w-64">
                100% of comments responded to instantly. Never miss an interested customer.
              </p>
              <div className="flex items-center gap-4 text-sm text-fg-4 font-medium">
                <span className="flex items-center gap-1.5 opacity-40">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-4"></span>
                  0-49
                </span>
                <span className="flex items-center gap-1.5 opacity-40">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-4"></span>
                  50-89
                </span>
                <span className="flex items-center gap-1.5 text-green-4 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-4"></span>
                  90+
                </span>
              </div>
            </div>
          </div>
        </div>
  );
}
