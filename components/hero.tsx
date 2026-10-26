import {
  ArrowRight,
  Download,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.hero.eyebrow}
          </p>

          <h1 className="hero-title" id="hero-title">
            <span className="hero-line">Confidence</span>{" "}
            <span className="hero-line">
              is a <span className="accent-word">release</span>
            </span>{" "}
            <span className="hero-line">
              requirement<span className="title-period">.</span>
            </span>
          </h1>

          <p className="hero-intro">{profile.hero.intro}</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#case-study">
              View my work
              <ArrowRight className="icon-arrow" aria-hidden="true" />
            </a>
            <a
              className="btn btn-secondary"
              href={profile.resume.path}
              download={profile.resume.label}
            >
              <Download aria-hidden="true" />
              Download resume
            </a>
          </div>

          <div className="hero-expertise" aria-label="Core testing expertise">
            <span className="hero-expertise-label">Core practice</span>
            {profile.hero.expertise.map((item) => (
              <span className="hero-expertise-item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-card-wrap">
          <aside className="hero-card" aria-label="Profile at a glance">
            <div className="hero-card-head">
              <span>Profile / QA</span>
              <span>Since 2022</span>
            </div>

            <div className="hero-stats">
              {profile.hero.stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <p className="hero-stat-value">
                    {stat.value.endsWith("+") ? (
                      <>
                        {stat.value.slice(0, -1)}
                        <span className="unit">+</span>
                      </>
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="hero-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="hero-card-foot">
              <span>
                <MapPin aria-hidden="true" />
                {profile.location}
              </span>
              <span>
                <ShieldCheck aria-hidden="true" />
                Web · Android · iOS
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
