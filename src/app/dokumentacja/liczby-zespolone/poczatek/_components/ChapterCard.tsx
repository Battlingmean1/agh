'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
	title: string
	lesson: number
	description: string
	href: string
}

export default function lessonCard({ title, lesson, description, href }: Props) {
	return (
		<Link href={href}>
			<motion.div
				className="relative flex flex-col items-center min-h-full text-start p-6 rounded-2xl overflow-hidden border border-[#e0e0e0]"
				whileHover={{ scale: 1.03, backgroundColor: '#121212' }}
			>
				<div className="flex w-full gap-4">
					<div className="grid place-items-center bg-[#0d3980] rounded-full w-[50px] h-[50px] flex-shrink-0">
						<span className="text-lg">{lesson < 10 ? `0${lesson}` : lesson}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-textColor mb-2 text-md">Temat {lesson}</span>
						<span className="font-semibold text-xl mb-2">{title.toUpperCase()}</span>
						<p className="max-w-screen-sm text-justify text-lg text-textColor">{description}</p>
					</div>
				</div>
			</motion.div>
		</Link>
	)
}
