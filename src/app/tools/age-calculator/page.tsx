import { generateSEOMetadata } from "@/components/seo-metadata"
import AgeCalculatorClientPage from "./AgeCalculatorClientPage"

export const metadata = generateSEOMetadata({
  title: "Age Calculator",
  description:
    "Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with precise results and detailed breakdown.",
  keywords: "age calculator, calculate age, age in days, age in hours, birth date calculator, exact age",
  canonical: "/tools/age-calculator",
})

export default function AgeCalculatorPage() {
  return <AgeCalculatorClientPage />
}
