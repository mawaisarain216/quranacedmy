import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quran Academy",
    short_name: "Quran Academy",
    description: "Online Quran, Tajweed, Hifz and Islamic Studies learning platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf5",
    theme_color: "#0e5a45",
    lang: "en",
    dir: "ltr",
  };
}
