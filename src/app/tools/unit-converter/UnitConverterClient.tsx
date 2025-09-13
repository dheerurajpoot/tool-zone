"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Ruler, ArrowUpDown } from "lucide-react"

const conversions = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    inch: 39.3701,
    foot: 3.28084,
    yard: 1.09361,
    mile: 0.000621371,
  },
  weight: {
    kilogram: 1,
    gram: 1000,
    pound: 2.20462,
    ounce: 35.274,
    ton: 0.001,
    stone: 0.157473,
  },
  temperature: {
    celsius: (c: number) => ({ celsius: c, fahrenheit: (c * 9) / 5 + 32, kelvin: c + 273.15 }),
    fahrenheit: (f: number) => ({ celsius: ((f - 32) * 5) / 9, fahrenheit: f, kelvin: ((f - 32) * 5) / 9 + 273.15 }),
    kelvin: (k: number) => ({ celsius: k - 273.15, fahrenheit: ((k - 273.15) * 9) / 5 + 32, kelvin: k }),
  },
  volume: {
    liter: 1,
    milliliter: 1000,
    gallon: 0.264172,
    quart: 1.05669,
    pint: 2.11338,
    cup: 4.22675,
    "fluid-ounce": 33.814,
  },
}

export default function UnitConverterClient() {
  const [activeTab, setActiveTab] = useState("length")
  const [inputValue, setInputValue] = useState("")
  const [fromUnit, setFromUnit] = useState("")
  const [toUnit, setToUnit] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const convert = () => {
    const value = Number.parseFloat(inputValue)
    if (!value || !fromUnit || !toUnit) {
      alert("Please fill all fields")
      return
    }

    if (activeTab === "temperature") {
      const tempConversions = conversions.temperature[fromUnit as keyof typeof conversions.temperature] as (
        val: number,
      ) => Record<string, number>
      const converted = tempConversions(value)
      setResult(converted[toUnit])
    } else {
      const conversionRates = conversions[activeTab as keyof typeof conversions] as Record<string, number>
      const baseValue = value / conversionRates[fromUnit]
      const convertedValue = baseValue * conversionRates[toUnit]
      setResult(convertedValue)
    }
  }

  const swapUnits = () => {
    const temp = fromUnit
    setFromUnit(toUnit)
    setToUnit(temp)
    if (result !== null) {
      setInputValue(result.toString())
      setResult(Number.parseFloat(inputValue))
    }
  }

  const getUnits = (category: string) => {
    return Object.keys(conversions[category as keyof typeof conversions])
  }

  const formatUnitName = (unit: string) => {
    return unit
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
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
              <Ruler className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Unit Converter</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Convert between different units of measurement with precision
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="length">Length</TabsTrigger>
              <TabsTrigger value="weight">Weight</TabsTrigger>
              <TabsTrigger value="temperature">Temperature</TabsTrigger>
              <TabsTrigger value="volume">Volume</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ruler className="w-5 h-5" />
                    {formatUnitName(activeTab)} Converter
                  </CardTitle>
                  <CardDescription>Convert between different {activeTab} units</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="input-value">Value</Label>
                        <Input
                          id="input-value"
                          type="number"
                          placeholder="Enter value to convert"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="from-unit">From</Label>
                          <Select value={fromUnit} onValueChange={setFromUnit}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                              {getUnits(activeTab).map((unit) => (
                                <SelectItem key={unit} value={unit}>
                                  {formatUnitName(unit)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="to-unit">To</Label>
                          <Select value={toUnit} onValueChange={setToUnit}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                              {getUnits(activeTab).map((unit) => (
                                <SelectItem key={unit} value={unit}>
                                  {formatUnitName(unit)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button onClick={convert} className="flex-1">
                          Convert
                        </Button>
                        <Button onClick={swapUnits} variant="outline" size="icon">
                          <ArrowUpDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {result !== null && (
                      <div className="flex items-center justify-center">
                        <div className="text-center p-6 bg-primary/5 rounded-lg w-full">
                          <div className="text-3xl font-bold text-primary mb-2">
                            {result.toFixed(6).replace(/\.?0+$/, "")}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {inputValue} {formatUnitName(fromUnit)} = {result.toFixed(6).replace(/\.?0+$/, "")}{" "}
                            {formatUnitName(toUnit)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Common Conversions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Length</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>1 meter = 3.28 feet</div>
                    <div>1 kilometer = 0.62 miles</div>
                    <div>1 inch = 2.54 cm</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Weight</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>1 kg = 2.20 pounds</div>
                    <div>1 pound = 16 ounces</div>
                    <div>1 ton = 1000 kg</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Temperature</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>0°C = 32°F</div>
                    <div>100°C = 212°F</div>
                    <div>0K = -273.15°C</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Volume</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>1 liter = 0.26 gallons</div>
                    <div>1 gallon = 4 quarts</div>
                    <div>1 cup = 8 fl oz</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
