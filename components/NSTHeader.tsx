"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NSTHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`nst-header ${scrolled ? "nst-header-solid" : "nst-header-transparent"}`}
    >
      <div className="container nst-header-inner">
        <Link href="/" className="nst-wordmark">
          North Shore Tiling
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nst-nav">
            <li>
              <Link href="/services" className="nst-nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="nst-nav-link">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nst-nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nst-btn-primary">
                Free Quote
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="nst-mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          style={{
            backgroundColor: "var(--color-primary)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <nav className="container" style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {[
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nst-nav-link"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "0.875rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      fontSize: "1.0625rem",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li style={{ paddingTop: "1rem" }}>
                <Link
                  href="/contact"
                  className="nst-btn-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  Free Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
