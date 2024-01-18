import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.chunxuyang.com",
      lastModified: new Date(),
    },
  ];
}
