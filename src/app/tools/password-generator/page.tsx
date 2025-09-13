import { generateSEOMetadata } from "@/components/seo-metadata"
import PasswordGeneratorClientPage from "./PasswordGeneratorClientPage"

export const metadata = generateSEOMetadata({
  title: "Password Generator",
  description:
    "Generate secure passwords with customizable options. Create strong passwords with uppercase, lowercase, numbers, and symbols for maximum security.",
  keywords: "password generator, secure password, strong password, random password, password creator",
  canonical: "/tools/password-generator",
})

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorClientPage />
}
