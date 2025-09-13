"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Percent, Calculator } from "lucide-react"

export default function PercentageCalculatorClient() {
  const [basicValue, setBasicValue] = useState("")
  const [basicPercent, setBasicPercent] = useState("")
  const [basicResult, setBasicResult] = useState<number | null>(null)

  const [changeOld, setChangeOld] = useState("")
  const [changeNew, setChangeNew] = useState("")
  const [changeResult, setChangeResult] = useState<{ increase: number; decrease: number } | null>(null)

  const [discountPrice, setDiscountPrice] = useState("")
  const [discountPercent, setDiscountPercent] = useState("")
  const [discountResult, setDiscountResult] = useState<{ finalPrice: number; savings: number } | null>(null)

  const calculateBasic = () => {
    const value = Number.parseFloat(basicValue)
    const percent = Number.parseFloat(basicPercent)

    if (!value || !percent) {
      alert("Please enter valid numbers")
      return
    }

    const result = (value * percent) / 100
    setBasicResult(result)
  }

  const calculateChange = () => {
    const oldVal = Number.parseFloat(changeOld)
    const newVal = Number.parseFloat(changeNew)

    if (!oldVal || !newVal) {
      alert("Please enter valid numbers")
      return
    }

    const increase = ((newVal - oldVal) / oldVal) * 100
    const decrease = ((oldVal - newVal) / oldVal) * 100

    setChangeResult({ increase, decrease })
  }

  const calculateDiscount = () => {
    const price = Number.parseFloat(discountPrice)
    const percent = Number.parseFloat(discountPercent)

    if (!price || !percent) {
      alert("Please enter valid numbers")
      return
    }

    const savings = (price * percent) / 100
    const finalPrice = price - savings

    setDiscountResult({ finalPrice, savings })
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
              <Percent className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Percentage Calculator</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Calculate percentages, percentage changes, and discounts with ease
            </p>
          </div>

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Percentage</TabsTrigger>
              <TabsTrigger value="change">Percentage Change</TabsTrigger>
              <TabsTrigger value="discount">Discount Calculator</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Basic Percentage Calculation
                  </CardTitle>
                  <CardDescription>Calculate what percentage of a number is another number</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="basic-value">Value</Label>
                        <Input
                          id="basic-value"
                          type="number"
                          placeholder="e.g., 1000"
                          value={basicValue}
                          onChange={(e) => setBasicValue(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="basic-percent">Percentage (%)</Label>
                        <Input
                          id="basic-percent"
                          type="number"
                          placeholder="e.g., 25"
                          value={basicPercent}
                          onChange={(e) => setBasicPercent(e.target.value)}
                        />
                      </div>
                      <Button onClick={calculateBasic} className="w-full">
                        Calculate
                      </Button>
                    </div>

                    {basicResult !== null && (
                      <div className="flex items-center justify-center">
                        <div className="text-center p-6 bg-primary/5 rounded-lg">
                          <div className="text-3xl font-bold text-primary">{basicResult.toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">
                            {basicPercent}% of {basicValue}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="change">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Percentage Change Calculator
                  </CardTitle>
                  <CardDescription>Calculate percentage increase or decrease between two values</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="change-old">Original Value</Label>
                        <Input
                          id="change-old"
                          type="number"
                          placeholder="e.g., 100"
                          value={changeOld}
                          onChange={(e) => setChangeOld(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="change-new">New Value</Label>
                        <Input
                          id="change-new"
                          type="number"
                          placeholder="e.g., 150"
                          value={changeNew}
                          onChange={(e) => setChangeNew(e.target.value)}
                        />
                      </div>
                      <Button onClick={calculateChange} className="w-full">
                        Calculate Change
                      </Button>
                    </div>

                    {changeResult && (
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary">
                            {changeResult.increase > 0 ? "+" : ""}
                            {changeResult.increase.toFixed(2)}%
                          </div>
                          <div className="text-sm text-muted-foreground">Percentage Change</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-sm">If Increase:</span>
                            <Badge variant="secondary">+{changeResult.increase.toFixed(2)}%</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-sm">If Decrease:</span>
                            <Badge variant="secondary">-{changeResult.decrease.toFixed(2)}%</Badge>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discount">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Discount Calculator
                  </CardTitle>
                  <CardDescription>Calculate final price after discount and total savings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="discount-price">Original Price ($)</Label>
                        <Input
                          id="discount-price"
                          type="number"
                          placeholder="e.g., 200"
                          value={discountPrice}
                          onChange={(e) => setDiscountPrice(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="discount-percent">Discount (%)</Label>
                        <Input
                          id="discount-percent"
                          type="number"
                          placeholder="e.g., 20"
                          value={discountPercent}
                          onChange={(e) => setDiscountPercent(e.target.value)}
                        />
                      </div>
                      <Button onClick={calculateDiscount} className="w-full">
                        Calculate Discount
                      </Button>
                    </div>

                    {discountResult && (
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-3xl font-bold text-primary">${discountResult.finalPrice.toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">Final Price</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-sm">Original Price:</span>
                            <Badge variant="outline">${Number.parseFloat(discountPrice).toFixed(2)}</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-sm">You Save:</span>
                            <Badge variant="secondary">${discountResult.savings.toFixed(2)}</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-sm">Discount:</span>
                            <Badge variant="outline">{discountPercent}%</Badge>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
