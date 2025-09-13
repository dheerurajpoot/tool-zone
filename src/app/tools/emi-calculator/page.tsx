import { generateSEOMetadata } from "@/components/seo-metadata"
import EMICalculatorClientPage from "./EMICalculatorClientPage"

export const metadata = generateSEOMetadata({
  title: "EMI Calculator",
  description:
    "Calculate your loan EMI with detailed amortization schedule. Free EMI calculator for home loans, personal loans, and car loans with interest breakdown.",
  keywords: "EMI calculator, loan calculator, home loan EMI, personal loan calculator, amortization schedule",
  canonical: "/tools/emi-calculator",
})

export default function EMICalculatorPage() {
  return <EMICalculatorClientPage />
}
