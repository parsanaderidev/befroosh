"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export type NavbarInteractionStyle = "standard" | "liquid-glass";

export interface NavbarProps {
  interactionStyle?: NavbarInteractionStyle;
}

type EligibleNavId = "features" | "pricing" | "faq" | "login";

const ELIGIBLE_ORDER: EligibleNavId[] = [
  "features",
  "pricing",
  "faq",
  "login",
];

interface Spring {
  x: number;
  v: number;
  target: number;
  settled: boolean;
  to: (newTarget: number) => void;
  set: (val: number) => void;
  step: (dt: number) => boolean;
}

function createSpring(initial: number, tension = 260, friction = 20, mass = 1): Spring {
  let x = initial;
  let v = 0;
  let target = initial;
  let settled = true;

  return {
    get x() {
      return x;
    },
    get v() {
      return v;
    },
    get target() {
      return target;
    },
    get settled() {
      return settled;
    },
    to(newTarget: number) {
      target = newTarget;
      settled = false;
    },
    set(val: number) {
      x = val;
      target = val;
      v = 0;
      settled = true;
    },
    step(dt: number) {
      if (settled) return true;
      const clampedDt = Math.min(dt, 0.032);
      const subSteps = 2;
      const subDt = clampedDt / subSteps;
      for (let i = 0; i < subSteps; i++) {
        const force = -tension * (x - target) - friction * v;
        const a = force / mass;
        v += a * subDt;
        x += v * subDt;
      }

      if (Math.abs(v) < 0.1 && Math.abs(x - target) < 0.1) {
        x = target;
        v = 0;
        settled = true;
        return true;
      }
      return false;
    },
  };
}

