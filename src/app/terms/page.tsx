import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
	title: "Terms of Service - ToolHub",
	description:
		"Read ToolHub's terms of service and conditions for using our online calculators, converters, and utility tools.",
	keywords:
		"terms of service, terms and conditions, user agreement, toolhub terms",
	openGraph: {
		title: "Terms of Service - ToolHub",
		description:
			"Read ToolHub's terms of service and conditions for using our online tools.",
		type: "website",
	},
};

export default function TermsPage() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
			<div className='container mx-auto px-4 py-12'>
				<div className='max-w-4xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-12'>
						<Badge variant='secondary' className='mb-4'>
							Terms of Service
						</Badge>
						<h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>
							Terms & Conditions
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
								<CardTitle>Acceptance of Terms</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									By accessing and using ToolHub (&quot;the
									Service&quot;), you accept and agree to be
									bound by the terms and provision of this
									agreement. If you do not agree to abide by
									the above, please do not use this service.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Description of Service</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<p>
									ToolHub provides a collection of online
									tools including but not limited to:
								</p>
								<ul className='list-disc pl-6 space-y-1'>
									<li>
										Financial calculators (EMI, AdSense
										Revenue, Percentage)
									</li>
									<li>
										Conversion tools (Unit Converter,
										Base64, Case Converter)
									</li>
									<li>
										Text processing tools (Word Counter)
									</li>
									<li>
										Utility tools (Password Generator, QR
										Generator, Color Picker)
									</li>
									<li>
										Other calculation and conversion
										utilities
									</li>
								</ul>
								<p>
									All tools are provided free of charge for
									personal and commercial use.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>User Responsibilities</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<p>As a user of our service, you agree to:</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										Use the tools in a lawful manner and in
										accordance with these terms
									</li>
									<li>
										Not attempt to interfere with,
										compromise, or disrupt our services
									</li>
									<li>
										Not use automated systems to access our
										tools excessively
									</li>
									<li>
										Not reverse engineer, decompile, or
										attempt to extract source code
									</li>
									<li>
										Verify important calculations
										independently before making decisions
									</li>
									<li>
										Respect intellectual property rights
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Prohibited Uses</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<p>You may not use our service:</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										For any unlawful purpose or to solicit
										others to perform unlawful acts
									</li>
									<li>
										To violate any international, federal,
										provincial, or state regulations, rules,
										laws, or local ordinances
									</li>
									<li>
										To infringe upon or violate our
										intellectual property rights or the
										intellectual property rights of others
									</li>
									<li>
										To harass, abuse, insult, harm, defame,
										slander, disparage, intimidate, or
										discriminate
									</li>
									<li>
										To submit false or misleading
										information
									</li>
									<li>
										To upload or transmit viruses or any
										other type of malicious code
									</li>
									<li>
										To spam, phish, pharm, pretext, spider,
										crawl, or scrape
									</li>
									<li>For any obscene or immoral purpose</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									Intellectual Property Rights
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<p>
									The Service and its original content,
									features, and functionality are and will
									remain the exclusive property of ToolHub and
									its licensors. The Service is protected by
									copyright, trademark, and other laws. Our
									trademarks and trade dress may not be used
									in connection with any product or service
									without our prior written consent.
								</p>
								<p>
									You may use our tools for personal and
									commercial purposes, but you may not:
								</p>
								<ul className='list-disc pl-6 space-y-1'>
									<li>
										Copy, modify, or distribute our source
										code
									</li>
									<li>
										Create derivative works based on our
										tools
									</li>
									<li>
										Remove or alter any copyright notices
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Privacy Policy</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Your privacy is important to us. Please
									review our Privacy Policy, which also
									governs your use of the Service, to
									understand our practices.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									Disclaimers and Limitation of Liability
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<p>
									The information on this website is provided
									on an &quot;as is&quot; basis. To the
									fullest extent permitted by law, this
									Company:
								</p>
								<ul className='list-disc pl-6 space-y-2'>
									<li>
										Excludes all representations and
										warranties relating to this website and
										its contents
									</li>
									<li>
										Does not warrant that the functions
										contained in this website will be
										uninterrupted or error-free
									</li>
									<li>
										Will not be liable for any damages
										arising from the use of this website
									</li>
									<li>
										Makes no representations about the
										accuracy or completeness of calculations
									</li>
								</ul>
								<p>
									Please refer to our Disclaimer page for
									detailed information about limitations and
									accuracy of our tools.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Indemnification</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									You agree to defend, indemnify, and hold
									harmless ToolHub and its licensee and
									licensors, and their employees, contractors,
									agents, officers and directors, from and
									against any and all claims, damages,
									obligations, losses, liabilities, costs or
									debt, and expenses (including but not
									limited to attorney&apos;s fees).
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Termination</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									We may terminate or suspend your access
									immediately, without prior notice or
									liability, for any reason whatsoever,
									including without limitation if you breach
									the Terms. Upon termination, your right to
									use the Service will cease immediately.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Changes to Terms</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									We reserve the right, at our sole
									discretion, to modify or replace these Terms
									at any time. If a revision is material, we
									will try to provide at least 30 days notice
									prior to any new terms taking effect.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Governing Law</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									These Terms shall be interpreted and
									governed by the laws of the jurisdiction in
									which we operate, without regard to its
									conflict of law provisions. Our failure to
									enforce any right or provision of these
									Terms will not be considered a waiver of
									those rights.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Severability</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									If any provision of these Terms is held to
									be invalid or unenforceable by a court, the
									remaining provisions of these Terms will
									remain in effect.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									If you have any questions about these Terms
									of Service, please contact us through our
									Contact page or email us at
									legal@toolhub.com.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
