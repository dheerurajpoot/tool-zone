import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "700", "900"],
	variable: "--font-montserrat",
});

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-open-sans",
});

export const metadata: Metadata = {
	title: "ToolHub - Professional Online Tools Collection",
	description:
		"Access 10+ professional online tools including calculators, converters, generators and more. Age calculator, EMI calculator, unit converter, word counter, password generator and many more useful tools.",
	keywords:
		"online tools, calculator, converter, generator, age calculator, EMI calculator, unit converter, word counter, password generator, case converter, adsense calculator",
	authors: [{ name: "ToolHub" }],
	creator: "ToolHub",
	publisher: "ToolHub",
	robots: "index, follow",
	openGraph: {
		title: "ToolHub - Professional Online Tools Collection",
		description:
			"Access 10+ professional online tools including calculators, converters, generators and more.",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "ToolHub - Professional Online Tools Collection",
		description:
			"Access 10+ professional online tools including calculators, converters, generators and more.",
	},
	generator: "ToolHub",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning></head>
			<body
				className={`font-sans ${montserrat.variable} ${openSans.variable} antialiased`}
				suppressHydrationWarning>
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
					{children}
					<Footer />
				</Suspense>
			</body>
		</html>
	);
}
