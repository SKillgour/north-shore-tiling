"use client";

import { useEffect } from "react";

export default function NSTScrollAnimations() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const gsapMod = await import("gsap");
      const gsap = gsapMod.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Generic reveal elements
        const reveals = document.querySelectorAll<HTMLElement>(".nst-reveal");
        reveals.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

        // Stagger groups
        const staggerParents =
          document.querySelectorAll<HTMLElement>(".nst-stagger-group");
        staggerParents.forEach((parent) => {
          const items = parent.querySelectorAll<HTMLElement>(".nst-stagger-item");
          gsap.fromTo(
            items,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: parent,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

        // Credentials strip: slide in from left
        const creds = document.querySelectorAll<HTMLElement>(
          ".nst-credential-item"
        );
        if (creds.length) {
          gsap.fromTo(
            creds,
            { opacity: 0, x: -28 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.09,
              scrollTrigger: {
                trigger: creds[0].closest(".nst-credentials-strip"),
                start: "top 90%",
                once: true,
              },
            }
          );
        }

        // Testimonial: fade + slight scale
        const testimonialInner = document.querySelector<HTMLElement>(
          ".nst-testimonial-inner"
        );
        if (testimonialInner) {
          gsap.fromTo(
            testimonialInner,
            { opacity: 0, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: testimonialInner,
                start: "top 82%",
                once: true,
              },
            }
          );
        }
      });
    };

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
