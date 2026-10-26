import { experience } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="02"
          label="Experience"
          titleId="experience-title"
          title={
            <>
              Three roles. One product.{" "}
              <span className="muted">A widening scope of ownership.</span>
            </>
          }
          lede="A progression from detailed test execution to leading QA strategy, release validation, and production confidence."
        />

        <div className="company-bar" data-reveal>
          <div>
            <p className="company-name">{experience.company}</p>
            <p className="company-context">{experience.context}</p>
          </div>
          <p className="company-period">{experience.period}</p>
        </div>

        <div className="roles">
          {experience.roles.map((role, index) => (
            <article className="role" key={role.title} data-reveal>
              <div className="role-period">
                {role.period}
                {role.period.includes("Present") ? <span>Current</span> : null}
              </div>

              <div>
                <div className="role-head">
                  <div>
                    <h3 className="role-title">{role.title}</h3>
                    <p className="role-summary">{role.summary}</p>
                  </div>
                  <span className="role-index" aria-hidden="true">
                    R{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="role-bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {role.highlight ? (
                  <p className="role-highlight">
                    <strong>{role.highlight.value}</strong>
                    <span>{role.highlight.label}</span>
                  </p>
                ) : null}

                <div className="role-tags" aria-label={`${role.title} focus areas`}>
                  {role.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
