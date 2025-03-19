'use client'
import Menu from '@/app/dokumentacja/_components/Menu'
import Logo from '@/components/Logo'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const menuAnimation = {
		initial: { opacity: 0, y: -100 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -100 },
	}

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
			document.body.style.position = 'fixed'
			document.body.style.width = '100%'
		} else {
			document.body.style.overflow = 'unset'
			document.body.style.position = 'unset'
			document.body.style.width = 'unset'
		}
	}, [isOpen])

	return (
		<header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-[#050505] border-b-[1px] border-[#333333]">
			<nav className="relative flex items-center gap-10 container font-semibold">
				<div className="text-xl mr-auto">
					<Logo />
				</div>
				<div className="hidden xl:flex gap-6">
					<div className="cursor-pointer">
						<Link href="/">
							<p className="text-md md:text-xl">Home</p>
						</Link>
					</div>
					<div className="cursor-pointer">
						<Link href="/dokumentacja">
							<p className="text-md md:text-xl">Dokumentacja</p>
						</Link>
					</div>
				</div>
				<div className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
					<RxHamburgerMenu size={32} />
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							{...menuAnimation}
							className="fixed top-16 left-0 bg-black w-full h-full overflow-y-scroll px-8 pt-12"
						>
							<Menu setIsOpen={setIsOpen} />
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	)
}

export default Navbar
