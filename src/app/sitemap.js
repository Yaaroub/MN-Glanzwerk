import { site } from "@/src/lib/site";

export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/impressum", priority: 0.2, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path === "/" ? "/" : p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
