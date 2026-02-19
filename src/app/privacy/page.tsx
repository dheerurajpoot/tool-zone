import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constant";

export const metadata: Metadata = {
	title: `Privacy Policy - ${SITE_NAME}`,
	description:
		`Read ${SITE_NAME}'s privacy policy to understand how we protect your data and privacy while using our online tools and calculators`,
	keywords: "privacy policy, data protection, privacy, toolhub privacy",
};

export default function PrivacyPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
			<div className='container mx-auto px-4 py-12'>
				<div className='max-w-4xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<Badge variant='secondary' className='mb-4'>
							Privacy Policy
						</Badge>
						<h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>
							Your Privacy Matters
						</h1>
						<p className='text-lg text-slate-600'>
							Last updated:{" "}
							{new Date().toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</p>
					</div>

					<div className='space-y-8'>
						<Card>
							<CardHeader>
								<CardTitle>Information We Collect</CardTitle>
							</CardHeader>
							<CardContent className='prose prose-slate max-w-none'>
								<h4 className='font-semibold mb-3'>
									Personal Information
								</h4>
								<p className='mb-4'>
									We do not collect personal information
									unless you voluntarily provide it through
									our contact form. This may include:
								</p>
								<ul className='list-disc pl-6 mb-4 space-y-1'>
									<li>
										Name and email address (when contacting
										us)
									</li>
									<li>
										Any information you choose to include in
										your messages
									</li>
								</ul>

								<h4 className='font-semibold mb-3'>
									Usage Data
								</h4>
								<p className='mb-4'>
									We may collect non-personal information
									about how you use our website:
								</p>
								<ul className='list-disc pl-6 mb-4 space-y-1'>
									<li>
										Pages visited and time spent on our site
									</li>
									<li>Browser type and version</li>
									<li>
										Device information and screen resolution
									</li>
									<li>
										General location (country/region level
										only)
									</li>
								</ul>

								<h4 className='font-semibold mb-3'>
									Tool Data
								</h4>
								<p>
									All calculations and data entered into our
									tools are processed locally in your browser
									and are not transmitted to or stored on our
									servers.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									How We Use Your Information
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='mb-4'>
									We use the information we collect to:
								</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										Respond to your inquiries and provide
										customer support
									</li>
									<li>
										Improve our website and tools based on
										usage patterns
									</li>
									<li>
										Ensure the security and proper
										functioning of our services
									</li>
									<li>Comply with legal obligations</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Data Security</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='mb-4'>
									We implement appropriate security measures
									to protect your information:
								</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										All data transmission is encrypted using
										SSL/TLS
									</li>
									<li>
										We use secure hosting providers with
										industry-standard security practices
									</li>
									<li>
										Access to any collected data is
										restricted to authorized personnel only
									</li>
									<li>
										Regular security audits and updates are
										performed
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Cookies and Tracking</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='mb-4'>
									We use minimal cookies and tracking
									technologies:
								</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										<strong>Essential Cookies:</strong>{" "}
										Required for basic website functionality
									</li>
									<li>
										<strong>Analytics:</strong> We may use
										privacy-focused analytics to understand
										site usage
									</li>
									<li>
										<strong>
											No Third-Party Tracking:
										</strong>{" "}
										We do not use invasive tracking or
										advertising cookies
									</li>
								</ul>
								<p className='mt-4'>
									You can control cookie settings through your
									browser preferences.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Third-Party Services</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='mb-4'>
									We may use third-party services for:
								</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										Website hosting and content delivery
									</li>
									<li>
										Analytics and performance monitoring
									</li>
									<li>
										Email communication (for contact form
										responses)
									</li>
								</ul>
								<p className='mt-4'>
									These services have their own privacy
									policies and we encourage you to review
									them.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Your Rights</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='mb-4'>You have the right to:</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										Request information about data we may
										have collected about you
									</li>
									<li>
										Request correction or deletion of your
										personal information
									</li>
									<li>
										Opt out of any communications from us
									</li>
									<li>
										File a complaint with relevant data
										protection authorities
									</li>
								</ul>
								<p className='mt-4'>
									To exercise these rights, please contact us
									using the information provided in our
									Contact page.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Children&apos;s Privacy</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Our services are not directed to children
									under 13. We do not knowingly collect
									personal information from children under 13.
									If you become aware that a child has
									provided us with personal information,
									please contact us immediately.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Changes to This Policy</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									We may update this privacy policy from time
									to time. We will notify you of any changes
									by posting the new policy on this page and
									updating the &quot;Last updated&quot; date.
									We encourage you to review this policy
									periodically.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Contact Us</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									If you have any questions about this Privacy
									Policy, please contact us through our
									Contact page or email us at
									{SITE_EMAIL}.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
