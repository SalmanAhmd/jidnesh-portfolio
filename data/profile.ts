/**
 * Single source of truth for the portfolio.
 *
 * Every factual statement here is taken from Jidnesh's resume or supplied
 * project context. Update this file to keep the site current.
 */

export const profile = {
  name: "Jidnesh Patil",
  shortName: "Jidnesh",
  monogram: "JP",
  title: "Lead QA Engineer",
  currentRole: "Lead Quality Analyst",
  company: "Fyn Tune Solution Pvt Ltd",
  location: "Navi Mumbai, India",
  email: "jidneshpatil2324@gmail.com",
  linkedin: "https://www.linkedin.com/in/jidnesh-patil-9a1256200",
  resume: {
    path: "resume/Jidnesh-Patil-Resume.pdf",
    label: "Jidnesh-Patil-Resume.pdf",
    meta: "PDF · 1.3 MB",
  },
  hero: {
    eyebrow: "Lead QA Engineer · InsurTech",
    headline: "Confidence is a release requirement.",
    intro:
      "I'm Jidnesh, a QA lead with 4+ years in InsurTech. I help teams ship Employee Benefits platforms that hold up across business rules, user roles, APIs, and real-world workflows — on web, Android, and iOS.",
    expertise: ["Functional", "Regression", "API testing", "SQL", "UAT"],
    stats: [
      { value: "40+", label: "production deployments supported" },
      { value: "4,000+", label: "manual test cases executed" },
      { value: "15", label: "business modules in experience" },
      { value: "3", label: "roles across one growing product" },
    ],
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Case Study", href: "#case-study" },
    { label: "Expertise", href: "#expertise" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const about = {
  pullQuote:
    "Quality is not a phase at the end of delivery. It is a decision made at every step.",
  paragraphs: [
    "I started in QA in 2022 on an Employee Benefits insurance platform and have grown with the product — from executing detailed manual test cases to leading end-to-end QA for its web and mobile applications.",
    "My work sits close to the business. Employee benefits software carries real consequences: enrollments, policy configuration, premium calculations, claims, and health cards all have to behave correctly for employees, administrators, and enterprise clients. I review requirements early, design tests around business rules and connected journeys, and validate both the interface and the data behind it.",
    "Today I lead sprint testing, release validation, and production smoke testing, while staying hands-on with API checks in Postman and backend validation with SQL. I work with Product Owners, Developers, Business Analysts, and DevOps teams to turn complex requirements into testable, shippable scope.",
  ],
  focus: [
    "Test strategy & planning",
    "High-priority module coverage",
    "End-to-end business workflows",
    "Release readiness",
    "Mentoring & test review",
  ],
  progression: [
    { year: "2026", title: "Lead Quality Analyst", note: "QA ownership across web & mobile" },
    { year: "2024", title: "Sr. Quality Analyst", note: "High-priority modules & UAT" },
    { year: "2022", title: "Quality Analyst", note: "Functional, regression & compatibility" },
  ],
};

export type ExperienceRole = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  highlight?: { value: string; label: string };
};

export const experience: {
  company: string;
  period: string;
  context: string;
  roles: ExperienceRole[];
} = {
  company: "Fyn Tune Solution Pvt Ltd",
  period: "06/2022 — Present",
  context:
    "Employee Benefits insurance platform · Web, Android & iOS",
  roles: [
    {
      title: "Lead Quality Analyst",
      period: "01/2026 — Present",
      summary:
        "End-to-end QA ownership for Employee Benefits web and mobile applications.",
      bullets: [
        "Lead QA activities across sprint testing, release validation, and production smoke testing.",
        "Review business requirements and prepare comprehensive test strategies and plans.",
        "Coordinate with Product Owners, Developers, Business Analysts, and DevOps teams.",
        "Mentor QA team members, review test cases, and drive defect triage meetings.",
        "Validate APIs with Postman and backend data with SQL to confirm what the interface alone cannot.",
        "Support continuous process improvements and quality initiatives across releases.",
      ],
      tags: ["Test strategy", "Release validation", "API testing", "SQL", "Mentoring"],
      highlight: {
        value: "40+",
        label: "production deployments supported with successful release validation",
      },
    },
    {
      title: "Sr. Quality Analyst",
      period: "05/2024 — 12/2025",
      summary:
        "Deeper ownership of high-priority modules and cross-platform test coverage.",
      bullets: [
        "Designed and executed Functional, Regression, Integration, Sanity, and UAT test cases.",
        "Managed testing for high-priority Employee Benefits modules.",
        "Performed web and mobile testing across Android and iOS.",
        "Performed API testing using Postman.",
        "Participated in Sprint Planning, Grooming, Daily Stand-ups, and Sprint Reviews.",
      ],
      tags: ["Regression", "Integration", "UAT", "Android & iOS", "Agile Scrum"],
    },
    {
      title: "Quality Analyst",
      period: "06/2022 — 05/2024",
      summary:
        "Hands-on foundation in business-rule validation, regression, and compatibility testing.",
      bullets: [
        "Analysed business requirements and prepared detailed test cases.",
        "Executed 4,000+ manual test cases across multiple releases.",
        "Conducted Smoke, Functional, Regression, and Compatibility testing.",
        "Verified business rules, calculations, and policy workflows.",
        "Logged and tracked defects using Git / GitHub.",
        "Performed cross-browser and responsive UI testing.",
      ],
      tags: ["Manual testing", "Smoke & sanity", "Compatibility", "Cross-browser", "Defect tracking"],
    },
  ],
};

export const caseStudy = {
  eyebrow: "Featured case study",
  title: "Employee Benefits, end to end.",
  subtitle:
    "Quality across a configuration-heavy insurance platform for web, Android, and iOS.",
  meta: [
    { label: "Product", value: "Employee Benefits insurance platform" },
    { label: "Role", value: "QA leadership across web & mobile" },
    { label: "Platforms", value: "Web · Android · iOS" },
    { label: "Context", value: "InsurTech · enterprise clients" },
  ],
  overview: [
    "The platform supports employee benefit insurance workflows for enterprise clients — from employee enrollment and flexible benefit plan configuration through policy administration, claims, health cards, and reporting. Administrators and internal teams use it to configure products, manage access, and keep policy operations moving.",
    "Reliability matters because the workflows are connected. A rule, calculation, or permission that is wrong in one place can surface as an incorrect policy, a failed enrollment, or a broken claim downstream. QA therefore had to validate both individual screens and the end-to-end business journey behind them.",
  ],
  lifecycle: [
    { label: "Enrollment", note: "Employee & plan setup" },
    { label: "Policy", note: "Configuration & issuance" },
    { label: "Claims", note: "Validation & settlement" },
    { label: "Support", note: "Access, updates & reporting" },
  ],
  scopeNote:
    "The resume records experience across 15 business modules. They are grouped here for readability.",
  scope: [
    {
      title: "Enrollment & benefits",
      modules: [
        "Employee Enrollment & Onboarding",
        "Flexible Benefit Plan Configuration",
        "Policy Administration",
      ],
    },
    {
      title: "Claims & care",
      modules: ["Claim", "Health Cards", "Health Library", "Wellness"],
    },
    {
      title: "Configuration & pricing",
      modules: [
        "Rater Configuration & Premium Calculation",
        "Loss of License",
        "Certificate of Insurance",
      ],
    },
    {
      title: "Platform & operations",
      modules: [
        "Admin Portal",
        "Dashboard & MIS Reports",
        "User & Role Management",
        "Authentication & Role-Based Access Control",
        "Notifications (Email, SMS & Push)",
      ],
    },
  ],
  challenges: [
    {
      title: "Connected business rules",
      body: "Enrollment, policy setup, rating, and claims form one chain. A rule or calculation validated in isolation still has to hold when the downstream workflow uses it.",
    },
    {
      title: "Configuration-heavy behavior",
      body: "Flexible benefit plans, rater configuration, and policy setup create different paths for different requirements. Test coverage has to follow the configuration, not just the default flow.",
    },
    {
      title: "Role and permission boundaries",
      body: "Admin portal operations, user and role management, authentication, and role-based access control require explicit checks that each user sees and can do only what they should.",
    },
    {
      title: "Regression at release speed",
      body: "With high-priority modules on web, Android, and iOS, every release carries regression risk. Release validation and production smoke testing have to be repeatable, not improvised.",
    },
  ],
  approach: [
    {
      title: "Requirement analysis & test strategy",
      body: "Review business requirements and turn them into comprehensive test strategies and plans.",
    },
    {
      title: "Test case design",
      body: "Prepare detailed test cases around business rules, calculations, and policy workflows.",
    },
    {
      title: "Functional & integration testing",
      body: "Execute functional, integration, sanity, and regression coverage across affected modules.",
    },
    {
      title: "End-to-end journey validation",
      body: "Follow connected journeys across enrollment, policy, claims, and configuration rather than stopping at screen-level checks.",
    },
    {
      title: "API & data validation",
      body: "Validate APIs using Postman and confirm backend data with SQL when the UI alone is not enough.",
    },
    {
      title: "Cross-platform coverage",
      body: "Perform cross-browser and responsive UI testing, plus Android and iOS application testing.",
    },
    {
      title: "UAT & defect management",
      body: "Design and execute UAT cases, log and track defects, and drive triage through to verification.",
    },
    {
      title: "Release validation",
      body: "Lead sprint testing, production smoke testing, and release validation — supporting 40+ production deployments.",
    },
  ],
  workflows: [
    {
      title: "Enrollment & onboarding",
      body: "Employee enrollment and onboarding, including flexible benefit plan setup.",
      checks: "Business rules · data accuracy · end-to-end completion",
    },
    {
      title: "Policy administration",
      body: "Policy setup, certificate of insurance, and ongoing policy updates.",
      checks: "Configuration · calculations · downstream consistency",
    },
    {
      title: "Claims & health cards",
      body: "Claims and health card workflows used by employees and administrators.",
      checks: "Validation rules · status transitions · access",
    },
    {
      title: "Rating & premium",
      body: "Rater configuration and premium calculation, including loss-of-license scenarios.",
      checks: "Input rules · calculations · output accuracy",
    },
    {
      title: "Admin & access",
      body: "Admin portal operations, user and role management, authentication, and RBAC.",
      checks: "Permissions · visibility · role boundaries",
    },
    {
      title: "Reporting & notifications",
      body: "Dashboards, MIS reports, wellness and health library content, and email, SMS, and push notifications.",
      checks: "Data presentation · delivery · content accuracy",
    },
  ],
  collaboration:
    "QA was part of the delivery conversation, not a final checkpoint. I worked with Product Owners, Developers, Business Analysts, and DevOps teams through requirement reviews, sprint testing, defect triage, and release validation. I also served as a primary QA and product representative for enterprise clients — running solution walkthroughs for groups of 15+ stakeholders, supporting policy configuration, and providing production support for rater policy setup.",
  outcomes: [
    { value: "40+", label: "production deployments supported with successful release validation" },
    { value: "15", label: "business modules in platform experience" },
    { value: "15+", label: "stakeholders in client solution walkthroughs" },
    { value: "3", label: "platforms covered: web, Android, and iOS" },
  ],
  outcomeNote:
    "Career-wide, 4,000+ manual test cases were executed across multiple releases.",
  confidentiality:
    "This case study stays at the level of role, process, and module experience. Client names, customer data, internal URLs, architecture, and proprietary configuration details are intentionally excluded.",
};

export const expertise = {
  categories: [
    {
      title: "Testing & validation",
      number: "01",
      items: [
        "Functional testing",
        "Regression testing",
        "Integration testing",
        "Smoke & sanity testing",
        "Compatibility testing",
        "Exploratory testing",
        "Cross-browser & responsive UI",
        "Android & iOS testing",
        "User acceptance testing (UAT)",
      ],
    },
    {
      title: "API & data",
      number: "02",
      items: [
        "API testing",
        "Postman",
        "API validation",
        "SQL",
        "Backend data validation",
      ],
    },
    {
      title: "Test management",
      number: "03",
      items: [
        "Test strategy & planning",
        "Test case design",
        "Test execution",
        "Defect tracking",
        "Root cause analysis",
        "Jira",
        "Git / GitHub",
      ],
    },
    {
      title: "Delivery & collaboration",
      number: "04",
      items: [
        "Agile Scrum",
        "SDLC / STLC",
        "Sprint planning & reviews",
        "Release validation",
        "Production smoke testing",
        "Disaster recovery drills",
        "Cross-functional collaboration",
      ],
    },
    {
      title: "Quality leadership",
      number: "05",
      items: [
        "QA planning & prioritization",
        "Team management",
        "Test case review",
        "Mentoring",
        "Defect triage",
        "Stakeholder communication",
      ],
    },
  ],
  learning: {
    label: "Currently strengthening",
    title: "Automation foundations",
    body: "Building on manual and API testing experience with an ongoing Selenium WebDriver course.",
    items: ["Selenium WebDriver", "Java", "TestNG", "Maven"],
  },
};

export const leadership = {
  intro:
    "As Lead Quality Analyst, I own end-to-end QA for Employee Benefits web and mobile applications. That means setting direction, reviewing the work, and still being hands-on when a release needs a careful eye.",
  highlights: [
    {
      title: "Test strategy & release ownership",
      body: "Review business requirements, prepare test strategies and plans, and lead sprint testing, release validation, and production smoke testing.",
    },
    {
      title: "Team standards & development",
      body: "Mentor QA team members, review test cases, and train newly hired Project Managers on product knowledge, client communication, and implementation workflows.",
    },
    {
      title: "Defect triage & escalation",
      body: "Drive defect triage meetings, keep issues moving to timely resolution, and verify fixes before they reach production.",
    },
    {
      title: "Cross-functional alignment",
      body: "Coordinate with Product Owners, Developers, Business Analysts, and DevOps teams across the delivery cycle.",
    },
    {
      title: "Client & product representation",
      body: "Serve as a primary QA and product representative for enterprise clients — running walkthroughs for 15+ stakeholders and supporting policy configuration and production queries.",
    },
    {
      title: "Operational readiness",
      body: "Plan and lead Disaster Recovery drills for the QA team, coordinating execution, validation, and documentation for business continuity.",
    },
  ],
  record: [
    { value: "40+", label: "deployments through release validation" },
    { value: "15+", label: "stakeholders in client walkthroughs" },
    { value: "15", label: "business modules in experience" },
  ],
};

export const principles = [
  {
    title: "Prevent before you verify",
    body: "The cheapest defect is the one caught while requirements are still being discussed. Early review and test design expose ambiguity before it becomes code.",
  },
  {
    title: "Test the business, not just the screen",
    body: "A polished UI can still hide a broken calculation. I validate the rules, data, and end-to-end journey that carry real consequences for users.",
  },
  {
    title: "Make every defect actionable",
    body: "Clear reproduction steps, evidence, and business context shorten the path from report to fix — and make triage a conversation instead of a debate.",
  },
  {
    title: "Treat regression as a product asset",
    body: "A curated regression suite is accumulated knowledge. It protects critical paths as the product grows and makes each release less of a leap.",
  },
  {
    title: "Release is a shared decision",
    body: "Quality becomes real when QA, engineering, product, and business align on what is ready, what is risky, and what must wait.",
  },
];

export const education = {
  degrees: [
    { degree: "MCA", place: "Thane", year: "2021" },
    { degree: "BSc, Computer Science", place: "Airoli", year: "2018" },
  ],
  certifications: [
    {
      name: "Selenium WebDriver with Java — Basics to Advanced + Frameworks",
      issuer: "Udemy",
      period: "07/2026 — Present",
      status: "In progress",
    },
    {
      name: "Software Testing Tutorial",
      issuer: "Guru99",
      period: "03/2022 — 05/2022",
    },
  ],
};

export const contact = {
  heading: "Let's make the next release a confident one.",
  body: "I'm glad to talk about QA leadership, test strategy, quality engineering, or Employee Benefits platforms. For roles, collaborations, or a conversation about release confidence, reach out.",
  links: [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jidnesh-patil-9a1256200",
      href: profile.linkedin,
    },
  ],
};
