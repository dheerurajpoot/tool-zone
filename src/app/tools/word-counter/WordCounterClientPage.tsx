"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Hash, Clock, FileText } from "lucide-react"

interface TextStats {
  characters: number
  charactersNoSpaces: number
  words: number
  sentences: number
  paragraphs: number
  readingTime: number
  speakingTime: number
}

export default function WordCounterClientPage() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState<TextStats>({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
    speakingTime: 0,
  })

  useEffect(() => {
    const calculateStats = () => {
      const characters = text.length
      const charactersNoSpaces = text.replace(/\s/g, "").length
      const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
      const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      const paragraphs = text.trim() === "" ? 0 : text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length

      // Reading time: average 200 words per minute
      const readingTime = Math.ceil(words / 200)

      // Speaking time: average 150 words per minute
      const speakingTime = Math.ceil(words / 150)

      setStats({
        characters,
        charactersNoSpaces,
        words,
        sentences,
        paragraphs,
        readingTime,
        speakingTime,
      })
    }

    calculateStats()
  }, [text])

  const clearText = () => {
    setText("")
  }

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
              <Hash className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Word Counter</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Count words, characters, paragraphs, and estimate reading time
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Text Input
                  </CardTitle>
                  <CardDescription>Type or paste your text below</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="text-input">Your Text</Label>
                      <Textarea
                        id="text-input"
                        placeholder="Start typing or paste your text here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={15}
                        className="resize-none"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        Live counting enabled
                      </Badge>
                      <button
                        onClick={clearText}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Clear text
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="w-5 h-5" />
                    Text Statistics
                  </CardTitle>
                  <CardDescription>Real-time text analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{stats.words}</div>
                        <div className="text-xs text-muted-foreground">Words</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{stats.characters}</div>
                        <div className="text-xs text-muted-foreground">Characters</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Characters (no spaces)</span>
                        <Badge variant="secondary">{stats.charactersNoSpaces}</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Sentences</span>
                        <Badge variant="secondary">{stats.sentences}</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Paragraphs</span>
                        <Badge variant="secondary">{stats.paragraphs}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Reading Time
                  </CardTitle>
                  <CardDescription>Estimated time to read and speak</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-xl font-bold text-primary">{stats.readingTime} min</div>
                      <div className="text-xs text-muted-foreground">Reading time</div>
                      <div className="text-xs text-muted-foreground mt-1">(200 words/min)</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-lg font-semibold text-foreground">{stats.speakingTime} min</div>
                      <div className="text-xs text-muted-foreground">Speaking time</div>
                      <div className="text-xs text-muted-foreground mt-1">(150 words/min)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Writing Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Readability Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Keep sentences under 20 words for better readability</li>
                    <li>• Use short paragraphs (3-4 sentences) for web content</li>
                    <li>• Aim for 8th-grade reading level for general audience</li>
                    <li>• Use active voice when possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Content Length Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Blog posts: 1,500-2,500 words</li>
                    <li>• Social media posts: 40-80 characters</li>
                    <li>• Email subject lines: 30-50 characters</li>
                    <li>• Meta descriptions: 150-160 characters</li>
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
