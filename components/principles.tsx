import { principles } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Principles() {
  return (
    <section className="section" id="principles" aria-labelledby="principles-title">
      <div className="container">
        <SectionHeading
          index="06"
          label="Principles"
          titleId="principles-title"
          title={
            <>
              A few beliefs that shape{" "}
              <span className="muted">how I test.</span>
            </>
          }
          lede="Not a methodology manifesto — just the habits that consistently make software safer to release."
        />

        <div className="principles-list">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title} data-reveal>
              <span className="principle-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-body">{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
