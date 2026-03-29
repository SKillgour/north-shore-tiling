import Image from "next/image";
import Link from "next/link";
import NSTHero from "@/components/NSTHero";
import {
  ShieldCheck,
  Star,
  Clock,
  Wrench,
  Thermometer,
  Droplets,
  Layers,
  Grid3x3,
  Waves,
  Volume2,
  ArrowRight,
  Quote,
} from "lucide-react";

const services = [
  {
    name: "Bathroom Tiling",
    desc: "Full bathroom tile installations — floors, walls, wet areas, and feature walls.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80&auto=format&fit=crop",
    size: "hero",
  },
  {
    name: "Waterproofing",
    desc: "Certified waterproofing membranes for showers, wet areas, and external surfaces.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1656646523682-f567bf2f28da?w=700&q=80&auto=format&fit=crop",
    size: "medium",
  },
  {
    name: "Kitchen Tiling",
    desc: "Splashbacks, floors, and feature walls that elevate your kitchen.",
    icon: Grid3x3,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop",
    size: "third",
  },
  {
    name: "Outdoor Tiling",
    desc: "Durable outdoor tile systems for patios, pool surrounds, and entertaining areas.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80&auto=format&fit=crop",
    size: "third",
  },
  {
    name: "Underfloor Heating",
    desc: "Warm tile floors with concealed electric heating systems.",
    icon: Thermometer,
    image:
      "https://images.unsplash.com/photo-1656646523907-97b094c7e63a?w=600&q=80&auto=format&fit=crop",
    size: "third",
  },
  {
    name: "Commercial Tiling",
    desc: "Large-format commercial projects completed on time and on spec.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80&auto=format&fit=crop",
    size: "medium",
  },
  {
    name: "Indoor Tiling",
    desc: "Living spaces, hallways, and feature areas tiled to perfection.",
    icon: Grid3x3,
    image:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80&auto=format&fit=crop",
    size: "third",
  },
  {
    name: "Pedestal Deck Tiling",
    desc: "Raised pedestal systems for outdoor decks and rooftop terraces.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80&auto=format&fit=crop",
    size: "third",
  },
  {
    name: "Acoustic Underlay",
    desc: "Sound-dampening underlay beneath floor tiles for residential and commercial builds.",
    icon: Volume2,
    image:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80&auto=format&fit=crop",
    size: "third",
  },
];

const cardColMap: Record<string, string> = {
  hero: "nst-service-card-hero",
  medium: "nst-service-card-medium",
  third: "nst-service-card-third",
};

const whyPoints = [
  {
    icon: Quote,
    title: "Free Quotes, Fast",
    body: "No waiting around. Tee and Steve turn quotes around quickly so you can get your project moving.",
  },
  {
    icon: Star,
    title: "Tee and Steve",
    body: "We're Tee and Steve -- Auckland tilers with years of hands-on experience. You deal with us directly, from quote to completion.",
  },
  {
    icon: Clock,
    title: "Tight Timelines",
    body: "We commit to schedules and stick to them. Work happens fast, quiet, and to perfection.",
  },
  {
    icon: Wrench,
    title: "Full Service",
    body: "From surface prep and waterproofing through to the final grout and silicon -- we handle everything.",
  },
];

