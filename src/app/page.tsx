import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import {
	Calculator,
	Shuffle,
	Type,
	Key,
	Clock,
	DollarSign,
	Ruler,
	Hash,
	Percent,
	Zap,
	Settings,
	Star,
} from "lucide-react";
import { SITE_NAME } from "@/lib/constant";

const tools = [
	{
		id: "age-calculator",
		title: "Age Calculator",
		description:
			"Calculate your exact age in years, months, days, hours, and minutes",
		icon: Clock,
		category: "Calculator",
		href: "/tools/age-calculator",
	},
	{
		id: "emi-calculator",
		title: "EMI Calculator",
		description:
			"Calculate your loan EMI with detailed amortization schedule",
		icon: Calculator,
		category: "Calculator",
		href: "/tools/emi-calculator",
	},
	{
		id: "adsense-calculator",
		title: "AdSense Revenue Calculator",
		description: "Estimate your Google AdSense earnings potential",
		icon: DollarSign,
		category: "Calculator",
		href: "/tools/adsense-calculator",
	},
	{
		id: "unit-converter",
		title: "Unit Converter",
		description: "Convert between different units of measurement",
		icon: Ruler,
		category: "Converter",
		href: "/tools/unit-converter",
	},
	{
		id: "word-counter",
		title: "Word Counter",
		description: "Count words, characters, paragraphs, and reading time",
		icon: Hash,
		category: "Text",
		href: "/tools/word-counter",
	},
	{
		id: "case-converter",
		title: "Case Converter",
		description:
			"Convert text between different cases (upper, lower, title, etc.)",
		icon: Type,
		category: "Text",
		href: "/tools/case-converter",
	},
	{
		id: "password-generator",
		title: "Password Generator",
		description: "Generate secure passwords with customizable options",
		icon: Key,
		category: "Utility",
		href: "/tools/password-generator",
	},
	{
		id: "percentage-calculator",
		title: "Percentage Calculator",
		description: "Calculate percentages, percentage increase/decrease",
		icon: Percent,
		category: "Calculator",
		href: "/tools/percentage-calculator",
	},
	{
		id: "random-generator",
		title: "Random Number Generator",
		description: "Generate random numbers within specified ranges",
		icon: Shuffle,
		category: "Utility",
		href: "/tools/random-generator",
	},
	{
		id: "color-picker",
		title: "Color Picker",
		description: "Pick colors and get HEX, RGB, HSL values",
		icon: Settings,
		category: "Utility",
		href: "/tools/color-picker",
	},
	{
		id: "qr-generator",
		title: "QR Code Generator",
		description: "Generate QR codes for text, URLs, and more",
		icon: Zap,
		category: "Utility",
		href: "/tools/qr-generator",
	},
	{
		id: "base64-converter",
		title: "Base64 Encoder/Decoder",
		description: "Encode and decode Base64 strings",
		icon: Settings,
		category: "Converter",
		href: "/tools/base64-converter",
	},
];

const categories = ["All", "Calculator", "Converter", "Text", "Utility"];

