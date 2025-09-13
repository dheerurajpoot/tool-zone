"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowLeft, Code, Copy, Check } from "lucide-react";

export default function Base64ConverterClientPage() {
	const [encodeInput, setEncodeInput] = useState("");
	const [encodeOutput, setEncodeOutput] = useState("");
	const [decodeInput, setDecodeInput] = useState("");
	const [decodeOutput, setDecodeOutput] = useState("");
	const [copied, setCopied] = useState<string | null>(null);

	const encodeToBase64 = () => {
		if (!encodeInput.trim()) {
			alert("Please enter text to encode");
			return;
		}

		try {
			const encoded = btoa(unescape(encodeURIComponent(encodeInput)));
			setEncodeOutput(encoded);
		} catch (error) {
			alert("Error encoding text. Please check your input.");
		}
	};

	const decodeFromBase64 = () => {
		if (!decodeInput.trim()) {
			alert("Please enter Base64 text to decode");
			return;
		}

		try {
			const decoded = decodeURIComponent(escape(atob(decodeInput)));
			setDecodeOutput(decoded);
		} catch (error) {
			alert("Invalid Base64 input. Please check your input.");
		}
	};

	const copyToClipboard = async (text: string, type: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(type);
			setTimeout(() => setCopied(null), 2000);
		} catch (error) {
			alert("Failed to copy to clipboard");
		}
	};

	const clearAll = () => {
		setEncodeInput("");
		setEncodeOutput("");
		setDecodeInput("");
		setDecodeOutput("");
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
							<Code className='w-8 h-8 text-primary' />
						</div>
						<h1 className='text-3xl font-serif font-bold text-foreground mb-2'>
							Base64 Encoder/Decoder
						</h1>
						<p className='text-muted-foreground text-pretty leading-relaxed'>
							Encode and decode Base64 strings with ease and
							accuracy
						</p>
					</div>

					<Tabs defaultValue='encode' className='w-full'>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger value='encode'>
								Encode to Base64
							</TabsTrigger>
							<TabsTrigger value='decode'>
								Decode from Base64
							</TabsTrigger>
						</TabsList>

						<TabsContent value='encode'>
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Code className='w-5 h-5' />
										Encode Text to Base64
									</CardTitle>
									<CardDescription>
										Convert plain text to Base64 encoded
										string
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div>
										<Label htmlFor='encode-input'>
											Plain Text Input
										</Label>
										<Textarea
											id='encode-input'
											placeholder='Enter text to encode...'
											value={encodeInput}
											onChange={(e) =>
												setEncodeInput(e.target.value)
											}
											rows={6}
										/>
										<div className='flex justify-between items-center mt-2'>
											<Badge
												variant='outline'
												className='text-xs'>
												Characters: {encodeInput.length}
											</Badge>
											<Button
												onClick={encodeToBase64}
												size='sm'>
												Encode
											</Button>
										</div>
									</div>

									{encodeOutput && (
										<div>
											<div className='flex items-center justify-between mb-2'>
												<Label htmlFor='encode-output'>
													Base64 Output
												</Label>
												<Button
													onClick={() =>
														copyToClipboard(
															encodeOutput,
															"encode"
														)
													}
													size='sm'
													variant='outline'
													className='h-8'>
													{copied === "encode" ? (
														<Check className='w-4 h-4' />
													) : (
														<Copy className='w-4 h-4' />
													)}
												</Button>
											</div>
											<Textarea
												id='encode-output'
												value={encodeOutput}
												readOnly
												rows={6}
												className='bg-muted/50'
											/>
											<Badge
												variant='secondary'
												className='text-xs mt-2'>
												Base64 Length:{" "}
												{encodeOutput.length}
											</Badge>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>

						<TabsContent value='decode'>
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Code className='w-5 h-5' />
										Decode Base64 to Text
									</CardTitle>
									<CardDescription>
										Convert Base64 encoded string back to
										plain text
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-4'>
									<div>
										<Label htmlFor='decode-input'>
											Base64 Input
										</Label>
										<Textarea
											id='decode-input'
											placeholder='Enter Base64 string to decode...'
											value={decodeInput}
											onChange={(e) =>
												setDecodeInput(e.target.value)
											}
											rows={6}
										/>
										<div className='flex justify-between items-center mt-2'>
											<Badge
												variant='outline'
												className='text-xs'>
												Characters: {decodeInput.length}
											</Badge>
											<Button
												onClick={decodeFromBase64}
												size='sm'>
												Decode
											</Button>
										</div>
									</div>

									{decodeOutput && (
										<div>
											<div className='flex items-center justify-between mb-2'>
												<Label htmlFor='decode-output'>
													Plain Text Output
												</Label>
												<Button
													onClick={() =>
														copyToClipboard(
															decodeOutput,
															"decode"
														)
													}
													size='sm'
													variant='outline'
													className='h-8'>
													{copied === "decode" ? (
														<Check className='w-4 h-4' />
													) : (
														<Copy className='w-4 h-4' />
													)}
												</Button>
											</div>
											<Textarea
												id='decode-output'
												value={decodeOutput}
												readOnly
												rows={6}
												className='bg-muted/50'
											/>
											<Badge
												variant='secondary'
												className='text-xs mt-2'>
												Text Length:{" "}
												{decodeOutput.length}
											</Badge>
										</div>
									)}
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>

					<div className='flex justify-center mt-6'>
						<Button onClick={clearAll} variant='outline'>
							Clear All
						</Button>
					</div>

					<Card className='mt-6'>
						<CardHeader>
							<CardTitle>About Base64 Encoding</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										What is Base64?
									</h4>
									<p className='text-sm text-muted-foreground text-pretty leading-relaxed'>
										Base64 is a binary-to-text encoding
										scheme that represents binary data in an
										ASCII string format. It&apos;s commonly
										used for encoding data in email, web
										applications, and data storage.
									</p>
								</div>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										Common Use Cases
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>• Email attachments</li>
										<li>• Data URLs in web development</li>
										<li>• API authentication tokens</li>
										<li>
											• Storing binary data in text format
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
