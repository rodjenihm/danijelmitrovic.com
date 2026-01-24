import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TerminalProvider } from "@/components/terminal/terminal-provider";
import { RetroTerminal } from "@/components/terminal/retro-terminal";

const poppins = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danijelmitrovic.com"),
  title: {
    default: "Danijel Mitrović | Backend Software Engineer",
    template: "%s | Danijel Mitrović",
  },
  description:
    "Danijel Mitrović: Backend-specialized Software Engineer from Serbia. Expert in Java, Spring, Cloud, PostgreSQL, MongoDB, and Redis. Explore my portfolio.",
  keywords:
    "Danijel Mitrović, Danijel Mitrovic, Software Engineer, Backend Developer, Java, Spring, Cloud, PostgreSQL, MongoDB, Redis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.danijelmitrovic.com",
    siteName: "Danijel Mitrović",
    title: "Danijel Mitrović | Backend Software Engineer",
    description:
      "Backend-specialized Software Engineer from Serbia. Expertise in Java, Spring, Cloud, and databases.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dan_mitrovic_91",
    creator: "@dan_mitrovic_91",
  },
  verification: {
    google: "gME6_BqetnKpkGanutReagrwRIz6Zxv52ZohDmkcWX4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`h-screen flex flex-col overflow-y-scroll ${poppins.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TerminalProvider>
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
              <Navbar />
            </div>
            <main className="flex-1">{children}</main>
            <div className="mt-auto">
              <Footer />
            </div>
            <RetroTerminal />
          </TerminalProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Danijel Mitrović",
                alternateName: "Danijel Mitrovic",
                givenName: "Danijel",
                familyName: "Mitrović",
                jobTitle: "Backend Engineer",
                description:
                  "Backend-specialized Software Engineer from Serbia with expertise in Java, Spring, Cloud, and databases.",
                url: "https://www.danijelmitrovic.com",
                image:
                  "https://dgblq0ba7cx3huq6.public.blob.vercel-storage.com/profile.jpg",
                sameAs: [
                  "https://github.com/rodjenihm",
                  "https://linkedin.com/in/danijel-mitrović",
                  "https://x.com/dan_mitrovic_91",
                ],
                knowsAbout: [
                  "Java",
                  "Spring Framework",
                  "Cloud Technologies",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                ],
                nationality: {
                  "@type": "Country",
                  name: "Serbia",
                },
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "University of Belgrade",
                },
              }),
            }}
          />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
