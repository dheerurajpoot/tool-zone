import type { Metadata } from "next"

interface SEOMetadataProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.png",
}: SEOMetadataProps): Metadata {
  const fullTitle = `${title} | ToolHub - Professional Online Tools`
  const baseUrl = "https://toolhub.vercel.app"

  return {
    title: fullTitle,
    description,
    keywords: keywords || "online tools, calculator, converter, generator, professional tools",
    authors: [{ name: "ToolHub" }],
    creator: "ToolHub",
    publisher: "ToolHub",
    robots: "index, follow",
    canonical: canonical ? `${baseUrl}${canonical}` : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "en_US",
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: "ToolHub",
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
      creator: "@toolhub",
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
  }
}
