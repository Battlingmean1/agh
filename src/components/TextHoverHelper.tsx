'use client'
import { AnimatePresence, motion } from 'framer-motion'

import React, { useState } from 'react'

type Props = {
	title: string
	description: string
}

export default function TextHoverHelper({ title, description }: Props) {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<motion.div onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
			<span className="text-primary cursor-pointer">{title}</span>
			<AnimatePresence>
				{isHovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="absolute text-sm text-justify text-black bg-[#e0e0e0] px-2 py-1 rounded-md max-w-md"
					>
						{description}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
