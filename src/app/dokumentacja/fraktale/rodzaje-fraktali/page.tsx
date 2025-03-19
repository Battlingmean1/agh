'use client'
import { FractalsTitles } from '@/data/fractals'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function page() {
	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Rodzaje Fraktali</h2>
				</div>
				<p className="text-justify text-xl text-textColor">
					W świecie matematyki istnieje wiele fraktali, od prostszych, takich jak trójkąt i dywan Sierpińskiego, po
					bardziej skomplikowane, wymagające znajomości liczb zespolonych, jak zbiory Julii i Mandelbrota. Każdy z nich
					ma unikalne właściwości i sposób tworzenia. Poznasz ich definicje, dowiesz się, jakie zasady nimi rządzą oraz
					jakie techniki wykorzystuje się do ich konstruowania. Dodatkowo odkryjesz sylwetki matematyków, którzy
					przyczynili się do ich odkrycia i badań, a także zobaczysz, jak fraktale powstają w praktyce.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-8">
					<h2 className="font-semibold text-4xl">Przykłady</h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
					{FractalsTitles.map(({ title, description, href }, index) => (
						<motion.div whileHover={{ scale: 1.03, backgroundColor: '#121212' }} key={index} className="min-h-full">
							<Link
								href={`/dokumentacja/fraktale/rodzaje-fraktali/${href}`}
								className="flex flex-col gap-2 border-[#707070] border rounded-lg px-6 py-5"
							>
								<span className="font-semibold text-xl text-primary uppercase">{title}</span>
								<p className="text-textColor">{description}</p>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
