'use client'
import { usePathname } from 'next/navigation'
import React, { JSX } from 'react'
import { BiMath } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'
import { CiCirclePlus } from 'react-icons/ci'
import { FaInfo } from 'react-icons/fa'
import { FaArrowUpLong } from 'react-icons/fa6'
import { LuTableProperties } from 'react-icons/lu'
import { RiQuestionMark } from 'react-icons/ri'
import { TbCircleLetterI, TbCircleLetterZ, TbListNumbers, TbMathCos } from 'react-icons/tb'

export default function LessonHeader() {
	const pathname = usePathname()
	const lastSegment = pathname.split('/').filter(Boolean).pop() || ''

	const lessonNumber: Record<
		string,
		{ number: string; title: string; inThisLesson: { icon: JSX.Element; description: string }[] }
	> = {
		wprowadzenie: {
			number: '01',
			title: 'Wprowadzenie',
			inThisLesson: [
				{ icon: <TbListNumbers size={32} />, description: 'Podstawowe informacje o zbiorze liczb zespolonych.' },
				{ icon: <TbCircleLetterI size={32} />, description: 'Podstawowe informacje o liczbie urojonej.' },
			],
		},
		definicja: {
			number: '02',
			title: 'Definicja',
			inThisLesson: [
				{
					icon: <RiQuestionMark size={32} />,
					description: 'Dlaczego liczbę zespoloną można traktować jako uporządkowaną parę.',
				},
				{
					icon: <BiMath size={32} />,
					description: 'Przykłady liczb zespolonych z częścią rzeczywistą i urojoną.',
				},
			],
		},
		'sprzezenie-i-modul-liczby-zespolonej': {
			number: '03',
			title: 'Sprzężenie i moduł liczby zespolonej',
			inThisLesson: [
				{
					icon: <TbCircleLetterZ size={32} />,
					description: 'Dowiesz się co to jest liczba sprzężona.',
				},
				{
					icon: <LuTableProperties size={32} />,
					description: 'Poznasz własności liczb sprzężonych.',
				},
				{
					icon: <FaInfo size={32} />,
					description: 'Podstawowe informacje o własnościach i modułach z liczby zespolonej.',
				},
			],
		},
		'dzialania-na-liczbach-zespolonych': {
			number: '04',
			title: 'Działania na liczbach zespolonych',
			inThisLesson: [
				{
					icon: <CiCirclePlus size={32} />,
					description: 'Jak wykonujemy podstawowe operacje na liczbach zespolonych, takie jak dodawanie i odejmowanie.',
				},
				{
					icon: <FaArrowUpLong size={32} />,
					description: 'Jak upraszczamy wysokie potęgi liczby urojonej i.',
				},
			],
		},
		'geometria-liczb-zespolonych': {
			number: '05',
			title: 'Geometria liczb zespolonych',
			inThisLesson: [
				{
					icon: <BsPlusLg size={32} />,
					description: 'Jak przedstawić liczby zespolone jako punkty na na płaszczyźnie.',
				},
				{
					icon: <TbMathCos size={32} />,
					description: 'Jaka jest postać trygonometryczna liczby zespolonej.',
				},
			],
		},
	}

	const { number, title, inThisLesson } = lessonNumber[lastSegment] || { number: '00', title: 'Początek' }

	return (
		<div className="flex flex-col px-4 py-4">
			<div className="flex flex-col lg:flex-row gap-4">
				<span className="grid place-items-center text-2xl w-[75px] h-[75px] lg:text-4xl bg-[#161616] rounded-full">
					{number}
				</span>
				<div className="flex flex-col">
					<span className="text-textColor text-md mb-2">Temat {number}</span>
					<p className="uppercase text-xl font-semibold">{title}</p>
				</div>
			</div>
			<div className={`${lessonNumber[lastSegment] ? 'pt-20' : ''} pb-16 border-b border-b-[#161616] border-b-2`}>
				{lessonNumber[lastSegment] && (
					<>
						<span className="text-xl lg:text-2xl font-semibold">W tym temacie dowiesz się...</span>
						<div className="pt-10">
							<div className="flex flex-col gap-6 lg:gap-3 bg-[#090909] p-6 rounded-xl">
								{inThisLesson?.map(({ icon, description }, index) => (
									<div className="flex items-center gap-4" key={index}>
										<div>{icon}</div>
										<div>
											<p className="text-lg text-textColor">{description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}
