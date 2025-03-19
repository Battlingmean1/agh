import TextColorOutline from '@/components/TextColorOutline'
import React from 'react'
import ImageCard from './_components/ImageCard'
import { fractionsMethod, supMethod } from '@/utils/formatter'

export default function page() {
	const borderColor = '#0923b8'
	return (
		<div className="px-4 py-4">
			<div className="pb-4">
				<TextColorOutline backgroundColor={borderColor}>
					<h2 className="font-semibold text-2xl xl:text-4xl">Geometria liczb zespolonych</h2>
				</TextColorOutline>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Przykład 1.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					Liczby zespolone można przedstawiać jako punkty na płaszczyźnie, gdzie oś x odpowiada części rzeczywistej, a
					oś y części urojonej.
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<ImageCard
						src="/complexNumbers/geometry/plaszczyzna_zespolona1.png"
						copyrightLink="https://www.matemaks.pl/interpretacja-geometryczna-liczby-zespolonej.html"
					/>
				</div>
				<p className="text-justify text-xl text-textColor">
					Poniżej przedstawiono przykłady kilku liczb zespolonych zaznaczonych w układzie współrzędnych:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<ImageCard
						src="/complexNumbers/geometry/plaszczyzna_zespolona2.png"
						copyrightLink="https://www.matemaks.pl/interpretacja-geometryczna-liczby-zespolonej.html"
					/>
				</div>
				<p className="text-justify text-xl text-textColor">
					Teraz wyznaczymy dowolny punkt na płaszczyźnie zespolonej i przeanalizujemy jego podstawowe własności.
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<ImageCard
						src="/complexNumbers/geometry/plaszczyzna_zespolona3.png"
						copyrightLink="https://www.matemaks.pl/interpretacja-geometryczna-liczby-zespolonej.html"
					/>
				</div>
				<p className="text-justify text-xl text-textColor">
					Odległość liczby zespolonej z=a+bi od początku układu współrzędnych, z twierdzenia Pitagorasa, wyraża się
					wzorem:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">
							|z| = sqrt(a{supMethod(2)} + b{supMethod(2)})
						</p>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					Kąt między osią Re, a półprostą wychodzącą z początku układu współrzędnych i przechodzącą przez punkt z
					oznaczamy symbolem 𝜑 (czytane jako „fi”). Zazwyczaj wyrażamy go w radianach, czyli 𝜑 ∈ R, a nie w stopniach.
					Liczbę 𝜑 nazywamy argumentem liczby zespolonej z i zapisujemy jako arg<span className="font-bold">z</span>.
					Dla liczby z, którą zaznaczyliśmy w układzie współrzędnych, mamy:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">
							arg<span className="font-bold">z</span> = 𝜑
						</p>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					Wykorzystując bezpośrednio definicje funkcji trygonometrycznych dla trójkąta prostokątnego skonstruowanego w
					przedstawionym układzie współrzędnych, otrzymujemy:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<ImageCard
						src="/complexNumbers/geometry/arg_wzory1.png"
						copyrightLink="https://www.matemaks.pl/interpretacja-geometryczna-liczby-zespolonej.html"
					/>
				</div>
				<p className="text-justify text-xl text-textColor">
					Wzory po prawej stronie wynikają z tych po lewej poprzez podstawienie wyrażenia na moduł. Ze względu na wygodę
					będziemy głównie korzystać z krótszych wzorów po lewej. Bezpośrednio z nich otrzymujemy, że:
				</p>
				<div className="flex flex-col items-center justify-center pt-10">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								a = |z| cos<span className="font-bold">𝜑</span>
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								b = |z| sin<span className="font-bold">𝜑</span>
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">A więc:</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								z = a + bi = <br /> = |z| cos<span className="font-bold">𝜑</span> + (|z| sin
								<span className="font-bold">𝜑</span>
								)i = <br />= |z| (cos<span className="font-bold">𝜑</span> + i sin<span className="font-bold">𝜑</span>)
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					|z| (cos<span className="font-bold">𝜑</span> + i sin<span className="font-bold">𝜑</span>) jest to postać
					trygonometryczna z = a + bi.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Przykład 2.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					Wyznaczamy moduł, argument i postać trygonometryczną dla liczby zespolonej: z = &#8730;3 + i.
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<ImageCard
						src="/complexNumbers/geometry/interpretacja_geometryczna_przyklad1.png"
						copyrightLink="https://www.matemaks.pl/interpretacja-geometryczna-liczby-zespolonej.html"
					/>
				</div>
				<p className="text-justify text-xl text-textColor">Obliczamy moduł z twierdzenia Pitagorasa:</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								|z| = sqrt((&#8730;3){supMethod(2)} + 1{supMethod(2)}) = <br /> = sqrt(3 + 1) = <br />= sqrt(4) = 2
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">Obliczamy argument z definicji sinusa:</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								sin<span className="font-bold">𝜑</span> = {fractionsMethod(1, 2)}
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">Wychodzi nam:</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">𝜑 = 30° = {fractionsMethod('π', 6)}</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">Czyli:</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								arg<span className="font-bold">z</span> = {fractionsMethod('π', 6)}
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					Teraz, wykorzystując wcześniej obliczone wartości, zapisujemy liczbę zespoloną w postaci trygonometrycznej:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex flex-col items-center justify-center pt-10 pb-6">
							<ImageCard
								src="/complexNumbers/geometry/interpretacja_geometryczna_przyklad1e.png"
								copyrightLink="https://www.matemaks.pl/interpretacja-geometryczna-liczby-zespolonej.html"
							/>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">
					Możemy teraz zweryfikować, że obliczając wartości liczbowe funkcji trygonometrycznych w powyższym wzorze,
					otrzymamy pierwotną postać ogólną liczby zespolonej.
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex flex-col items-center justify-center pt-10 pb-6">
							<ImageCard
								src="/complexNumbers/geometry/interpretacja_geometryczna_przyklad1f.png"
								copyrightLink="https://www.matemaks.pl/interpretacja-geometryczna-liczby-zespolonej.html"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
