import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, MapPin } from "lucide-react";
import { SITE_NAME } from "@/lib/constant";

export const metadata: Metadata = {
	title: `Contact Us - Get Support | ${SITE_NAME}`,
	description:
		`Contact ${SITE_NAME} for support, feedback, or business inquiries. We're here to help with any questions about our online tools and calculators.`,
	keywords: `contact ${SITE_NAME}, support, feedback, business inquiries, help`,
	openGraph: {
		title: `Contact ${SITE_NAME} - Get Support`,
		description:
			`Contact ${SITE_NAME} for support, feedback, or business inquiries. We're here to help with any questions.`,
		type: "website",
	},
};

export default function ContactPage() {
	const contactInfo = [
		{
			icon: Mail,
			title: "Email Support",
			description: "Get help with any questions",
			contact: "support@toolhub.com",
		},
		{
			icon: MessageSquare,
			title: "Business Inquiries",
			description: "Partnership and business opportunities",
			contact: "business@toolhub.com",
		},
		{
			icon: Clock,
			title: "Response Time",
			description: "We typically respond within",
			contact: "24 hours",
		},
		{
			icon: MapPin,
			title: "Location",
			description: "Serving users worldwide",
			contact: "Global",
		},
	];

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
			<div className='container mx-auto px-4 py-12'>
				{/* Hero Section */}
				<div className='text-center mb-16'>
					<Badge variant='secondary' className='mb-4'>
						Contact Us
					</Badge>
					<h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance'>
						Get in Touch with
						<span className='text-blue-600'> Our Team</span>
					</h1>
					<p className='text-xl text-slate-600 max-w-3xl mx-auto text-pretty'>
						Have questions about our tools? Need support? Want to
						suggest a new feature? We&apos;d love to hear from you
						and help make your experience better.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					{/* Contact Form */}
					<Card>
						<CardHeader>
							<CardTitle className='text-2xl'>
								Send us a Message
							</CardTitle>
							<p className='text-slate-600'>
								Fill out the form below and we&apos;ll get back
								to you soon.
							</p>
						</CardHeader>
						<CardContent className='space-y-6'>
							<div className='grid md:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='firstName'
										className='block text-sm font-medium text-slate-700 mb-2'>
										First Name *
									</label>
									<Input
										id='firstName'
										placeholder='John'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='lastName'
										className='block text-sm font-medium text-slate-700 mb-2'>
										Last Name *
									</label>
									<Input
										id='lastName'
										placeholder='Doe'
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-slate-700 mb-2'>
									Email Address *
								</label>
								<Input
									id='email'
									type='email'
									placeholder='john@example.com'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-slate-700 mb-2'>
									Subject *
								</label>
								<Input
									id='subject'
									placeholder='How can we help you?'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-slate-700 mb-2'>
									Message *
								</label>
								<Textarea
									id='message'
									placeholder='Tell us more about your question or feedback...'
									rows={6}
									required
								/>
							</div>

							<Button className='w-full' size='lg'>
								Send Message
							</Button>

							<p className='text-sm text-slate-500 text-center'>
								* Required fields. We&apos;ll never share your
								information with third parties.
							</p>
						</CardContent>
					</Card>

					{/* Contact Information */}
					<div className='space-y-6'>
						<Card>
							<CardHeader>
								<CardTitle className='text-2xl'>
									Contact Information
								</CardTitle>
								<p className='text-slate-600'>
									Multiple ways to reach our support team.
								</p>
							</CardHeader>
							<CardContent className='space-y-6'>
								{contactInfo.map((info, index) => (
									<div
										key={index}
										className='flex items-start space-x-4'>
										<div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
											<info.icon className='w-5 h-5 text-blue-600' />
										</div>
										<div>
											<h3 className='font-semibold text-slate-900'>
												{info.title}
											</h3>
											<p className='text-sm text-slate-600 mb-1'>
												{info.description}
											</p>
											<p className='text-sm font-medium text-blue-600'>
												{info.contact}
											</p>
										</div>
									</div>
								))}
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									Frequently Asked Questions
								</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div>
									<h4 className='font-semibold text-slate-900 mb-2'>
										Are your tools free to use?
									</h4>
									<p className='text-sm text-slate-600'>
										Yes, all our tools are completely free
										to use with no hidden charges or
										subscriptions required.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-slate-900 mb-2'>
										Do you store my calculation data?
									</h4>
									<p className='text-sm text-slate-600'>
										No, we don&apos;t store any of your
										calculation data. All computations are
										performed locally in your browser.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-slate-900 mb-2'>
										Can I suggest new tools?
									</h4>
									<p className='text-sm text-slate-600'>
										We love hearing suggestions for new
										tools. Use the contact form to share
										your ideas.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
