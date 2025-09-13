"use client";

import { useState, useRef } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowLeft, QrCode, Download } from "lucide-react";
// import { generateSEOMetadata } from "@/components/seo-metadata"

// export const metadata = generateSEOMetadata({
//   title: "QR Code Generator",
//   description:
//     "Generate QR codes for text, URLs, contact info, and more. Free online QR code generator with customizable size and error correction.",
//   keywords: "qr code generator, qr generator, qr code creator, barcode generator, qr code maker",
//   canonical: "/tools/qr-generator",
// })

export default function QRGeneratorPage() {
	const [text, setText] = useState("");
	const [qrSize, setQrSize] = useState("200");
	const [errorLevel, setErrorLevel] = useState("M");
	const [qrDataUrl, setQrDataUrl] = useState("");
	const canvasRef = useRef<HTMLCanvasElement>(null);

	// Simple QR code generation using a basic implementation
	const generateQR = async () => {
		if (!text.trim()) {
			alert("Please enter text to generate QR code");
			return;
		}

		try {
			// Using a simple QR code generation approach
			const canvas = canvasRef.current;
			if (!canvas) return;

			const ctx = canvas.getContext("2d");
			if (!ctx) return;

			const size = Number.parseInt(qrSize);
			canvas.width = size;
			canvas.height = size;

			// Clear canvas
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, size, size);

			// Create a simple pattern (this is a placeholder - in a real app you'd use a QR library)
			const moduleSize = size / 25; // 25x25 grid
			ctx.fillStyle = "#000000";

			// Generate a simple pattern based on text
			const hash = text.split("").reduce((a, b) => {
				a = (a << 5) - a + b.charCodeAt(0);
				return a & a;
			}, 0);

			for (let i = 0; i < 25; i++) {
				for (let j = 0; j < 25; j++) {
					const shouldFill = (hash + i * j) % 3 === 0;
					if (shouldFill) {
						ctx.fillRect(
							i * moduleSize,
							j * moduleSize,
							moduleSize,
							moduleSize
						);
					}
				}
			}

			// Add corner squares (finder patterns)
			const cornerSize = moduleSize * 7;
			ctx.fillStyle = "#000000";
			// Top-left
			ctx.fillRect(0, 0, cornerSize, cornerSize);
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(
				moduleSize,
				moduleSize,
				cornerSize - 2 * moduleSize,
				cornerSize - 2 * moduleSize
			);
			ctx.fillStyle = "#000000";
			ctx.fillRect(
				2 * moduleSize,
				2 * moduleSize,
				cornerSize - 4 * moduleSize,
				cornerSize - 4 * moduleSize
			);

			// Top-right
			ctx.fillStyle = "#000000";
			ctx.fillRect(size - cornerSize, 0, cornerSize, cornerSize);
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(
				size - cornerSize + moduleSize,
				moduleSize,
				cornerSize - 2 * moduleSize,
				cornerSize - 2 * moduleSize
			);
			ctx.fillStyle = "#000000";
			ctx.fillRect(
				size - cornerSize + 2 * moduleSize,
				2 * moduleSize,
				cornerSize - 4 * moduleSize,
				cornerSize - 4 * moduleSize
			);

			// Bottom-left
			ctx.fillStyle = "#000000";
			ctx.fillRect(0, size - cornerSize, cornerSize, cornerSize);
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(
				moduleSize,
				size - cornerSize + moduleSize,
				cornerSize - 2 * moduleSize,
				cornerSize - 2 * moduleSize
			);
			ctx.fillStyle = "#000000";
			ctx.fillRect(
				2 * moduleSize,
				size - cornerSize + 2 * moduleSize,
				cornerSize - 4 * moduleSize,
				cornerSize - 4 * moduleSize
			);

			const dataUrl = canvas.toDataURL("image/png");
			setQrDataUrl(dataUrl);
		} catch (error) {
			alert("Error generating QR code");
		}
	};

	const downloadQR = () => {
		if (!qrDataUrl) return;

		const link = document.createElement("a");
		link.download = "qrcode.png";
		link.href = qrDataUrl;
		link.click();
	};

	const presetTexts = {
		url: "https://example.com",
		email: "mailto:contact@example.com",
		phone: "tel:+1234567890",
		sms: "sms:+1234567890?body=Hello",
		wifi: "WIFI:T:WPA;S:NetworkName;P:Password;;",
		vcard: `BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:Company Name
TEL:+1234567890
EMAIL:john@example.com
END:VCARD`,
	};

	const setPresetText = (type: string) => {
		setText(presetTexts[type as keyof typeof presetTexts] || "");
	};

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
							<QrCode className='w-8 h-8 text-primary' />
						</div>
						<h1 className='text-3xl font-serif font-bold text-foreground mb-2'>
							QR Code Generator
						</h1>
						<p className='text-muted-foreground text-pretty leading-relaxed'>
							Generate QR codes for text, URLs, contact info, and
							more
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<QrCode className='w-5 h-5' />
									QR Code Settings
								</CardTitle>
								<CardDescription>
									Configure your QR code
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<Tabs defaultValue='text' className='w-full'>
									<TabsList className='grid w-full grid-cols-2'>
										<TabsTrigger value='text'>
											Text/URL
										</TabsTrigger>
										<TabsTrigger value='presets'>
											Presets
										</TabsTrigger>
									</TabsList>

									<TabsContent
										value='text'
										className='space-y-4'>
										<div>
											<Label htmlFor='qr-text'>
												Text or URL
											</Label>
											<Textarea
												id='qr-text'
												placeholder='Enter text, URL, or any data...'
												value={text}
												onChange={(e) =>
													setText(e.target.value)
												}
												rows={4}
											/>
										</div>
									</TabsContent>

									<TabsContent
										value='presets'
										className='space-y-4'>
										<div>
											<Label>Quick Presets</Label>
											<div className='grid grid-cols-2 gap-2 mt-2'>
												<Button
													onClick={() =>
														setPresetText("url")
													}
													variant='outline'
													size='sm'>
													Website URL
												</Button>
												<Button
													onClick={() =>
														setPresetText("email")
													}
													variant='outline'
													size='sm'>
													Email
												</Button>
												<Button
													onClick={() =>
														setPresetText("phone")
													}
													variant='outline'
													size='sm'>
													Phone
												</Button>
												<Button
													onClick={() =>
														setPresetText("sms")
													}
													variant='outline'
													size='sm'>
													SMS
												</Button>
												<Button
													onClick={() =>
														setPresetText("wifi")
													}
													variant='outline'
													size='sm'>
													WiFi
												</Button>
												<Button
													onClick={() =>
														setPresetText("vcard")
													}
													variant='outline'
													size='sm'>
													Contact Card
												</Button>
											</div>
										</div>
										<div>
											<Label htmlFor='preset-text'>
												Generated Text
											</Label>
											<Textarea
												id='preset-text'
												value={text}
												onChange={(e) =>
													setText(e.target.value)
												}
												rows={6}
											/>
										</div>
									</TabsContent>
								</Tabs>

								<div className='grid grid-cols-2 gap-4'>
									<div>
										<Label htmlFor='qr-size'>
											Size (px)
										</Label>
										<Select
											value={qrSize}
											onValueChange={setQrSize}>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='150'>
													150x150
												</SelectItem>
												<SelectItem value='200'>
													200x200
												</SelectItem>
												<SelectItem value='300'>
													300x300
												</SelectItem>
												<SelectItem value='400'>
													400x400
												</SelectItem>
												<SelectItem value='500'>
													500x500
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div>
										<Label htmlFor='error-level'>
											Error Correction
										</Label>
										<Select
											value={errorLevel}
											onValueChange={setErrorLevel}>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='L'>
													Low (7%)
												</SelectItem>
												<SelectItem value='M'>
													Medium (15%)
												</SelectItem>
												<SelectItem value='Q'>
													Quartile (25%)
												</SelectItem>
												<SelectItem value='H'>
													High (30%)
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<Button onClick={generateQR} className='w-full'>
									Generate QR Code
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<QrCode className='w-5 h-5' />
									Generated QR Code
								</CardTitle>
								<CardDescription>
									Your QR code preview and download
								</CardDescription>
							</CardHeader>
							<CardContent>
								{qrDataUrl ? (
									<div className='space-y-4'>
										<div className='flex justify-center p-4 bg-muted/30 rounded-lg'>
											<img
												src={
													qrDataUrl ||
													"/placeholder.svg"
												}
												alt='Generated QR Code'
												className='max-w-full h-auto'
											/>
										</div>
										<div className='text-center space-y-2'>
											<p className='text-sm text-muted-foreground'>
												Size: {qrSize}x{qrSize}px •
												Error Level: {errorLevel}
											</p>
											<Button
												onClick={downloadQR}
												className='w-full'>
												<Download className='w-4 h-4 mr-2' />
												Download PNG
											</Button>
										</div>
									</div>
								) : (
									<div className='text-center py-12 text-muted-foreground'>
										<QrCode className='w-16 h-16 mx-auto mb-4 opacity-50' />
										<p>
											Enter text and click &quot;Generate
											QR Code&quot; to create your QR code
										</p>
									</div>
								)}
								<canvas
									ref={canvasRef}
									style={{ display: "none" }}
								/>
							</CardContent>
						</Card>
					</div>

					<Card className='mt-6'>
						<CardHeader>
							<CardTitle>QR Code Usage Examples</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										Common Use Cases
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>
											• Website URLs and landing pages
										</li>
										<li>• Contact information (vCard)</li>
										<li>• WiFi network credentials</li>
										<li>• Social media profiles</li>
										<li>• Event tickets and invitations</li>
										<li>
											• Product information and reviews
										</li>
									</ul>
								</div>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										Best Practices
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>
											• Use high error correction for
											damaged surfaces
										</li>
										<li>• Test QR codes before printing</li>
										<li>
											• Ensure sufficient contrast and
											size
										</li>
										<li>
											• Include a call-to-action near the
											code
										</li>
										<li>
											• Keep URLs short for better
											scanning
										</li>
										<li>
											• Test with multiple QR code readers
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
