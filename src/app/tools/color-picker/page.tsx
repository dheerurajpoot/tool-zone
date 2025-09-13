"use client";

import { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Palette, Copy, Check, RefreshCw } from "lucide-react";
// import { generateSEOMetadata } from "@/components/seo-metadata"

// export const metadata = generateSEOMetadata({
//   title: "Color Picker",
//   description:
//     "Pick colors and get HEX, RGB, HSL, and HSV values. Free online color picker tool for designers and developers with multiple color formats.",
//   keywords: "color picker, hex color, rgb color, hsl color, color converter, color palette",
//   canonical: "/tools/color-picker",
// })

interface ColorValues {
	hex: string;
	rgb: { r: number; g: number; b: number };
	hsl: { h: number; s: number; l: number };
	hsv: { h: number; s: number; v: number };
}

export default function ColorPickerPage() {
	const [selectedColor, setSelectedColor] = useState("#3b82f6");
	const [colorValues, setColorValues] = useState<ColorValues | null>(null);
	const [copied, setCopied] = useState<string | null>(null);

	const hexToRgb = (hex: string) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: Number.parseInt(result[1], 16),
					g: Number.parseInt(result[2], 16),
					b: Number.parseInt(result[3], 16),
			  }
			: { r: 0, g: 0, b: 0 };
	};

	const rgbToHsl = (r: number, g: number, b: number) => {
		r /= 255;
		g /= 255;
		b /= 255;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let h = 0;
		let s = 0;
		const l = (max + min) / 2;

		if (max !== min) {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h /= 6;
		}

		return {
			h: Math.round(h * 360),
			s: Math.round(s * 100),
			l: Math.round(l * 100),
		};
	};

	const rgbToHsv = (r: number, g: number, b: number) => {
		r /= 255;
		g /= 255;
		b /= 255;
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let h = 0;
		const v = max;
		const d = max - min;
		const s = max === 0 ? 0 : d / max;

		if (max !== min) {
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h /= 6;
		}

		return {
			h: Math.round(h * 360),
			s: Math.round(s * 100),
			v: Math.round(v * 100),
		};
	};

	useEffect(() => {
		const rgb = hexToRgb(selectedColor);
		const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
		const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);

		setColorValues({
			hex: selectedColor.toUpperCase(),
			rgb,
			hsl,
			hsv,
		});
	}, [selectedColor]);

	const copyToClipboard = async (text: string, type: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(type);
			setTimeout(() => setCopied(null), 2000);
		} catch (error) {
			alert("Failed to copy to clipboard");
		}
	};

	const generateRandomColor = () => {
		const randomColor = `#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0")}`;
		setSelectedColor(randomColor);
	};

	const predefinedColors = [
		"#FF0000", // Red
		"#00FF00", // Green
		"#0000FF", // Blue
		"#FFFF00", // Yellow
		"#FF00FF", // Magenta
		"#00FFFF", // Cyan
		"#FFA500", // Orange
		"#800080", // Purple
		"#FFC0CB", // Pink
		"#A52A2A", // Brown
		"#808080", // Gray
		"#000000", // Black
	];

	return (
		<div className='min-h-screen bg-background'>
			<div className='container mx-auto px-4 py-8'>
				<div className='mb-6'>
					<Link
						href='/'
						className='inline-flex items-center text-muted-foreground hover:text-primary transition-colors'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Tools
					</Link>
				</div>

				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-8'>
						<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
							<Palette className='w-8 h-8 text-primary' />
						</div>
						<h1 className='text-3xl font-serif font-bold text-foreground mb-2'>
							Color Picker
						</h1>
						<p className='text-muted-foreground text-pretty leading-relaxed'>
							Pick colors and get HEX, RGB, HSL, and HSV values
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Palette className='w-5 h-5' />
									Color Selection
								</CardTitle>
								<CardDescription>
									Choose your color
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-6'>
								<div className='space-y-4'>
									<div>
										<Label htmlFor='color-picker'>
											Color Picker
										</Label>
										<div className='flex gap-4 items-center'>
											<input
												id='color-picker'
												type='color'
												value={selectedColor}
												onChange={(e) =>
													setSelectedColor(
														e.target.value
													)
												}
												className='w-16 h-16 rounded-lg border-2 border-border cursor-pointer'
											/>
											<div className='flex-1'>
												<Input
													value={selectedColor}
													onChange={(e) =>
														setSelectedColor(
															e.target.value
														)
													}
													placeholder='#000000'
													className='font-mono'
												/>
											</div>
										</div>
									</div>

									<div>
										<Label>Quick Colors</Label>
										<div className='grid grid-cols-6 gap-2 mt-2'>
											{predefinedColors.map((color) => (
												<button
													key={color}
													onClick={() =>
														setSelectedColor(color)
													}
													className='w-10 h-10 rounded-lg border-2 border-border hover:scale-110 transition-transform'
													style={{
														backgroundColor: color,
													}}
													title={color}
												/>
											))}
										</div>
									</div>

									<Button
										onClick={generateRandomColor}
										variant='outline'
										className='w-full bg-transparent'>
										<RefreshCw className='w-4 h-4 mr-2' />
										Random Color
									</Button>
								</div>

								<div className='text-center p-8 rounded-lg border-2 border-dashed border-border'>
									<div
										className='w-32 h-32 mx-auto rounded-lg shadow-lg'
										style={{
											backgroundColor: selectedColor,
										}}
									/>
									<p className='text-sm text-muted-foreground mt-4'>
										Selected Color Preview
									</p>
								</div>
							</CardContent>
						</Card>

						{colorValues && (
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Palette className='w-5 h-5' />
										Color Values
									</CardTitle>
									<CardDescription>
										Different color format representations
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div className='space-y-3'>
										<div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
											<div>
												<div className='font-medium'>
													HEX
												</div>
												<div className='text-sm text-muted-foreground font-mono'>
													{colorValues.hex}
												</div>
											</div>
											<Button
												onClick={() =>
													copyToClipboard(
														colorValues.hex,
														"hex"
													)
												}
												size='sm'
												variant='outline'>
												{copied === "hex" ? (
													<Check className='w-4 h-4' />
												) : (
													<Copy className='w-4 h-4' />
												)}
											</Button>
										</div>

										<div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
											<div>
												<div className='font-medium'>
													RGB
												</div>
												<div className='text-sm text-muted-foreground font-mono'>
													rgb({colorValues.rgb.r},{" "}
													{colorValues.rgb.g},{" "}
													{colorValues.rgb.b})
												</div>
											</div>
											<Button
												onClick={() =>
													copyToClipboard(
														`rgb(${colorValues.rgb.r}, ${colorValues.rgb.g}, ${colorValues.rgb.b})`,
														"rgb"
													)
												}
												size='sm'
												variant='outline'>
												{copied === "rgb" ? (
													<Check className='w-4 h-4' />
												) : (
													<Copy className='w-4 h-4' />
												)}
											</Button>
										</div>

										<div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
											<div>
												<div className='font-medium'>
													HSL
												</div>
												<div className='text-sm text-muted-foreground font-mono'>
													hsl({colorValues.hsl.h},{" "}
													{colorValues.hsl.s}%,{" "}
													{colorValues.hsl.l}%)
												</div>
											</div>
											<Button
												onClick={() =>
													copyToClipboard(
														`hsl(${colorValues.hsl.h}, ${colorValues.hsl.s}%, ${colorValues.hsl.l}%)`,
														"hsl"
													)
												}
												size='sm'
												variant='outline'>
												{copied === "hsl" ? (
													<Check className='w-4 h-4' />
												) : (
													<Copy className='w-4 h-4' />
												)}
											</Button>
										</div>

										<div className='flex items-center justify-between p-3 bg-muted/50 rounded-lg'>
											<div>
												<div className='font-medium'>
													HSV
												</div>
												<div className='text-sm text-muted-foreground font-mono'>
													hsv({colorValues.hsv.h},{" "}
													{colorValues.hsv.s}%,{" "}
													{colorValues.hsv.v}%)
												</div>
											</div>
											<Button
												onClick={() =>
													copyToClipboard(
														`hsv(${colorValues.hsv.h}, ${colorValues.hsv.s}%, ${colorValues.hsv.v}%)`,
														"hsv"
													)
												}
												size='sm'
												variant='outline'>
												{copied === "hsv" ? (
													<Check className='w-4 h-4' />
												) : (
													<Copy className='w-4 h-4' />
												)}
											</Button>
										</div>
									</div>

									<div className='grid grid-cols-3 gap-2 mt-4'>
										<div className='text-center p-2 bg-muted/30 rounded'>
											<div className='text-xs text-muted-foreground'>
												Red
											</div>
											<Badge variant='outline'>
												{colorValues.rgb.r}
											</Badge>
										</div>
										<div className='text-center p-2 bg-muted/30 rounded'>
											<div className='text-xs text-muted-foreground'>
												Green
											</div>
											<Badge variant='outline'>
												{colorValues.rgb.g}
											</Badge>
										</div>
										<div className='text-center p-2 bg-muted/30 rounded'>
											<div className='text-xs text-muted-foreground'>
												Blue
											</div>
											<Badge variant='outline'>
												{colorValues.rgb.b}
											</Badge>
										</div>
									</div>
								</CardContent>
							</Card>
						)}
					</div>

					<Card className='mt-6'>
						<CardHeader>
							<CardTitle>Color Format Guide</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										Color Formats
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>
											• <strong>HEX:</strong> Web
											standard, 6-digit hexadecimal
										</li>
										<li>
											• <strong>RGB:</strong> Red, Green,
											Blue values (0-255)
										</li>
										<li>
											• <strong>HSL:</strong> Hue,
											Saturation, Lightness
										</li>
										<li>
											• <strong>HSV:</strong> Hue,
											Saturation, Value/Brightness
										</li>
									</ul>
								</div>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										Usage Tips
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>• Use HEX for web development</li>
										<li>
											• RGB for digital design software
										</li>
										<li>• HSL for color adjustments</li>
										<li>
											• Consider accessibility and
											contrast
										</li>
									</ul>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
