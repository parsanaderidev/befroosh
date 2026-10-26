"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 pb-0 relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-5 flex md:flex-row md:items-start flex-col-reverse gap-x-8 gap-y-12 relative z-10">
        <div className="flex-1 flex flex-col items-start gap-4">
          <p className="text-sm font-medium max-w-72 text-fg-2">
            Befroosh helps Instagram businesses turn viewers into followers, leads into customers, and conversations into sales.
          </p>
          <a
            className="flex items-center gap-2 group relative"
            href="https://befroosh.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-sm font-medium text-fg-2 group-hover:text-fg-3 transition-colors duration-150">
              All systems operational
            </span>
            <span className="relative flex items-center justify-center">
              <span className="size-2 rounded-full bg-green-4"></span>
              <span className="absolute size-2.5 animate-ping rounded-full bg-green-4 opacity-75"></span>
            </span>
          </a>
          <div className="flex items-center gap-3 text-fg-2">
            <a
              href="https://instagram.com/befroosh.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center justify-center"
              aria-label="Instagram"
            >
              <Image
                src="/marketing/instagram.png"
                alt="Instagram"
                width={18}
                height={18}
                className="size-[18px] object-contain rounded-[4px]"
              />
            </a>
            <a
              href="https://t.me/befroosh_support"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg-4 transition-colors"
              aria-label="Telegram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </a>
          </div>
          <p className="text-sm text-fg-2 font-medium">© 2026 Befroosh. All rights reserved.</p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-8 md:gap-x-12">
          <div className="flex flex-1 flex-col gap-1 max-w-32">
            <h6 className="text-sm font-medium text-fg-4">Product</h6>
            <nav aria-label="Main navigation" className="flex flex-col gap-1">
              <a
                aria-current="page"
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors active"
                data-status="active"
                href="/"
              >
                Home
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/login"
              >
                Login
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/register"
              >
                Register
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/#faq"
              >
                FAQ
              </a>
            </nav>
          </div>
          <div className="flex flex-1 flex-col gap-1 max-w-32">
            <h6 className="text-sm font-medium text-fg-4">Features</h6>
            <nav
              aria-label="Features navigation"
              className="flex flex-col gap-1"
            >
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/revenue-attribution"
              >
                Storefront
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/realtime"
              >
                Smart DM
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/performance"
              >
                Comments
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/profiles"
              >
                Lead Capture
              </a>
            </nav>
          </div>
          <div className="flex flex-1 flex-col gap-1 max-w-32">
            <h6 className="text-sm font-medium text-fg-4">Comparison</h6>
            <nav
              aria-label="Comparison navigation"
              className="flex flex-col gap-1"
            >
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/vs-google-analytics"
              >
                Google Analytics
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/vs-plausible"
              >
                Plausible
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/vs-fathom"
              >
                Fathom
              </a>
            </nav>
          </div>
          <div className="flex flex-1 flex-col gap-1 max-w-32">
            <h6 className="text-sm font-medium text-fg-4">Company</h6>
            <nav
              aria-label="Company navigation"
              className="flex flex-col gap-1"
            >
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/contact"
              >
                Contact
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/blog"
              >
                Blog
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/gdpr"
              >
                GDPR
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/data"
              >
                Data policy
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/dpa"
              >
                DPA
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/privacy"
              >
                Privacy
              </a>
              <a
                className="text-sm text-fg-2 hover:text-fg-3 font-medium transition-colors"
                href="/terms"
              >
                Terms
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full h-[260px] sm:h-[340px] md:h-[480px] relative overflow-hidden">
        <div className="absolute inset-0 scale-[0.55] sm:scale-[0.7] md:scale-100 origin-top">
          <svg
            className="shrink-0 absolute top-[296px] left-1/2 -translate-x-1/2 text-purple-4 z-20"
            fill="none"
            height="360"
            style={{ animation: "breathe 2s ease-in-out infinite" }}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3C27 3 31 10 31 16C31 22 27 29 16 29C5 29 1 22 1 16C1 10 5 3 16 3ZM15 9C11.134 9 8 12.134 8 16C8 19.866 11.134 23 15 23H17C20.866 23 24 19.866 24 16C24 12.134 20.866 9 17 9H15Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            className="shrink-0 absolute top-0 left-1/2 -translate-x-1/2 text-purple-2 z-20"
            fill="none"
            height="960"
            style={{ animation: "breathe 3s ease-in-out infinite 0.5s" }}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3C27 3 31 10 31 16C31 22 27 29 16 29C5 29 1 22 1 16C1 10 5 3 16 3ZM15 9C11.134 9 8 12.134 8 16C8 19.866 11.134 23 15 23H17C20.866 23 24 19.866 24 16C24 12.134 20.866 9 17 9H15Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="h-2 absolute bottom-0 left-0 right-0 bg-linear-to-r from-sky-2 via-sky-1 to-purple-4 z-20"></div>
      </div>
    </footer>
  );
}
