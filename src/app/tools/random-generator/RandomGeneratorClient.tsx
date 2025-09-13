"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Shuffle, Dice1, List, Hash } from "lucide-react"

export default function RandomGeneratorClient() {
  const [numberMin, setNumberMin] = useState("1")
  const [numberMax, setNumberMax] = useState("100")
  const [numberCount, setNumberCount] = useState("1")
  const [numberResults, setNumberResults] = useState<number[]>([])

  const [listItems, setListItems] = useState("")
  const [listResults, setListResults] = useState<string[]>([])

  const [diceCount, setDiceCount] = useState("1")
  const [diceSides, setDiceSides] = useState("6")
  const [diceResults, setDiceResults] = useState<number[]>([])

  const generateNumbers = () => {
    const min = Number.parseInt(numberMin)
    const max = Number.parseInt(numberMax)
    const count = Number.parseInt(numberCount)

    if (isNaN(min) || isNaN(max) || isNaN(count)) {
      alert("Please enter valid numbers")
      return
    }

    if (min >= max) {
      alert("Minimum value must be less than maximum value")
      return
    }

    if (count < 1 || count > 1000) {
      alert("Count must be between 1 and 1000")
      return
    }

    const results = []
    for (let i = 0; i < count; i++) {
      results.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    setNumberResults(results)
  }

  const shuffleList = () => {
    const items = listItems
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)

    if (items.length === 0) {
      alert("Please enter at least one item")
      return
    }

    const shuffled = [...items].sort(() => Math.random() - 0.5)
    setListResults(shuffled)
  }

  const rollDice = () => {
    const count = Number.parseInt(diceCount)
    const sides = Number.parseInt(diceSides)

    if (isNaN(count) || isNaN(sides)) {
      alert("Please enter valid numbers")
      return
    }

    if (count < 1 || count > 100) {
      alert("Dice count must be between 1 and 100")
      return
    }

    if (sides < 2 || sides > 100) {
      alert("Dice sides must be between 2 and 100")
      return
    }

    const results = []
    for (let i = 0; i < count; i++) {
      results.push(Math.floor(Math.random() * sides) + 1)
    }

    setDiceResults(results)
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
              <Shuffle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Random Generator</h1>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Generate random numbers, shuffle lists, and roll dice
            </p>
          </div>

          <Tabs defaultValue="numbers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="numbers">Random Numbers</TabsTrigger>
              <TabsTrigger value="list">List Shuffler</TabsTrigger>
              <TabsTrigger value="dice">Dice Roller</TabsTrigger>
            </TabsList>

            <TabsContent value="numbers">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="w-5 h-5" />
                    Random Number Generator
                  </CardTitle>
                  <CardDescription>Generate random numbers within a specified range</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="number-min">Minimum Value</Label>
                          <Input
                            id="number-min"
                            type="number"
                            value={numberMin}
                            onChange={(e) => setNumberMin(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="number-max">Maximum Value</Label>
                          <Input
                            id="number-max"
                            type="number"
                            value={numberMax}
                            onChange={(e) => setNumberMax(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="number-count">How many numbers?</Label>
                        <Input
                          id="number-count"
                          type="number"
                          min="1"
                          max="1000"
                          value={numberCount}
                          onChange={(e) => setNumberCount(e.target.value)}
                        />
                      </div>
                      <Button onClick={generateNumbers} className="w-full">
                        <Shuffle className="w-4 h-4 mr-2" />
                        Generate Numbers
                      </Button>
                    </div>

                    {numberResults.length > 0 && (
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-2">Generated Numbers</div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {numberResults.map((num, index) => (
                              <Badge key={index} variant="secondary" className="text-lg px-3 py-1">
                                {num}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                          Range: {numberMin} to {numberMax} • Count: {numberResults.length}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="list">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <List className="w-5 h-5" />
                    List Shuffler
                  </CardTitle>
                  <CardDescription>Randomly shuffle a list of items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="list-items">Items (one per line)</Label>
                        <textarea
                          id="list-items"
                          className="w-full h-40 p-3 border rounded-md resize-none bg-background"
                          placeholder="Enter items to shuffle:&#10;Apple&#10;Banana&#10;Cherry&#10;Date&#10;Elderberry"
                          value={listItems}
                          onChange={(e) => setListItems(e.target.value)}
                        />
                      </div>
                      <Button onClick={shuffleList} className="w-full">
                        <Shuffle className="w-4 h-4 mr-2" />
                        Shuffle List
                      </Button>
                    </div>

                    {listResults.length > 0 && (
                      <div className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <div className="text-lg font-bold text-primary mb-3">Shuffled Order</div>
                          <div className="space-y-2">
                            {listResults.map((item, index) => (
                              <div key={index} className="flex items-center gap-3 p-2 bg-background rounded">
                                <Badge variant="outline" className="w-8 h-8 flex items-center justify-center">
                                  {index + 1}
                                </Badge>
                                <span className="text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                          Total items: {listResults.length}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dice">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dice1 className="w-5 h-5" />
                    Dice Roller
                  </CardTitle>
                  <CardDescription>Roll virtual dice with customizable sides</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="dice-count">Number of Dice</Label>
                          <Input
                            id="dice-count"
                            type="number"
                            min="1"
                            max="100"
                            value={diceCount}
                            onChange={(e) => setDiceCount(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="dice-sides">Sides per Die</Label>
                          <Input
                            id="dice-sides"
                            type="number"
                            min="2"
                            max="100"
                            value={diceSides}
                            onChange={(e) => setDiceSides(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            setDiceCount("1")
                            setDiceSides("6")
                          }}
                          variant="outline"
                          size="sm"
                        >
                          D6
                        </Button>
                        <Button
                          onClick={() => {
                            setDiceCount("1")
                            setDiceSides("20")
                          }}
                          variant="outline"
                          size="sm"
                        >
                          D20
                        </Button>
                        <Button
                          onClick={() => {
                            setDiceCount("2")
                            setDiceSides("6")
                          }}
                          variant="outline"
                          size="sm"
                        >
                          2D6
                        </Button>
                      </div>
                      <Button onClick={rollDice} className="w-full">
                        <Dice1 className="w-4 h-4 mr-2" />
                        Roll Dice
                      </Button>
                    </div>

                    {diceResults.length > 0 && (
                      <div className="space-y-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-2">Dice Results</div>
                          <div className="flex flex-wrap gap-2 justify-center mb-3">
                            {diceResults.map((result, index) => (
                              <div
                                key={index}
                                className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg"
                              >
                                {result}
                              </div>
                            ))}
                          </div>
                          <div className="text-lg font-semibold">
                            Total: {diceResults.reduce((sum, val) => sum + val, 0)}
                          </div>
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                          {diceCount} dice with {diceSides} sides each
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
              <CardTitle>Random Generation Uses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Numbers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Lottery numbers</li>
                    <li>• Random sampling</li>
                    <li>• Game mechanics</li>
                    <li>• Statistical analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Lists</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Team assignments</li>
                    <li>• Playlist shuffling</li>
                    <li>• Random selection</li>
                    <li>• Fair ordering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dice</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Board games</li>
                    <li>• RPG gaming</li>
                    <li>• Decision making</li>
                    <li>• Probability experiments</li>
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
