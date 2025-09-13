"use client";
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
		<header className='border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 shadow-sm'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link
						href='/'
						className='flex items-center space-x-3 group'>
						<div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300'>
							<Zap className='w-6 h-6 text-white' />
						</div>
						<h1 className='text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
							ToolHub
						</h1>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center space-x-8'>
						<Link
							href='/'
							className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group'>
							Home
							<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
						</Link>
						<Link
							href='/about'
							className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group'>
							About
							<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
						</Link>
						<Link
							href='/contact'
							className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 relative group'>
							Contact
							<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200'></span>
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className='lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
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
					<nav className='lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4'>
						<div className='flex flex-col space-y-3'>
							<Link
								href='/'
								onClick={closeMobileMenu}
								className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200'>
								Home
							</Link>
							<Link
								href='/about'
								onClick={closeMobileMenu}
								className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200'>
								About
							</Link>
							<Link
								href='/contact'
								onClick={closeMobileMenu}
								className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200'>
								Contact
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
