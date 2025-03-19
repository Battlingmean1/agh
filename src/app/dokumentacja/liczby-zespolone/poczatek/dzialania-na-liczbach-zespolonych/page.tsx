import TextColorOutline from '@/components/TextColorOutline'
import { supMethod } from '@/utils/formatter'
import React from 'react'

export default function page() {
	const borderColor = '#0acfa1'
	return (
		<div className="px-4 py-4">
			<div className="pb-4">
				<TextColorOutline backgroundColor={borderColor}>
					<h2 className="font-semibold text-2xl xl:text-4xl">Działania na liczbach zespolonych</h2>
				</TextColorOutline>
			</div>
			<p className="text-justify text-xl text-textColor">
				Działania na liczbach zespolonych przeprowadzamy w sposób zbliżony do operacji na wyrażeniach algebraicznych.
			</p>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Przykład 1.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">Dodajemy liczby zespolone 5 + 2i oraz 3 + 13i.</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl text-center">
							5 + 2i + 3 + 13i = <br /> = 5 + 3 + 2i + 13i = <br />= 8 + 15i
						</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Przykład 2.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">Upraszczamy wyrażenie 16 - 4i - 9 - i.</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl text-center">
							16 - 4i - 9 - i = <br />
							= 16 - 9 - 4i - i = <br />= 7 - 5i <br />
						</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Przykład 3.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					W działaniach na liczbach zespolonych często wykorzystujemy fakt:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl text-center">i{supMethod(2)} = -1</p>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					Wykonujemy mnożenie liczb zespolonych (5 + 2i) * (3 - 7i).
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl text-center">
							5 * 3 - 5 * 7i + 2i * 3 - 2i * 7i = <br />
							= 15 - 35i + 6i - 14i 2 = <br />
							= 15 - 29i - 14 * (-1) = <br />
							= 15 - 29i + 14 = <br />= 29 - 29i
						</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Przykład 4.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">Przykłady upraszczania wysokich potęg liczby urojonej i:</p>
				<div className="pt-2">
					<p className="text-justify text-xl text-textColor">
						1. i{supMethod(3)} = i{supMethod(2)} * i = -1 * i = -i
					</p>
					<p className="text-justify text-xl text-textColor">
						2. i{supMethod(4)} = (i{supMethod(2)}){supMethod(2)} = (-1){supMethod(2)} = 1
					</p>
					<p className="text-justify text-xl text-textColor">
						3. i{supMethod(14)} = (i{supMethod(2)}){supMethod(7)} = (-1){supMethod(7)} = -1
					</p>
					<p className="text-justify text-xl text-textColor">
						4. i{supMethod(21)} = (i{supMethod(2)}){supMethod(10)} * i{supMethod(1)} = (-1){supMethod(10)} * i = 1 * i =
						i
					</p>
					<p className="text-justify text-xl text-textColor">
						5. i{supMethod(100)} = (i{supMethod(4)}){supMethod(25)} = (1){supMethod(25)} = 1
					</p>
				</div>
			</div>
		</div>
	)
}
