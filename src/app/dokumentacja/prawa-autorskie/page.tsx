import TextColorOutline from '@/components/TextColorOutline'
import CreditsCard from './_components/CreditsCard'

const page = () => {
	const borderColor = '#1a2cf0'
	return (
		<>
			<div className="p-4">
				<div>
					<div className="pb-4">
						<TextColorOutline backgroundColor={borderColor}>
							<h2 className="font-semibold text-2xl xl:text-4xl">Potrzebne linki</h2>
						</TextColorOutline>
					</div>
					<p className="text-justify text-xl text-textColor">
						Tutaj znajdziesz wszystkie linki i materiały, które zostały wykorzystane do stworzenia tej strony
						internetowej.
					</p>
				</div>
				<div className="pt-20">
					<div className="pb-4">
						<TextColorOutline backgroundColor={borderColor}>
							<h2 className="font-semibold text-2xl xl:text-4xl">Fraktale</h2>
						</TextColorOutline>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
						<CreditsCard
							title="Fraktale"
							description="Ogólne informacje dotyczące fraktali."
							href="https://pl.wikipedia.org/wiki/Fraktal"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Trójkąt Sierpińskiego"
							description="Ogólne informacje dotyczące Trójkąta Sierpińskiego. Dodatkowo wiedza własna."
							href="https://pl.wikipedia.org/wiki/Tr%C3%B3jk%C4%85t_Sierpi%C5%84skiego"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Dywan Sierpińskiego"
							description="Ogólne informacje Dywanu Sierpińskiego. Dodatkowo wiedza własna."
							href="https://pl.wikipedia.org/wiki/Dywan_Sierpi%C5%84skiego"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Krzywa Kocha"
							description="Ogólne informacje dotyczące Krzywej Kocha. Dodatkowo wiedza własna."
							href="https://pl.wikipedia.org/wiki/Krzywa_Kocha"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Płatek Kocha"
							description="Ogólne informacje dotyczące Płatka Kocha. Dodatkowo wiedza własna."
							href="https://pl.wikipedia.org/wiki/Krzywa_Kocha"
							creditsText="Wikipedia"
						/>
						<CreditsCard title="Drzewo Binarne" description="Wiedza własna." href="#" creditsText="" />
						<CreditsCard
							title="Zbiór Cantora"
							description="Ogólne informacje dotyczące Zbioru Cantora. Dodatkowo wiedza własna."
							href="https://pl.wikipedia.org/wiki/Zbi%C3%B3r_Cantora"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Zbiór Cantora"
							description="Ogólne informacje dotyczące Zbioru Cantora. Dodatkowo wiedza własna."
							href="https://mattomatti.com/pl/a0179"
							creditsText="Mattomatti"
						/>
						<CreditsCard
							title="Zbiór Mandelbrota"
							description="Ogólne informacje dotyczące Zbiora Mandelbrota."
							href="https://pl.wikipedia.org/wiki/Zbi%C3%B3r_Mandelbrota"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Zbiór Julii"
							description="Ogólne informacje dotyczące Zbioru Julii."
							href="https://pl.wikipedia.org/wiki/Zbi%C3%B3r_Julii"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Krzywa Hilberta"
							description="Ogólne informacje dotyczące Krzywej Hilberta."
							href="https://en.wikipedia.org/wiki/Hilbert_curve"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Atraktory Lorentza"
							description="Ogólne informacje dotyczące Atraktorów Lorentza."
							href="https://en.wikipedia.org/wiki/Lorenz_system"
							creditsText="Wikipedia"
						/>
					</div>
				</div>
				<div className="pt-20">
					<div className="pb-4">
						<TextColorOutline backgroundColor={borderColor}>
							<h2 className="font-semibold text-2xl xl:text-4xl">Liczby zespolone</h2>
						</TextColorOutline>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
						<CreditsCard
							title="Liczby zespolone"
							description="Wszystkie informacje dotyczące liczb zespolonych."
							href="https://www.matemaks.pl/liczby-zespolone.html"
							creditsText="Matemaks"
						/>
					</div>
				</div>
				<div className="pt-20">
					<div className="pb-4">
						<TextColorOutline backgroundColor={borderColor}>
							<h2 className="font-semibold text-2xl xl:text-4xl">Inne</h2>
						</TextColorOutline>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
						<CreditsCard
							title="Automaty komórkowe"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://pl.wikipedia.org/wiki/Automat_kom%C3%B3rkowy"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="System trójkowy"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://pl.wikipedia.org/wiki/Tr%C3%B3jkowy_system_liczbowy"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Escape Time Algorithm"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://en.wikipedia.org/wiki/Plotting_algorithms_for_the_Mandelbrot_set"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Probabilistyczny algorytm"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://pl.wikipedia.org/wiki/Algorytm_probabilistyczny"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="L-systemy"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="http://www.algorytm.org/fraktale/l-systemy.html"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="L-systemy"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://robert.nowotniak.com/fractals/lsystems/"
							creditsText="Robert Nowotniak"
						/>
						<CreditsCard
							title="Metoda Rungego-Kutty "
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://pl.wikipedia.org/wiki/Algorytm_Rungego-Kutty"
							creditsText="Wikipedia"
						/>
						<CreditsCard
							title="Chaos Game"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://indekswkieszeni.pl/na-poczatku-byl-chaos-a-z-mgly-wylonil-sie-latajacy-dywan-olimpiada-matematyczna/"
							creditsText="Indeks w kieszeni"
						/>
						<CreditsCard
							title="Metoda iteracji"
							description="Zawarte w metodach tworzenia poszczególnych fraktali."
							href="https://pl.wikipedia.org/wiki/Metoda_iteracji"
							creditsText="Wikipedia"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default page
