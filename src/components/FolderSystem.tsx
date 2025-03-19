'use client'
import React, { JSX, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Animate } from '@/utils/Animate'
import Slugify from '@/utils/Slugify'
import { usePathname } from 'next/navigation'
import { FaFileAlt, FaFolderOpen } from 'react-icons/fa'

type FileType = string | { label: string; files: FileType[] }

type Props = {
	label: string
	files?: FileType[]
	parentURL?: string
	icon: JSX.Element
}

export default function FolderSystem({ files, label, parentURL = '', icon }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const currentPath = `${parentURL}/${Slugify(label).toLowerCase()}`
	const pathname = usePathname()
	const isActive = pathname === currentPath
	const shouldBeOpen = pathname.startsWith(currentPath)

	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

	useEffect(() => {
		let timeout: NodeJS.Timeout

		if (shouldBeOpen || isMobile) {
			timeout = setTimeout(() => setIsOpen(true), isMobile ? 500 : 0)
		} else {
			setIsOpen(false)
		}

		return () => clearTimeout(timeout)
	}, [shouldBeOpen, isMobile])

	const FolderAnimation = {
		initial: { opacity: 0, height: 0 },
		animate: { opacity: 1, height: 'auto' },
		exit: { opacity: 0, height: 0 },
	}

	return (
		<div className="flex flex-col w-full">
			<motion.button onClick={() => setIsOpen(isActive ? !isOpen : true)}>
				<Link
					href={currentPath}
					className="flex justify-between items-center w-full pt-1"
					style={{ color: isActive ? '#3f95eb' : '#e0e0e0', transition: 'color 0.1s ease-in-out' }}
				>
					<div className="flex items-center gap-2">
						{icon}
						<span className="text-xl">{label}</span>
					</div>
					{files?.length ? <MdKeyboardArrowRight size={24} className={isOpen ? 'rotate-90' : ''} /> : ''}
				</Link>
			</motion.button>

			<AnimatePresence>
				{isOpen && (
					<motion.div className="flex flex-col gap-1 pl-4 border-l border-gray-400" {...Animate(FolderAnimation)}>
						{files?.map((file, index) => (
							<div className="flex flex-col" key={index}>
								{typeof file === 'string' ? (
									<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
										<Link
											href={`${currentPath}/${Slugify(file)}`}
											className={`flex items-center gap-2 text-lg ${
												pathname === `${currentPath}/${Slugify(file)}` ? 'text-primary' : 'text-textColor'
											}`}
										>
											<FaFileAlt size={20} /> {file}
										</Link>
									</motion.div>
								) : (
									<div className="ml-4">
										<FolderSystem
											label={file.label}
											parentURL={currentPath}
											icon={<FaFolderOpen size={20} />}
											files={file.files}
										/>
									</div>
								)}
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
