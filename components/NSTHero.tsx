"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NSTHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const gsapMod = await import("gsap");
      const gsap = gsapMod.default;

      ctx = gsap.context(() => {
        const lines =
          headingRef.current?.querySelectorAll(".nst-hero-heading-line-inner");

        gsap.set(eyebrowRef.current, { opacity: 0, y: 12 });
        gsap.set(lines ?? [], { yPercent: 105 });
        gsap.set(subRef.current, { opacity: 0, y: 14 });
        gsap.set(ctasRef.current, { opacity: 0, y: 14 });

        const tl = gsap.timeline({ delay: 0.25 });

        tl.to(eyebrowRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
        })
          .to(
            lines ?? [],
            {
              yPercent: 0,
              duration: 0.85,
              ease: "power3.out",
              stagger: 0.12,
            },
            "-=0.25"
          )
          .to(
            subRef.current,
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          )
          .to(
            ctasRef.current,
            { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
            "-=0.35"
          );
      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section className="nst-hero">
      <Image
        src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1800&q=85&auto=format&fit=crop"
        alt="Luxurious tiled bathroom by North Shore Tiling"
        fill
        priority
        className="nst-hero-image"
        sizes="100vw"
      />
      <div className="nst-hero-overlay" />

      <div className="container">
        <div className="nst-hero-content">
          <p className="nst-hero-eyebrow" ref={eyebrowRef}>
            Auckland Tilers and Waterproofers
          </p>

          <h1 className="nst-hero-heading" ref={headingRef}>
            <span className="nst-hero-heading-line">
              <span className="nst-hero-heading-line-inner">
                Tiled to
              </span>
            </span>
            <span className="nst-hero-heading-line">
              <span className="nst-hero-heading-line-inner">
                Perfection.
              </span>
            </span>
          </h1>

          <p className="nst-hero-sub" ref={subRef}>
            Auckland&apos;s trusted tilers and waterproofers. Residential and
            commercial work across the North Shore and beyond.
          </p>

          <div className="nst-hero-ctas" ref={ctasRef}>
            <Link href="/contact" className="nst-btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="nst-btn-ghost">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
