import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-inner">
        <Link
          href="/"
          className="brand not-found-brand"
          aria-label="Jidnesh Patil — home"
        >
          <span className="brand-mark" aria-hidden="true">
            {profile.monogram}
          </span>
          <span className="brand-name">{profile.name}</span>
        </Link>

        <p className="not-found-code">
          <span className="status-dot" aria-hidden="true" />
          404 / Validation failed
        </p>
        <h1 className="not-found-title">This page didn&apos;t pass validation.</h1>
        <p className="not-found-body">
          The link may be outdated, or the page may have moved. The rest of the
          portfolio is still where it should be.
        </p>

        <div className="not-found-actions">
          <Link className="btn btn-primary" href="/">
            <ArrowLeft aria-hidden="true" />
            Back to home
          </Link>
          <a
            className="btn btn-secondary"
            href={profile.resume.path}
            download={profile.resume.label}
          >
            <Download aria-hidden="true" />
            Download resume
          </a>
        </div>

        <p className="not-found-foot">
          {profile.name} · {profile.title}
        </p>
      </div>
    </div>
  );
}
