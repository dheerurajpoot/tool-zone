import { SITE_URL } from "@/lib/constant"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {

  const tools = [
    "age-calculator",
    "emi-calculator",
    "adsense-calculator",
    "percentage-calculator",
    "unit-converter",
    "base64-converter",
    "word-counter",
    "case-converter",
    "password-generator",
    "random-generator",
    "color-picker",
    "qr-generator",
  ]

  const toolUrls = tools.map((tool) => ({
    url: `${SITE_URL}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...toolUrls,
  ]
}
