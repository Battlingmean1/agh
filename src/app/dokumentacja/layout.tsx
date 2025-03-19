import { Metadata } from 'next'
import React from 'react'
import Pathname from '@/components/Pathname'
import Footer from './_components/Footer'
import Menu from './_components/Menu'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="container">
			<div className="grid grid-cols-1 xl:grid-cols-7 pt-40 min-h-screen overflow-visible">
				<div className="hidden xl:flex col-span-2 flex-col gap-4">
					<Menu />
				</div>

				<div className="col-span-5 pl-4 flex flex-col">
					<Pathname />
					{children}
				</div>
			</div>
			<Footer />
		</div>
	)
}
