"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);

      const marker = window.scrollY + 150;
      let current = "";

      for (const item of profile.nav) {
        const section = document.getElementById(item.href.slice(1));
        if (!section) continue;

        const top = section.getBoundingClientRect().top + window.scrollY;
        const bottom = top + section.offsetHeight;

        if (marker >= top && marker < bottom) current = item.href;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(
      () => firstMobileLinkRef.current?.focus(),
      60,
    );

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [mobileOpen]);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            {profile.monogram}
          </span>
          <span>
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">
              Lead QA Engineer
            </span>
          </span>
        </a>

        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={active === item.href ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />

            <a
              className="btn btn-secondary btn-sm"
              href={profile.resume.path}
              download={profile.resume.label}
            >
              <Download aria-hidden="true" />
              Download resume
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              className="icon-button menu-button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="mobile-menu" id="mobile-navigation">
          <nav className="container mobile-menu-inner" aria-label="Mobile">
            <div className="mobile-links">
              {profile.nav.map((item, index) => (
                <a
                  key={item.href}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={item.href}
                  className="mobile-link"
                  onClick={closeMenu}
                >
                  {item.label}
                  <span aria-hidden="true">0{index + 1}</span>
                </a>
              ))}
            </div>

            <div className="mobile-menu-actions">
              <a
                className="btn btn-primary"
                href={profile.resume.path}
                download={profile.resume.label}
                onClick={closeMenu}
              >
                <Download aria-hidden="true" />
                Download resume
              </a>
              <a
                className="btn btn-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