export default function HomePage() {
	return (
		<>
			<div className='min-h-screen bg-background'>
							{/* Floating elements for visual enhancement */}
							<div className='fixed top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-20 animate-pulse'></div>
							<div className='fixed top-40 right-20 w-3 h-3 bg-secondary rounded-full opacity-20 animate-pulse delay-1000'></div>
							<div className='fixed bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full opacity-20 animate-pulse delay-500'></div>
				{/* Hero Section */}
				<section className='py-20 px-4 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10'></div>
					<div className='container mx-auto text-center relative z-10'>
						<div className='inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20'>
							<div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
							<span className='text-sm font-medium text-primary'>New Updates Available</span>
						</div>
						<h1 className='text-5xl md:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent'>
							Professional Online Tools
						</h1>
						<p className='text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed'>
							Access a comprehensive collection of professional-grade online tools. 
							From calculators to converters, everything you need in one place.
						</p>
						<div className='flex flex-wrap justify-center gap-3 mb-12'>
							<Badge variant='secondary' className='px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20'>
								🚀 12+ Tools
							</Badge>
							<Badge variant='secondary' className='px-4 py-2 text-sm font-medium bg-green-500/10 text-green-600 border-green-500/20'>
								✅ Free to Use
							</Badge>
							<Badge variant='secondary' className='px-4 py-2 text-sm font-medium bg-blue-500/10 text-blue-600 border-blue-500/20'>
								🔒 No Registration
							</Badge>
							<Badge variant='secondary' className='px-4 py-2 text-sm font-medium bg-purple-500/10 text-purple-600 border-purple-500/20'>
								📱 Mobile Friendly
							</Badge>
						</div>
						<div className='flex flex-col sm:flex-row justify-center gap-4'>
							<Button size='lg' className='px-8 py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl'>
								Explore Tools
							</Button>
							<Button size='lg' variant='outline' className='px-8 py-6 text-lg rounded-xl border-2 hover:scale-105 transition-all duration-300'>
								Learn More
							</Button>
						</div>
					</div>
				</section>

				{/* Tools Grid */}
				<section className='py-16 px-4 bg-gradient-to-b from-background to-muted/10'>
					<div className='container mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
								Explore Our Tools
							</h2>
							<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
								Discover powerful tools designed to make your work easier and more efficient
							</p>
						</div>
						<div className='flex flex-wrap justify-center gap-3 mb-12'>
							{categories.map((category) => (
								<Button
									key={category}
									variant={
										category === "All"
											? "default"
											: "outline"
									}
									size='lg'
									className='rounded-full px-6 py-3 font-medium hover:scale-105 transition-all duration-200'>
									{category}
								</Button>
							))}
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
							{tools.map((tool) => {
								const IconComponent = tool.icon;
								return (
									<Card
										key={tool.id}
										className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card rounded-2xl overflow-hidden'>
										<div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										<CardHeader className='pb-4 relative z-10'>
											<div className='flex items-center justify-between mb-3'>
												<div className='w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110'>
													<IconComponent className='w-6 h-6 text-primary' />
												</div>
												<Badge
													variant='secondary'
													className='text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20'>
													{tool.category}
												</Badge>
											</div>
											<CardTitle className='text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
												{tool.title}
											</CardTitle>
										</CardHeader>
										<CardContent className='pt-0 relative z-10'>
											<CardDescription className='text-sm text-muted-foreground mb-6 leading-relaxed'>
												{tool.description}
											</CardDescription>
											<Link href={tool.href}>
												<Button className='w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group-hover:shadow-lg rounded-xl py-6 font-medium'>
													Use Tool
												</Button>
											</Link>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className='py-20 px-4 relative overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5'></div>
					<div className='container mx-auto relative z-10'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
								Why Choose <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>{SITE_NAME}</span>?
							</h2>
							<p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
								Built with professionals in mind, our tools are fast, accurate, and easy to use. 
								Experience the difference with our modern, feature-rich platform.
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
							<div className='text-center group hover:scale-105 transition-transform duration-300'>
								<div className='w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/10 group-hover:shadow-xl transition-all duration-300'>
									<Zap className='w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300' />
								</div>
								<h3 className='text-2xl font-bold text-foreground mb-4'>
									Lightning Fast
								</h3>
								<p className='text-muted-foreground leading-relaxed'>
									All calculations and conversions happen instantly in your browser with zero waiting time.
								</p>
							</div>
							<div className='text-center group hover:scale-105 transition-transform duration-300'>
								<div className='w-20 h-20 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-secondary/10 group-hover:shadow-xl transition-all duration-300'>
									<Star className='w-10 h-10 text-secondary group-hover:scale-110 transition-transform duration-300' />
								</div>
								<h3 className='text-2xl font-bold text-foreground mb-4'>
									Professional Grade
								</h3>
								<p className='text-muted-foreground leading-relaxed'>
									Accurate algorithms trusted by professionals worldwide for reliable results every time.
								</p>
							</div>
							<div className='text-center group hover:scale-105 transition-transform duration-300'>
								<div className='w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent/10 group-hover:shadow-xl transition-all duration-300'>
									<Settings className='w-10 h-10 text-foreground group-hover:scale-110 transition-transform duration-300' />
								</div>
								<h3 className='text-2xl font-bold text-foreground mb-4'>
									Easy to Use
								</h3>
								<p className='text-muted-foreground leading-relaxed'>
									Clean, intuitive interfaces that work seamlessly on any device with mobile-first design.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
