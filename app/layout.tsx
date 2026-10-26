import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://befroosh.app"),
  title: "Befroosh — All-in-One Instagram Sales & Automation Platform",
  description:
    "Befroosh automatically replies to Instagram comments and DMs, collects customer leads, grows followers, and increases sales.",
  icons: {
    icon: [
      { url: "/favicon-black.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-white.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    title: "Befroosh — All-in-One Instagram Sales & Automation Platform",
    description:
      "Befroosh automatically replies to Instagram comments and DMs, collects customer leads, grows followers, and increases sales.",
    url: "https://befroosh.app",
    siteName: "Befroosh",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Befroosh — All-in-One Instagram Sales & Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Befroosh — All-in-One Instagram Sales & Automation Platform",
    description:
      "Befroosh automatically replies to Instagram comments and DMs, collects customer leads, grows followers, and increases sales.",
    creator: "@befroosh_support",
    site: "@befroosh_support",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <head>
        <link
          rel="preload"
          href="/fonts/OpenRunde-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenRunde-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenRunde-Semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-dvh w-full overflow-x-hidden antialiased tracking-[-0.02em] cursor-default bg-background text-fg-3">
        {children}
      </body>
    </html>
  );
}
