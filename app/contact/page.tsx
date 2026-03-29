import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Get a Free Quote | North Shore Tiling Ltd",
  description:
    "Contact Tee and Steve at North Shore Tiling. Free quotes turned around fast. Serving North Shore, Upper Harbour, Rodney and Hibiscus Coast.",
};

export default function ContactPage() {
  return (
    <>
      <style>{`
        .nst-contact-hero {
          background-color: var(--color-primary);
          padding: 9rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .nst-contact-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent), transparent);
        }

        .nst-contact-body {
          padding: 5rem 0;
          background-color: var(--color-bg);
        }

        .nst-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 5rem;
          align-items: start;
        }

        .nst-contact-details-heading {
          font-family: var(--font-heading);
          font-size: 1.625rem;
          color: var(--color-text);
          margin-bottom: 1.75rem;
          line-height: 1.15;
        }

        .nst-contact-detail-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .nst-contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
        }

        .nst-contact-detail-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .nst-contact-detail-label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 0.25rem;
        }

        .nst-contact-detail-value {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-text);
          line-height: 1.55;
        }

        .nst-contact-detail-value a {
          color: var(--color-text);
          text-decoration: none;
          transition: color var(--transition);
        }

        .nst-contact-detail-value a:hover {
          color: var(--color-accent);
        }

        .nst-contact-divider {
          margin: 2.25rem 0;
          border: none;
          border-top: 1px solid rgba(31, 45, 61, 0.1);
        }

        .nst-contact-areas-heading {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 0.625rem;
        }

        .nst-contact-areas-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          list-style: none;
        }

        .nst-contact-area-tag {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-primary);
          background-color: var(--color-surface);
          padding: 0.375rem 0.875rem;
          border-radius: var(--radius);
        }

        .nst-contact-form-card {
          background-color: var(--color-surface);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
        }

        .nst-contact-form-heading {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--color-text);
          margin-bottom: 1.75rem;
          line-height: 1.15;
        }

        .nst-contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.125rem;
        }

        .nst-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .nst-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .nst-form-label {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-text);
          letter-spacing: 0.02em;
        }

        .nst-form-input,
        .nst-form-select,
        .nst-form-textarea {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-text);
          background-color: #fff;
          border: 1px solid rgba(31, 45, 61, 0.15);
          border-radius: var(--radius);
          padding: 0.6875rem 1rem;
          width: 100%;
          transition: border-color var(--transition), box-shadow var(--transition);
          outline: none;
          appearance: none;
        }

        .nst-form-input:focus,
        .nst-form-select:focus,
        .nst-form-textarea:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(196, 105, 59, 0.12);
        }

        .nst-form-input::placeholder,
        .nst-form-textarea::placeholder {
          color: rgba(31, 45, 61, 0.35);
        }

        .nst-form-textarea {
          resize: vertical;
          min-height: 130px;
          line-height: 1.6;
        }

        .nst-form-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231f2d3d' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
          cursor: pointer;
        }

        .nst-contact-credentials {
          background-color: var(--color-primary);
          padding: 3rem 0;
          position: relative;
        }

        .nst-contact-credentials::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent), transparent);
        }

        .nst-contact-creds-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0;
        }

        .nst-contact-stat {
          padding: 0.5rem 2.5rem;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
          text-align: center;
        }

        .nst-contact-stat-number {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          color: var(--color-accent);
          display: block;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .nst-contact-stat-label {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(244, 240, 235, 0.6);
        }

        @media (max-width: 900px) {
          .nst-contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .nst-form-row {
            grid-template-columns: 1fr;
          }

          .nst-contact-form-card {
            padding: 1.75rem;
          }

          .nst-contact-stat {
            padding: 0.5rem 1.5rem;
          }
        }
      `}</style>

      {/* Hero */}
      <div className="nst-contact-hero">
        <div className="container">
          <p className="nst-page-header-eyebrow">Start Your Project</p>
          <h1 className="nst-page-header-title">Get a Free Quote</h1>
          <p className="nst-page-header-sub">
            We turn quotes around fast. Tell us about your project and we'll be
            in touch within 24 hours.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <section className="nst-contact-body">
        <div className="container">
          <div className="nst-contact-grid">

            {/* Left: Contact details */}
            <div className="nst-reveal">
              <h2 className="nst-contact-details-heading">
                Talk to Tee and Steve
              </h2>

              <ul className="nst-contact-detail-list">
                <li className="nst-contact-detail-item">
                  <Phone size={18} className="nst-contact-detail-icon" />
                  <div>
                    <p className="nst-contact-detail-label">Phone</p>
                    <p className="nst-contact-detail-value">
                      <a href="tel:021123456">021 123 456</a>
                    </p>
                  </div>
                </li>

                <li className="nst-contact-detail-item">
                  <Mail size={18} className="nst-contact-detail-icon" />
                  <div>
                    <p className="nst-contact-detail-label">Email</p>
                    <p className="nst-contact-detail-value">
                      <a href="mailto:hello@northshoretiling.co.nz">
                        hello@northshoretiling.co.nz
                      </a>
                    </p>
                  </div>
                </li>

                <li className="nst-contact-detail-item">
                  <Clock size={18} className="nst-contact-detail-icon" />
                  <div>
                    <p className="nst-contact-detail-label">Hours</p>
                    <p className="nst-contact-detail-value">
                      Mon to Fri: 7am to 5pm
                      <br />
                      Sat: 8am to 12pm
                    </p>
                  </div>
                </li>
              </ul>

              <hr className="nst-contact-divider" />

              <div>
                <p className="nst-contact-areas-heading" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <MapPin size={13} />
                  Areas Served
                </p>
                <ul className="nst-contact-areas-list">
                  {["North Shore", "Upper Harbour", "Rodney", "Hibiscus Coast"].map(
                    (area) => (
                      <li key={area} className="nst-contact-area-tag">
                        {area}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <hr className="nst-contact-divider" />

              <p className="nst-section-body">
                North Shore Tiling Ltd is operated by Tee and Steve. When you
                contact us, you deal directly with us, not a call centre or a
                subcontractor.
              </p>
            </div>

            {/* Right: Contact form */}
            <div className="nst-contact-form-card nst-reveal">
              <h2 className="nst-contact-form-heading">Send an Enquiry</h2>

              <form className="nst-contact-form" noValidate>
                <div className="nst-form-row">
                  <div className="nst-form-group">
                    <label htmlFor="contact-name" className="nst-form-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="nst-form-input"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>

                  <div className="nst-form-group">
                    <label htmlFor="contact-phone" className="nst-form-label">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      className="nst-form-input"
                      placeholder="021 000 000"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="nst-form-group">
                  <label htmlFor="contact-email" className="nst-form-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="nst-form-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="nst-form-group">
                  <label htmlFor="contact-project-type" className="nst-form-label">
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    className="nst-form-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="bathroom">Bathroom</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="nst-form-group">
                  <label htmlFor="contact-message" className="nst-form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="nst-form-textarea"
                    placeholder="Tell us about your project: size, location, any tile preferences, and when you're hoping to start."
                  />
                </div>

                <div style={{ marginTop: "0.5rem" }}>
                  <button type="submit" className="nst-btn-primary">
                    Send Enquiry
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials + Stat band */}
      <div className="nst-contact-credentials">
        <div className="container">
          <div className="nst-contact-creds-inner">
            {["Site Safe Member", "TANZ Member", "ArchiPro Listed", "Sitewise"].map(
              (cred) => (
                <div key={cred} className="nst-credential-item">
                  <span className="nst-credential-dot" />
                  <span className="nst-credential-text">{cred}</span>
                </div>
              )
            )}
            <div className="nst-contact-stat">
              <span className="nst-contact-stat-number">100+</span>
              <span className="nst-contact-stat-label">Auckland projects completed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
