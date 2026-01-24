import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the portfolio of Danijel Mitrović, a Backend Software Engineer with expertise in Java, Spring, AWS, PostgreSQL, MongoDB, and Redis.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | Danijel Mitrović",
    description:
      "Explore the portfolio of Danijel Mitrović, a Backend Software Engineer with expertise in Java, Spring, AWS, PostgreSQL, MongoDB, and Redis.",
    type: "profile",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