export default function HomePage() {
  return (
    <>
      <NSTHero />

      {/* Credentials Strip */}
      <div className="nst-credentials-strip">
        <div className="nst-credentials-inner">
          {["Site Safe Member", "TANZ Member", "ArchiPro Listed", "Sitewise"].map(
            (cred) => (
              <div key={cred} className="nst-credential-item">
                <span className="nst-credential-dot" />
                <span className="nst-credential-text">{cred}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Services Section */}
      <section className="nst-services-section">
        <div className="container">
          <div className="nst-services-header nst-reveal">
            <p className="nst-section-label">What We Do</p>
            <h2 className="nst-section-heading" style={{ marginBottom: "0.875rem" }}>
              Expert Tiling for Every Space
            </h2>
            <p
              className="nst-section-body"
              style={{ maxWidth: "560px", marginTop: "0.75rem" }}
            >
              From a single bathroom to a full commercial build, North Shore
              Tiling delivers precise, lasting results every time.
            </p>
          </div>

          <div className="nst-services-grid nst-stagger-group">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  href="/services"
                  key={service.name}
                  className={`nst-service-card ${cardColMap[service.size]} nst-stagger-item`}
                >
                  <div className="nst-service-card-image-wrap">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={700}
                      height={service.size === "hero" ? 260 : 200}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="nst-service-card-body">
                    <Icon className="nst-service-icon" />
                    <h3 className="nst-service-name">{service.name}</h3>
                    <p className="nst-service-desc">{service.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div
            style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}
            className="nst-reveal"
          >
            <Link href="/services" className="nst-btn-primary">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="nst-why-section">
        <div className="container">
          <div className="nst-why-grid">
            <div className="nst-why-image-wrap nst-reveal">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85&auto=format&fit=crop"
                alt="Tiler at work on a North Shore Auckland project"
                width={600}
                height={580}
                style={{ width: "100%", height: "580px", objectFit: "cover" }}
              />
              <div className="nst-why-image-accent">
                <span className="nst-why-accent-number">100%</span>
                Client Satisfaction
              </div>
            </div>

            <div>
              <div className="nst-reveal">
                <p className="nst-section-label">Why North Shore Tiling</p>
                <h2
                  className="nst-section-heading"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Precision Work, Every Time
                </h2>
                <p className="nst-section-body">
                  We take pride in doing the job right -- the first time. No
                  shortcuts, no mess, no drama.
                </p>
              </div>

              <div className="nst-why-points nst-stagger-group">
                {whyPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="nst-why-point nst-stagger-item">
                      <div className="nst-why-point-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="nst-why-point-title">{point.title}</h3>
                        <p className="nst-why-point-body">{point.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                style={{ marginTop: "2.5rem" }}
                className="nst-reveal"
              >
                <Link href="/contact" className="nst-btn-primary">
                  Get a Free Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="nst-testimonial-section">
        <div className="container">
          <div className="nst-testimonial-inner">
            <span className="nst-testimonial-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="nst-testimonial-quote">
              Tee and Steve are an amazing team. Work happens fast, quiet and to
              perfection. Steve and Tee could give us a quote and timeframe in no
              time. The silicon application is amazing. Will definitely recommend.
            </blockquote>
            <div className="nst-testimonial-attr">
              <p className="nst-testimonial-name">Susanne</p>
              <p className="nst-testimonial-role">Interior Designer, Auckland</p>
              <div className="nst-testimonial-stars" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Split */}
      <section className="nst-cta-split">
        <div className="container">
          <div
            className="nst-section-label"
            style={{
              textAlign: "center",
              marginBottom: "2.5rem",
              color: "rgba(244, 240, 235, 0.5)",
              letterSpacing: "0.16em",
            }}
          >
            Ready to Start?
          </div>
          <div className="nst-cta-split-grid">
            <div className="nst-cta-split-panel nst-reveal">
              <p className="nst-cta-panel-label">Homeowners</p>
              <h3 className="nst-cta-panel-heading">Residential Projects</h3>
              <p className="nst-cta-panel-body">
                Bathrooms, kitchens, living areas, outdoor spaces. We work with
                homeowners across the North Shore and greater Auckland.
              </p>
              <Link href="/contact" className="nst-btn-primary">
                Quote My Home Project
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="nst-cta-split-panel nst-reveal">
              <p className="nst-cta-panel-label">Builders and Developers</p>
              <h3 className="nst-cta-panel-heading">Commercial Projects</h3>
              <p className="nst-cta-panel-body">
                Multi-unit, hospitality, retail, and large-format commercial
                tiling. We integrate with your build schedule.
              </p>
              <Link href="/contact" className="nst-btn-primary">
                Discuss a Commercial Job
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
