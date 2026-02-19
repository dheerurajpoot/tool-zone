import { SITE_AUTHOR, SITE_NAME } from "@/lib/constant";
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
}: SEOMetadataProps): Metadata {
	const fullTitle = `${title} | ${SITE_NAME}`;

	return {
		title: fullTitle,
		description,
		keywords:
			keywords ||
			"online tools, calculator, converter, generator, professional tools",
		authors: [{ name: SITE_AUTHOR }],
		creator: SITE_AUTHOR,
		publisher: SITE_AUTHOR,
		robots: "index, follow",
	};
}