export default function Navbar({ interactionStyle = "liquid-glass" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopFeaturesOpen, setDesktopFeaturesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("features");
  const [hoveredTab, setHoveredTab] = useState<EligibleNavId | null>(null);

  const navContainerRef = useRef<HTMLElement | null>(null);
  const blobRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Record<EligibleNavId, HTMLElement | null>>({
    features: null,
    pricing: null,
    faq: null,
    login: null,
  });

  const springsRef = useRef<{ L: Spring; R: Spring }>({
    L: createSpring(0),
    R: createSpring(0),
  });

  const fromIdRef = useRef<EligibleNavId>("features");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const [isIndicatorReady, setIsIndicatorReady] = useState(false);

  const runLoop = useCallback((time: number) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
    }
    const dt = (time - lastTimeRef.current) / 1000;
    lastTimeRef.current = time;

    const { L, R } = springsRef.current;
    const settledL = L.step(dt);
    const settledR = R.step(dt);

    if (blobRef.current) {
      const minX = Math.min(L.x, R.x);
      const maxX = Math.max(L.x, R.x);
      const width = Math.max(34, maxX - minX);
      blobRef.current.style.transform = `translateX(${minX}px)`;
      blobRef.current.style.width = `${width}px`;
    }

    if (!settledL || !settledR) {
      rafRef.current = requestAnimationFrame(runLoop);
    } else {
      rafRef.current = null;
      lastTimeRef.current = null;
    }
  }, []);

  const startLoop = useCallback(() => {
    if (!rafRef.current) {
      lastTimeRef.current = null;
      rafRef.current = requestAnimationFrame(runLoop);
    }
  }, [runLoop]);

  const moveToTab = useCallback(
    (targetId: EligibleNavId, immediate = false) => {
      const targetEl = itemRefs.current[targetId];
      if (!targetEl || !navContainerRef.current) return;

      const targetLeft = targetEl.offsetLeft;
      const targetRight = targetLeft + targetEl.offsetWidth;

      const fromId = fromIdRef.current;
      const fromIndex = ELIGIBLE_ORDER.indexOf(fromId);
      const toIndex = ELIGIBLE_ORDER.indexOf(targetId);

      if (fromId === targetId && !immediate) return;

      fromIdRef.current = targetId;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (immediate || prefersReduced || fromIndex === -1) {
        springsRef.current.L.set(targetLeft);
        springsRef.current.R.set(targetRight);
        if (blobRef.current) {
          const width = Math.max(34, targetRight - targetLeft);
          blobRef.current.style.transform = `translateX(${targetLeft}px)`;
          blobRef.current.style.width = `${width}px`;
        }
        return;
      }

      if (toIndex > fromIndex) {
        // Moving right: right edge stretches first, left edge follows after 80ms
        springsRef.current.R.to(targetRight);
        startLoop();
        timeoutRef.current = setTimeout(() => {
          springsRef.current.L.to(targetLeft);
          startLoop();
          timeoutRef.current = null;
        }, 80);
      } else {
        // Moving left: left edge stretches back first, right edge follows after 80ms
        springsRef.current.L.to(targetLeft);
        startLoop();
        timeoutRef.current = setTimeout(() => {
          springsRef.current.R.to(targetRight);
          startLoop();
          timeoutRef.current = null;
        }, 80);
      }
    },
    [startLoop]
  );

  const handleTabMouseEnter = useCallback(
    (id: EligibleNavId) => {
      if (interactionStyle !== "liquid-glass") return;
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
        leaveTimeoutRef.current = null;
      }
      setHoveredTab(id);
      moveToTab(id);
    },
    [interactionStyle, moveToTab]
  );

  const handleNavMouseLeave = useCallback(() => {
    if (interactionStyle !== "liquid-glass") return;
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
      if (ELIGIBLE_ORDER.includes(activeTab as EligibleNavId)) {
        moveToTab(activeTab as EligibleNavId);
      }
    }, 70);
  }, [interactionStyle, activeTab, moveToTab]);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#pricing") setActiveTab("pricing");
      else if (hash === "#faq") setActiveTab("faq");
      else if (hash === "#features") setActiveTab("features");
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    if (interactionStyle !== "liquid-glass") return;

    if (ELIGIBLE_ORDER.includes(activeTab as EligibleNavId)) {
      const isInitial = !isIndicatorReady;
      moveToTab(activeTab as EligibleNavId, isInitial);
      if (isInitial) {
        setIsIndicatorReady(true);
      }
    }
  }, [activeTab, interactionStyle, isIndicatorReady, moveToTab]);

  useEffect(() => {
    if (interactionStyle !== "liquid-glass") return;

    const handleResize = () => {
      const current = hoveredTab || (activeTab as EligibleNavId);
      if (ELIGIBLE_ORDER.includes(current)) {
        moveToTab(current, true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [interactionStyle, activeTab, hoveredTab, moveToTab]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Header */}
      <header
        className={`dark fixed top-4 left-4 right-4 z-50 md:hidden bg-background backdrop-blur-lg rounded-xl shadow-xs transition-all duration-300 ease-in-out ${mobileMenuOpen
          ? "max-h-[calc(100dvh-2rem)] overflow-y-auto"
          : "max-h-[52px] h-[52px] overflow-hidden"
          }`}
      >
        <div>
          <div className="flex items-center justify-between h-13 pl-4 pr-3.25">
            <Link className="active flex items-center" href="/" data-status="active" aria-current="page">
              <svg
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-fg-4"
              >
                <path
                  d="M16 3C27 3 31 10 31 16C31 22 27 29 16 29C5 29 1 22 1 16C1 10 5 3 16 3ZM15 9C11.134 9 8 12.134 8 16C8 19.866 11.134 23 15 23H17C20.866 23 24 19.866 24 16C24 12.134 20.866 9 17 9H15Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 sm:gap-4">
                <Link
                  prefetch={false}
                  href="/login"
                  className="hidden sm:inline-block text-sm font-medium text-fg-3 hover:text-fg-4 transition-colors px-1"
                >
                  Login
                </Link>
                <Link prefetch={false} href="/register">
                  <button
                    data-slot="button"
                    className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium transition-all bg-purple-4 text-white enabled:hover:opacity-90 h-[32px] px-3 text-xs sm:text-sm rounded-full active:scale-95 shadow-xs"
                  >
                    Start Free
                  </button>
                </Link>
              </div>
              <button
                type="button"
                className="flex items-center justify-center h-8 w-8 text-fg-3 hover:text-fg-4 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 16 16"
                  aria-label="Menu"
                  aria-hidden="true"
                >
                  <line
                    x1="1"
                    x2="15"
                    y1="8"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{
                      transformOrigin: "50% 50%",
                      transform: mobileMenuOpen ? "translateY(0px) rotate(45deg)" : "translateY(-5px)",
                      transformBox: "fill-box",
                      transition: "transform 0.2s ease-out",
                    }}
                  />
                  <line
                    x1="1"
                    x2="15"
                    y1="8"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{
                      transformOrigin: "50% 50%",
                      opacity: mobileMenuOpen ? 0 : 1,
                      transformBox: "fill-box",
                      transition: "opacity 0.2s ease-out",
                    }}
                  />
                  <line
                    x1="1"
                    x2="15"
                    y1="8"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{
                      transformOrigin: "50% 50%",
                      transform: mobileMenuOpen ? "translateY(0px) rotate(-45deg)" : "translateY(5px)",
                      transformBox: "fill-box",
                      transition: "transform 0.2s ease-out",
                    }}
                  />
                </svg>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav className="flex flex-col gap-2 p-3 pt-1">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-fg-1 px-1 pt-1">
                  Features
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    prefetch={false}
                    href="/revenue-attribution"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl corner-superellipse/1.125 bg-green-a2 hover:bg-green-a3/70 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full corner-superellipse/1.125 bg-green-4 flex items-center justify-center">
                      <svg width="18" height="18" fill="none" viewBox="0 0 16 16" className="text-white">
                        <path
                          d="M8 4.5V3.72222M8 11.5V12.2778M9.68428 5.66667C9.34812 5.20171 8.71976 4.88889 8 4.88889H7.78393C6.82937 4.88889 6.05556 5.50795 6.05556 6.27161V6.33097C6.05556 6.8772 6.44132 7.37653 7.05204 7.62083L8.94796 8.37917C9.55867 8.62347 9.94444 9.1228 9.94444 9.66903C9.94444 10.4655 9.13742 11.1111 8.14187 11.1111H8C7.28024 11.1111 6.65188 10.7983 6.31569 10.3333M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="flex flex-col items-center">
                      <h5 className="font-medium text-xs sm:text-sm text-fg-4 text-center">Storefront</h5>
                      <span className="text-[11px] font-medium text-fg-a3 text-center line-clamp-1">
                        Sell in Instagram DMs
                      </span>
                    </span>
                  </Link>
                  <Link
                    prefetch={false}
                    href="/realtime"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl corner-superellipse/1.125 bg-purple-a2 hover:bg-purple-a3/70 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full corner-superellipse/1.125 bg-purple-4 flex items-center justify-center">
                      <svg width="18" height="18" fill="none" viewBox="0 0 16 16" className="text-white">
                        <path
                          d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1M8 15C6.22373 15 4.78378 11.866 4.78378 8C4.78378 4.13401 6.22373 1 8 1M8 15C9.77626 15 11.2162 11.866 11.2162 8C11.2162 4.13401 9.77626 1 8 1M14.8108 8H1.18919"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                    <span className="flex flex-col items-center">
                      <h5 className="font-medium text-xs sm:text-sm text-fg-4 text-center">Smart DM</h5>
                      <span className="text-[11px] font-medium text-fg-a3 text-center line-clamp-1">
                        24/7 automated replies
                      </span>
                    </span>
                  </Link>
                  <Link
                    prefetch={false}
                    href="/performance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl corner-superellipse/1.125 bg-amber-a2 hover:bg-amber-a3/70 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full corner-superellipse/1.125 bg-amber-4 flex items-center justify-center">
                      <svg width="18" height="18" fill="none" viewBox="0 0 16 16" className="text-white">
                        <path
                          d="M10.2703 6.48649L8.19668 10.4609M14.0541 10.8378H1.94595M12.9497 3.05026C10.2161 0.316581 5.78393 0.316581 3.05026 3.05026C0.316581 5.78391 0.316581 10.2161 3.05026 12.9497C5.78391 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78393 12.9497 3.05026Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="flex flex-col items-center">
                      <h5 className="font-medium text-xs sm:text-sm text-fg-4 text-center">Comments</h5>
                      <span className="text-[11px] font-medium text-fg-a3 text-center line-clamp-1">
                        Auto-reply comments
                      </span>
                    </span>
                  </Link>
                  <Link
                    prefetch={false}
                    href="/profiles"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl corner-superellipse/1.125 bg-pink-a2 hover:bg-pink-a3/70 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full corner-superellipse/1.125 bg-pink-4 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
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
                    </span>
                    <span className="flex flex-col items-center">
                      <h5 className="font-medium text-xs sm:text-sm text-fg-4 text-center">Lead Capture</h5>
                      <span className="text-[11px] font-medium text-fg-a3 text-center line-clamp-1">
                        Collect lead info
                      </span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-0.5 px-1 pt-2 border-t border-bg-a2">
                <Link
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === "pricing"
                    ? "text-fg-4 bg-bg-a2 font-semibold"
                    : "text-fg-3 hover:text-fg-4 hover:bg-bg-a1"
                    }`}
                  href="/#pricing"
                  onClick={() => {
                    setActiveTab("pricing");
                    setMobileMenuOpen(false);
                  }}
                >
                  Pricing
                </Link>

                <Link
                  prefetch={false}
                  href="/#faq"
                  onClick={() => {
                    setActiveTab("faq");
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeTab === "faq"
                    ? "text-fg-4 bg-bg-a2 font-semibold"
                    : "text-fg-3 hover:text-fg-4 hover:bg-bg-a1"
                    }`}
                >
                  FAQ
                </Link>
              </div>

              {/* Mobile Auth Actions */}
              <div className="flex items-center gap-2 pt-2 px-1 border-t border-bg-a2">
                <Link
                  prefetch={false}
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 text-center text-sm font-medium text-fg-4 rounded-xl bg-bg-2 hover:bg-bg-3 border border-bg-a2 transition-colors"
                >
                  Login
                </Link>
                <Link
                  prefetch={false}
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 text-center text-sm font-medium text-white rounded-xl bg-purple-4 hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Desktop Header */}
      <header
        className="dark fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-background backdrop-blur-lg rounded-[24px] overflow-hidden shadow-xs corner-superellipse/1.125 hidden md:block transition-[height] duration-300 ease-in-out"
        style={{
          width: "498px",
          height: desktopFeaturesOpen ? "308px" : "52px",
          backgroundColor: "#14141f",
        }}
      >
        <div>
          <div className="flex items-center gap-5 h-13 pl-4 pr-3">
            <Link
              className="active flex items-center shrink-0"
              href="/"
              data-status="active"
              aria-current="page"
              onClick={() => {
                setActiveTab("features");
                setDesktopFeaturesOpen(false);
                moveToTab("features");
              }}
            >
              <svg
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-fg-4"
              >
                <path
                  d="M16 3C27 3 31 10 31 16C31 22 27 29 16 29C5 29 1 22 1 16C1 10 5 3 16 3ZM15 9C11.134 9 8 12.134 8 16C8 19.866 11.134 23 15 23H17C20.866 23 24 19.866 24 16C24 12.134 20.866 9 17 9H15Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <nav
              ref={navContainerRef}
              className="relative flex items-center h-13 flex-1 justify-between"
              onMouseLeave={handleNavMouseLeave}
            >
              {/* Liquid Glass moving indicator (Features through Login) */}
              {interactionStyle === "liquid-glass" && (
                <div
                  ref={blobRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute z-0 top-[9px] left-0 rounded-xl transition-opacity duration-150"
                  style={{
                    height: "34px",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(204, 207, 255, 0.05) 100%)",
                    boxShadow:
                      "0 2px 8px -1px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.32), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(14px) saturate(150%)",
                    WebkitBackdropFilter: "blur(14px) saturate(150%)",
                    opacity: isIndicatorReady ? 1 : 0,
                    willChange: "transform, width",
                  }}
                />
              )}

              <button
                ref={(el) => {
                  itemRefs.current["features"] = el;
                }}
                type="button"
                style={{ height: "34px" }}
                className={`relative z-10 flex items-center justify-center gap-1 px-3 text-sm font-medium rounded-full transition-colors cursor-pointer ${(hoveredTab ? hoveredTab === "features" : (desktopFeaturesOpen || activeTab === "features"))
                  ? interactionStyle === "standard"
                    ? "bg-bg-a2 text-fg-4 font-semibold shadow-2xs"
                    : "text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                  : "text-fg-3 hover:text-white"
                  }`}
                onMouseEnter={() => handleTabMouseEnter("features")}
                onClick={() => {
                  setActiveTab("features");
                  setDesktopFeaturesOpen(!desktopFeaturesOpen);
                  moveToTab("features");
                }}
              >
                Features
                <span
                  style={{
                    transform: desktopFeaturesOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <svg width="12" height="12" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <Link
                ref={(el) => {
                  itemRefs.current["pricing"] = el;
                }}
                style={{ height: "34px" }}
                className={`relative z-10 flex items-center justify-center px-3 text-sm font-medium rounded-full transition-colors cursor-pointer ${(hoveredTab ? hoveredTab === "pricing" : activeTab === "pricing")
                  ? interactionStyle === "standard"
                    ? "bg-bg-a2 text-fg-4 font-semibold shadow-2xs"
                    : "text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                  : "text-fg-3 hover:text-white"
                  }`}
                href="/#pricing"
                onMouseEnter={() => handleTabMouseEnter("pricing")}
                onClick={() => {
                  setActiveTab("pricing");
                  setDesktopFeaturesOpen(false);
                  moveToTab("pricing");
                }}
              >
                Pricing
              </Link>

              <Link
                ref={(el) => {
                  itemRefs.current["faq"] = el;
                }}
                prefetch={false}
                style={{ height: "34px" }}
                className={`relative z-10 flex items-center justify-center px-3 text-sm font-medium rounded-full transition-colors cursor-pointer ${(hoveredTab ? hoveredTab === "faq" : activeTab === "faq")
                  ? interactionStyle === "standard"
                    ? "bg-bg-a2 text-fg-4 font-semibold shadow-2xs"
                    : "text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                  : "text-fg-3 hover:text-white"
                  }`}
                href="/#faq"
                onMouseEnter={() => handleTabMouseEnter("faq")}
                onClick={() => {
                  setActiveTab("faq");
                  setDesktopFeaturesOpen(false);
                  moveToTab("faq");
                }}
              >
                FAQ
              </Link>

              <Link
                ref={(el) => {
                  itemRefs.current["login"] = el;
                }}
                prefetch={false}
                style={{ height: "34px" }}
                className={`relative z-10 flex items-center justify-center px-3 text-sm font-medium rounded-full transition-colors cursor-pointer ${(hoveredTab ? hoveredTab === "login" : activeTab === "login")
                  ? interactionStyle === "standard"
                    ? "bg-bg-a2 text-fg-4 font-semibold shadow-2xs"
                    : "text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                  : "text-fg-3 hover:text-white"
                  }`}
                href="/login"
                onMouseEnter={() => handleTabMouseEnter("login")}
                onClick={() => {
                  setActiveTab("login");
                  setDesktopFeaturesOpen(false);
                  moveToTab("login");
                }}
              >
                Login
              </Link>
            </nav>

            <Link prefetch={false} href="/register">
              <button
                data-slot="button"
                style={{ height: "36px" }}
                className="select-none flex items-center relative cursor-pointer justify-center whitespace-nowrap font-medium transition-all bg-purple-4 text-white enabled:hover:opacity-90 px-3.5 text-sm rounded-xl active:scale-95 shadow-xs shrink-0"
              >
                Start Free
              </button>
            </Link>
          </div>
          {desktopFeaturesOpen && (
            <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
              <div className="grid grid-cols-2 gap-2 p-2">
                <Link prefetch={false}
                  href="/revenue-attribution"
                  onClick={() => setDesktopFeaturesOpen(false)}
                  className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl corner-superellipse/1.125 bg-green-a2 hover:bg-green-a3/70 transition-colors"
                >
                  <span className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-green-4 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 16 16" className="text-white">
                      <path
                        d="M8 4.5V3.72222M8 11.5V12.2778M9.68428 5.66667C9.34812 5.20171 8.71976 4.88889 8 4.88889H7.78393C6.82937 4.88889 6.05556 5.50795 6.05556 6.27161V6.33097C6.05556 6.8772 6.44132 7.37653 7.05204 7.62083L8.94796 8.37917C9.55867 8.62347 9.94444 9.1228 9.94444 9.66903C9.94444 10.4655 9.13742 11.1111 8.14187 11.1111H8C7.28024 11.1111 6.65188 10.7983 6.31569 10.3333M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-center">
                    <h5 className="font-medium text-fg-4 text-center">Storefront</h5>
                    <span className="text-xs font-medium text-fg-a3 text-center line-clamp-2">
                      Sell inside Instagram DMs
                    </span>
                  </span>
                </Link>
                <Link prefetch={false}
                  href="/realtime"
                  onClick={() => setDesktopFeaturesOpen(false)}
                  className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl corner-superellipse/1.125 bg-purple-a2 hover:bg-purple-a3/70 transition-colors"
                >
                  <span className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-purple-4 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 16 16" className="text-white">
                      <path
                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1M8 15C6.22373 15 4.78378 11.866 4.78378 8C4.78378 4.13401 6.22373 1 8 1M8 15C9.77626 15 11.2162 11.866 11.2162 8C11.2162 4.13401 9.77626 1 8 1M14.8108 8H1.18919"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-center">
                    <h5 className="font-medium text-fg-4 text-center">Smart DM</h5>
                    <span className="text-xs font-medium text-fg-a3 text-center line-clamp-2">
                      24/7 automated responses
                    </span>
                  </span>
                </Link>
                <Link prefetch={false}
                  href="/performance"
                  onClick={() => setDesktopFeaturesOpen(false)}
                  className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl corner-superellipse/1.125 bg-amber-a2 hover:bg-amber-a3/70 transition-colors"
                >
                  <span className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-amber-4 flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 16 16" className="text-white">
                      <path
                        d="M10.2703 6.48649L8.19668 10.4609M14.0541 10.8378H1.94595M12.9497 3.05026C10.2161 0.316581 5.78393 0.316581 3.05026 3.05026C0.316581 5.78391 0.316581 10.2161 3.05026 12.9497C5.78391 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78393 12.9497 3.05026Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="flex flex-col items-center">
                    <h5 className="font-medium text-fg-4 text-center">Comments</h5>
                    <span className="text-xs font-medium text-fg-a3 text-center line-clamp-2">
                      Auto-reply to comments
                    </span>
                  </span>
                </Link>
                <Link prefetch={false}
                  href="/profiles"
                  onClick={() => setDesktopFeaturesOpen(false)}
                  className="flex flex-col items-center gap-2 px-3 py-4 rounded-xl corner-superellipse/1.125 bg-pink-a2 hover:bg-pink-a3/70 transition-colors"
                >
                  <span className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-pink-4 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
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
                  </span>
                  <span className="flex flex-col items-center">
                    <h5 className="font-medium text-fg-4 text-center">Lead Capture</h5>
                    <span className="text-xs font-medium text-fg-a3 text-center line-clamp-2">
                      Collect phone & client info
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
