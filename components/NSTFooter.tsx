import Link from "next/link";
import { Phone, Mail, Facebook, MapPin } from "lucide-react";

export default function NSTFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="nst-footer">
      <div className="container">
        <div className="nst-footer-grid">
          {/* Brand col */}
          <div>
            <div className="nst-footer-wordmark">North Shore Tiling</div>
            <p className="nst-footer-tagline">
              Premium tiling and waterproofing across the North Shore and wider
              Auckland region. Residential and commercial.
            </p>
            <ul className="nst-footer-contact-list">
              <li className="nst-footer-contact-item">
                <Phone className="nst-footer-contact-icon" />
                <a href="tel:0212973547">021 297 3547</a>
              </li>
              <li className="nst-footer-contact-item">
                <Mail className="nst-footer-contact-icon" />
                <a href="mailto:info@northshoretiling.nz">
                  info@northshoretiling.nz
                </a>
              </li>
              <li className="nst-footer-contact-item">
                <Facebook className="nst-footer-contact-icon" />
                <a
                  href="https://www.facebook.com/northshoretiling.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Nav col */}
          <div>
            <p className="nst-footer-col-heading">Services</p>
            <ul className="nst-footer-nav-list">
              {[
                "Bathroom Tiling",
                "Kitchen Tiling",
                "Indoor Tiling",
                "Outdoor Tiling",
                "Commercial Tiling",
                "Waterproofing",
                "Underfloor Heating",
                "Pedestal Deck Tiling",
                "Acoustic Underlay",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="nst-footer-nav-link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships col */}
          <div>
            <p className="nst-footer-col-heading">Navigation</p>
            <ul className="nst-footer-nav-list" style={{ marginBottom: "2rem" }}>
              <li>
                <Link href="/" className="nst-footer-nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="nst-footer-nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="nst-footer-nav-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nst-footer-nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nst-footer-nav-link">
                  Get a Quote
                </Link>
              </li>
            </ul>

            <p className="nst-footer-col-heading">Memberships</p>
            <div className="nst-footer-memberships">
              {["Site Safe", "TANZ", "ArchiPro", "Sitewise"].map((m) => (
                <span key={m} className="nst-membership-badge">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="nst-footer-bottom">
          <p className="nst-footer-copy">
            &copy; {year} North Shore Tiling Ltd. All rights reserved.
          </p>
          <p className="nst-footer-location">
            <MapPin style={{ width: "0.875rem", height: "0.875rem" }} />
            Auckland, New Zealand
          </p>
        </div>
      </div>
      <style>{`.footer-credit { text-align: center; font-size: 0.68rem; opacity: 0.35; margin-top: 1.5rem; padding-bottom: 0.75rem; letter-spacing: 0.02em; } .footer-credit a { color: inherit; text-decoration: none; } .footer-credit a:hover { opacity: 0.7; }`}</style>
      <p className="footer-credit">Website by <a href="https://insightly.nz" target="_blank" rel="noopener noreferrer">Insightly</a></p>
    </footer>
  );
}
