export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const siteDescription =
  "Jidnesh Patil is a Lead QA Engineer with 4+ years in InsurTech, leading test strategy, regression, API validation, and release readiness for Employee Benefits platforms across web, Android, and iOS.";
