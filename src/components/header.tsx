"use client";
import { SITE_NAME } from "@/lib/constant";
import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className='border-b bg-background/80 dark:bg-background/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm'>
			<div className='container mx-auto px-4 py-4'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link
						href='/'
						className='flex items-center space-x-3 group'>
						<div className='w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300'>
							<Zap className='w-6 h-6 text-primary-foreground' />
						</div>
						<h1 className='text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
							{SITE_NAME}
						</h1>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center space-x-1'>
						<Link
							href='/'
							className='px-4 py-2 rounded-lg text-foreground hover:text-primary font-medium transition-all duration-200 relative group'>
							Home
							<span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300'></span>
						</Link>
						<Link
							href='/about'
							className='px-4 py-2 rounded-lg text-muted-foreground hover:text-primary font-medium transition-all duration-200 relative group'>
							About
							<span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300'></span>
						</Link>
						<Link
							href='/contact'
							className='px-4 py-2 rounded-lg text-muted-foreground hover:text-primary font-medium transition-all duration-200 relative group'>
							Contact
							<span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300'></span>
						</Link>
						<Link
							href='/terms'
							className='px-4 py-2 rounded-lg text-muted-foreground hover:text-primary font-medium transition-all duration-200 relative group'>
							Terms
							<span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300'></span>
						</Link>
						<Link
							href='/privacy'
							className='px-4 py-2 rounded-lg text-muted-foreground hover:text-primary font-medium transition-all duration-200 relative group'>
							Privacy
							<span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300'></span>
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className='lg:hidden p-3 rounded-xl text-foreground hover:bg-accent transition-all duration-200 hover:scale-105'
						aria-label='Toggle mobile menu'
						aria-expanded={isMobileMenuOpen}>
						{isMobileMenuOpen ? (
							<X className='w-6 h-6' />
						) : (
							<Menu className='w-6 h-6' />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<nav className='lg:hidden mt-4 pb-6 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-200'>
						<div className='flex flex-col space-y-2'>
							<Link
								href='/'
								onClick={closeMobileMenu}
								className='text-foreground hover:text-primary font-medium py-3 px-4 rounded-xl hover:bg-accent transition-all duration-200'>
								Home
							</Link>
							<Link
								href='/about'
								onClick={closeMobileMenu}
								className='text-muted-foreground hover:text-primary font-medium py-3 px-4 rounded-xl hover:bg-accent transition-all duration-200'>
								About
							</Link>
							<Link
								href='/contact'
								onClick={closeMobileMenu}
								className='text-muted-foreground hover:text-primary font-medium py-3 px-4 rounded-xl hover:bg-accent transition-all duration-200'>
								Contact
							</Link>
							<Link
								href='/privacy'
								onClick={closeMobileMenu}
								className='text-muted-foreground hover:text-primary font-medium py-3 px-4 rounded-xl hover:bg-accent transition-all duration-200'>
								Terms
							</Link>
							<Link
								href='/terms'
								onClick={closeMobileMenu}
								className='text-muted-foreground hover:text-primary font-medium py-3 px-4 rounded-xl hover:bg-accent transition-all duration-200'>
								Privacy
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
