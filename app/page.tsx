import { Metadata } from "next";
import Hero from "../components/hero";

export const metadata: Metadata = {
  title: "Danijel Mitrović | Backend Software Engineer",
  description:
    "Personal website of Danijel Mitrović, a Backend Software Engineer from Serbia specializing in Java, Spring, Cloud, PostgreSQL, MongoDB, and Redis.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
