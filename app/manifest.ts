import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Danijel Mitrović - Backend Software Engineer",
    short_name: "Danijel Mitrović",
    description:
      "Personal website of Danijel Mitrović, a Backend Software Engineer from Serbia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f14",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
