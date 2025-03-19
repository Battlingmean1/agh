'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { GoHome } from 'react-icons/go'
import { RiArrowRightDoubleLine } from 'react-icons/ri'

export default function Pathname() {
	const pathname = usePathname()
	const path = pathname.split('/').filter(Boolean)
	return (
		<div className="flex flex-col lg:flex-row gap-2 px-4 pb-4 text-textColor text-lg">
			<Link href="/" className="flex items-center gap-2">
				<GoHome size={24} /> Home
			</Link>
			{path?.map((item, index) => {
				const decodedItem = decodeURIComponent(item)
				const text = decodedItem.charAt(0).toUpperCase() + decodedItem.slice(1)
				const href = path.slice(0, index + 1).join('/')
				const isLast = index === path.length - 1

				return (
					<div key={index} className="flex gap-1">
						<RiArrowRightDoubleLine size={28} />
						<Link key={index} href={`/${href}`} className={`${isLast ? 'text-primary' : 'text-textColor'} text-lg`}>
							{text.replaceAll('-', ' ')}
						</Link>
					</div>
				)
			})}
		</div>
	)
}
