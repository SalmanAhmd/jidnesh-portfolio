import { MapPin, ShieldCheck } from "lucide-react";
import { about, profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          index="01"
          label="About"
          titleId="about-title"
          title={
            <>
              A QA career built around{" "}
              <span className="muted">one complex product.</span>
            </>
          }
          lede="From hands-on test execution to end-to-end quality ownership — with the business context to know what matters."
        />

        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <blockquote className="about-quote">{about.pullQuote}</blockquote>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-side" aria-label="Career progression and focus" data-reveal>
            <div className="about-side-inner">
              <div>
                <p className="side-label">Career path</p>
                <div className="progression">
                  {about.progression.map((item) => (
                    <div className="progression-item" key={`${item.year}-${item.title}`}>
                      <span className="progression-year">{item.year}</span>
                      <span className="dot" aria-hidden="true" />
                      <div>
                        <p className="progression-title">{item.title}</p>
                        <p className="progression-note">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="about-focus">
                  <p className="side-label">What I focus on</p>
                  <div className="focus-tags">
                    {about.focus.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="about-footnote">
                    <MapPin aria-hidden="true" />
                    {profile.location} · InsurTech
                  </p>
                </div>
              </div>
            </div>

            <p className="about-footnote">
              <ShieldCheck aria-hidden="true" />
              {profile.company} · 2022 — Present
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
