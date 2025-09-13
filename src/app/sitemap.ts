import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolhub.vercel.app"

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
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...toolUrls,
  ]
}
