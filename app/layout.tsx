import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Danijel Mitrović | Software Engineer",
  description:
    "Danijel Mitrović: Backend-specialized Software Engineer from Serbia. Expert in Java, Spring, Cloud, PostgreSQL, MongoDB, and Redis. Explore my portfolio.",
  keywords:
    "Danijel Mitrović, Software Engineer, Backend Developer, Java, Spring, Cloud, PostgreSQL, MongoDB, Redis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danijelmitrovic.com",
    title: "Danijel Mitrović | Backend Software Engineer",
    description:
      "Backend-specialized Software Engineer from Serbia. Expertise in Java, Spring, Cloud, and databases.",
  },
  twitter: {
    card: "summary",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`overflow-y-scroll ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Danijel Mitrović",
                jobTitle: "Backend Engineer",
                url: "https://danijelmitrovic.com",
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
              }),
            }}
          />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
