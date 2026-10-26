import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center bg-background text-fg-3">
      <div className="flex flex-col items-center gap-2">
        <span className="text-6xl font-medium tracking-tight text-fg-4">404</span>
        <h1 className="text-2xl font-medium text-fg-4">Page not found</h1>
        <p className="max-w-md text-sm text-fg-a2">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-full bg-purple-4 px-6 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-2"
      >
        Back to home
      </Link>
    </div>
  );
}
