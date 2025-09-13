import { generateSEOMetadata } from "@/components/seo-metadata"
import Base64ConverterClientPage from "./Base64ConverterClientPage"

export const metadata = generateSEOMetadata({
  title: "Base64 Encoder/Decoder",
  description:
    "Encode and decode Base64 strings with ease and accuracy. Free online Base64 converter for text encoding and decoding.",
  keywords: "base64 encoder, base64 decoder, base64 converter, text encoding, data encoding",
  canonical: "/tools/base64-converter",
})

export default function Base64ConverterPage() {
  return <Base64ConverterClientPage />
}
