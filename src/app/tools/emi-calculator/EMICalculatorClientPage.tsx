"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Calculator, PieChart } from "lucide-react"

interface EMIResult {
  emi: number
  totalAmount: number
  totalInterest: number
  monthlyBreakdown: Array<{
    month: number
    emi: number
    principal: number
    interest: number
    balance: number
  }>
}

export default function EMICalculatorClientPage() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [tenure, setTenure] = useState("")
  const [result, setResult] = useState<EMIResult | null>(null)

  const calculateEMI = () => {
    const P = Number.parseFloat(principal)
    const R = Number.parseFloat(rate) / 12 / 100 // Monthly interest rate
    const N = Number.parseFloat(tenure) * 12 // Total months

    if (!P || !R || !N) {
      alert("Please fill all fields with valid numbers")
      return
    }

    // EMI Formula: P * R * (1+R)^N / ((1+R)^N - 1)
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1)
    const totalAmount = emi * N
    const totalInterest = totalAmount - P

    // Generate monthly breakdown
    const monthlyBreakdown = []
    let balance = P

    for (let month = 1; month <= N; month++) {
      const interestPayment = balance * R
      const principalPayment = emi - interestPayment
      balance -= principalPayment

      monthlyBreakdown.push({
        month,
        emi: Math.round(emi),
        principal: Math.round(principalPayment),
        interest: Math.round(interestPayment),
        balance: Math.round(Math.max(0, balance)),
      })
    }

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      monthlyBreakdown,
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">EMI Calculator</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Calculate your loan EMI with detailed amortization schedule
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Loan Details
                </CardTitle>
                <CardDescription>Enter your loan information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="principal">Loan Amount (₹)</Label>
                  <Input
                    id="principal"
                    type="number"
                    placeholder="e.g., 1000000"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="rate">Interest Rate (% per annum)</Label>
                  <Input
                    id="rate"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 8.5"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                  <Input
                    id="tenure"
                    type="number"
                    placeholder="e.g., 20"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                  />
                </div>
                <Button onClick={calculateEMI} className="w-full">
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            {result && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-5 h-5" />
                    EMI Summary
                  </CardTitle>
                  <CardDescription>Your loan payment breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary">₹{result.emi.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Monthly EMI</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-semibold text-foreground">
                          ₹{result.totalAmount.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Total Amount</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-lg font-semibold text-foreground">
                          ₹{result.totalInterest.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">Total Interest</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Principal Amount</span>
                        <Badge variant="outline">₹{Number.parseFloat(principal).toLocaleString()}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Interest Rate</span>
                        <Badge variant="outline">{rate}% p.a.</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Loan Tenure</span>
                        <Badge variant="outline">{tenure} years</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {result && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Amortization Schedule (First 12 Months)</CardTitle>
                <CardDescription>Monthly payment breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Month</th>
                        <th className="text-right p-2">EMI</th>
                        <th className="text-right p-2">Principal</th>
                        <th className="text-right p-2">Interest</th>
                        <th className="text-right p-2">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.monthlyBreakdown.slice(0, 12).map((month) => (
                        <tr key={month.month} className="border-b">
                          <td className="p-2">{month.month}</td>
                          <td className="text-right p-2">₹{month.emi.toLocaleString()}</td>
                          <td className="text-right p-2">₹{month.principal.toLocaleString()}</td>
                          <td className="text-right p-2">₹{month.interest.toLocaleString()}</td>
                          <td className="text-right p-2">₹{month.balance.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
