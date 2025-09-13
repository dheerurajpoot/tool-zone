import type { Metadata } from "next";

interface SEOMetadataProps {
	title: string;
	description: string;
	keywords?: string;
	canonical?: string;
	ogImage?: string;
}

export function generateSEOMetadata({
	title,
	description,
	keywords,
	canonical,
	ogImage = "/og-image.png",
}: SEOMetadataProps): Metadata {
	const fullTitle = `${title} | ToolHub - Professional Online Tools`;

	return {
		title: fullTitle,
		description,
		keywords:
			keywords ||
			"online tools, calculator, converter, generator, professional tools",
		authors: [{ name: "ToolHub" }],
		creator: "ToolHub",
		publisher: "ToolHub",
		robots: "index, follow",
	};
}
