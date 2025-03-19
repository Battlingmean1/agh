import TextColorOutline from '@/components/TextColorOutline'
import { supMethod } from '@/utils/formatter'
import React from 'react'

export default function page() {
	const borderColor = '#d6421a'
	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Wprowadzenie do liczb zespolonych</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					Liczby zespolone to rozszerzenie zbioru liczb rzeczywistych, które obejmuje jednostkę urojoną
					<span className="font-bold"> i</span>, spełniające równanie i{supMethod(2)} = -1. Ponieważ taka liczba nie
					istnieje na rzeczywistej osi liczbowej, jej konstrukcja opiera się na liczbach rzeczywistych. Liczby postaci
					<span className="font-bold"> bi</span>, gdzie <span className="font-bold"> b</span> jest liczbą rzeczywistą,
					nazywamy liczbami urojonymi. Natomiast liczby zespolone to wyrażenia w postaci
					<span className="font-bold"> a + bi</span>, gdzie zarówno <span className="font-bold"> a</span>, jak i
					<span className="font-bold"> b</span> należą do zbioru liczb rzeczywistych.
				</p>
			</div>
			<div className="pt-20">
				<p className="text-justify text-xl text-textColor">
					Zbiór liczb zespolonych oznaczamy symbolem <span className="font-bold">C</span> (od ang. complex numbers). W
					przeciwieństwie do zbioru liczb rzeczywistych <span className="font-bold">R</span>, w liczbach zespolonych
					możliwe jest obliczanie pierwiastków z liczb ujemnych. Takie pierwiastki, zwane liczbami urojonymi, zapisujemy
					przy użyciu jednostki urojonej <span className="font-bold">i</span>. Jeżeli{' '}
					<span className="font-bold">jednostkę urojoną i</span> podniesiemy do kwadratu, to otrzymamy -1, zatem:
					<span className="font-bold"> i{supMethod(2)} = -1</span>.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-4xl uppercase">Przykład 1.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					Jeśli x ∈ R, to równanie <span className="font-bold">x{supMethod(2)} = -1</span> nie ma rozwiązań.
				</p>
				<p className="text-justify text-xl text-textColor mt-2">
					Jeśli x ∈ C, to równanie <span className="font-bold">x{supMethod(2)} = -1</span> ma dwa rozwiązania.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl uppercase">Przykład 2.</h2>
					</TextColorOutline>
				</div>

				<p className="text-justify text-xl text-textColor">
					Jeżeli w zbiorze liczb zespolonych mamy do rozwiązania równanie:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl">
						<p className="font-bold text-xl text-center">x{supMethod(2)} = -16</p>
					</div>
				</div>

				<p className="text-justify text-xl text-textColor">Rozwiązanie:</p>
				<div className="flex flex-col items-center justify-center font-bold py-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl">
						<span className="text-justify text-center text-xl text-textColor">x = 4i &nbsp;lub&nbsp; x = -4i</span>
					</div>
				</div>

				<p className="text-justify text-xl text-textColor">Ponieważ:</p>

				<div className="flex flex-col items-center justify-center gap-1 py-6">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl">
						<p className="text-center text-xl text-textColor font-bold">
							(4){supMethod(2)} = 16 * i{supMethod(2)} = 16 * (-1) = -16
						</p>
						<p className="text-center text-xl text-textColor font-bold py-2">lub</p>
						<p className="text-center text-xl text-textColor font-bold">
							(-4){supMethod(2)} = 16 * i{supMethod(2)} = 16 * (-1) = -16
						</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="">
					<p className="text-justify text-xl text-textColor">
						<span className="font-bold">Liczbę zespoloną</span> można zapisać:
					</p>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl">
							<p className="text-justify text-xl text-textColor">
								<span className="font-bold">a + bi</span>, gdzie a, b ∈ R.
							</p>
						</div>
					</div>
					<p className="text-justify text-xl text-textColor pt-2">
						<span className="font-bold">a</span> - część rzeczywista, <br />
						<span className="font-bold">b</span> - część urojona, <br />
						<span className="font-bold">i</span> - jednostka urojona
					</p>
				</div>
				<div className="pt-20">
					<div className="pb-4">
						<p className="text-justify text-xl text-textColor">
							<span className="font-bold">
								Liczba zespolona może zawierać wyłącznie część rzeczywistą lub wyłącznie część urojoną. W szczególności
								każda liczba rzeczywista jest również liczbą zespoloną.
							</span>
						</p>
					</div>
					<div className="flex flex-col items-center justify-center font-bold py-6">
						<div className="flex flex-col items-center justify-center border p-12 rounded-2xl">
							<p className="text-center text-xl text-textColor">
								<span className="font-bold">7 + 5i</span> - liczba zespolona
							</p>
							<p className="text-center text-xl text-textColor">
								<span className="font-bold">7</span> - liczba zespolona (czysto rzeczywista)
							</p>
							<p className="text-center text-xl text-textColor">
								<span className="font-bold">5i</span> - liczba zespolona (czysto urojona)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
