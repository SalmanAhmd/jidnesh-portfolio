import { expertise } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Expertise() {
  return (
    <section className="section" id="expertise" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeading
          index="04"
          label="Expertise"
          titleId="expertise-title"
          title={
            <>
              Depth across the{" "}
              <span className="muted">testing lifecycle.</span>
            </>
          }
          lede="A practical toolkit built on complex business applications: plan deliberately, test the critical paths, verify the data, and leave a clear record behind."
        />

        <div className="expertise-layout">
          <div className="skill-groups" data-reveal>
            {expertise.categories.map((category) => (
              <div className="skill-group" key={category.title}>
                <span className="skill-number" aria-hidden="true">
                  {category.number}
                </span>
                <h3 className="skill-title">{category.title}</h3>
                <div className="skill-items" aria-label={`${category.title} skills`}>
                  {category.items.map((item) => (
                    <span className="skill-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="learning-card" aria-label="Automation learning">
            <div className="learning-card-top">
              <span className="learning-label">{expertise.learning.label}</span>
              <span className="learning-status">
                <span className="status-dot" aria-hidden="true" />
                In progress
              </span>
            </div>

            <h3 className="learning-title">{expertise.learning.title}</h3>
            <p className="learning-body">{expertise.learning.body}</p>

            <div className="learning-items">
              {expertise.learning.items.map((item) => (
                <span className="learning-item" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <p className="learning-note">
              <strong>Kept honest:</strong> this is in-progress learning, not
              production automation ownership. The foundation is still manual and
              API depth.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
