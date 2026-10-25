import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Najeeb Ullah — MERN Stack Developer",
    short_name: "Najeeb Ullah",
    description: "Portfolio of Najeeb Ullah, MERN stack and Next.js developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#ecf0f3",
    theme_color: "#ff014f",
    icons: [
      {
        src: "/icon.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}