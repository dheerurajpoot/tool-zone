"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Type, Copy, Check } from "lucide-react"

export default function CaseConverterClientPage() {
  const [inputText, setInputText] = useState("")
  const [copied, setCopied] = useState<string | null>(null)

  const conversions = {
    uppercase: inputText.toUpperCase(),
    lowercase: inputText.toLowerCase(),
    titlecase: inputText.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    sentencecase: inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase(),
    camelcase: inputText
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
      .replace(/\s+/g, ""),
    pascalcase: inputText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase()).replace(/\s+/g, ""),
    snakecase: inputText.toLowerCase().replace(/\s+/g, "_"),
    kebabcase: inputText.toLowerCase().replace(/\s+/g, "-"),
    constantcase: inputText.toUpperCase().replace(/\s+/g, "_"),
    alternatingcase: inputText
      .split("")
      .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
      .join(""),
    inversecase: inputText
      .split("")
      .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
      .join(""),
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (error) {
      alert("Failed to copy to clipboard")
    }
  }

  const clearText = () => {
    setInputText("")
  }

  const caseTypes = [
    { key: "uppercase", name: "UPPERCASE", description: "ALL LETTERS IN CAPITAL" },
    { key: "lowercase", name: "lowercase", description: "all letters in small" },
    { key: "titlecase", name: "Title Case", description: "First Letter Of Each Word Capitalized" },
    { key: "sentencecase", name: "Sentence case", description: "First letter capitalized" },
    { key: "camelcase", name: "camelCase", description: "firstWordLowercaseRestCapitalized" },
    { key: "pascalcase", name: "PascalCase", description: "FirstLetterOfEachWordCapitalized" },
    { key: "snakecase", name: "snake_case", description: "words_separated_by_underscores" },
    { key: "kebabcase", name: "kebab-case", description: "words-separated-by-hyphens" },
    { key: "constantcase", name: "CONSTANT_CASE", description: "ALL_CAPS_WITH_UNDERSCORES" },
    { key: "alternatingcase", name: "aLtErNaTiNg CaSe", description: "alternating letter cases" },
    { key: "inversecase", name: "iNVERSE cASE", description: "opposite of original case" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Type className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Case Converter</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Convert text between different cases and formats instantly
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="w-5 h-5" />
                Text Input
              </CardTitle>
              <CardDescription>Enter the text you want to convert</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="input-text">Your Text</Label>
                  <Textarea
                    id="input-text"
                    placeholder="Type or paste your text here..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-xs">
                    Characters: {inputText.length}
                  </Badge>
                  <Button onClick={clearText} variant="outline" size="sm">
                    Clear Text
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {inputText && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseTypes.map((caseType) => (
                <Card key={caseType.key} className="group hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{caseType.name}</CardTitle>
                      <Button
                        onClick={() =>
                          copyToClipboard(conversions[caseType.key as keyof typeof conversions], caseType.key)
                        }
                        size="sm"
                        variant="outline"
                        className="h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {copied === caseType.key ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                    <CardDescription className="text-xs">{caseType.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="p-3 bg-muted/50 rounded-md min-h-[60px] break-words">
                      <code className="text-sm">{conversions[caseType.key as keyof typeof conversions] || "..."}</code>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!inputText && (
            <Card>
              <CardContent className="py-12">
                <div className="text-center text-muted-foreground">
                  <Type className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter some text above to see all case conversions</p>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Case Conversion Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Programming Conventions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <strong>camelCase:</strong> JavaScript variables, functions
                    </li>
                    <li>
                      • <strong>PascalCase:</strong> Class names, components
                    </li>
                    <li>
                      • <strong>snake_case:</strong> Python variables, database fields
                    </li>
                    <li>
                      • <strong>kebab-case:</strong> CSS classes, URLs
                    </li>
                    <li>
                      • <strong>CONSTANT_CASE:</strong> Constants, environment variables
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Writing Conventions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <strong>Title Case:</strong> Headlines, book titles
                    </li>
                    <li>
                      • <strong>Sentence case:</strong> Regular sentences, descriptions
                    </li>
                    <li>
                      • <strong>UPPERCASE:</strong> Emphasis, acronyms
                    </li>
                    <li>
                      • <strong>lowercase:</strong> Casual text, usernames
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
