import { generateSEOMetadata } from "@/components/seo-metadata"
import WordCounterClientPage from "./WordCounterClientPage"

export const metadata = generateSEOMetadata({
  title: "Word Counter",
  description:
    "Count words, characters, paragraphs, and estimate reading time. Free online word counter tool for writers, students, and content creators.",
  keywords: "word counter, character counter, text counter, reading time calculator, writing tools",
  canonical: "/tools/word-counter",
})

export default function WordCounterPage() {
  return <WordCounterClientPage />
}
