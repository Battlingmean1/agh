import type { Metadata } from 'next'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from './(main)/_components/Navbar'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const outfit = Outfit({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'W Krainie Fraktali i Liczb Zespolonych',
	description: 'Strona konkursowa o matematyce.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${outfit.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
