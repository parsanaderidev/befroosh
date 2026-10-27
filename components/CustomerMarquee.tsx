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
    image: "/customers/thumbs/filmak20.jpg",
    url: "https://instagram.com/filmak20",
  },
  {
    handle: "emperaturi_alikhani",
    name: "Alikhani",
    followers: "802K",
    image: "/customers/thumbs/emperaturi_alikhani.jpg",
    url: "https://instagram.com/emperaturi_alikhani",
  },
  {
    handle: "bidard.sho",
    name: "Bidard Sho",
    followers: "725K",
    image: "/customers/thumbs/bidard.sho.jpg",
    url: "https://instagram.com/bidard.sho",
  },
  {
    handle: "baziyato",
    name: "Baziyato",
    followers: "572K",
    image: "/customers/thumbs/baziyato.jpg",
    url: "https://instagram.com/baziyato",
  },
  {
    handle: "kebabiquee",
    name: "Kebabiquee",
    followers: "561K",
    image: "/customers/thumbs/kebabiquee.jpg",
    url: "https://instagram.com/kebabiquee",
  },
  {
    handle: "aghileh.soltanpour",
    name: "Aghileh",
    followers: "497K",
    image: "/customers/thumbs/aghileh.soltanpour.jpg",
    url: "https://instagram.com/aghileh.soltanpour",
  },
  {
    handle: "toloe_aramesh",
    name: "Toloe Aramesh",
    followers: "367K",
    image: "/customers/thumbs/toloe_aramesh.jpg",
    url: "https://instagram.com/toloe_aramesh",
  },
  {
    handle: "hasaneshaghi.ir",
    name: "Hasan Eshaghi",
    followers: "358K",
    image: "/customers/thumbs/hasaneshaghi.ir.jpg",
    url: "https://instagram.com/hasaneshaghi.ir",
  },
  {
    handle: "nedazarefit",
    name: "Neda Zare",
    followers: "289K",
    image: "/customers/thumbs/nedazarefit.jpg",
    url: "https://instagram.com/nedazarefit",
  },
  {
    handle: "vakilte",
    name: "Vakilte",
    followers: "272K",
    image: "/customers/thumbs/vakilte.jpg",
    url: "https://instagram.com/vakilte",
  },
  {
    handle: "hese.tazegi",
    name: "Hese Tazegi",
    followers: "238K",
    image: "/customers/thumbs/hese.tazegi.jpg",
    url: "https://instagram.com/hese.tazegi",
  },
  {
    handle: "pouriya.baghdadi",
    name: "Pouriya Baghdadi",
    followers: "175K",
    image: "/customers/thumbs/pouriya.baghdadi.jpg",
    url: "https://instagram.com/pouriya.baghdadi",
  },
  {
    handle: "parche_almas",
    name: "Parche Almas",
    followers: "156K",
    image: "/customers/thumbs/parche_almas.jpg",
    url: "https://instagram.com/parche_almas",
  },
  {
    handle: "maryam_shekaripsy",
    name: "Maryam Shekari",
    followers: "133K",
    image: "/customers/thumbs/maryam_shekaripsy.jpg",
    url: "https://instagram.com/maryam_shekaripsy",
  },
  {
    handle: "mehrgard.ir",
    name: "Mehrgard",
    followers: "120K",
    image: "/customers/thumbs/mehrgard.ir.jpg",
    url: "https://instagram.com/mehrgard.ir",
  },
  {
    handle: "atefeh_agent",
    name: "Atefeh Beyrami",
    followers: "103K",
    image: "/customers/thumbs/atefeh_agent.jpg",
    url: "https://instagram.com/atefeh_agent",
  },
  {
    handle: "teztap.ir",
    name: "Teztap",
    followers: "95K",
    image: "/customers/thumbs/teztap.ir.jpg",
    url: "https://instagram.com/teztap.ir",
  },
  {
    handle: "khalijfars.yazd",
    name: "Khalij Fars Mall",
    followers: "95K",
    image: "/customers/thumbs/khalijfars.yazd.jpg",
    url: "https://instagram.com/khalijfars.yazd",
  },
  {
    handle: "nonafood.ir",
    name: "Nona Food",
    followers: "71K",
    image: "/customers/thumbs/nonafood.ir.jpg",
    url: "https://instagram.com/nonafood.ir",
  },
];

// Double array for continuous seamless looping
const marqueeItems = [...customers, ...customers];

export default function CustomerMarquee() {
  return (
    <div id="customers" className="w-full max-w-5xl mx-auto px-5 flex flex-col items-center gap-8 relative scroll-mt-24">
      {/* Section Header */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
        <span
          data-slot="badge"
          className="flex items-center justify-center border font-medium w-fit whitespace-nowrap [&>svg]:pointer-events-none ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow] border-transparent bg-bg-a1 text-fg-a2 h-[24px] min-w-[24px] text-sm pl-2 pr-2 gap-1 rounded-sm"
        >
          Customers
        </span>
        <h2 className="text-4xl tracking-tight leading-11 font-medium text-fg-4 text-balance max-w-md">
          Trusted Customers
        </h2>
      </div>

      <style>{`
        @keyframes marquee-spin {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-spinner-track {
          display: flex;
          width: max-content;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          animation: marquee-spin 50s linear infinite;
        }
        .marquee-spinner-track:hover {
          animation-play-state: paused;
        }
        .marquee-customer-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.55;
          transition: opacity 0.25s ease;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
          text-decoration: none;
        }
        .marquee-customer-link:hover {
          opacity: 1;
        }
        .customer-avatar-box {
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background-color: var(--bg-2, #f5f5f5);
        }
        .marquee-avatar {
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
          image-rendering: auto;
          -webkit-font-smoothing: antialiased;
        }
        .marquee-customer-link:hover .marquee-avatar {
          filter: grayscale(0%);
        }
        .customer-handle {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--fg-4, #181925);
          white-space: nowrap;
          transition: color 0.25s ease;
        }
        .marquee-customer-link:hover .customer-handle {
          color: var(--purple-4, #9580ff);
        }
        .customer-followers {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--fg-2, #999);
          white-space: nowrap;
          transition: color 0.25s ease, opacity 0.25s ease;
        }
        .marquee-customer-link:hover .customer-followers {
          color: var(--purple-4, #9580ff);
          opacity: 0.9;
        }
      `}</style>

      {/* Marquee with Gradient Overlays */}
      <div className="w-full max-w-3xl mx-auto relative">
        {/* Start / Left gradient corner overlay */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-20"
          style={{
            background: "linear-gradient(to right, var(--background) 15%, transparent 100%)",
          }}
        />

        {/* End / Right gradient corner overlay */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-20"
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
                className="marquee-customer-link"
                title={`View @${customer.handle} on Instagram (${customer.followers} followers)`}
              >
                <span className="customer-avatar-box">
                  <Image
                    src={customer.image}
                    alt={customer.name}
                    width={24}
                    height={24}
                    loading="lazy"
                    decoding="async"
                    className="marquee-avatar"
                  />
                </span>
                <span className="customer-handle">
                  @{customer.handle}
                </span>
                <span className="customer-followers">
                  {customer.followers}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
