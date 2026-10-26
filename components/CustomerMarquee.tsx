"use client";

import React from "react";
import Image from "next/image";

interface Customer {
  handle: string;
  name: string;
  followers: string;
  image: string;
  url: string;
}

const customers: Customer[] = [
  {
    handle: "filmak20",
    name: "Filmak",
    followers: "1.9M",
    image: "/customers/filmak20.jpg",
    url: "https://instagram.com/filmak20",
  },
  {
    handle: "emperaturi_alikhani",
    name: "Alikhani",
    followers: "802K",
    image: "/customers/emperaturi_alikhani.jpg",
    url: "https://instagram.com/emperaturi_alikhani",
  },
  {
    handle: "bidard.sho",
    name: "Bidard Sho",
    followers: "725K",
    image: "/customers/bidard.sho.jpg",
    url: "https://instagram.com/bidard.sho",
  },
  {
    handle: "baziyato",
    name: "Baziyato",
    followers: "572K",
    image: "/customers/baziyato.jpg",
    url: "https://instagram.com/baziyato",
  },
  {
    handle: "kebabiquee",
    name: "Kebabiquee",
    followers: "561K",
    image: "/customers/kebabiquee.jpg",
    url: "https://instagram.com/kebabiquee",
  },
  {
    handle: "aghileh.soltanpour",
    name: "Aghileh",
    followers: "497K",
    image: "/customers/aghileh.soltanpour.jpg",
    url: "https://instagram.com/aghileh.soltanpour",
  },
  {
    handle: "toloe_aramesh",
    name: "Toloe Aramesh",
    followers: "367K",
    image: "/customers/toloe_aramesh.jpg",
    url: "https://instagram.com/toloe_aramesh",
  },
  {
    handle: "hasaneshaghi.ir",
    name: "Hasan Eshaghi",
    followers: "358K",
    image: "/customers/hasaneshaghi.ir.jpg",
    url: "https://instagram.com/hasaneshaghi.ir",
  },
  {
    handle: "nedazarefit",
    name: "Neda Zare",
    followers: "289K",
    image: "/customers/nedazarefit.jpg",
    url: "https://instagram.com/nedazarefit",
  },
  {
    handle: "vakilte",
    name: "Vakilte",
    followers: "272K",
    image: "/customers/vakilte.jpg",
    url: "https://instagram.com/vakilte",
  },
  {
    handle: "hese.tazegi",
    name: "Hese Tazegi",
    followers: "238K",
    image: "/customers/hese.tazegi.jpg",
    url: "https://instagram.com/hese.tazegi",
  },
  {
    handle: "pouriya.baghdadi",
    name: "Pouriya Baghdadi",
    followers: "175K",
    image: "/customers/pouriya.baghdadi.jpg",
    url: "https://instagram.com/pouriya.baghdadi",
  },
  {
    handle: "parche_almas",
    name: "Parche Almas",
    followers: "156K",
    image: "/customers/parche_almas.jpg",
    url: "https://instagram.com/parche_almas",
  },
  {
    handle: "maryam_shekaripsy",
    name: "Maryam Shekari",
    followers: "133K",
    image: "/customers/maryam_shekaripsy.jpg",
    url: "https://instagram.com/maryam_shekaripsy",
  },
  {
    handle: "mehrgard.ir",
    name: "Mehrgard",
    followers: "120K",
    image: "/customers/mehrgard.ir.jpg",
    url: "https://instagram.com/mehrgard.ir",
  },
  {
    handle: "atefeh_agent",
    name: "Atefeh Beyrami",
    followers: "103K",
    image: "/customers/atefeh_agent.jpg",
    url: "https://instagram.com/atefeh_agent",
  },
  {
    handle: "teztap.ir",
    name: "Teztap",
    followers: "95K",
    image: "/customers/teztap.ir.jpg",
    url: "https://instagram.com/teztap.ir",
  },
  {
    handle: "khalijfars.yazd",
    name: "Khalij Fars Mall",
    followers: "95K",
    image: "/customers/khalijfars.yazd.jpg",
    url: "https://instagram.com/khalijfars.yazd",
  },
  {
    handle: "nonafood.ir",
    name: "Nona Food",
    followers: "71K",
    image: "/customers/nonafood.ir.jpg",
    url: "https://instagram.com/nonafood.ir",
  },
];

// Double array for continuous seamless looping
const marqueeItems = [...customers, ...customers];

export default function CustomerMarquee() {
  return (
    <div className="max-w-3xl mx-auto px-5 mt-4 relative">
      <style>{`
        @keyframes marquee-spin {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-spinner-track {
          display: flex;
          width: max-content;
          animation: marquee-spin 35s linear infinite;
        }
        .marquee-spinner-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Start / Left gradient corner overlay */}
      <div
        className="pointer-events-none absolute inset-y-0 left-5 w-24 z-20"
        style={{
          background: "linear-gradient(to right, var(--background) 15%, transparent 100%)",
        }}
      />

      {/* End / Right gradient corner overlay */}
      <div
        className="pointer-events-none absolute inset-y-0 right-5 w-24 z-20"
        style={{
          background: "linear-gradient(to left, var(--background) 15%, transparent 100%)",
        }}
      />

      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
        }}
      >
        <div className="marquee-spinner-track gap-8 py-1 items-center">
          {marqueeItems.map((customer, index) => (
            <a
              key={`${customer.handle}-${index}`}
              href={customer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer select-none"
              title={`View @${customer.handle} on Instagram (${customer.followers} followers)`}
            >
              <Image
                src={customer.image}
                alt={customer.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all shrink-0"
              />
              <span className="text-sm font-medium text-fg-4 whitespace-nowrap">
                @{customer.handle}
              </span>
              <span className="text-xs font-semibold text-fg-2 whitespace-nowrap">
                {customer.followers}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
