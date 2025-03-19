import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
	src: string
	copyrightLink: string
}

export default function ImageCard({ src, copyrightLink }: Props) {
	return (
		<div className="">
			<div className="overflow-hidden">
				<Image src={src} alt="photo" width={450} height={450} className="w-full h-full object-cover" />
			</div>
			<div className="w-full mt-1">
				<Link href={copyrightLink} className="flex justify-end items-end text-textColor w-full">
					Źródło
				</Link>
			</div>
		</div>
	)
}
