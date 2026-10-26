import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { contact, profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel" data-reveal>
          <div className="contact-grid">
            <div>
              <p className="contact-kicker">
                <span className="status-dot" aria-hidden="true" />
                Contact
              </p>
              <h2 className="contact-title" id="contact-title">
                Let&apos;s make the next release a{" "}
                <span className="accent-word">confident</span> one.
              </h2>
              <p className="contact-body">{contact.body}</p>

              <div className="contact-actions">
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" />
                  Start a conversation
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
            </div>

            <div className="contact-details">
              <p className="contact-detail-label">Direct</p>

              <a className="contact-link" href={`mailto:${profile.email}`}>
                <span>
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-link-value">{profile.email}</span>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>

              <a
                className="contact-link"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span className="contact-detail-label">LinkedIn</span>
                  <span className="contact-link-value">
                    linkedin.com/in/jidnesh-patil-9a1256200
                  </span>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>

              <p className="contact-location">
                <MapPin aria-hidden="true" />
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
