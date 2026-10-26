import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { getSiteUrl, siteDescription } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Jidnesh Patil — Lead QA Engineer",
    template: "%s | Jidnesh Patil",
  },
  description: siteDescription,
  applicationName: "Jidnesh Patil — Portfolio",
  authors: [{ name: "Jidnesh Patil", url: getSiteUrl() }],
  creator: "Jidnesh Patil",
  category: "technology",
  keywords: [
    "Jidnesh Patil",
    "QA Engineer",
    "Lead Quality Analyst",
    "Quality Engineering",
    "Employee Benefits",
    "InsurTech",
    "manual testing",
    "API testing",
    "regression testing",
    "release validation",
    "Navi Mumbai",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Jidnesh Patil — Lead QA Engineer",
    title: "Jidnesh Patil — Lead QA Engineer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jidnesh Patil — Lead QA Engineer",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070908" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f2" },
  ],
};

const themeScript = `(function(){try{var stored=localStorage.getItem("jidnesh-theme");document.documentElement.dataset.theme=stored==="light"?"light":"dark";}catch(error){document.documentElement.dataset.theme="dark";}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
