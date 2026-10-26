"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyCard() {
  return (
          <div className="bg-bg-a1 rounded-xl">
            <div className="flex flex p-6 px-8 gap-3 justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium text-fg-4">Meta verified & safe</h3>
                <p className="max-w-72">
                  Connected via the official Instagram Graph API. No account password required, zero risk to your page.
                </p>
              </div>
              <svg
                className="text-gray-2"
                fill="none"
                height="72"
                viewBox="0 0 16 16"
                width="72"
              >
                <path
                  d="M6.62005 11.1341C7.01349 10.8773 7.48851 10.7273 8 10.7273C8.51149 10.7273 8.98651 10.8773 9.37995 11.1341M6.62005 11.1341C6.38043 10.07 5.3952 9.27273 4.21622 9.27273C2.85789 9.27273 1.75676 10.331 1.75676 11.6364C1.75676 12.9417 2.85789 14 4.21622 14C5.57454 14 6.67568 12.9417 6.67568 11.6364C6.67568 11.464 6.65645 11.296 6.62005 11.1341ZM9.37995 11.1341C9.34355 11.296 9.32432 11.464 9.32432 11.6364C9.32432 12.9417 10.4255 14 11.7838 14C13.1421 14 14.2432 12.9417 14.2432 11.6364C14.2432 10.331 13.1421 9.27273 11.7838 9.27273C10.6048 9.27273 9.61954 10.07 9.37995 11.1341ZM1 7.45455H2.51351M2.51351 7.45455L3.09514 3.26231C3.1954 2.53968 3.8368 2 4.59537 2H11.4046C12.1632 2 12.8046 2.53968 12.9048 3.26231L13.4865 7.45455M2.51351 7.45455H13.4865M13.4865 7.45455H15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
  );
}
