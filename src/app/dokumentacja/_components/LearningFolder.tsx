'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { JSX } from 'react'

type Props = {
	label: string
	icon: JSX.Element
	description: string
	href: string
}

export default function LearningFolder({ label, icon, description, href }: Props) {
	return (
		<Link href={href}>
			<motion.div
				className="relative flex flex-col items-center min-h-full text-start p-6 rounded-2xl overflow-hidden border border-[#e0e0e0]"
				whileHover={{ scale: 1.03, backgroundColor: '#121212' }}
			>
				<div className="flex w-full gap-4">
					<div>{icon}</div>
					<div className="flex flex-col">
						<span className="font-semibold text-xl mb-2">{label.toUpperCase()}</span>
						<p className="max-w-screen-sm text-justify text-lg text-textColor">{description}</p>
					</div>
				</div>
			</motion.div>
		</Link>
	)
}
