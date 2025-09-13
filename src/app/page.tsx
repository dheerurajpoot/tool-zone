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
import { StructuredData } from "@/components/structured-data";
import structuredData from "./structured-data.json";
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
			<StructuredData data={structuredData} />
			<div className='min-h-screen bg-background'>
				{/* Hero Section */}
				<section className='py-16 px-4'>
					<div className='container mx-auto text-center'>
						<h1 className='text-4xl md:text-6xl font-serif font-black text-foreground mb-6 text-balance'>
							Professional Online Tools
						</h1>
						<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed'>
							Access a comprehensive collection of
							professional-grade online tools. From calculators to
							converters, everything you need in one place.
						</p>
						<div className='flex flex-wrap justify-center gap-2 mb-8'>
							<Badge variant='secondary' className='text-sm'>
								12+ Tools
							</Badge>
							<Badge variant='secondary' className='text-sm'>
								Free to Use
							</Badge>
							<Badge variant='secondary' className='text-sm'>
								No Registration
							</Badge>
							<Badge variant='secondary' className='text-sm'>
								Mobile Friendly
							</Badge>
						</div>
					</div>
				</section>

				{/* Tools Grid */}
				<section className='py-12 px-4'>
					<div className='container mx-auto'>
						<div className='flex flex-wrap justify-center gap-4 mb-8'>
							{categories.map((category) => (
								<Button
									key={category}
									variant={
										category === "All"
											? "default"
											: "outline"
									}
									size='sm'
									className='rounded-full'>
									{category}
								</Button>
							))}
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
							{tools.map((tool) => {
								const IconComponent = tool.icon;
								return (
									<Card
										key={tool.id}
										className='group hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
										<CardHeader className='pb-3'>
											<div className='flex items-center justify-between mb-2'>
												<div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
													<IconComponent className='w-5 h-5 text-primary' />
												</div>
												<Badge
													variant='outline'
													className='text-xs'>
													{tool.category}
												</Badge>
											</div>
											<CardTitle className='text-lg font-serif font-bold text-balance'>
												{tool.title}
											</CardTitle>
										</CardHeader>
										<CardContent className='pt-0'>
											<CardDescription className='text-sm text-muted-foreground mb-4 text-pretty leading-relaxed'>
												{tool.description}
											</CardDescription>
											<Link href={tool.href}>
												<Button className='w-full group-hover:bg-primary/90 transition-colors cursor-pointer'>
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
				<section className='py-16 px-4 bg-muted/30'>
					<div className='container mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-serif font-bold text-foreground mb-4 text-balance'>
								Why Choose ToolHub?
							</h2>
							<p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed'>
								Built with professionals in mind, our tools are
								fast, accurate, and easy to use.
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='text-center'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Zap className='w-8 h-8 text-primary' />
								</div>
								<h3 className='text-xl font-serif font-bold text-foreground mb-2'>
									Lightning Fast
								</h3>
								<p className='text-muted-foreground text-pretty leading-relaxed'>
									All calculations and conversions happen
									instantly in your browser.
								</p>
							</div>
							<div className='text-center'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Star className='w-8 h-8 text-primary' />
								</div>
								<h3 className='text-xl font-serif font-bold text-foreground mb-2'>
									Professional Grade
								</h3>
								<p className='text-muted-foreground text-pretty leading-relaxed'>
									Accurate algorithms trusted by professionals
									worldwide.
								</p>
							</div>
							<div className='text-center'>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Settings className='w-8 h-8 text-primary' />
								</div>
								<h3 className='text-xl font-serif font-bold text-foreground mb-2'>
									Easy to Use
								</h3>
								<p className='text-muted-foreground text-pretty leading-relaxed'>
									Clean, intuitive interfaces that work on any
									device.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
