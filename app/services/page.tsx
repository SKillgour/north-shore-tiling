import Image from "next/image";
import Link from "next/link";
import TilingFinder from "@/components/TilingFinder";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tiling Services | North Shore Tiling Ltd",
  description:
    "Full range of tiling and waterproofing services: bathroom, kitchen, outdoor, commercial, underfloor heating and more. Auckland North Shore.",
};

const services = [
  {
    id: "bathroom-tiling",
    name: "Bathroom Tiling",
    tag: "Most popular",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Luxury tiled bathroom installation",
    body: "Bathrooms are where tiling really matters. From large-format floor tiles to intricate feature walls, we handle every aspect of bathroom tiling with precision. We work to millimetre-accurate layouts, use quality adhesives and grouts, and finish with expert silicon application for a result that looks immaculate and lasts for decades. Whether you have a compact ensuite or a full family bathroom, we bring the same attention to detail.",
    reverse: false,
  },
  {
    id: "kitchen-tiling",
    name: "Kitchen Tiling",
    tag: "Splashbacks and floors",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Modern kitchen splashback tiling",
    body: "A well-tiled kitchen splashback or floor completely transforms the space. We work with all tile types -- porcelain, ceramic, natural stone, and glass -- and handle both new installations and re-tiles. We plan layouts carefully around cabinetry, appliances, and power points to ensure clean lines and minimal cuts. The result is a kitchen that looks designed, not installed.",
    reverse: true,
  },
  {
    id: "indoor-tiling",
    name: "Indoor Tiling",
    tag: "Living spaces and hallways",
    image:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Indoor tiled living area",
    body: "Tiled floors and feature walls throughout living rooms, hallways, laundries, and utility spaces. We specialise in large-format tiles that create a seamless, upscale feel. Every floor installation includes proper substrate preparation and levelling to guarantee a flat, crack-free finish. We can advise on tile selection to suit your existing interior and the structural requirements of the space.",
    reverse: false,
  },
  {
    id: "outdoor-tiling",
    name: "Outdoor Tiling",
    tag: "Patios, pools and entertaining",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Outdoor tiled patio and entertaining area",
    body: "Outdoor tiling has to withstand Auckland's sun, rain, and temperature variation. We use only outdoor-rated, slip-resistant tiles and flexible adhesive systems designed for movement. We tile patios, pool surrounds, balconies, and outdoor entertaining areas. Every installation accounts for adequate drainage falls and expansion joints to ensure the surface stays looking perfect for years.",
    reverse: true,
  },
  {
    id: "commercial-tiling",
    name: "Commercial Tiling",
    tag: "Builders and developers",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Commercial tiling project",
    body: "We partner with builders, developers, and project managers on commercial tiling contracts across Auckland. Our experience spans hospitality, retail, multi-unit residential, and healthcare. We understand commercial timelines and coordinate with other trades to keep your programme on track. We're Site Safe and Sitewise certified, which means we operate compliantly on any site.",
    reverse: false,
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    tag: "Critical protection",
    image:
      "https://images.unsplash.com/photo-1607400201515-c2c41c9d03ea?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Waterproofing membrane application",
    body: "Proper waterproofing is the foundation of any lasting tiled wet area. We apply certified membrane systems to showers, wet rooms, and external surfaces before any tiling begins. Getting this right prevents leaks, substrate damage, and costly remediation later. We work to NZS 4858 standards and use products specified for the specific application, whether it's a shower recess or a rooftop deck.",
    reverse: true,
  },
  {
    id: "underfloor-heating",
    name: "Underfloor Heating",
    tag: "Warm floors year-round",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Underfloor heating element beneath tiled floor",
    body: "Electric underfloor heating transforms a tiled bathroom or kitchen floor from cold to luxuriously warm. We supply and install heating elements before tiling, ensuring correct positioning and coverage. The system is embedded in the tile adhesive bed and controlled by a programmable thermostat. It adds minimal height to the floor and works with all tile types. Underfloor heating is increasingly standard in new builds and popular in bathroom renovations.",
    reverse: false,
  },
  {
    id: "pedestal-deck-tiling",
    name: "Pedestal Deck Tiling",
    tag: "Raised access decks",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Pedestal system tiled outdoor deck",
    body: "Pedestal systems allow large-format tiles to be laid over waterproofed decks and balconies without bonding to the substrate. This creates a floating tile surface with access to the waterproofing membrane below. It's the correct method for tiled rooftop and balcony decks, accommodating building movement and providing drainage. We size and install the pedestal system correctly so your deck tiles sit level and stable.",
    reverse: true,
  },
  {
    id: "acoustic-underlay",
    name: "Acoustic Underlay",
    tag: "Sound reduction",
    image:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=900&q=85&auto=format&fit=crop",
    imageAlt: "Acoustic underlay installation beneath tiles",
    body: "In multi-storey buildings and apartments, acoustic underlay beneath tiled floors significantly reduces impact sound transmission between floors. We use approved acoustic mat systems that meet NZ Building Code requirements for sound insulation. The underlay is installed over the substrate before tiling, adding minimal height while delivering measurable sound reduction. It's especially important in timber-framed buildings where tile-on-timber installations are common.",
    reverse: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <div className="nst-page-header">
        <div className="container">
          <p className="nst-page-header-eyebrow">What We Do</p>
          <h1 className="nst-page-header-title">Our Services</h1>
          <p className="nst-page-header-sub">
            Nine specialised tiling and waterproofing services, all delivered by
            Tee and Steve directly. Residential and commercial across the North
            Shore and wider Auckland.
          </p>
        </div>
      </div>

      {/* Service detail sections */}
      <div style={{ backgroundColor: "var(--color-bg)" }}>
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="nst-service-detail-section"
          >
            <div className="container">
              <div
                className={`nst-service-detail-grid ${service.reverse ? "reverse" : ""}`}
              >
                <div className="nst-service-detail-image-wrap nst-reveal">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={700}
                    height={380}
                    style={{ width: "100%", height: "380px", objectFit: "cover" }}
                  />
                </div>
                <div className="nst-reveal">
                  <p className="nst-service-detail-tag">{service.tag}</p>
                  <h2 className="nst-service-detail-title">{service.name}</h2>
                  <p className="nst-service-detail-body">{service.body}</p>
                  <Link href="/contact" className="nst-btn-primary">
                    Enquire About This Service
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Tiling Finder */}
      <TilingFinder />

      {/* Final CTA */}
      <section
        style={{
          padding: "5rem 0",
          backgroundColor: "var(--color-surface)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div className="nst-reveal">
            <p className="nst-section-label">Ready to Get Started?</p>
            <h2
              className="nst-section-heading"
              style={{ marginBottom: "1rem" }}
            >
              Free Quotes, No Obligation
            </h2>
            <p
              className="nst-section-body"
              style={{
                maxWidth: "500px",
                margin: "0 auto 2rem",
              }}
            >
              Call or email Tee and Steve directly. We quote fast and keep the
              process simple.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Link href="/contact" className="nst-btn-primary">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:0212973547"
                className="nst-btn-dark"
              >
                Call 021 297 3547
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
