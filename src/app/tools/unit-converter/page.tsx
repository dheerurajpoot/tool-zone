import { generateSEOMetadata } from "@/components/seo-metadata"
import UnitConverterClient from "./UnitConverterClient"

export const metadata = generateSEOMetadata({
  title: "Unit Converter",
  description:
    "Convert between different units of measurement including length, weight, temperature, and volume. Free online unit converter with precision.",
  keywords:
    "unit converter, measurement converter, length converter, weight converter, temperature converter, volume converter",
  canonical: "/tools/unit-converter",
})

export default function UnitConverterPage() {
  return <UnitConverterClient />
}
