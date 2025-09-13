"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, DollarSign, TrendingUp } from "lucide-react"

interface AdSenseResult {
  dailyEarnings: number
  monthlyEarnings: number
  yearlyEarnings: number
  dailyClicks: number
  monthlyClicks: number
  yearlyClicks: number
}

export default function AdSenseCalculatorClientPage() {
  const [pageViews, setPageViews] = useState("")
  const [ctr, setCtr] = useState("")
  const [cpc, setCpc] = useState("")
  const [niche, setNiche] = useState("")
  const [result, setResult] = useState<AdSenseResult | null>(null)

  const calculateRevenue = () => {
    const views = Number.parseFloat(pageViews)
    const clickRate = Number.parseFloat(ctr) / 100
    const costPerClick = Number.parseFloat(cpc)

    if (!views || !clickRate || !costPerClick) {
      alert("Please fill all fields with valid numbers")
      return
    }

    const dailyClicks = views * clickRate
    const dailyEarnings = dailyClicks * costPerClick
    const monthlyEarnings = dailyEarnings * 30
    const yearlyEarnings = dailyEarnings * 365
    const monthlyClicks = dailyClicks * 30
    const yearlyClicks = dailyClicks * 365

    setResult({
      dailyEarnings,
      monthlyEarnings,
      yearlyEarnings,
      dailyClicks,
      monthlyClicks,
      yearlyClicks,
    })
  }

  const nicheData = {
    technology: { avgCtr: "2.5", avgCpc: "1.20" },
    finance: { avgCtr: "1.8", avgCpc: "3.50" },
    health: { avgCtr: "2.2", avgCpc: "2.80" },
    lifestyle: { avgCtr: "3.0", avgCpc: "0.80" },
    education: { avgCtr: "2.8", avgCpc: "1.50" },
    business: { avgCtr: "2.0", avgCpc: "2.20" },
  }

  const handleNicheChange = (value: string) => {
    setNiche(value)
    if (value && nicheData[value as keyof typeof nicheData]) {
      const data = nicheData[value as keyof typeof nicheData]
      setCtr(data.avgCtr)
      setCpc(data.avgCpc)
    }
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
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">AdSense Revenue Calculator</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Estimate your Google AdSense earnings potential based on traffic and niche
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Revenue Parameters
                </CardTitle>
                <CardDescription>Enter your website metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="niche">Website Niche (Optional)</Label>
                  <Select value={niche} onValueChange={handleNicheChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your niche for average values" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="health">Health & Fitness</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pageviews">Daily Page Views</Label>
                  <Input
                    id="pageviews"
                    type="number"
                    placeholder="e.g., 10000"
                    value={pageViews}
                    onChange={(e) => setPageViews(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="ctr">Click-Through Rate (CTR %)</Label>
                  <Input
                    id="ctr"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 2.5"
                    value={ctr}
                    onChange={(e) => setCtr(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Average CTR is 1-3%</p>
                </div>
                <div>
                  <Label htmlFor="cpc">Cost Per Click (CPC $)</Label>
                  <Input
                    id="cpc"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 1.50"
                    value={cpc}
                    onChange={(e) => setCpc(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Varies by niche and location</p>
                </div>
                <Button onClick={calculateRevenue} className="w-full">
                  Calculate Revenue
                </Button>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Revenue Projection
                  </CardTitle>
                  <CardDescription>Estimated AdSense earnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary">${result.dailyEarnings.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">Daily Earnings</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-semibold text-foreground">
                          ${result.monthlyEarnings.toFixed(2)}
                        </div>
                        <div className="text-xs text-muted-foreground">Monthly</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-semibold text-foreground">${result.yearlyEarnings.toFixed(2)}</div>
                        <div className="text-xs text-muted-foreground">Yearly</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Daily Clicks</span>
                        <Badge variant="outline">{result.dailyClicks.toFixed(0)}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Monthly Clicks</span>
                        <Badge variant="outline">{result.monthlyClicks.toFixed(0)}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Yearly Clicks</span>
                        <Badge variant="outline">{result.yearlyClicks.toFixed(0)}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Tips to Increase AdSense Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Optimize Ad Placement</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Place ads above the fold</li>
                    <li>• Use responsive ad units</li>
                    <li>• Test different ad sizes</li>
                    <li>• Implement auto ads</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Improve Content Quality</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Focus on high-CPC keywords</li>
                    <li>• Create engaging content</li>
                    <li>• Improve page load speed</li>
                    <li>• Optimize for mobile</li>
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
