"use client";

import React from "react";
import Link from "next/link";

export default function ProfilesCard() {
  return (
        <div className="flex flex-col bg-bg-a1 rounded-xl min-h-[280px] overflow-hidden">
          <div className="flex flex-col p-6 px-8 gap-3 items-start">
            <span className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-white flex items-center justify-center">
              <svg
                className="text-pink-4"
                fill="none"
                height="20"
                viewBox="0 0 16 16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <ellipse
                  cx="5.55"
                  cy="6.25"
                  fill="currentColor"
                  rx="1.05"
                  ry="1.05"
                ></ellipse>
                <ellipse
                  cx="10.45"
                  cy="6.25"
                  fill="currentColor"
                  rx="1.05"
                  ry="1.05"
                ></ellipse>
              </svg>
            </span>
            <div className="flex flex-col gap-0.5 max-w-72">
              <h3 className="text-2xl/7 font-medium text-pink-4">
                Lead capture & forms
              </h3>
              <p className="text-2xl/7 font-medium text-fg-4">
                Automatically collect phone numbers, names, and customer preferences during chat.
              </p>
            </div>
            <ul className="list-style-none flex flex-col gap-1">
              <li className="flex items-center gap-2">
                <svg
                  className="text-pink-4"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    d="M8 4.78378V8L10.6486 10.6486M1 2.51351V5.54054H4.02703M1.37838 10.3333C2.34074 13.0521 4.93743 15 7.98971 15C11.8614 15 15 11.866 15 8C15 4.13401 11.8614 1 7.98971 1C5.08503 1 2.59295 2.76405 1.52933 5.27778"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-fg-4">
                  Automatic phone number capture
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="text-pink-4"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    d="M11.6012 11.9429H13.1441M2.34408 10.9143V3.37143C2.34408 2.61401 2.95809 2 3.71551 2H12.2869C13.0444 2 13.6584 2.61401 13.6584 3.37143V5.42857M2.34408 10.9143H0.972656V11.9429C0.972656 12.7003 1.58667 13.3143 2.34408 13.3143H9.54408M2.34408 10.9143H9.54408M13.6584 5.42857H10.9155C10.1581 5.42857 9.54408 6.04258 9.54408 6.8V12.6286C9.54408 13.386 10.1581 14 10.9155 14H13.6584C14.4158 14 15.0298 13.386 15.0298 12.6286V6.8C15.0298 6.04258 14.4158 5.42857 13.6584 5.42857Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.25"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-fg-4">
                  Audience segmentation
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  aria-label="Identified"
                  className="text-pink-4"
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    d="M6.70312 1.42297C7.41906 0.707007 8.57997 0.707007 9.2959 1.42297L10.1133 2.23938C10.2696 2.39548 10.4813 2.48352 10.7021 2.48352H11.6836C12.6959 2.48376 13.5165 3.30421 13.5166 4.31653V5.29797C13.5167 5.51888 13.6045 5.73063 13.7607 5.88684L14.5771 6.70325C15.2931 7.41914 15.293 8.58001 14.5771 9.29602L13.7607 10.1134C13.6045 10.2697 13.5166 10.4813 13.5166 10.7023V11.6837C13.5164 12.6959 12.6958 13.5165 11.6836 13.5167H10.7021C10.4812 13.5167 10.2696 13.6046 10.1133 13.7609L9.2959 14.5773C8.57996 15.2931 7.41904 15.2932 6.70312 14.5773L5.88672 13.7609C5.73051 13.6046 5.51875 13.5168 5.29785 13.5167H4.31641C3.30406 13.5167 2.48363 12.696 2.4834 11.6837V10.7023C2.4834 10.4813 2.39536 10.2696 2.23926 10.1134L1.42285 9.29602C0.706892 8.58002 0.706892 7.41918 1.42285 6.70325L2.23926 5.88684C2.39538 5.73064 2.48332 5.51882 2.4834 5.29797V4.31653C2.48346 3.30409 3.30396 2.48356 4.31641 2.48352H5.29785C5.5187 2.48344 5.73052 2.39552 5.88672 2.23938L6.70312 1.42297Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M5.5 8L7.1875 9.75L10.5 5.75"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-fg-4">
                  Customer CRM database
                </span>
              </li>
            </ul>
            <a
              className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium [&amp;:disabled]:cursor-not-allowed transition-all [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 [&amp;:disabled_svg]:opacity-30 focus-visible:ring-2 focus-visible:ring-purple-2 focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none aria-invalid:focus-visible:ring-0 corner-superellipse/1.125 bg-background dark:bg-bg-3 text-fg-4 shadow-[0px_1px_1px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(0,0,0,0.05)] hover:shadow-[0px_1px_1px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(0,0,0,0.1)] dark:shadow-[0px_1px_1px_rgba(0,0,0,0.08),inset_0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:enabled:hover:shadow-[0px_1px_1px_rgba(0,0,0,0.1),inset_0px_0px_0px_1px_rgba(255,255,255,0.2)] active:bg-bg-1 dark:active:bg-bg-4 data-[pressed]:bg-bg-1 dark:data-[pressed]:bg-bg-4 disabled:text-fg-1 h-[32px] px-2.5 text-sm rounded-full active:scale-99 data-[pressed]:scale-99 gap-1 pr-1.5 mt-1"
              data-slot="button"
              href="/profiles"
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
          <div className="w-full h-[320px] relative overflow-hidden">
            <div className="absolute inset-0 w-full h-0"></div>
            <div
              className="flex flex-col"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            >
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19gqea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19gqea6b6»)">
                          <rect fill="#4D96FF" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#845EC2"
                            filter="url(#filter_«R19gqea6b6»)"
                            transform="translate(-6 -6) rotate(-46 40 40) scale(1.3)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#F9C80E"
                            filter="url(#filter_«R19gqea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(-1 1) rotate(-249 40 40) scale(1.3)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19gqea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="us_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#us_a)">
                        <path
                          d="M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z"
                          fill="#eee"
                        ></path>
                        <path
                          d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"
                          fill="#d80027"
                        ></path>
                        <path d="M0 0h256v256H0Z" fill="#0052b4"></path>
                        <path
                          d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z"
                          fill="#eee"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Sarah Mitchell
                    </h2>
                    <svg
                      aria-hidden="true"
                      aria-label="Identified"
                      className="text-purple-4"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        d="M6.70312 1.42297C7.41906 0.707007 8.57997 0.707007 9.2959 1.42297L10.1133 2.23938C10.2696 2.39548 10.4813 2.48352 10.7021 2.48352H11.6836C12.6959 2.48376 13.5165 3.30421 13.5166 4.31653V5.29797C13.5167 5.51888 13.6045 5.73063 13.7607 5.88684L14.5771 6.70325C15.2931 7.41914 15.293 8.58001 14.5771 9.29602L13.7607 10.1134C13.6045 10.2697 13.5166 10.4813 13.5166 10.7023V11.6837C13.5164 12.6959 12.6958 13.5165 11.6836 13.5167H10.7021C10.4812 13.5167 10.2696 13.6046 10.1133 13.7609L9.2959 14.5773C8.57996 15.2931 7.41904 15.2932 6.70312 14.5773L5.88672 13.7609C5.73051 13.6046 5.51875 13.5168 5.29785 13.5167H4.31641C3.30406 13.5167 2.48363 12.696 2.4834 11.6837V10.7023C2.4834 10.4813 2.39536 10.2696 2.23926 10.1134L1.42285 9.29602C0.706892 8.58002 0.706892 7.41918 1.42285 6.70325L2.23926 5.88684C2.39538 5.73064 2.48332 5.51882 2.4834 5.29797V4.31653C2.48346 3.30409 3.30396 2.48356 4.31641 2.48352H5.29785C5.5187 2.48344 5.73052 2.39552 5.88672 2.23938L6.70312 1.42297ZM10.999 5.34583C10.7166 5.10973 10.2957 5.1474 10.0596 5.42981L7.13574 8.9259L5.98438 7.70911C5.73137 7.44165 5.30947 7.42978 5.04199 7.68274C4.77457 7.93575 4.76267 8.35765 5.01562 8.62512L6.68262 10.3868C6.81339 10.5249 6.99743 10.6007 7.1875 10.5948C7.37736 10.5888 7.5558 10.5022 7.67773 10.3566L11.083 6.28528C11.319 6.00296 11.2811 5.58205 10.999 5.34583Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding">
                    <div className="shrink-0">
                      <span style={{ width: "16px", height: "16px" }}>
                        <img
                          alt=""
                          className="aspect-square"
                          src="data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///zD9/f2W/f392P39/fn9/f35/f391/39/ZT+/v4uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Cf39/Zn///////////////////////////////////////////39/ZX///8IAAAAAAAAAAAAAAAA/v7+Cf39/cH/////+v35/7TZp/92ul3/WKs6/1iqOv9yuFn/rNWd//j79v///////f39v////wgAAAAAAAAAAP39/Zn/////7PXp/3G3WP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP+Or1j//vDo///////9/f2VAAAAAP///zD/////+vz5/3G3V/9TqDT/WKo6/6LQkf/U6cz/1urO/6rUm/+Zo0r/8IZB//adZ////v7///////7+/i79/f2Y/////4nWzf9Lqkj/Vqo4/9Xqzv///////////////////////ebY//SHRv/0hUL//NjD///////9/f2U/f392v////8sxPH/Ebzt/43RsP/////////////////////////////////4roL/9IVC//i1jf///////f391/39/fr/////Cr37/wW8+/+16/7/////////////////9IVC//SFQv/0hUL/9IVC//SFQv/3pnX///////39/fn9/f36/////wu++/8FvPv/tuz+//////////////////SFQv/0hUL/9IVC//SFQv/0hUL/96p7///////9/f35/f392/////81yfz/CrL5/2uk9v///////////////////////////////////////////////////////f392P39/Zn/////ks/7/zdS7P84Rur/0NT6///////////////////////9/f////////////////////////39/Zb+/v4y//////n5/v9WYu3/NUPq/ztJ6/+VnPT/z9L6/9HU+v+WnfT/Ul7t/+Hj/P////////////////////8wAAAAAP39/Z3/////6Or9/1hj7v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9sdvD////////////9/f2YAAAAAAAAAAD///8K/f39w//////5+f7/paz2/11p7v88Suv/Okfq/1pm7v+iqfX/+fn+///////9/f3B/v7+CQAAAAAAAAAAAAAAAP///wr9/f2d///////////////////////////////////////////9/f2Z/v7+CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f2Z/f392/39/fr9/f36/f392v39/Zj///8wAAAAAAAAAAAAAAAAAAAAAPAPAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAACAAQAAwAMAAPAPAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/g3+/v5X/f39mf39/cj9/f3q/f39+f39/fn9/f3q/f39yP39/Zn+/v5W////DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f2c/f399f/////////////////////////////////////////////////////9/f31/f39mv7+/iMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/gn9/f2K/f39+////////////////////////////////////////////////////////////////////////////f39+v39/Yf///8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4k/f390v////////////////////////////////////////////////////////////////////////////////////////////////39/dD///8iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////MP39/er//////////////////////////+r05v+v16H/gsBs/2WxSf9Wqjj/Vqk3/2OwRv99vWX/pdKV/97u2P////////////////////////////39/ej+/v4vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f3q/////////////////////+v15/+Pxnv/VKk2/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/36+Z//d7tf///////////////////////39/ej///8iAAAAAAAAAAAAAAAAAAAAAAAAAAD///8K/f390//////////////////////E4bn/XKw+/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1apN/+x0pv///////////////////////39/dD///8IAAAAAAAAAAAAAAAAAAAAAP39/Yv/////////////////////sdij/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/YKU1/8qOPv/5wZ////////////////////////39/YcAAAAAAAAAAAAAAAD+/v4l/f39+////////////////8Lgt/9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9utlT/n86N/7faqv+426v/pdKV/3u8ZP9UqDX/U6g0/3egN//jiUH/9IVC//SFQv/82MP//////////////////f39+v7+/iMAAAAAAAAAAP39/Z3////////////////q9Ob/W6w+/1OoNP9TqDT/U6g0/1OoNP9nskz/zOXC/////////////////////////////////+Dv2v+osWP/8YVC//SFQv/0hUL/9IVC//WQVP/++fb//////////////////f39mgAAAAD+/v4O/f399v///////////////4LHj/9TqDT/U6g0/1OoNP9TqDT/dblc//L58P/////////////////////////////////////////////8+v/3p3f/9IVC//SFQv/0hUL/9IVC//rIqf/////////////////9/f31////DP7+/ln////////////////f9v7/Cbz2/zOwhv9TqDT/U6g0/2KwRv/v9+z///////////////////////////////////////////////////////738//1kFT/9IVC//SFQv/0hUL/9plg///////////////////////+/v5W/f39nP///////////////4jf/f8FvPv/Bbz7/yG1s/9QqDz/vN2w//////////////////////////////////////////////////////////////////rHqP/0hUL/9IVC//SFQv/0hUL//vDn//////////////////39/Zn9/f3L////////////////R878/wW8+/8FvPv/Bbz7/y7C5P/7/fr//////////////////////////////////////////////////////////////////ere//SFQv/0hUL/9IVC//SFQv/718H//////////////////f39yP39/ez///////////////8cwvv/Bbz7/wW8+/8FvPv/WNL8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//rIqv/////////////////9/f3q/f39+v///////////////we9+/8FvPv/Bbz7/wW8+/993P3///////////////////////////////////////SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+cGf//////////////////39/fn9/f36////////////////B737/wW8+/8FvPv/Bbz7/33c/f//////////////////////////////////////9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/6xaX//////////////////f39+f39/e3///////////////8cwvv/Bbz7/wW8+/8FvPv/WdP8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vVv//////////////////9/f3q/f39y////////////////0bN/P8FvPv/Bbz7/wW8+/8hrvn/+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/cj9/f2c////////////////ht/9/wW8+/8FvPv/FZP1/zRJ6/+zuPf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39mf7+/lr////////////////d9v7/B7n7/yB38f81Q+r/NUPq/0hV7P/u8P3////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v5X////D/39/ff///////////////9tkPT/NUPq/zVD6v81Q+r/NUPq/2Fs7//y8v7////////////////////////////////////////////09f7//////////////////////////////////////////////////f399f7+/g0AAAAA/f39n////////////////+Tm/P89Suv/NUPq/zVD6v81Q+r/NUPq/1Bc7f/IzPn/////////////////////////////////x8v5/0xY7P+MlPP////////////////////////////////////////////9/f2cAAAAAAAAAAD+/v4n/f39/P///////////////7W69/81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9ZZe7/k5v0/6609/+vtff/lJv0/1pm7v81Q+r/NUPq/zVD6v+GjvL//v7//////////////////////////////f39+/7+/iQAAAAAAAAAAAAAAAD9/f2N/////////////////////6Cn9f81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v+BivL////////////////////////////9/f2KAAAAAAAAAAAAAAAAAAAAAP7+/gv9/f3V/////////////////////7W69/8+S+v/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/P0zr/7q/+P///////////////////////f390v7+/gkAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3r/////////////////////+Xn/P94gfH/NkTq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NkTq/3Z/8f/l5/z///////////////////////39/er+/v4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f3r///////////////////////////k5vz/nqX1/2p08P9IVez/OEbq/zdF6v9GU+z/aHLv/5qh9f/i5Pz////////////////////////////9/f3q////MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3V/////////////////////////////////////////////////////////////////////////////////////////////////f390v7+/iQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wr9/f2N/f39/P///////////////////////////////////////////////////////////////////////////f39+/39/Yv+/v4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4n/f39n/39/ff//////////////////////////////////////////////////////f399v39/Z3+/v4lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Dv7+/lr9/f2c/f39y/39/e39/f36/f39+v39/ez9/f3L/f39nP7+/ln+/v4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AA///AAD//AAAP/gAAB/wAAAP4AAAB8AAAAPAAAADgAAAAYAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAcAAAAPAAAAD4AAAB/AAAA/4AAAf/AAAP/8AAP//wAP/"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                    </div>
                    <div className="truncate text-fg-4">Google</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-green-4">
                  $249
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  now
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19haea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19haea6b6»)">
                          <rect fill="#FFD93D" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#6BCB77"
                            filter="url(#filter_«R19haea6b6»)"
                            transform="translate(-6 6) rotate(-22 40 40) scale(1.3)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#4D96FF"
                            filter="url(#filter_«R19haea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(5 -5) rotate(213 40 40) scale(1.3)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19haea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="gb_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#gb_a)">
                        <path
                          d="m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"
                          fill="#eee"
                        ></path>
                        <path
                          d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
                          fill="#0052b4"
                        ></path>
                        <path
                          d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"
                          fill="#d80027"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Quirky Penguin
                    </h2>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding text-fg-2">
                    <div className="shrink-0">
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                      >
                        <path
                          d="M9.17647 4L13 8L9.17647 12M3 8H12.1176"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="truncate text-fg-2">Direct</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-fg-2">
                  $0
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  2m
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19hqea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19hqea6b6»)">
                          <rect fill="#43BCCD" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#2D3047"
                            filter="url(#filter_«R19hqea6b6»)"
                            transform="translate(4 4) rotate(236 40 40) scale(1.4)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#FF6B6B"
                            filter="url(#filter_«R19hqea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(2 -2) rotate(354 40 40) scale(1.4)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19hqea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="ca_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#ca_a)">
                        <path
                          d="M0 0v512h144l112-64 112 64h144V0H368L256 64 144 0Z"
                          fill="#d80027"
                        ></path>
                        <path d="M144 0h224v512H144Z" fill="#eee"></path>
                        <path
                          d="m301 289 44-22-22-11v-22l-45 22 23-44h-23l-22-34-22 33h-23l23 45-45-22v22l-22 11 45 22-12 23h45v33h22v-33h45z"
                          fill="#d80027"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      James Chen
                    </h2>
                    <svg
                      aria-hidden="true"
                      aria-label="Identified"
                      className="text-purple-4"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        d="M6.70312 1.42297C7.41906 0.707007 8.57997 0.707007 9.2959 1.42297L10.1133 2.23938C10.2696 2.39548 10.4813 2.48352 10.7021 2.48352H11.6836C12.6959 2.48376 13.5165 3.30421 13.5166 4.31653V5.29797C13.5167 5.51888 13.6045 5.73063 13.7607 5.88684L14.5771 6.70325C15.2931 7.41914 15.293 8.58001 14.5771 9.29602L13.7607 10.1134C13.6045 10.2697 13.5166 10.4813 13.5166 10.7023V11.6837C13.5164 12.6959 12.6958 13.5165 11.6836 13.5167H10.7021C10.4812 13.5167 10.2696 13.6046 10.1133 13.7609L9.2959 14.5773C8.57996 15.2931 7.41904 15.2932 6.70312 14.5773L5.88672 13.7609C5.73051 13.6046 5.51875 13.5168 5.29785 13.5167H4.31641C3.30406 13.5167 2.48363 12.696 2.4834 11.6837V10.7023C2.4834 10.4813 2.39536 10.2696 2.23926 10.1134L1.42285 9.29602C0.706892 8.58002 0.706892 7.41918 1.42285 6.70325L2.23926 5.88684C2.39538 5.73064 2.48332 5.51882 2.4834 5.29797V4.31653C2.48346 3.30409 3.30396 2.48356 4.31641 2.48352H5.29785C5.5187 2.48344 5.73052 2.39552 5.88672 2.23938L6.70312 1.42297ZM10.999 5.34583C10.7166 5.10973 10.2957 5.1474 10.0596 5.42981L7.13574 8.9259L5.98438 7.70911C5.73137 7.44165 5.30947 7.42978 5.04199 7.68274C4.77457 7.93575 4.76267 8.35765 5.01562 8.62512L6.68262 10.3868C6.81339 10.5249 6.99743 10.6007 7.1875 10.5948C7.37736 10.5888 7.5558 10.5022 7.67773 10.3566L11.083 6.28528C11.319 6.00296 11.2811 5.58205 10.999 5.34583Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding">
                    <div className="shrink-0">
                      <span style={{ width: "16px", height: "16px" }}>
                        <img
                          alt=""
                          className="aspect-square"
                          src="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB7ElEQVR4Ae1XMZLCMAwUdw0ldJQ8ATpKnkBJByUd8ALyA/gBdJTQUtHS8QT4AaRM5ctmThmfogQ75CYNmhGTbGJr45Vk0yAiQzXaF9VsHwIZAofDgYwxqo9GI/K16/X6cqyxvdVqmdvtZh6PhwmCIHXcw7vdrpFj8ny9XhsYxhe8lwWHw2EycLFYpNh0Ok2w8/nsFHy1WrkE1wnAN5tNMkGv10ux3W6XIab5fD5P3ovldCGrP2Ap4LiW8uRJAcIwe1wpArYU0FJimhQgxaQ9cqX4BZYCgSVmS8HBfRP1JQEsY1xKGSmAcTC+l0QrIWDraicVMBBA4O1265ScpQnAMbkMwphjub1HAI7EkxoDK7n0/gQQGATsCmDMo+z++Hf8E5CjPZ9PiqKIZrMZhWFIl8slxcbjMTWbTTqdTuRrXoz5i2WXRIL+WxWw2+Uml13rnJUT4K9E9nMFaF3SxiojoO1u2rJzl4z3/+oIcHBMLiUp2rDe3ozg+BIYtNee87KjGzLGndPx7JD/0K7xog2Gl30ymaSY1jm9CPhsrXnnBK1zOhHgCWWtF7l2TtA6p3S1E+73exoMBrRcLul4PJKL3e93arfbSUeMA1O/36eYPHU6nWQu7pyaqRlfZnezV05anhSN34va7PPXrHYCP+VaTG3LBV1KAAAAAElFTkSuQmCC"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                    </div>
                    <div className="truncate text-fg-4">Twitter</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-green-4">
                  $99
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  5m
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19iaea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19iaea6b6»)">
                          <rect fill="#43BCCD" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#2D3047"
                            filter="url(#filter_«R19iaea6b6»)"
                            transform="translate(0 0) rotate(216 40 40) scale(1.2)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#FF6B6B"
                            filter="url(#filter_«R19iaea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(-4 4) rotate(-324 40 40) scale(1.2)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19iaea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="de_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#de_a)">
                        <path
                          d="m0 345 256.7-25.5L512 345v167H0z"
                          fill="#ffda44"
                        ></path>
                        <path
                          d="m0 167 255-23 257 23v178H0z"
                          fill="#d80027"
                        ></path>
                        <path d="M0 0h512v167H0z" fill="#333"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Fluffy Koala
                    </h2>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding">
                    <div className="shrink-0">
                      <span style={{ width: "16px", height: "16px" }}>
                        <img
                          alt=""
                          className="aspect-square"
                          src="data:image/x-icon;base64,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AAAAAAAAKysrBhYWGUcWFhiVFRUYvxUVGNkWFhfzFhYX8xUVGNkVFRi/FhYYlRYWGUcrKysGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                    </div>
                    <div className="truncate text-fg-4">GitHub</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-fg-2">
                  $0
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  12m
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19iqea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19iqea6b6»)">
                          <rect fill="#EA3546" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#43BCCD"
                            filter="url(#filter_«R19iqea6b6»)"
                            transform="translate(6 6) rotate(334 40 40) scale(1.3)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#2D3047"
                            filter="url(#filter_«R19iqea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(-1 1) rotate(-321 40 40) scale(1.3)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19iqea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="fr_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#fr_a)">
                        <path
                          d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"
                          fill="#eee"
                        ></path>
                        <path d="M0 0h167v512H0z" fill="#0052b4"></path>
                        <path d="M345 0h167v512H345z" fill="#d80027"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Emma Rodriguez
                    </h2>
                    <svg
                      aria-hidden="true"
                      aria-label="Identified"
                      className="text-purple-4"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        d="M6.70312 1.42297C7.41906 0.707007 8.57997 0.707007 9.2959 1.42297L10.1133 2.23938C10.2696 2.39548 10.4813 2.48352 10.7021 2.48352H11.6836C12.6959 2.48376 13.5165 3.30421 13.5166 4.31653V5.29797C13.5167 5.51888 13.6045 5.73063 13.7607 5.88684L14.5771 6.70325C15.2931 7.41914 15.293 8.58001 14.5771 9.29602L13.7607 10.1134C13.6045 10.2697 13.5166 10.4813 13.5166 10.7023V11.6837C13.5164 12.6959 12.6958 13.5165 11.6836 13.5167H10.7021C10.4812 13.5167 10.2696 13.6046 10.1133 13.7609L9.2959 14.5773C8.57996 15.2931 7.41904 15.2932 6.70312 14.5773L5.88672 13.7609C5.73051 13.6046 5.51875 13.5168 5.29785 13.5167H4.31641C3.30406 13.5167 2.48363 12.696 2.4834 11.6837V10.7023C2.4834 10.4813 2.39536 10.2696 2.23926 10.1134L1.42285 9.29602C0.706892 8.58002 0.706892 7.41918 1.42285 6.70325L2.23926 5.88684C2.39538 5.73064 2.48332 5.51882 2.4834 5.29797V4.31653C2.48346 3.30409 3.30396 2.48356 4.31641 2.48352H5.29785C5.5187 2.48344 5.73052 2.39552 5.88672 2.23938L6.70312 1.42297ZM10.999 5.34583C10.7166 5.10973 10.2957 5.1474 10.0596 5.42981L7.13574 8.9259L5.98438 7.70911C5.73137 7.44165 5.30947 7.42978 5.04199 7.68274C4.77457 7.93575 4.76267 8.35765 5.01562 8.62512L6.68262 10.3868C6.81339 10.5249 6.99743 10.6007 7.1875 10.5948C7.37736 10.5888 7.5558 10.5022 7.67773 10.3566L11.083 6.28528C11.319 6.00296 11.2811 5.58205 10.999 5.34583Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding">
                    <div className="shrink-0">
                      <span style={{ width: "16px", height: "16px" }}>
                        <img
                          alt=""
                          className="aspect-square"
                          src="data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///zD9/f2W/f392P39/fn9/f35/f391/39/ZT+/v4uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Cf39/Zn///////////////////////////////////////////39/ZX///8IAAAAAAAAAAAAAAAA/v7+Cf39/cH/////+v35/7TZp/92ul3/WKs6/1iqOv9yuFn/rNWd//j79v///////f39v////wgAAAAAAAAAAP39/Zn/////7PXp/3G3WP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP+Or1j//vDo///////9/f2VAAAAAP///zD/////+vz5/3G3V/9TqDT/WKo6/6LQkf/U6cz/1urO/6rUm/+Zo0r/8IZB//adZ////v7///////7+/i79/f2Y/////4nWzf9Lqkj/Vqo4/9Xqzv///////////////////////ebY//SHRv/0hUL//NjD///////9/f2U/f392v////8sxPH/Ebzt/43RsP/////////////////////////////////4roL/9IVC//i1jf///////f391/39/fr/////Cr37/wW8+/+16/7/////////////////9IVC//SFQv/0hUL/9IVC//SFQv/3pnX///////39/fn9/f36/////wu++/8FvPv/tuz+//////////////////SFQv/0hUL/9IVC//SFQv/0hUL/96p7///////9/f35/f392/////81yfz/CrL5/2uk9v///////////////////////////////////////////////////////f392P39/Zn/////ks/7/zdS7P84Rur/0NT6///////////////////////9/f////////////////////////39/Zb+/v4y//////n5/v9WYu3/NUPq/ztJ6/+VnPT/z9L6/9HU+v+WnfT/Ul7t/+Hj/P////////////////////8wAAAAAP39/Z3/////6Or9/1hj7v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9sdvD////////////9/f2YAAAAAAAAAAD///8K/f39w//////5+f7/paz2/11p7v88Suv/Okfq/1pm7v+iqfX/+fn+///////9/f3B/v7+CQAAAAAAAAAAAAAAAP///wr9/f2d///////////////////////////////////////////9/f2Z/v7+CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f2Z/f392/39/fr9/f36/f392v39/Zj///8wAAAAAAAAAAAAAAAAAAAAAPAPAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAACAAQAAwAMAAPAPAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/g3+/v5X/f39mf39/cj9/f3q/f39+f39/fn9/f3q/f39yP39/Zn+/v5W////DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f2c/f399f/////////////////////////////////////////////////////9/f31/f39mv7+/iMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/gn9/f2K/f39+////////////////////////////////////////////////////////////////////////////f39+v39/Yf///8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4k/f390v////////////////////////////////////////////////////////////////////////////////////////////////39/dD///8iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////MP39/er//////////////////////////+r05v+v16H/gsBs/2WxSf9Wqjj/Vqk3/2OwRv99vWX/pdKV/97u2P////////////////////////////39/ej+/v4vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f3q/////////////////////+v15/+Pxnv/VKk2/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/36+Z//d7tf///////////////////////39/ej///8iAAAAAAAAAAAAAAAAAAAAAAAAAAD///8K/f390//////////////////////E4bn/XKw+/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1apN/+x0pv///////////////////////39/dD///8IAAAAAAAAAAAAAAAAAAAAAP39/Yv/////////////////////sdij/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/YKU1/8qOPv/5wZ////////////////////////39/YcAAAAAAAAAAAAAAAD+/v4l/f39+////////////////8Lgt/9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9utlT/n86N/7faqv+426v/pdKV/3u8ZP9UqDX/U6g0/3egN//jiUH/9IVC//SFQv/82MP//////////////////f39+v7+/iMAAAAAAAAAAP39/Z3////////////////q9Ob/W6w+/1OoNP9TqDT/U6g0/1OoNP9nskz/zOXC/////////////////////////////////+Dv2v+osWP/8YVC//SFQv/0hUL/9IVC//WQVP/++fb//////////////////f39mgAAAAD+/v4O/f399v///////////////4LHj/9TqDT/U6g0/1OoNP9TqDT/dblc//L58P/////////////////////////////////////////////8+v/3p3f/9IVC//SFQv/0hUL/9IVC//rIqf/////////////////9/f31////DP7+/ln////////////////f9v7/Cbz2/zOwhv9TqDT/U6g0/2KwRv/v9+z///////////////////////////////////////////////////////738//1kFT/9IVC//SFQv/0hUL/9plg///////////////////////+/v5W/f39nP///////////////4jf/f8FvPv/Bbz7/yG1s/9QqDz/vN2w//////////////////////////////////////////////////////////////////rHqP/0hUL/9IVC//SFQv/0hUL//vDn//////////////////39/Zn9/f3L////////////////R878/wW8+/8FvPv/Bbz7/y7C5P/7/fr//////////////////////////////////////////////////////////////////ere//SFQv/0hUL/9IVC//SFQv/718H//////////////////f39yP39/ez///////////////8cwvv/Bbz7/wW8+/8FvPv/WNL8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//rIqv/////////////////9/f3q/f39+v///////////////we9+/8FvPv/Bbz7/wW8+/993P3///////////////////////////////////////SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+cGf//////////////////39/fn9/f36////////////////B737/wW8+/8FvPv/Bbz7/33c/f//////////////////////////////////////9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/6xaX//////////////////f39+f39/e3///////////////8cwvv/Bbz7/wW8+/8FvPv/WdP8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vVv//////////////////9/f3q/f39y////////////////0bN/P8FvPv/Bbz7/wW8+/8hrvn/+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/cj9/f2c////////////////ht/9/wW8+/8FvPv/FZP1/zRJ6/+zuPf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39mf7+/lr////////////////d9v7/B7n7/yB38f81Q+r/NUPq/0hV7P/u8P3////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v5X////D/39/ff///////////////9tkPT/NUPq/zVD6v81Q+r/NUPq/2Fs7//y8v7////////////////////////////////////////////09f7//////////////////////////////////////////////////f399f7+/g0AAAAA/f39n////////////////+Tm/P89Suv/NUPq/zVD6v81Q+r/NUPq/1Bc7f/IzPn/////////////////////////////////x8v5/0xY7P+MlPP////////////////////////////////////////////9/f2cAAAAAAAAAAD+/v4n/f39/P///////////////7W69/81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9ZZe7/k5v0/6609/+vtff/lJv0/1pm7v81Q+r/NUPq/zVD6v+GjvL//v7//////////////////////////////f39+/7+/iQAAAAAAAAAAAAAAAD9/f2N/////////////////////6Cn9f81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v+BivL////////////////////////////9/f2KAAAAAAAAAAAAAAAAAAAAAP7+/gv9/f3V/////////////////////7W69/8+S+v/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/P0zr/7q/+P///////////////////////f390v7+/gkAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3r/////////////////////+Xn/P94gfH/NkTq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NkTq/3Z/8f/l5/z///////////////////////39/er+/v4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f3r///////////////////////////k5vz/nqX1/2p08P9IVez/OEbq/zdF6v9GU+z/aHLv/5qh9f/i5Pz////////////////////////////9/f3q////MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3V/////////////////////////////////////////////////////////////////////////////////////////////////f390v7+/iQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wr9/f2N/f39/P///////////////////////////////////////////////////////////////////////////f39+/39/Yv+/v4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4n/f39n/39/ff//////////////////////////////////////////////////////f399v39/Z3+/v4lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Dv7+/lr9/f2c/f39y/39/e39/f36/f39+v39/ez9/f3L/f39nP7+/ln+/v4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AA///AAD//AAAP/gAAB/wAAAP4AAAB8AAAAPAAAADgAAAAYAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAcAAAAPAAAAD4AAAB/AAAA/4AAAf/AAAP/8AAP//wAP/"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                    </div>
                    <div className="truncate text-fg-4">Google</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-green-4">
                  $149
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  1h
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19jaea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19jaea6b6»)">
                          <rect fill="#43BCCD" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#2D3047"
                            filter="url(#filter_«R19jaea6b6»)"
                            transform="translate(0 0) rotate(336 40 40) scale(1.2)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#FF6B6B"
                            filter="url(#filter_«R19jaea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(-4 -4) rotate(-324 40 40) scale(1.2)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19jaea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="au_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#au_a)">
                        <path d="M0 0h512v512H0z" fill="#0052b4"></path>
                        <path
                          d="m154 300 14 30 32-8-14 30 25 20-32 7 1 33-26-21-26 21 1-33-33-7 26-20-14-30 32 8zm222-27h47l-38 27 15-44 14 44zm7-162 7 15 16-4-7 15 12 10-15 3v17l-13-11-13 11v-17l-15-3 12-10-7-15 16 4zm57 67 7 15 16-4-7 15 12 10-15 3v16l-13-10-13 11v-17l-15-3 12-10-7-15 16 4zm-122 22 7 15 16-4-7 15 12 10-15 3v16l-13-10-13 11v-17l-15-3 12-10-7-15 16 4zm65 156 7 15 16-4-7 15 12 10-15 3v17l-13-11-13 11v-17l-15-3 12-10-7-15 16 4zM0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
                          fill="#eee"
                        ></path>
                        <path
                          d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
                          fill="#d80027"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Gentle Mammoth
                    </h2>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding text-fg-2">
                    <div className="shrink-0">
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                      >
                        <path
                          d="M9.17647 4L13 8L9.17647 12M3 8H12.1176"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="truncate text-fg-2">Direct</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-fg-2">
                  $0
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  3h
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19jqea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19jqea6b6»)">
                          <rect fill="#4D96FF" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#845EC2"
                            filter="url(#filter_«R19jqea6b6»)"
                            transform="translate(-6 -6) rotate(-206 40 40) scale(1.3)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#F9C80E"
                            filter="url(#filter_«R19jqea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(-1 -1) rotate(-129 40 40) scale(1.3)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19jqea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="nl_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#nl_a)">
                        <path
                          d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
                          fill="#eee"
                        ></path>
                        <path d="M0 0h512v167H0z" fill="#a2001d"></path>
                        <path d="M0 345h512v167H0z" fill="#0052b4"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Marcus Webb
                    </h2>
                    <svg
                      aria-hidden="true"
                      aria-label="Identified"
                      className="text-purple-4"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        d="M6.70312 1.42297C7.41906 0.707007 8.57997 0.707007 9.2959 1.42297L10.1133 2.23938C10.2696 2.39548 10.4813 2.48352 10.7021 2.48352H11.6836C12.6959 2.48376 13.5165 3.30421 13.5166 4.31653V5.29797C13.5167 5.51888 13.6045 5.73063 13.7607 5.88684L14.5771 6.70325C15.2931 7.41914 15.293 8.58001 14.5771 9.29602L13.7607 10.1134C13.6045 10.2697 13.5166 10.4813 13.5166 10.7023V11.6837C13.5164 12.6959 12.6958 13.5165 11.6836 13.5167H10.7021C10.4812 13.5167 10.2696 13.6046 10.1133 13.7609L9.2959 14.5773C8.57996 15.2931 7.41904 15.2932 6.70312 14.5773L5.88672 13.7609C5.73051 13.6046 5.51875 13.5168 5.29785 13.5167H4.31641C3.30406 13.5167 2.48363 12.696 2.4834 11.6837V10.7023C2.4834 10.4813 2.39536 10.2696 2.23926 10.1134L1.42285 9.29602C0.706892 8.58002 0.706892 7.41918 1.42285 6.70325L2.23926 5.88684C2.39538 5.73064 2.48332 5.51882 2.4834 5.29797V4.31653C2.48346 3.30409 3.30396 2.48356 4.31641 2.48352H5.29785C5.5187 2.48344 5.73052 2.39552 5.88672 2.23938L6.70312 1.42297ZM10.999 5.34583C10.7166 5.10973 10.2957 5.1474 10.0596 5.42981L7.13574 8.9259L5.98438 7.70911C5.73137 7.44165 5.30947 7.42978 5.04199 7.68274C4.77457 7.93575 4.76267 8.35765 5.01562 8.62512L6.68262 10.3868C6.81339 10.5249 6.99743 10.6007 7.1875 10.5948C7.37736 10.5888 7.5558 10.5022 7.67773 10.3566L11.083 6.28528C11.319 6.00296 11.2811 5.58205 10.999 5.34583Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding">
                    <div className="shrink-0">
                      <span style={{ width: "16px", height: "16px" }}>
                        <span>
                          <svg
                            className="text-content-tertiary"
                            fill="none"
                            height="16"
                            viewBox="0 0 16 16"
                            width="16"
                          >
                            <path
                              d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1M8 15C6.22373 15 4.78378 11.866 4.78378 8C4.78378 4.13401 6.22373 1 8 1M8 15C9.77626 15 11.2162 11.866 11.2162 8C11.2162 4.13401 9.77626 1 8 1M14.8108 8H1.18919"
                              stroke="currentColor"
                              strokeLinecap="square"
                              strokeWidth="1.25"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="truncate text-fg-4">LinkedIn</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-green-4">
                  $49
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  5h
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19kaea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19kaea6b6»)">
                          <rect fill="#F86624" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#EA3546"
                            filter="url(#filter_«R19kaea6b6»)"
                            transform="translate(4 4) rotate(252 40 40) scale(1.4)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#43BCCD"
                            filter="url(#filter_«R19kaea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(6 6) rotate(198 40 40) scale(1.4)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19kaea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="jp_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#jp_a)">
                        <path d="M0 0h512v512H0z" fill="#eee"></path>
                        <circle
                          cx="256"
                          cy="256"
                          fill="#d80027"
                          r="111.3"
                        ></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Clever Fox
                    </h2>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding">
                    <div className="shrink-0">
                      <span style={{ width: "16px", height: "16px" }}>
                        <img
                          alt=""
                          className="aspect-square"
                          src="data:image/vnd.microsoft.icon;base64,AAABAAEAAAAAAAEAIABRHQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAEAAAABAAgGAAAAXHKoZgAACkFpQ0NQSUNDIFByb2ZpbGUAAEgNnZZ3VFPZFofPvTe90BIiICX0GnoJINI7SBUEUYlJgFAChoQmdkQFRhQRKVZkVMABR4ciY0UUC4OCYtcJ8hBQxsFRREXl3YxrCe+tNfPemv3HWd/Z57fX2Wfvfde6AFD8ggTCdFgBgDShWBTu68FcEhPLxPcCGBABDlgBwOFmZgRH+EQC1Py9PZmZqEjGs/buLoBku9ssv1Amc9b/f5EiN0MkBgAKRdU2PH4mF+UClFOzxRky/wTK9JUpMoYxMhahCaKsIuPEr2z2p+Yru8mYlybkoRpZzhm8NJ6Mu1DemiXho4wEoVyYJeBno3wHZb1USZoA5fco09P4nEwAMBSZX8znJqFsiTJFFBnuifICAAiUxDm8cg6L+TlongB4pmfkigSJSWKmEdeYaeXoyGb68bNT+WIxK5TDTeGIeEzP9LQMjjAXgK9vlkUBJVltmWiR7a0c7e1Z1uZo+b/Z3x5+U/09yHr7VfEm7M+eQYyeWd9s7KwvvRYA9iRamx2zvpVVALRtBkDl4axP7yAA8gUAtN6c8x6GbF6SxOIMJwuL7OxscwGfay4r6Df7n4Jvyr+GOfeZy+77VjumFz+BI0kVM2VF5aanpktEzMwMDpfPZP33EP/jwDlpzcnDLJyfwBfxhehVUeiUCYSJaLuFPIFYkC5kCoR/1eF/GDYnBxl+nWsUaHVfAH2FOVC4SQfIbz0AQyMDJG4/egJ961sQMQrIvrxorZGvc48yev7n+h8LXIpu4UxBIlPm9gyPZHIloiwZo9+EbMECEpAHdKAKNIEuMAIsYA0cgDNwA94gAISASBADlgMuSAJpQASyQT7YAApBMdgBdoNqcADUgXrQBE6CNnAGXARXwA1wCwyAR0AKhsFLMAHegWkIgvAQFaJBqpAWpA+ZQtYQG1oIeUNBUDgUA8VDiZAQkkD50CaoGCqDqqFDUD30I3Qaughdg/qgB9AgNAb9AX2EEZgC02EN2AC2gNmwOxwIR8LL4ER4FZwHF8Db4Uq4Fj4Ot8IX4RvwACyFX8KTCEDICAPRRlgIG/FEQpBYJAERIWuRIqQCqUWakA6kG7mNSJFx5AMGh6FhmBgWxhnjh1mM4WJWYdZiSjDVmGOYVkwX5jZmEDOB+YKlYtWxplgnrD92CTYRm40txFZgj2BbsJexA9hh7DscDsfAGeIccH64GFwybjWuBLcP14y7gOvDDeEm8Xi8Kt4U74IPwXPwYnwhvgp/HH8e348fxr8nkAlaBGuCDyGWICRsJFQQGgjnCP2EEcI0UYGoT3QihhB5xFxiKbGO2EG8SRwmTpMUSYYkF1IkKZm0gVRJaiJdJj0mvSGTyTpkR3IYWUBeT64knyBfJQ+SP1CUKCYUT0ocRULZTjlKuUB5QHlDpVINqG7UWKqYup1aT71EfUp9L0eTM5fzl+PJrZOrkWuV65d7JU+U15d3l18unydfIX9K/qb8uAJRwUDBU4GjsFahRuG0wj2FSUWaopViiGKaYolig+I1xVElvJKBkrcST6lA6bDSJaUhGkLTpXnSuLRNtDraZdowHUc3pPvTk+nF9B/ovfQJZSVlW+Uo5RzlGuWzylIGwjBg+DNSGaWMk4y7jI/zNOa5z+PP2zavaV7/vCmV+SpuKnyVIpVmlQGVj6pMVW/VFNWdqm2qT9QwaiZqYWrZavvVLquNz6fPd57PnV80/+T8h+qwuol6uPpq9cPqPeqTGpoavhoZGlUalzTGNRmabprJmuWa5zTHtGhaC7UEWuVa57VeMJWZ7sxUZiWzizmhra7tpy3RPqTdqz2tY6izWGejTrPOE12SLls3Qbdct1N3Qk9LL1gvX69R76E+UZ+tn6S/R79bf8rA0CDaYItBm8GooYqhv2GeYaPhYyOqkavRKqNaozvGOGO2cYrxPuNbJrCJnUmSSY3JTVPY1N5UYLrPtM8Ma+ZoJjSrNbvHorDcWVmsRtagOcM8yHyjeZv5Kws9i1iLnRbdFl8s7SxTLessH1kpWQVYbbTqsPrD2sSaa11jfceGauNjs86m3ea1rakt33a/7X07ml2w3Ra7TrvP9g72Ivsm+zEHPYd4h70O99h0dii7hH3VEevo4bjO8YzjByd7J7HTSaffnVnOKc4NzqMLDBfwF9QtGHLRceG4HHKRLmQujF94cKHUVduV41rr+sxN143ndsRtxN3YPdn9uPsrD0sPkUeLx5Snk+cazwteiJevV5FXr7eS92Lvau+nPjo+iT6NPhO+dr6rfS/4Yf0C/Xb63fPX8Of61/tPBDgErAnoCqQERgRWBz4LMgkSBXUEw8EBwbuCHy/SXyRc1BYCQvxDdoU8CTUMXRX6cxguLDSsJux5uFV4fnh3BC1iRURDxLtIj8jSyEeLjRZLFndGyUfFRdVHTUV7RZdFS5dYLFmz5EaMWowgpj0WHxsVeyR2cqn30t1Lh+Ps4grj7i4zXJaz7NpyteWpy8+ukF/BWXEqHhsfHd8Q/4kTwqnlTK70X7l35QTXk7uH+5LnxivnjfFd+GX8kQSXhLKE0USXxF2JY0muSRVJ4wJPQbXgdbJf8oHkqZSQlKMpM6nRqc1phLT4tNNCJWGKsCtdMz0nvS/DNKMwQ7rKadXuVROiQNGRTChzWWa7mI7+TPVIjCSbJYNZC7Nqst5nR2WfylHMEeb05JrkbssdyfPJ+341ZjV3dWe+dv6G/ME17msOrYXWrlzbuU53XcG64fW+649tIG1I2fDLRsuNZRvfbore1FGgUbC+YGiz7+bGQrlCUeG9Lc5bDmzFbBVs7d1ms61q25ciXtH1YsviiuJPJdyS699ZfVf53cz2hO29pfal+3fgdgh33N3puvNYmWJZXtnQruBdreXM8qLyt7tX7L5WYVtxYA9pj2SPtDKosr1Kr2pH1afqpOqBGo+a5r3qe7ftndrH29e/321/0wGNA8UHPh4UHLx/yPdQa61BbcVh3OGsw8/rouq6v2d/X39E7Ujxkc9HhUelx8KPddU71Nc3qDeUNsKNksax43HHb/3g9UN7E6vpUDOjufgEOCE58eLH+B/vngw82XmKfarpJ/2f9rbQWopaodbc1om2pDZpe0x73+mA050dzh0tP5v/fPSM9pmas8pnS8+RzhWcmzmfd37yQsaF8YuJF4c6V3Q+urTk0p2usK7ey4GXr17xuXKp2737/FWXq2euOV07fZ19ve2G/Y3WHruell/sfmnpte9tvelws/2W462OvgV95/pd+y/e9rp95Y7/nRsDiwb67i6+e/9e3D3pfd790QepD14/zHo4/Wj9Y+zjoicKTyqeqj+t/dX412apvfTsoNdgz7OIZ4+GuEMv/5X5r0/DBc+pzytGtEbqR61Hz4z5jN16sfTF8MuMl9Pjhb8p/rb3ldGrn353+71nYsnE8GvR65k/St6ovjn61vZt52To5NN3ae+mp4req74/9oH9oftj9MeR6exP+E+Vn40/d3wJ/PJ4Jm1m5t/3hPP7MjpZfgAAEstJREFUeAHtnQuwVVUZx7/LQ14CIhmCmmamiaaYbzM1fKBIpuU4OppNk/ma8jWZVkr4qEwtMx0bS9NxYqwsEBADfKCokA98IgoGoZCAvAQEecltfddrwObewzl7feucvc76rRnlrn32+q9v/b57/3udvffau6HxfLlV1suZ0iA9pVEoEIBAvRNocANslEXSRoY2NJ4nC12lh9vUpt7HzfggAIH/E1jvDvpL2rlqz/9v4gcIQCAVAnrA79mGaX8q+WacEMgQcF/5mfZnmFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAhgAFkgFCFQEoEMICUss1YIZAh0C5Tp1qKQIcuIp26l9qjss9WrxD5cGllbepx77btRbpuZzMy5alcKWURwADKwtS807afERn8mkibtpW0an3f+dNFhvQVWf9R6/uk8MmAH4l8/Xr/kSrHa/YSmTfNXysRBb4CVJLouW+ITLq3khal9+21u8iBZ5Tep94/7dhV5JjLbEb5zN388VdIEgOoEJiMukZk7apKW7W+/4lXiTQknIajLxHpsm3rfMr9RHMy2mAWUW5/dbJfwr95OTO4ZLbI+NtzNm6hWa893Czg9BY+SGBT09H/UpuBjr9NRHNDqYgABlARruadx9xge/JuYKKzAJ36d+6RJwObtlm1TGTMrzbdRq0sAhhAWZgyO61YJDL2xsxGj2rvPUUOOM1DIMKmejVFp/8WRf/4NSeUiglgABUja27w+K0iy+blbb15u9RmAU1H/20251DplmXzRTQXlFwEMIBc2FwjvdasJwStSh93+Wr/U63Uiq3TWY/+F9vE+NAQrvt7kMQAPOCJXnZaMMNHYdO2J16dxhWBY39oc0PVwpkiT7scUHITwAByo3MNP1or8uBPfRQ2bdtnb5H9vrHptnqr6Um//hfZjOpBd/JUc0DJTQADyI2uueHkB0Rmv+SrsqF9vc8CjnNH/47dNow3709zXhV54a95W9OumQAG4Pur0LheZNiVviob2u+4j0i/kzfU6+mnLu7o/9Uf2Ixo2BUiyp7iRQAD8MLX3HjqOJFp4y2UPtao11nAce6ef735x7e89ZTI62N8VWjvCGAAVr8GlrOAnfqJ7HuSVWTF0OnS0x39v28Ty3DDGZdNRNGqYABWqZv1nMiL/7BSExk02E6rCEoDLhfpsLV/JK+MEJkx0V8HhSYCGIDlL8IId0XAamnvTvvVzyxga3f0P8rg6K/f+fXMP8WMAAZghtIJ6Tr0iffYKZ5YJ7OAAe6EnT5MxbdMuk/k3Sm+KrTfiAAGsBEMkx/1zjSr5cI77y+yzyCTsGomok/6OfJC/+7XrRF5yPDOS/+I6kIBA7BO45L/2t6bHvsswOro/+QdIotmWWcreT0MIMSvwFi3Os3qWX+7HCiy98AQUYbX7NbLHf0v8O9n9Qci//yFvw4KmxHAADZDYrBhxRK3Pt09M8CqxHpFQI/+W3X2pzDuZpHlC/x1UNiMAAawGRKjDbpEdelcG7HPHiyy1/E2WtVS6ba9O/qf79/bBwtFHv2Nvw4KLRLAAFrEYrBxzYe2J61imwUc727Wad/JH+To60RWLffXQaFFAhhAi1iMNj59l8h7b9mI7XqoSN/jbLRCq3R3R/8jzvPvZfE7IhPu9NdBoVUCGECraAw+0JuCRhjeuDLoZwZBVUHihJ+4o39H/45GuOcjrFvtr4NCqwQwgFbRGH0w+e8i77xoI/a5w0T2PMZGK5TKNn1EDv+ev/rcqSLP/tlfB4WSBDCAkngMPmxaLuzOhluVos8CrI7+w3/Mcl+r35kSOhhACThmH73xqMibj9vI7Xa4yBf622hZq/TYwR39z/FXnfkvkVdG+uugsEUCGMAWERntYLmEtaizgBPcYqh2HfyBWbLyj6auFTCAaqV31vNuubA7H2BRPn+EyO5HWSjZafTYSeTL3/XXm/KwyPQn/XVQKIsABlAWJqOddCnr+nU2Yl8r2BWBgXr038pvbI2NIsOdDqVqBDCAqqF2Hc2fJvLMn2x61BmAzgSKULbdWeSw7/hH8vz9InNe9tdBoWwCGEDZqIx2fOhat1zY3SVoUYpyLmCgu+7ve/TXx3uPHGxBBY0KCGAAFcAy2fV9XS78OxOppqsBelWglqXnLjZH/6f+YPuSlVoyiahvDKAWydKXWa5836bnWs8C9Lt/2/Z+Y1mzUmT09X4atM5FAAPIhc2z0UrD5cJ6Z6DeIViL8qldRQ79tn/Pj95i+6JV/4iSUcAAapVq/Rrw/rs2vddqFmBx9F+xWGTcTTYcUKmYAAZQMTKjBnoi0OoZd7pKcNeDjQIrU6bp6H92mTuX2G3ML+2enlSiGz5qmQAG0DKX6mzVtwvPn27T16AhNjrlqujbi9q0K3fvlvfTE6Ljb2v5M7ZWhQAGUBXMrXSiy4Wt3i6sTwza5aBWOjLe/OndRA45y190pLuZaS3Lff1B5lfAAPKzs2n50jCRt1+w0arW3YEWR3+9KWrSvTbjRiU3AQwgNzqjhrpcWJe+WhR9erC+SyBk0aP/QWf696AzH6u3KPlHk6wCBlCE1Oty4TcesYkk9LkAveLQpq1frDrjsXyPol80SbfGAIqS/qYHYDT6R6NvEgo1C+i1h8iBZ/jHaDXj8Y8keQUMoCi/Am9PFpn8gE00od4mpE8m9j3660xHZzyUQhDAAAqRhuYgRrpLaxbLhfc9SUTfLmxZttej/+n+ihz9/RkaKmAAhjC9pfSegKfdvQEWZZAzE8ui5xYaPH9ddIajMx1KYQh4ZrQw46ifQEZfa7NceN+TRXbsZ8Old1+RA07z02p6RLqxKflFRGtHAAMo2q+Brg94zL1WzLc0NIhYzQL0u7/v0b/prkd37Z9SKAIYQKHS0RzM2BvccmG3YtC39DtFZIcv+qn0cUf//T2P/mtXuXUPbmZDKRwBDKBwKXEBrVzqXoftFsn4lqZZgDt6+5Sm7/5uNuFT9EWpet8/pXAEMIDCpaQ5oPG32/zR7PdNkT575xulzh6+dGq+tp+0+tCZ2Vj3ABRKIQlgAIVMiwtKlwuPGuIfnc4C9Jl9eUrTd3/Po7/+8a8w+DqTJ37abJEABrBFRDXcYeI9Hz9J2DcE/Q6v9/BXUnTWoLMHn7Jsnjuh+VsfBdoGJoABBAbsJW+1XFjv3jv+yspC0RV/OnvwKaOuEVnjZjKUwhLAAAqbmubAdNGMvlXItxz8LZFtdihPpfee7sy/53f/BTPcOxDuLq8/9qoZAQygZugr6NjiXXn63P5jLi2vU33Dr+91/xFXieiz/imFJoABFDo9zcHpm4WnjvOP9CvninTuXlpHzxX4rvib/bLIC38r3Q+fFoIABlCINJQRhMVy4Y5dRY64oHRneq7Ad8VfU6zrS/fDp4UggAEUIg1lBPHOi265sMFRtf9F7jVerbzIQ9/we8jZZQRTYhd9s+/rY0rswEdFIoABFCkbW4pFv1f7Lhfu3ts90uuslnsacLn/W36GX9GyNlsLSQADKGRaWgnqvX+75cJ3tfJhBZuPvWzznbtuJ3L4OZtvr2TLy8NFZj5bSQv2rTEBDKDGCai4e32ZiL5Lz6foTT76MpGNy9HuCkH7Thtvqexnfbjpg26GQomKAAYQVbpcsEuN7q7b+JKgnhw86kI/EpPuE5k71U+D1lUngAFUHblBh2NvdPfXL/YT6jtARB/zpeVI98ffaQuXBz/es+X/r1tts26hZXW2BiSAAQSEG0xaV9jpO/V8it7m2/9id0Wgg7tB6BIfJZEn7hBZ/LafBq1rQgADqAl2g071nXpL5vgJ6SW/o50JdNs+v86q5e7ZBT/P356WNSWAAdQUv0fn+k493+XCHbqInOI5k3jkZpEPFnkMhKa1JIAB1JK+b9+T7hWZ96afis89/8sXiDzya7/+aV1TAhhATfF7dm61XDhvGA9fL7J6Rd7WtCsAAQygAEnwCkHfLvyfGtx8s2iWyITfe4VO49oTwABqnwP/CIa5BTzVLiMHi6xjuW+1sVv3hwFYE62F3vQn3AKcsdXr+d0pIs8OrV5/9BSMAAYQDG2VhS2WC5cb8nD3wBC99ZcSPQEMIPoUNg9g9kvuIRx/CT+aGRNFXh0Vvh96qAoBDKAqmKvUyYirwz+Gi7f7VimZ1ekGA6gO5+r0og/ifOqP4fp6bbTIWxPC6aNcdQIYQNWRB+5w9HVhrs03LffN+YKRwENGPj8BDCA/u2K2DPUyjufuF5nzajHHTFS5CWAAudEVuOG4m9xyYcP78/Xx3nrdn1J3BDCAukupG5AuF7Z4u/AnbCbcKbJw5ic1/q0jAhhAHSVzk6E84d4uvGT2JptyVfRef73nn1KXBDCAukyrG5QuF5423n90j90ismy+vw4KhSSAARQyLQUKagrP+C9QNsxDwQDMkSIIgXgIYADx5IpIIWBOAAMwR4ogBOIhgAHEkysihYA5AQzAHCmCEIiHAAYQT66IFALmBDAAc6QIQiAeAhhAPLkiUgiYE8AAzJEiCIF4CGAA8eSKSCFgTgADMEeKIATiIYABxJMrIoWAOQEMwBwpghCIhwAGEE+uiBQC5gQwAHOkCEIgHgIYQDy5IlIImBPAAMyRIgiBeAhgAPHkikghYE4AAzBHiiAE4iGAAcSTKyKFgDkBDMAcKYIQiIcABhBProgUAuYEMABzpAhCIB4CGEA8uSJSCJgTwADMkSIIgXgIYADx5IpIIWBOAAMwR4ogBOIhgAHEkysihYA5AQzAHCmCEIiHAAYQT66IFALmBDAAc6QIQiAeAhhAPLkiUgiYE8AAzJEiCIF4CGAA8eSKSCFgTgADMEeKIATiIYABxJMrIoWAOQEMwBwpghCIhwAGEE+uiBQC5gQwAHOkCEIgHgIYQDy5IlIImBPAAMyRIgiBeAhgAPHkikghYE4AAzBHiiAE4iGAAcSTKyKFgDkBDMAcKYIQiIcABhBProgUAuYEMABzpAhCIB4CGEA8uSJSCJgTwADMkSIIgXgIYADx5IpIIWBOAAMwR4ogBOIhgAHEkysihYA5gYbGc6XRXBVBCEAgCgLMAKJIE0FCIAwBDCAMV1QhEAUBDCCKNBEkBMIQwADCcEUVAlEQwACiSBNBQiAMAQwgDFdUIRAFAQwgijQRJATCEMAAwnBFFQJREMAAokgTQUIgDAEMIAxXVCEQBQEMIIo0ESQEwhDAAMJwRRUCURDAAKJIE0FCIAwBDCAMV1QhEAUBDCCKNBEkBMIQwADCcEUVAlEQwACiSBNBQiAMAQwgDFdUIRAFAQwgijQRJATCEMAAwnBFFQJREMAAokgTQUIgDAEMIAxXVCEQBQEMIIo0ESQEwhDAAMJwRRUCURDAAKJIE0FCIAwBDCAMV1QhEAUBDCCKNBEkBMIQwADCcEUVAlEQwACiSBNBQiAMAQwgDFdUIRAFAQwgijQRJATCEMAAwnBFFQJREMAAokgTQUIgDAEMIAxXVCEQBQEMIIo0ESQEwhDAAMJwRRUCURDAAKJIE0FCIAwBDCAMV1QhEAUBDCCKNBEkBMIQwADCcEUVAlEQwACiSBNBQiAMAQwgDFdUIRAFAQwgijQRJATCEMAAwnBFFQJREMAAokgTQUIgDAEMIAxXVCEQBQEMIIo0ESQEwhDAAMJwRRUCURDAAKJIE0FCIAwBDCAMV1QhEAUBDCCKNBEkBMIQwADCcEUVAlEQwACiSBNBQiAMgTbSEEYYVQhAoOAE3N++zgAWuf/WFzxUwoMABGwJ6N/8Ip0BDHU/LGEmYEsXNQgUlsDHs379mx/6P+CbiSzUnOR+AAAAAElFTkSuQmCC"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                    </div>
                    <div className="truncate text-fg-4">Hacker News</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-fg-2">
                  $0
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  1d
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19kqea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19kqea6b6»)">
                          <rect fill="#FF6B6B" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#FFD93D"
                            filter="url(#filter_«R19kqea6b6»)"
                            transform="translate(0 0) rotate(-320 40 40) scale(1.2)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#6BCB77"
                            filter="url(#filter_«R19kqea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(-4 4) rotate(-300 40 40) scale(1.2)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19kqea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="in_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#in_a)">
                        <path
                          d="m0 160 256-32 256 32v192l-256 32L0 352z"
                          fill="#eee"
                        ></path>
                        <path d="M0 0h512v160H0Z" fill="#ff9811"></path>
                        <path d="M0 352h512v160H0Z" fill="#6da544"></path>
                        <circle
                          cx="256"
                          cy="256"
                          fill="#0052b4"
                          r="72"
                        ></circle>
                        <circle cx="256" cy="256" fill="#eee" r="48"></circle>
                        <circle
                          cx="256"
                          cy="256"
                          fill="#0052b4"
                          r="24"
                        ></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Olivia Patel
                    </h2>
                    <svg
                      aria-hidden="true"
                      aria-label="Identified"
                      className="text-purple-4"
                      fill="none"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        d="M6.70312 1.42297C7.41906 0.707007 8.57997 0.707007 9.2959 1.42297L10.1133 2.23938C10.2696 2.39548 10.4813 2.48352 10.7021 2.48352H11.6836C12.6959 2.48376 13.5165 3.30421 13.5166 4.31653V5.29797C13.5167 5.51888 13.6045 5.73063 13.7607 5.88684L14.5771 6.70325C15.2931 7.41914 15.293 8.58001 14.5771 9.29602L13.7607 10.1134C13.6045 10.2697 13.5166 10.4813 13.5166 10.7023V11.6837C13.5164 12.6959 12.6958 13.5165 11.6836 13.5167H10.7021C10.4812 13.5167 10.2696 13.6046 10.1133 13.7609L9.2959 14.5773C8.57996 15.2931 7.41904 15.2932 6.70312 14.5773L5.88672 13.7609C5.73051 13.6046 5.51875 13.5168 5.29785 13.5167H4.31641C3.30406 13.5167 2.48363 12.696 2.4834 11.6837V10.7023C2.4834 10.4813 2.39536 10.2696 2.23926 10.1134L1.42285 9.29602C0.706892 8.58002 0.706892 7.41918 1.42285 6.70325L2.23926 5.88684C2.39538 5.73064 2.48332 5.51882 2.4834 5.29797V4.31653C2.48346 3.30409 3.30396 2.48356 4.31641 2.48352H5.29785C5.5187 2.48344 5.73052 2.39552 5.88672 2.23938L6.70312 1.42297ZM10.999 5.34583C10.7166 5.10973 10.2957 5.1474 10.0596 5.42981L7.13574 8.9259L5.98438 7.70911C5.73137 7.44165 5.30947 7.42978 5.04199 7.68274C4.77457 7.93575 4.76267 8.35765 5.01562 8.62512L6.68262 10.3868C6.81339 10.5249 6.99743 10.6007 7.1875 10.5948C7.37736 10.5888 7.5558 10.5022 7.67773 10.3566L11.083 6.28528C11.319 6.00296 11.2811 5.58205 10.999 5.34583Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding text-fg-2">
                    <div className="shrink-0">
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 16 16"
                        width="16"
                      >
                        <path
                          d="M9.17647 4L13 8L9.17647 12M3 8H12.1176"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="truncate text-fg-2">Direct</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-green-4">
                  $199
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  1d
                </span>
              </div>
              <div
                className="w-full flex items-center shrink-0 gap-4 overflow-hidden px-8"
                style={{
                  height: "40px",
                  filter: "blur(0px)",
                  backgroundColor: "var(--bg-2)",
                  opacity: "1",
                }}
              >
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                  <div className="flex items-center">
                    <div style={{ width: "16px", height: "16px" }}>
                      <svg
                        fill="none"
                        height="16.5"
                        role="img"
                        viewBox="0 0 80 80"
                        width="16.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          height="80"
                          id="«R19laea6b6»"
                          maskUnits="userSpaceOnUse"
                          width="80"
                          x="0"
                          y="0"
                        >
                          <rect
                            fill="#FFFFFF"
                            height="80"
                            rx="160"
                            width="80"
                          ></rect>
                        </mask>
                        <g mask="url(#«R19laea6b6»)">
                          <rect fill="#F86624" height="80" width="80"></rect>
                          <path
                            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
                            fill="#EA3546"
                            filter="url(#filter_«R19laea6b6»)"
                            transform="translate(0 0) rotate(112 40 40) scale(1.2)"
                          ></path>
                          <path
                            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
                            fill="#43BCCD"
                            filter="url(#filter_«R19laea6b6»)"
                            style={{ mixBlendMode: "overlay" }}
                            transform="translate(0 0) rotate(-168 40 40) scale(1.2)"
                          ></path>
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            id="filter_«R19laea6b6»"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            ></feFlood>
                            <feBlend
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            ></feBlend>
                            <feGaussianBlur
                              result="effect1_foregroundBlur"
                              stdDeviation="7"
                            ></feGaussianBlur>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      aria-hidden="true"
                      className="-ml-1 border border-background rounded-full"
                      height="16"
                      viewBox="0 0 512 512"
                      width="16"
                    >
                      <mask id="br_a">
                        <circle cx="256" cy="256" fill="#fff" r="256"></circle>
                      </mask>
                      <g mask="url(#br_a)">
                        <path d="M0 0h512v512H0z" fill="#6da544"></path>
                        <path
                          d="M256 100.2 467.5 256 256 411.8 44.5 256z"
                          fill="#ffda44"
                        ></path>
                        <path
                          d="M174.2 221a87 87 0 0 0-7.2 36.3l162 49.8a88.5 88.5 0 0 0 14.4-34c-40.6-65.3-119.7-80.3-169.1-52z"
                          fill="#eee"
                        ></path>
                        <path
                          d="M255.7 167a89 89 0 0 0-41.9 10.6 89 89 0 0 0-39.6 43.4 181.7 181.7 0 0 1 169.1 52.2 89 89 0 0 0-9-59.4 89 89 0 0 0-78.6-46.8zM212 250.5a149 149 0 0 0-45 6.8 89 89 0 0 0 10.5 40.9 89 89 0 0 0 120.6 36.2 89 89 0 0 0 30.7-27.3A151 151 0 0 0 212 250.5z"
                          fill="#0052b4"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex-1 flex items-center gap-1 overflow-hidden shrink-0">
                    <h2 className="text-sm font-medium truncate text-fg-4">
                      Speedy Rabbit
                    </h2>
                  </div>
                </div>
                <div className="hidden md:flex w-28 items-center relative">
                  <span className="max-w-full text-xs inline-flex h-6 pl-1.5 pr-2.5 gap-1 transition-colors rounded-full items-center bg-background border border-fg-4/10 bg-clip-padding">
                    <div className="shrink-0">
                      <span style={{ width: "16px", height: "16px" }}>
                        <img
                          alt=""
                          className="aspect-square"
                          src="data:image/vnd.microsoft.icon;base64,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"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                    </div>
                    <div className="truncate text-fg-4">Reddit</div>
                  </span>
                </div>
                <span className="w-12 font-medium shrink-0 text-[13px] text-fg-2">
                  $0
                </span>
                <span className="shrink-0 text-[13px] text-right text-fg-2 w-8">
                  2d
                </span>
              </div>
            </div>
          </div>
        </div>
  );
}
