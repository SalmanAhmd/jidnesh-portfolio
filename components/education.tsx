import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          index="07"
          label="Education & certifications"
          titleId="education-title"
          title={
            <>
              A technical foundation,{" "}
              <span className="muted">kept current.</span>
            </>
          }
          lede="Formal computer science education, plus focused testing and automation coursework."
        />

        <div className="credentials-grid">
          <div data-reveal>
            <p className="credential-column-title">Education</p>
            {education.degrees.map((degree) => (
              <div className="degree-row" key={degree.degree}>
                <span className="degree-name">{degree.degree}</span>
                <span className="degree-place">
                  {degree.place} · {degree.year}
                </span>
              </div>
            ))}
          </div>

          <div data-reveal>
            <p className="credential-column-title">Certifications</p>
            {education.certifications.map((certification) => (
              <div className="cert-row" key={certification.name}>
                <div>
                  <p className="cert-name">{certification.name}</p>
                  <p className="cert-meta">
                    {certification.issuer} · {certification.period}
                  </p>
                </div>
                {certification.status ? (
                  <span className="cert-status">{certification.status}</span>
                ) : null}
              </div>
            ))}

            <p className="learning-footnote">
              <GraduationCap aria-hidden="true" />
              Currently strengthening automation expertise with Selenium
              WebDriver, Java, TestNG, and Maven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
