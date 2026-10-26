import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            {profile.monogram}
          </span>
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">Lead QA Engineer · InsurTech</p>
          </div>
        </div>

        <p className="footer-center">
          © 2026 {profile.name} · No cookies, no tracking.
        </p>

        <div className="footer-right">
          <a
            className="footer-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="footer-link" href="#top">
            Back to top
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
