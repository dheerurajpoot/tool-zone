import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constant";

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
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	keywords:
		"online tools, calculator, converter, generator, age calculator, EMI calculator, unit converter, word counter, password generator, case converter, adsense calculator",
	authors: [{ name: SITE_AUTHOR }],
	creator: SITE_AUTHOR,
	publisher: SITE_AUTHOR,
	robots: "index, follow",
	openGraph: {
		title: SITE_TITLE,
		description:SITE_TITLE,
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_TITLE,
		description:
			SITE_DESCRIPTION,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				{/* Search Console Verification */}
				<meta
					name='google-site-verification'
					content='YOUR_GOOGLE_SITE_VERIFICATION_CODE'
				/>

				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
					`,
					}}
				/>

				{/* Google AdSense */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_GOOGLE_ADSENSE_ID'
					crossOrigin='anonymous'></script>
			</head>
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
