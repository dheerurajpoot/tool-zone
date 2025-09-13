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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Key, Copy, Check, RefreshCw, Shield } from "lucide-react";

export default function PasswordGeneratorClientPage() {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState([12]);
	const [includeUppercase, setIncludeUppercase] = useState(true);
	const [includeLowercase, setIncludeLowercase] = useState(true);
	const [includeNumbers, setIncludeNumbers] = useState(true);
	const [includeSymbols, setIncludeSymbols] = useState(true);
	const [excludeSimilar, setExcludeSimilar] = useState(false);
	const [copied, setCopied] = useState(false);

	const generatePassword = () => {
		let charset = "";
		let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let lowercase = "abcdefghijklmnopqrstuvwxyz";
		let numbers = "0123456789";
		let symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

		// Exclude similar characters if option is selected
		if (excludeSimilar) {
			uppercase = uppercase.replace(/[O]/g, "");
			lowercase = lowercase.replace(/[ol]/g, "");
			numbers = numbers.replace(/[01]/g, "");
			symbols = symbols.replace(/[|]/g, "");
		}

		if (includeUppercase) charset += uppercase;
		if (includeLowercase) charset += lowercase;
		if (includeNumbers) charset += numbers;
		if (includeSymbols) charset += symbols;

		if (charset === "") {
			alert("Please select at least one character type");
			return;
		}

		let generatedPassword = "";
		for (let i = 0; i < length[0]; i++) {
			generatedPassword += charset.charAt(
				Math.floor(Math.random() * charset.length)
			);
		}

		setPassword(generatedPassword);
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(password);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			alert("Failed to copy to clipboard");
		}
	};

	const getPasswordStrength = (pwd: string) => {
		let score = 0;
		if (pwd.length >= 8) score++;
		if (pwd.length >= 12) score++;
		if (/[a-z]/.test(pwd)) score++;
		if (/[A-Z]/.test(pwd)) score++;
		if (/[0-9]/.test(pwd)) score++;
		if (/[^A-Za-z0-9]/.test(pwd)) score++;

		if (score < 3)
			return {
				strength: "Weak",
				color: "text-red-500",
				bgColor: "bg-red-100",
			};
		if (score < 5)
			return {
				strength: "Medium",
				color: "text-yellow-500",
				bgColor: "bg-yellow-100",
			};
		return {
			strength: "Strong",
			color: "text-green-500",
			bgColor: "bg-green-100",
		};
	};

	const strengthInfo = password ? getPasswordStrength(password) : null;

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
							<Key className='w-8 h-8 text-primary' />
						</div>
						<h1 className='text-3xl font-serif font-bold text-foreground mb-2'>
							Password Generator
						</h1>
						<p className='text-muted-foreground text-pretty leading-relaxed'>
							Generate secure passwords with customizable options
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Key className='w-5 h-5' />
									Password Options
								</CardTitle>
								<CardDescription>
									Customize your password settings
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-6'>
								<div>
									<Label htmlFor='length'>
										Password Length: {length[0]}
									</Label>
									<Slider
										id='length'
										min={4}
										max={50}
										step={1}
										value={length}
										onValueChange={setLength}
										className='mt-2'
									/>
									<div className='flex justify-between text-xs text-muted-foreground mt-1'>
										<span>4</span>
										<span>50</span>
									</div>
								</div>

								<div className='space-y-4'>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='uppercase'
											checked={includeUppercase}
											onCheckedChange={(checked) =>
												setIncludeUppercase(
													checked === "indeterminate"
														? true
														: checked
												)
											}
										/>
										<Label htmlFor='uppercase'>
											Include Uppercase Letters (A-Z)
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='lowercase'
											checked={includeLowercase}
											onCheckedChange={(checked) =>
												setIncludeLowercase(
													checked === "indeterminate"
														? true
														: checked
												)
											}
										/>
										<Label htmlFor='lowercase'>
											Include Lowercase Letters (a-z)
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='numbers'
											checked={includeNumbers}
											onCheckedChange={(checked) =>
												setIncludeNumbers(
													checked === "indeterminate"
														? true
														: checked
												)
											}
										/>
										<Label htmlFor='numbers'>
											Include Numbers (0-9)
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='symbols'
											checked={includeSymbols}
											onCheckedChange={(checked) =>
												setIncludeSymbols(
													checked === "indeterminate"
														? true
														: checked
												)
											}
										/>
										<Label htmlFor='symbols'>
											Include Symbols (!@#$%^&*)
										</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<Checkbox
											id='exclude'
											checked={excludeSimilar}
											onCheckedChange={(checked) =>
												setExcludeSimilar(
													checked === "indeterminate"
														? true
														: checked
												)
											}
										/>
										<Label htmlFor='exclude'>
											Exclude Similar Characters (0, O, l,
											1, |)
										</Label>
									</div>
								</div>

								<Button
									onClick={generatePassword}
									className='w-full'>
									<RefreshCw className='w-4 h-4 mr-2' />
									Generate Password
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Shield className='w-5 h-5' />
									Generated Password
								</CardTitle>
								<CardDescription>
									Your secure password
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								{password ? (
									<>
										<div className='relative'>
											<Input
												value={password}
												readOnly
												className='font-mono text-lg pr-12 bg-muted/50'
												style={{ fontSize: "16px" }}
											/>
											<Button
												onClick={copyToClipboard}
												size='sm'
												variant='outline'
												className='absolute right-2 top-1/2 transform -translate-y-1/2 h-8 bg-transparent'>
												{copied ? (
													<Check className='w-4 h-4' />
												) : (
													<Copy className='w-4 h-4' />
												)}
											</Button>
										</div>

										{strengthInfo && (
											<div className='flex items-center justify-between p-3 rounded-lg bg-muted/50'>
												<span className='text-sm font-medium'>
													Password Strength:
												</span>
												<Badge
													className={`${strengthInfo.color} ${strengthInfo.bgColor}`}>
													{strengthInfo.strength}
												</Badge>
											</div>
										)}

										<div className='space-y-2'>
											<div className='flex justify-between text-sm'>
												<span>Length:</span>
												<Badge variant='outline'>
													{password.length} characters
												</Badge>
											</div>
											<div className='flex justify-between text-sm'>
												<span>Entropy:</span>
												<Badge variant='outline'>
													~
													{Math.floor(
														password.length * 3.3
													)}{" "}
													bits
												</Badge>
											</div>
										</div>
									</>
								) : (
									<div className='text-center py-8 text-muted-foreground'>
										<Key className='w-12 h-12 mx-auto mb-4 opacity-50' />
										<p>
											Click &quot;Generate Password&quot;
											to create a secure password
										</p>
									</div>
								)}
							</CardContent>
						</Card>
					</div>

					<Card className='mt-6'>
						<CardHeader>
							<CardTitle>Password Security Tips</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										Strong Password Guidelines
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>• Use at least 12 characters</li>
										<li>
											• Include uppercase and lowercase
											letters
										</li>
										<li>
											• Add numbers and special characters
										</li>
										<li>
											• Avoid dictionary words and
											personal info
										</li>
										<li>
											• Use unique passwords for each
											account
										</li>
									</ul>
								</div>
								<div>
									<h4 className='font-semibold text-foreground mb-2'>
										Best Practices
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>• Use a password manager</li>
										<li>
											• Enable two-factor authentication
										</li>
										<li>• Change passwords regularly</li>
										<li>• Never share passwords</li>
										<li>
											• Check for data breaches regularly
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
