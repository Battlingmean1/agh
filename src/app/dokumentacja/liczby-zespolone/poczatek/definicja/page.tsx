import TextColorOutline from '@/components/TextColorOutline'
import { fractionsMethod } from '@/utils/formatter'
import React from 'react'

export default function page() {
	const borderColor = '#d12Afb'
	return (
		<div className="px-4 py-4">
			<div className="pb-4">
				<TextColorOutline backgroundColor={borderColor}>
					<h2 className="font-semibold text-2xl xl:text-4xl">Definicja liczb zespolonych</h2>
				</TextColorOutline>
			</div>
			<div className="">
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">Liczbę zespoloną</span> jako liczbę postaci nazywamy:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl">
						<p className="text-justify text-xl text-textColor">
							<span className="font-bold">a + bi</span>, gdzie a, b ∈ R.
						</p>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor pt-2">
					<span className="font-bold">a</span> - część rzeczywista liczby zespolonej, <br />
					<span className="font-bold">b</span> - część urojona liczby zespolonej, <br />
					<span className="font-bold">i</span> - jednostka urojona
				</p>
				<p className="text-justify text-xl text-textColor pt-2">
					Liczbę zespoloną <span className="font-bold">a + bi</span> można interpretować jako uporządkowaną parę{' '}
					<span className="font-bold">(a, b)</span>.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Przykład 1.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					Przykładami liczb zespolonych posiadających zarówno część rzeczywistą, jak i urojoną są:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">6 + 2i</p>
						<p className="text-xl">9 - 5i</p>
						<p className="text-xl">&#8730;7 - {fractionsMethod(3, 4)}i</p>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					Przykładami liczb zespolonych składających się wyłącznie z części rzeczywistej są:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">8</p>
						<p className="text-xl">2&#8730;2 + 4</p>
						<p className="text-xl">2π + 7</p>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					Przykładami liczb zespolonych zawierających jedynie część urojoną są:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">4i</p>
						<p className="text-xl">{fractionsMethod(7, 9)}i</p>
						<p className="text-xl">(&#8730;3 - 4)i</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Przykład 2.</h2>
					</TextColorOutline>
				</div>
				<div>
					<p className="text-justify text-xl text-textColor">
						a. Liczba zespolona, której część rzeczywista wynosi 2, a część urojona 3, to liczba:
					</p>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">2 + 3i</p>
						</div>
					</div>
					<p className="text-justify text-xl text-textColor">
						b. Liczba zespolona, której część rzeczywista wynosi 5, a część urojona 0, to liczba:
					</p>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">5</p>
						</div>
					</div>
					<p className="text-justify text-xl text-textColor">
						c. Liczba zespolona, której część rzeczywista wynosi 0, a część urojona -2, to liczba:
					</p>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">-2i</p>
						</div>
					</div>
					<p className="text-justify text-xl text-textColor">
						Część urojona liczby zespolonej to liczba stojąca przy i (bez i). Liczby zespolone zazwyczaj oznaczamy
						symbolem z. Na przykład, możemy zapisać: z = 2 + 3i. To tylko umowne oznaczenie, podobnie jak liczby
						naturalne często zapisujemy literą n.
					</p>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Przykład 3.</h2>
					</TextColorOutline>
				</div>
				<div className="pb-4">
					<p className="text-justify text-xl text-textColor">
						Część rzeczywistą liczby zespolonej z zapisujemy jako Re (z) (z ang. Real), natomiast część urojoną jako
						Im(z) (z ang. Imaginary).
					</p>
				</div>
				<p className="text-justify text-xl text-textColor">
					Zamiast pisać: &#34;Część rzeczywista liczby zespolonej 2 + 3i jest równa 3&#34; oraz &#34;Część urojona
					liczby zespolonej 2 + 3i jest równa 3&#34;, zapiszemy krótko:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">Re(2 + 3i) = 2</p>
						<p className="text-xl">Im(2 + 3i) = 3</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">Re(-6 - 2&#8730;3) = -6 - 2&#8730;3</p>
						<p className="text-xl">Im(-6 - 2&#8730;3) = 0</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">Re(7i) = 0</p>
						<p className="text-xl">Im(7i) = -7</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">Re(3 + (&#8730;2 - 9)i) = 3</p>
						<p className="text-xl">Im(3 + (&#8730;2 - 9)i) = &#8730;2 - 9</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Przykład 4.</h2>
					</TextColorOutline>
				</div>
				<div>
					<p className="text-justify text-xl text-textColor">
						1. Para (<span className="font-bold">1</span>, <span className="font-bold">9</span>) reprezentuje liczbę
						zespoloną z = <span className="font-bold">1 + 9i</span>.
					</p>
					<p className="text-justify text-xl text-textColor">
						2. Para (<span className="font-bold">-3</span>, <span className="font-bold">-1</span>) reprezentuje liczbę
						zespoloną z = <span className="font-bold">-3 - i</span>.
					</p>
					<p className="text-justify text-xl text-textColor">
						3. Para (<span className="font-bold">0</span>, <span className="font-bold">-6</span>) reprezentuje liczbę
						zespoloną z = <span className="font-bold">-6i</span>.
					</p>
					<p className="text-justify text-xl text-textColor">
						4. Para (<span className="font-bold">2</span>, <span className="font-bold">0</span>) reprezentuje liczbę
						zespoloną z = <span className="font-bold">2</span>.
					</p>
				</div>
			</div>
		</div>
	)
}
