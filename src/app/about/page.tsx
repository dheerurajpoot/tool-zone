import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Zap, Shield, Users } from "lucide-react"
import { SITE_NAME } from "@/lib/constant"

export const metadata: Metadata = {
  title: `About Us - Professional Online Tools | ${SITE_NAME}`,
  description:
    `Learn about ${SITE_NAME}, your trusted source for professional online calculators, converters, and utility tools. Discover our mission to provide accurate, fast, and free tools.`,
  keywords: `about, ${SITE_NAME}, online tools, calculators, converters, utilities, professional tools`,
  openGraph: {
    title: `About ${SITE_NAME} - Professional Online Tools`,
    description:
      `Learn about ${SITE_NAME}, your trusted source for professional online calculators, converters, and utility tools.`,
    type: "website",
  },
}

export default function AboutPage() {
  const features = [
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description: "All our calculators use precise algorithms to ensure accurate results every time.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with instant results and responsive design across all devices.",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your data stays private. We don't store or track your calculations or personal information.",
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Intuitive interfaces designed for both beginners and professionals.",
    },
  ]

  const stats = [
    { label: "Tools Available", value: "12+" },
    { label: "Daily Users", value: "10K+" },
    { label: "Calculations Performed", value: "1M+" },
    { label: "Countries Served", value: "150+" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About {SITE_NAME}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
            Your Trusted Partner for
            <span className="text-blue-600"> Professional Tools</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            {SITE_NAME} is a comprehensive collection of professional-grade online tools designed to simplify your daily
            calculations, conversions, and utility needs. Built with precision, speed, and user experience in mind.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Choose {SITE_NAME}?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-slate-600 max-w-4xl mx-auto text-pretty">
              We believe that everyone should have access to powerful, accurate, and easy-to-use tools without the
              complexity of desktop software or the cost of premium subscriptions. Our mission is to democratize access
              to professional-grade calculators, converters, and utilities through a simple, fast, and reliable web
              platform.
            </p>
          </CardContent>
        </Card>

        {/* Tools Overview */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Tool Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Financial Calculators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  EMI Calculator, AdSense Revenue Calculator, Percentage Calculator
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Converters & Utilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Unit Converter, Base64 Converter, Case Converter, QR Generator</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Text & Security Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Word Counter, Password Generator, Random Generator, Color Picker
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
