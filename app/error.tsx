"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center bg-background text-fg-3">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-medium text-fg-4">Something went wrong</h1>
        <p className="max-w-md text-sm text-fg-a2">
          An unexpected error occurred while loading this page.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex h-11 items-center justify-center rounded-full bg-purple-4 px-6 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-2"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-bg-a1 px-6 font-medium text-fg-3 transition-colors hover:bg-bg-a2"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
