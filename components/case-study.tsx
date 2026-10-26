import {
  FileCheck2,
  Headset,
  Lock,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { caseStudy } from "@/data/profile";

const lifecycleIcons = [UserPlus, FileCheck2, ShieldCheck, Headset] as const;

const caseSections = [
  { href: "#case-overview", label: "Overview" },
  { href: "#case-scope", label: "Scope" },
  { href: "#case-challenges", label: "Challenges" },
  { href: "#case-approach", label: "QA approach" },
  { href: "#case-workflows", label: "Workflows" },
  { href: "#case-collaboration", label: "Collaboration" },
  { href: "#case-outcomes", label: "Outcomes" },
];

export function CaseStudy() {
  return (
    <section
      className="section case-section"
      id="case-study"
      aria-labelledby="case-study-title"
    >
      <div className="container">
        <div className="case-hero" data-reveal>
          <div>
            <span className="section-label">
              <span className="index">03</span> {caseStudy.eyebrow}
            </span>
            <h2 className="case-title" id="case-study-title">
              {caseStudy.title}
            </h2>
            <p className="case-subtitle">{caseStudy.subtitle}</p>
          </div>

          <aside className="case-meta" aria-label="Case study details">
            {caseStudy.meta.map((item) => (
              <div className="case-meta-row" key={item.label}>
                <span className="case-meta-label">{item.label}</span>
                <span className="case-meta-value">{item.value}</span>
              </div>
            ))}
          </aside>
        </div>

        <div className="lifecycle" data-reveal aria-label="Platform workflow lifecycle">
          {caseStudy.lifecycle.map((step, index) => {
            const Icon = lifecycleIcons[index] ?? ShieldCheck;
            return (
              <div className="lifecycle-step" key={step.label}>
                <span className="lifecycle-icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <p className="lifecycle-label">{step.label}</p>
                  <p className="lifecycle-note">{step.note}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="case-body">
          <aside className="case-rail">
            <p className="case-rail-label">In this case study</p>
            <nav className="case-rail-nav" aria-label="Case study sections">
              {caseSections.map((item) => (
                <a className="case-rail-link" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <p className="case-confidential">
              <Lock aria-hidden="true" />
              {caseStudy.confidentiality}
            </p>
          </aside>

          <div className="case-content">
            <section
              className="case-block"
              id="case-overview"
              aria-labelledby="case-overview-title"
              data-reveal
            >
              <div className="case-block-head">
                <span className="case-block-index">01</span>
                <h3 className="case-block-title" id="case-overview-title">
                  Project overview
                </h3>
              </div>
              {caseStudy.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </section>

            <section
              className="case-block"
              id="case-scope"
              aria-labelledby="case-scope-title"
              data-reveal
            >
              <div className="case-block-head">
                <span className="case-block-index">02</span>
                <h3 className="case-block-title" id="case-scope-title">
                  Business modules in experience
                </h3>
              </div>
              <p className="scope-note">{caseStudy.scopeNote}</p>
              <div className="scope-grid">
                {caseStudy.scope.map((group) => (
                  <div key={group.title}>
                    <h4 className="scope-group-title">{group.title}</h4>
                    <ul className="scope-list">
                      {group.modules.map((module) => (
                        <li key={module}>{module}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="case-block"
              id="case-challenges"
              aria-labelledby="case-challenges-title"
              data-reveal
            >
              <div className="case-block-head">
                <span className="case-block-index">03</span>
                <h3 className="case-block-title" id="case-challenges-title">
                  Quality challenges
                </h3>
              </div>
              <div className="challenge-grid">
                {caseStudy.challenges.map((challenge, index) => (
                  <div className="challenge-card" key={challenge.title}>
                    <span className="challenge-num" aria-hidden="true">
                      C{String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="challenge-title">{challenge.title}</h4>
                    <p className="challenge-body">{challenge.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="case-block"
              id="case-approach"
              aria-labelledby="case-approach-title"
              data-reveal
            >
              <div className="case-block-head">
                <span className="case-block-index">04</span>
                <h3 className="case-block-title" id="case-approach-title">
                  QA approach
                </h3>
              </div>
              <div className="approach-grid">
                {caseStudy.approach.map((step, index) => (
                  <div className="approach-item" key={step.title}>
                    <span className="approach-num" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="approach-title">{step.title}</h4>
                      <p className="approach-body">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="case-block"
              id="case-workflows"
              aria-labelledby="case-workflows-title"
              data-reveal
            >
              <div className="case-block-head">
                <span className="case-block-index">05</span>
                <h3 className="case-block-title" id="case-workflows-title">
                  Business-critical workflows
                </h3>
              </div>
              <div className="workflow-grid">
                {caseStudy.workflows.map((workflow) => (
                  <div className="workflow-card" key={workflow.title}>
                    <h4 className="workflow-title">{workflow.title}</h4>
                    <p className="workflow-body">{workflow.body}</p>
                    <p className="workflow-checks">{workflow.checks}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="case-block"
              id="case-collaboration"
              aria-labelledby="case-collaboration-title"
              data-reveal
            >
              <div className="case-block-head">
                <span className="case-block-index">06</span>
                <h3 className="case-block-title" id="case-collaboration-title">
                  Collaboration
                </h3>
              </div>
              <p>{caseStudy.collaboration}</p>
              <div className="collab-roles" aria-label="Teams worked with">
                {[
                  "Product Owners",
                  "Developers",
                  "Business Analysts",
                  "DevOps",
                  "QA team",
                  "Enterprise clients",
                ].map((team) => (
                  <span className="tag" key={team}>
                    {team}
                  </span>
                ))}
              </div>
            </section>

            <section
              className="case-block"
              id="case-outcomes"
              aria-labelledby="case-outcomes-title"
              data-reveal
            >
              <div className="case-block-head">
                <span className="case-block-index">07</span>
                <h3 className="case-block-title" id="case-outcomes-title">
                  Outcome
                </h3>
              </div>
              <p>
                The result was a repeatable release rhythm: requirements reviewed
                early, critical paths covered, defects triaged with context, and
                production deployments validated before and after release.
              </p>
              <div className="outcome-grid">
                {caseStudy.outcomes.map((outcome) => (
                  <div className="outcome-card" key={outcome.label}>
                    <p className="outcome-value">{outcome.value}</p>
                    <p className="outcome-label">{outcome.label}</p>
                  </div>
                ))}
              </div>
              <p className="outcome-note">{caseStudy.outcomeNote}</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
