import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gallery | North Shore Tiling Ltd",
  description:
    "Browse recent tiling projects by North Shore Tiling across Auckland: bathrooms, kitchens, outdoor areas, and commercial spaces.",
};

const photos = [
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    alt: "Luxury bathroom tiling installation, North Shore Auckland",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Commercial tiling project, Auckland",
    width: 800,
    height: 530,
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Modern kitchen splashback tiling",
    width: 800,
    height: 640,
  },
  {
    src: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
    alt: "Indoor tiled living area",
    width: 800,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1607400201515-c2c41c9d03ea?w=800&q=80",
    alt: "Waterproofing membrane and tile work",
    width: 800,
    height: 580,
  },
  {
    src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
    alt: "Outdoor patio tiling, North Shore Auckland",
    width: 800,
    height: 560,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Underfloor heating tile installation",
    width: 800,
    height: 620,
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    alt: "Tiler working on a North Shore project",
    width: 800,
    height: 540,
  },
];

const filterTabs = ["All", "Bathrooms", "Kitchens", "Outdoor", "Commercial"];

export default function GalleryPage() {
  return (
    <>
      <style>{`
        .nst-gallery-hero {
          background-color: var(--color-primary);
          padding: 9rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .nst-gallery-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent), transparent);
        }

        .nst-gallery-filters {
          padding: 2.5rem 0 0;
          background-color: var(--color-bg);
          border-bottom: 1px solid rgba(31, 45, 61, 0.1);
        }

        .nst-gallery-filter-list {
          display: flex;
          align-items: center;
          gap: 0;
          list-style: none;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .nst-gallery-filter-list::-webkit-scrollbar {
          display: none;
        }

        .nst-gallery-filter-btn {
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--color-text-muted);
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          white-space: nowrap;
          transition: color var(--transition), border-color var(--transition);
        }

        .nst-gallery-filter-btn:hover {
          color: var(--color-text);
        }

        .nst-gallery-filter-btn.active {
          color: var(--color-accent);
          border-bottom-color: var(--color-accent);
        }

        .nst-gallery-section {
          padding: 4rem 0 5rem;
          background-color: var(--color-bg);
        }

        .nst-gallery-masonry {
          columns: 3;
          column-gap: 1.25rem;
        }

        .nst-gallery-item {
          break-inside: avoid;
          margin-bottom: 1.25rem;
          overflow: hidden;
          position: relative;
          background-color: var(--color-surface);
        }

        .nst-gallery-item-img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.45s ease;
        }

        .nst-gallery-item:hover .nst-gallery-item-img {
          transform: scale(1.03);
        }

        .nst-gallery-cta {
          padding: 5rem 0;
          background-color: var(--color-primary);
          text-align: center;
          position: relative;
        }

        .nst-gallery-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent), transparent);
        }

        .nst-gallery-cta-heading {
          font-family: var(--font-heading);
          font-size: clamp(1.875rem, 3.5vw, 2.75rem);
          color: var(--color-text-on-dark);
          margin-bottom: 1.25rem;
          line-height: 1.1;
        }

        .nst-gallery-cta-sub {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: rgba(244, 240, 235, 0.65);
          max-width: 440px;
          margin: 0 auto 2.25rem;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .nst-gallery-masonry {
            columns: 2;
          }
        }

        @media (max-width: 560px) {
          .nst-gallery-masonry {
            columns: 1;
          }

          .nst-gallery-filter-btn {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>

      {/* Hero */}
      <div className="nst-gallery-hero">
        <div className="container">
          <p className="nst-page-header-eyebrow">Project Showcase</p>
          <h1 className="nst-page-header-title">Our Work</h1>
          <p className="nst-page-header-sub">
            A selection of recent tiling projects across Auckland North Shore
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="nst-gallery-filters">
        <div className="container">
          <ul className="nst-gallery-filter-list">
            {filterTabs.map((tab, i) => (
              <li key={tab}>
                <button
                  className={`nst-gallery-filter-btn${i === 0 ? " active" : ""}`}
                  type="button"
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="nst-gallery-section">
        <div className="container">
          <div className="nst-gallery-masonry nst-stagger-group">
            {photos.map((photo, i) => (
              <div key={i} className="nst-gallery-item nst-stagger-item">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="nst-gallery-item-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nst-gallery-cta">
        <div className="container">
          <div className="nst-reveal">
            <p className="nst-section-label" style={{ color: "rgba(244,240,235,0.5)", marginBottom: "1.25rem" }}>
              Ready to Start?
            </p>
            <h2 className="nst-gallery-cta-heading">
              Like what you see? Get a free quote.
            </h2>
            <p className="nst-gallery-cta-sub">
              Tell us about your project and we'll get back to you fast.
            </p>
            <Link href="/contact" className="nst-btn-primary">
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
