import { generateSEOMetadata } from "@/components/seo-metadata"
import PercentageCalculatorClient from "./PercentageCalculatorClient"

export const metadata = generateSEOMetadata({
  title: "Percentage Calculator",
  description:
    "Calculate percentages, percentage changes, and discounts with ease. Free online percentage calculator with multiple calculation modes.",
  keywords: "percentage calculator, calculate percentage, percentage change, discount calculator, percentage increase",
  canonical: "/tools/percentage-calculator",
})

export default function PercentageCalculatorPage() {
  return <PercentageCalculatorClient />
}
