import { generateSEOMetadata } from "@/components/seo-metadata"
import RandomGeneratorClient from "./RandomGeneratorClient"

export const metadata = generateSEOMetadata({
  title: "Random Number Generator",
  description:
    "Generate random numbers, shuffle lists, and roll dice. Free online random generator tools for numbers, lists, and gaming.",
  keywords: "random number generator, random generator, dice roller, list shuffler, random picker",
  canonical: "/tools/random-generator",
})

export default function RandomGeneratorPage() {
  return <RandomGeneratorClient />
}
