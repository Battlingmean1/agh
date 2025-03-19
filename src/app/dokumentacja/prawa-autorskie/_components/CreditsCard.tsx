'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
	title: string
	href: string
	description: string
	creditsText: string
}

export default function CreditsCard({ title, href, description, creditsText }: Props) {
	return (
		<motion.div
			whileHover={{ scale: 1.03, backgroundColor: '#121212' }}
			className="min-h-full border-[#707070] border rounded-lg px-6 py-5"
		>
			<Link href={href} className="flex flex-col gap-2">
				<div className="flex justify-between">
					<span className="font-semibold text-xl text-primary uppercase">{title}</span>
					<span className="text-textColor">{creditsText}</span>
				</div>
				<p className="text-textColor">{description}</p>
			</Link>
		</motion.div>
	)
}
