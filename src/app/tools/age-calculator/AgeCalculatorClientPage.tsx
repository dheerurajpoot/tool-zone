"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

interface AgeResult {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  totalDays: number
  totalHours: number
  totalMinutes: number
}

export default function AgeCalculatorClientPage() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<AgeResult | null>(null)

  const calculateAge = () => {
    if (!birthDate) return

    const birth = new Date(birthDate)
    const now = new Date()

    if (birth > now) {
      alert("Birth date cannot be in the future!")
      return
    }

    let years = now.getFullYear() - birth.getFullYear()
    let months = now.getMonth() - birth.getMonth()
    let days = now.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
    const totalHours = totalDays * 24
    const totalMinutes = totalHours * 60
    const hours = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60)) % 24
    const minutes = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60)) % 60

    setResult({
      years,
      months,
      days,
      hours,
      minutes,
      totalDays,
      totalHours,
      totalMinutes,
    })
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

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Age Calculator</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Calculate your exact age in years, months, days, hours, and minutes
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Enter Your Birth Date
              </CardTitle>
              <CardDescription>Select your date of birth to calculate your exact age</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="birthdate">Birth Date</Label>
                <Input
                  id="birthdate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
              <Button onClick={calculateAge} className="w-full" disabled={!birthDate}>
                Calculate Age
              </Button>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Your Age</CardTitle>
                <CardDescription>Detailed breakdown of your age</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.years}</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.months}</div>
                    <div className="text-sm text-muted-foreground">Months</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{result.days}</div>
                    <div className="text-sm text-muted-foreground">Days</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Total Days</span>
                    <Badge variant="secondary">{result.totalDays.toLocaleString()}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Total Hours</span>
                    <Badge variant="secondary">{result.totalHours.toLocaleString()}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Total Minutes</span>
                    <Badge variant="secondary">{result.totalMinutes.toLocaleString()}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
