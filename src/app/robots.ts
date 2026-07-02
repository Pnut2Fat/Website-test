import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ranchroadgoods.com/sitemap.xml", // TODO: update to your real domain
  };
}
