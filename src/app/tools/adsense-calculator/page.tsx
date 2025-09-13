import { generateSEOMetadata } from "@/components/seo-metadata"
import AdSenseCalculatorClientPage from "./AdSenseCalculatorClientPage"

export const metadata = generateSEOMetadata({
  title: "AdSense Revenue Calculator",
  description:
    "Estimate your Google AdSense earnings potential based on traffic and niche. Calculate daily, monthly, and yearly AdSense revenue projections.",
  keywords: "adsense calculator, adsense revenue calculator, google adsense earnings, website monetization calculator",
  canonical: "/tools/adsense-calculator",
})

export default function AdSenseCalculatorPage() {
  return <AdSenseCalculatorClientPage />
}
