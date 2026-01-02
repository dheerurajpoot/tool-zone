import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div>
			<footer className='py-12 px-4 border-t bg-card/50'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<div className='w-6 h-6 bg-primary rounded-md flex items-center justify-center'>
									<Zap className='w-4 h-4 text-primary-foreground' />
								</div>
								<h3 className='text-lg font-serif font-bold text-foreground'>
									ToolHub
								</h3>
							</div>
							<p className='text-sm text-muted-foreground text-pretty leading-relaxed'>
								Professional online tools for everyday use.
								Fast, accurate, and always free.
							</p>
						</div>
						<div>
							<h4 className='font-serif font-bold text-foreground mb-3'>
								Calculators
							</h4>
							<ul className='space-y-2 text-sm'>
								<li>
									<Link
										href='/tools/age-calculator'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Age Calculator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/emi-calculator'
										className='text-muted-foreground hover:text-primary transition-colors'>
										EMI Calculator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/percentage-calculator'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Percentage Calculator
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-serif font-bold text-foreground mb-3'>
								Converters
							</h4>
							<ul className='space-y-2 text-sm'>
								<li>
									<Link
										href='/tools/unit-converter'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Unit Converter
									</Link>
								</li>
								<li>
									<Link
										href='/tools/case-converter'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Case Converter
									</Link>
								</li>
								<li>
									<Link
										href='/tools/base64-converter'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Base64 Converter
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-serif font-bold text-foreground mb-3'>
								Utilities
							</h4>
							<ul className='space-y-2 text-sm'>
								<li>
									<Link
										href='/tools/password-generator'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Password Generator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/qr-generator'
										className='text-muted-foreground hover:text-primary transition-colors'>
										QR Generator
									</Link>
								</li>
								<li>
									<Link
										href='/tools/word-counter'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Word Counter
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-serif font-bold text-foreground mb-3'>
								Legal
							</h4>
							<ul className='space-y-2 text-sm'>
								<li>
									<Link
										href='/privacy'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href='/terms'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Terms of Service
									</Link>
								</li>
								<li>
									<Link
										href='/disclaimer'
										className='text-muted-foreground hover:text-primary transition-colors'>
										Disclaimer
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='border-t mt-8 pt-8 text-center'>
						<p className='text-sm text-muted-foreground'>
							© 2026 ToolHub. All rights reserved. Built with
							precision and care.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
