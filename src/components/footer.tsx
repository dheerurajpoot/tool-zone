import { SITE_NAME } from "@/lib/constant";
import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div>
			<footer className='py-16 px-4 border-t bg-muted/20'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
						<div className='lg:col-span-2'>
							<div className='flex items-center space-x-3 mb-6'>
								<div className='w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md'>
									<Zap className='w-5 h-5 text-primary-foreground' />
								</div>
								<h3 className='text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
									{SITE_NAME}
								</h3>
							</div>
							<p className='text-base text-muted-foreground max-w-md leading-relaxed mb-6'>
								Professional online tools for everyday use.
								Fast, accurate, and always free. Built with modern technology for the best user experience.
							</p>
							<div className='flex space-x-4'>
								<div className='flex items-center space-x-2 text-sm text-muted-foreground'>
									<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
									<span>Always Online</span>
								</div>
								<div className='flex items-center space-x-2 text-sm text-muted-foreground'>
									<div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
									<span>100% Free</span>
								</div>
							</div>
						</div>
						<div>
							<h4 className='font-bold text-foreground mb-4 text-lg'>
								Calculators
							</h4>
							<ul className='space-y-3'>
								<li>
									<Link
										href='/tools/age-calculator'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										Age Calculator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/emi-calculator'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										EMI Calculator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/percentage-calculator'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										Percentage Calculator
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-bold text-foreground mb-4 text-lg'>
								Utilities
							</h4>
							<ul className='space-y-3'>
								<li>
									<Link
										href='/tools/password-generator'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										Password Generator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/qr-generator'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										QR Generator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/word-counter'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										Word Counter
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-bold text-foreground mb-4 text-lg'>
								Legal
							</h4>
							<ul className='space-y-3'>
								<li>
									<Link
										href='/privacy'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href='/terms'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										Terms of Service
									</Link>
								</li>
								<li>
									<Link
										href='/disclaimer'
										className='text-muted-foreground hover:text-primary transition-colors flex items-center group'>
										<span className='w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform'></span>
										Disclaimer
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='border-t mt-12 pt-8 text-center'>
						<p className='text-sm text-muted-foreground'>
							© 2026 {SITE_NAME}. All rights reserved. Built with ❤️ and modern technology.
						</p>
						<div className='mt-4 flex justify-center space-x-6 text-xs text-muted-foreground'>
							<span>Fast • Reliable • Free</span>
							<span className='w-1 h-1 bg-muted-foreground rounded-full my-auto'></span>
							<span>v1.0.0</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
