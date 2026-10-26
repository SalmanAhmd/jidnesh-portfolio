import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { CaseStudy } from "@/components/case-study";
import { Expertise } from "@/components/expertise";
import { Leadership } from "@/components/leadership";
import { Principles } from "@/components/principles";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";
import { getSiteUrl } from "@/lib/site";

export default function Home() {
  const siteUrl = getSiteUrl();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.hero.intro,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Navi Mumbai",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
    knowsAbout: [
      "Software quality assurance",
      "Test strategy",
      "Functional testing",
      "Regression testing",
      "API testing",
      "SQL data validation",
      "User acceptance testing",
      "Release validation",
      "Employee Benefits software",
      "InsurTech",
    ],
  };

  return (
    <>
      <SiteNav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Experience />
        <CaseStudy />
        <Expertise />
        <Leadership />
        <Principles />
        <Education />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
