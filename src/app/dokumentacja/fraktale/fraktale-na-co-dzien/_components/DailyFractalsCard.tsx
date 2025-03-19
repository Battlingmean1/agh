import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = { title: string; description: string; href: string }

export default function DailyFractalsCard({ title, description, href }: Props) {
	return (
		<Link href={href} className="">
			<motion.div
				whileHover={{ scale: 1.03, backgroundColor: '#121212' }}
				className="relative flex flex-col gap-2 px-6 py-5 min-h-full border-[#707070] border rounded-lg"
			>
				<span className="font-semibold text-2xl text-primary">{title.toUpperCase()}</span>
				<p className="text-textColor text-justify">{description}</p>
			</motion.div>
		</Link>
	)
}
