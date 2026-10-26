import { leadership } from "@/data/profile";

export function Leadership() {
  return (
    <section
      className="section leadership-section"
      id="leadership"
      aria-labelledby="leadership-title"
    >
      <div className="container">
        <div className="leadership-head" data-reveal>
          <div>
            <span className="section-label">
              <span className="index">05</span> Leadership
            </span>
            <h2 className="leadership-title" id="leadership-title">
              Quality leadership, close to the work.
            </h2>
          </div>

          <div className="leadership-side">
            <p className="leadership-intro">{leadership.intro}</p>
            <p className="leadership-stance">
              Leadership is not distance from the work. It is{" "}
              <strong>knowing which details decide whether a release is ready.</strong>
            </p>
          </div>
        </div>

        <div className="leadership-grid">
          {leadership.highlights.map((item, index) => (
            <article className="leadership-card" key={item.title} data-reveal>
              <span className="leadership-num" aria-hidden="true">
                L{String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="leadership-card-title">{item.title}</h3>
              <p className="leadership-card-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
