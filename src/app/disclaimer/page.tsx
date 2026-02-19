import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"
import { SITE_NAME } from "@/lib/constant"

export const metadata: Metadata = {
  title: `Disclaimer - ${SITE_NAME}`,
  description:
    `Important disclaimer and limitations regarding the use of ${SITE_NAME}'s online calculators, converters, and utility tools.`,
  keywords: "disclaimer, limitations, accuracy, toolhub disclaimer",
  openGraph: {
    title: `Disclaimer - ${SITE_NAME}`,
    description: `Important disclaimer and limitations regarding the use of ${SITE_NAME}'s online tools.`,
    type: "website",
  },
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Disclaimer
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Important Information</h1>
            <p className="text-lg text-slate-600">
              Please read this disclaimer carefully before using our tools and services.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <CardTitle className="text-amber-800">General Disclaimer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">
                  The information and tools provided on {SITE_NAME} are for general informational and educational purposes
                  only. While we strive for accuracy, we make no representations or warranties of any kind, express or
                  implied, about the completeness, accuracy, reliability, suitability, or availability of the
                  information, products, services, or related graphics contained on the website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accuracy of Calculations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  While our tools are designed to provide accurate results, we cannot guarantee 100% accuracy in all
                  circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Calculations are based on standard formulas and may not account for all variables in real-world
                    scenarios
                  </li>
                  <li>Results should be verified independently for critical decisions</li>
                  <li>Different calculation methods or rounding may produce slightly different results</li>
                  <li>
                    We recommend consulting with qualified professionals for important financial, legal, or technical
                    decisions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Calculations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our financial calculators (EMI Calculator, AdSense Revenue Calculator, etc.) are provided for
                  estimation purposes only:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Results are approximations and may not reflect actual financial products or terms</li>
                  <li>Interest rates, fees, and terms vary between financial institutions</li>
                  <li>Tax implications and regulations may affect actual results</li>
                  <li>Always consult with qualified financial advisors for investment or loan decisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Our technical tools (Unit Converter, Base64 Converter, etc.) are provided as-is:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conversion factors are based on standard definitions but may vary in specific contexts</li>
                  <li>Some conversions may involve rounding that affects precision</li>
                  <li>Historical or specialized measurement systems may have variations</li>
                  <li>Verify critical conversions with authoritative sources</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>To the fullest extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
                  </li>
                  <li>This includes damages arising from the use or inability to use our tools</li>
                  <li>We are not responsible for decisions made based on our tool results</li>
                  <li>Users assume full responsibility for verifying results and their applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our tools do not constitute professional advice:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Financial:</strong> Consult certified financial planners or advisors
                  </li>
                  <li>
                    <strong>Legal:</strong> Seek advice from qualified legal professionals
                  </li>
                  <li>
                    <strong>Medical:</strong> Always consult healthcare professionals
                  </li>
                  <li>
                    <strong>Technical:</strong> Verify critical calculations with subject matter experts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>External Links</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our website may contain links to external sites. We have no control over and assume no responsibility
                  for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates and Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We reserve the right to modify, update, or discontinue any of our tools or services at any time
                  without notice. We may also update this disclaimer periodically to reflect changes in our services or
                  legal requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Responsibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>By using our tools, you acknowledge that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You understand the limitations described in this disclaimer</li>
                  <li>You will use the tools responsibly and at your own risk</li>
                  <li>You will verify important results independently</li>
                  <li>You will not rely solely on our tools for critical decisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you have questions about this disclaimer or need clarification about any of our tools, please
                  contact us through our Contact page.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
