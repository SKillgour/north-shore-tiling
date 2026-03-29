"use client";

import { useState } from "react";
import Link from "next/link";

type Step1Answer = "bathroom" | "kitchen" | "outdoor" | "floor" | "other" | null;
type Step2Answer = "new-build" | "renovation" | null;
type Step3Answer = "yes" | "no" | null;

function getRecommendations(
  area: Step1Answer,
  buildType: Step2Answer,
  waterproofing: Step3Answer
): string[] {
  const recs: string[] = [];

  if (area === "bathroom") {
    recs.push("Bathroom Tiling");
    if (waterproofing === "yes") recs.push("Waterproofing");
  } else if (area === "kitchen") {
    recs.push("Kitchen Tiling");
    if (waterproofing === "yes") recs.push("Waterproofing");
  } else if (area === "outdoor") {
    recs.push("Outdoor Tiling");
    if (buildType === "new-build") recs.push("Pedestal Deck Tiling");
    if (waterproofing === "yes") recs.push("Waterproofing");
  } else if (area === "floor") {
    recs.push("Indoor Tiling");
    if (buildType === "new-build") recs.push("Underfloor Heating");
    if (waterproofing === "yes") recs.push("Waterproofing");
    recs.push("Acoustic Underlay");
  } else if (area === "other") {
    recs.push("Indoor Tiling");
    if (waterproofing === "yes") recs.push("Waterproofing");
    if (buildType === "new-build") recs.push("Commercial Tiling");
  }

  return recs.length > 0 ? recs : ["Indoor Tiling"];
}

export default function TilingFinder() {
  const [step, setStep] = useState<1 | 2 | 3 | "result">(1);
  const [area, setArea] = useState<Step1Answer>(null);
  const [buildType, setBuildType] = useState<Step2Answer>(null);
  const [waterproofing, setWaterproofing] = useState<Step3Answer>(null);

  const reset = () => {
    setStep(1);
    setArea(null);
    setBuildType(null);
    setWaterproofing(null);
  };

  const recommendations =
    step === "result" ? getRecommendations(area, buildType, waterproofing) : [];

  return (
    <section className="nst-finder-section">
      <div className="container">
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <p className="nst-section-label">Quick Guide</p>
          <h2
            className="nst-section-heading nst-section-heading-light"
            style={{ marginBottom: "0.75rem" }}
          >
            Which Service Do I Need?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(244, 240, 235, 0.6)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Answer three quick questions and we&apos;ll point you in the right
            direction.
          </p>
        </div>

        <div className="nst-finder-card">
          {/* Progress */}
          <div className="nst-finder-progress">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className={`nst-finder-progress-dot ${
                  (step === "result" ? 4 : step) > n || step === "result"
                    ? "active"
                    : step === n
                    ? "active"
                    : ""
                }`}
              />
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <>
              <p className="nst-finder-step-label">Step 1 of 3</p>
              <p className="nst-finder-question">
                Where is the tiling needed?
              </p>
              <div className="nst-finder-options">
                {(
                  [
                    { value: "bathroom" as Step1Answer, label: "Bathroom" },
                    { value: "kitchen" as Step1Answer, label: "Kitchen" },
                    { value: "outdoor" as Step1Answer, label: "Outdoor / Deck" },
                    { value: "floor" as Step1Answer, label: "Floor / Indoor" },
                    { value: "other" as Step1Answer, label: "Commercial Space" },
                  ]
                ).map((opt) => (
                  <button
                    key={opt.value}
                    className={`nst-finder-option ${area === opt.value ? "selected" : ""}`}
                    onClick={() => {
                      setArea(opt.value);
                      setTimeout(() => setStep(2), 150);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <p className="nst-finder-step-label">Step 2 of 3</p>
              <p className="nst-finder-question">
                Is this a new build or a renovation?
              </p>
              <div className="nst-finder-options">
                {(
                  [
                    { value: "new-build" as Step2Answer, label: "New Build" },
                    { value: "renovation" as Step2Answer, label: "Renovation / Remodel" },
                  ]
                ).map((opt) => (
                  <button
                    key={opt.value}
                    className={`nst-finder-option ${buildType === opt.value ? "selected" : ""}`}
                    onClick={() => {
                      setBuildType(opt.value);
                      setTimeout(() => setStep(3), 150);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <p className="nst-finder-step-label">Step 3 of 3</p>
              <p className="nst-finder-question">
                Do you need waterproofing included?
              </p>
              <div className="nst-finder-options">
                {(
                  [
                    { value: "yes" as Step3Answer, label: "Yes, waterproofing needed" },
                    { value: "no" as Step3Answer, label: "No, tiling only" },
                    { value: "no" as Step3Answer, label: "Not sure" },
                  ]
                ).map((opt, i) => (
                  <button
                    key={i}
                    className={`nst-finder-option ${waterproofing === opt.value && i < 2 ? "selected" : ""}`}
                    onClick={() => {
                      setWaterproofing(opt.value);
                      setTimeout(() => setStep("result"), 150);
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Result */}
          {step === "result" && (
            <>
              <p className="nst-finder-step-label">Your Recommendation</p>
              <p className="nst-finder-question">
                Based on your answers, you likely need:
              </p>
              <div className="nst-finder-result">
                <p className="nst-finder-result-label">Recommended services</p>
                <p className="nst-finder-result-services">
                  {recommendations.join(" + ")}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "rgba(244, 240, 235, 0.6)",
                  marginBottom: "1.25rem",
                  lineHeight: "1.6",
                }}
              >
                Tee and Steve can confirm exactly what&apos;s needed during your
                free quote. Get in touch and we&apos;ll sort you out.
              </p>
              <Link href="/contact" className="nst-btn-primary">
                Get a Free Quote
              </Link>
              <br />
              <button className="nst-finder-reset" onClick={reset}>
                Start over
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
