import { generateSEOMetadata } from "@/components/seo-metadata"
import CaseConverterClientPage from "./CaseConverterClientPage"

export const metadata = generateSEOMetadata({
  title: "Case Converter",
  description:
    "Convert text between different cases and formats instantly. Support for uppercase, lowercase, title case, camelCase, snake_case, and more.",
  keywords: "case converter, text converter, uppercase, lowercase, title case, camelcase, snake case, kebab case",
  canonical: "/tools/case-converter",
})

export default function CaseConverterPage() {
  return <CaseConverterClientPage />
}
