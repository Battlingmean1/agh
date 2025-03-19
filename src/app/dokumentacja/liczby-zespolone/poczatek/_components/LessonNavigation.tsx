'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useEffect } from 'react'

const lessons = [
	{ slug: 'wprowadzenie', title: 'Wprowadzenie' },
	{ slug: 'definicja', title: 'Definicja' },
	{ slug: 'sprzezenie-i-modul-liczby-zespolonej', title: 'Sprzężenie i moduł liczby zespolonej' },
	{ slug: 'dzialania-na-liczbach-zespolonych', title: 'Działania na liczbach zespolonych' },
	{ slug: 'geometria-liczb-zespolonych', title: 'Geometria liczb zespolonych' },
]

export default function LessonNavigation() {
	const pathname: string = usePathname() || ''
	const lastSegment: string = pathname.split('/').filter(Boolean).pop() || 'poczatek'

	const currentIndex: number = lessons.findIndex(lesson => lesson.slug === lastSegment)
	const prevLesson = lessons[currentIndex - 1] || null
	const nextLesson = lessons[currentIndex + 1] || null

	const backHref: string | null = prevLesson ? `/dokumentacja/liczby-zespolone/poczatek/${prevLesson.slug}` : null
	const nextHref: string | null = nextLesson ? `/dokumentacja/liczby-zespolone/poczatek/${nextLesson.slug}` : null

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [pathname])
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full pt-20">
			{backHref && (
				<Link href={backHref} className="">
					<motion.div
						whileTap={{ scale: 0.9 }}
						whileHover={{ color: '#3f95eb' }}
						className="flex items-center gap-2 text-textColor"
					>
						<MdOutlineKeyboardArrowLeft size={32} />
						<span className="text-sm md:text-xl lg:text-2xl text-center">{prevLesson.title.toUpperCase()}</span>
					</motion.div>
				</Link>
			)}
			{nextHref && (
				<Link href={nextHref} className="">
					<motion.div
						whileTap={{ scale: 0.9 }}
						whileHover={{ color: '#3f95eb' }}
						className="flex items-center gap-2 text-textColor"
					>
						<span className="text-sm md:text-xl lg:text-2xl text-center">{nextLesson.title.toUpperCase()}</span>
						<MdOutlineKeyboardArrowRight size={32} />
					</motion.div>
				</Link>
			)}
		</div>
	)
}
