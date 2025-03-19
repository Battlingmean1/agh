import { JSX } from 'react'
import {
	BinaryTree,
	CantorSet,
	HilbertCurveSet,
	JuliaSet,
	KochCurve,
	KochSnowflake,
	LorenzAttractor,
	MandelbrotSet,
	SierpinskiCarpet,
	SierpinskiTriangle,
} from './fractalsComponents'
import { fractionsMethod, subMethod, supMethod } from '@/utils/formatter'

type FractalsType = {
	[key: string]: {
		title: string
		path?: string
		definition: string | JSX.Element
		instruction: JSX.Element
		creationMethod: { title: string; description: string | JSX.Element }[]
		description: string
		properties: string | JSX.Element
		images?: string
		authorImage: string
		authorDescription: string
		authorURL: string
		authorName: string
		component: () => JSX.Element
	}
}

type FractalsOnADailyBasisType = {
	[key: string]: {
		title: string
		path: string
		description: string
		imagesList: { name: string; images: { src: string; copyrightLink: string }[] }[]
	}
}

export const Fractals: FractalsType = {
	'trojkat-sierpinskiego': {
		title: 'Trójkąt Sierpińskiego',
		path: 'trojkat-sierpinskiego',
		authorName: 'Wacław Sierpiński',
		authorImage: '/images/fractalAuthors/Waclaw_Sierpinski.jpg',
		authorDescription:
			'Wacław Sierpiński (1882 - 1969) był czołowym polskim matematykiem związanym z warszawską szkołą matematyczną. Pracował na Uniwersytecie Warszawskim, kierował Instytutem Matematycznym PAN i był członkiem wielu akademii nauk. Jego badania dotyczyły m.in. teorii liczb, analizy matematycznej oraz podstaw matematyki, zwłaszcza teorii mnogości i zagadnień nieskończoności. Opublikował setki prac, promował młodych naukowców i współtworzył ważne czasopisma matematyczne. Za swoje osiągnięcia został wielokrotnie odznaczony, m.in. Krzyżem Wielkim Orderu Odrodzenia Polski.',
		authorURL: 'https://pl.wikipedia.org/wiki/Wac%C5%82aw_Sierpi%C5%84ski#',
		definition: (
			<>
				Trójkąt Sierpińskiego jest jednym z najprostszych fraktali i jednocześnie przykładem zbioru samopodobnego, czyli
				figury geometrycznej, której części są mniejsze, ale identyczne do całości. Oznacza to, że niezależnie od skali,
				każda część figury wygląda tak samo. Fraktal ten nazwany został na cześć polskiego matematyka Wacława
				Sierpińskiego, który opisał go w 1915 roku, choć podobne struktury były znane wcześniej.
			</>
		),

		description: 'Opis Trójkąta Sierpińskiego',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">1.</span> Zaczynamy od trójkąta równobocznego.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">2.</span> Dzielimy trójkąt na cztery równe części.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">3.</span> Usuwamy środkową część trójkąta.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">4.</span> Powtarzamy ten proces dla trzech mniejszych trójkątów w
					nieskończoność.
				</p>
			</>
		),
		creationMethod: [
			{ title: 'Podstawowy', description: 'Podstawowy algorytm tworzenia Trójkąta Sierpińskiego.' },
			{
				title: 'Metoda Chaosu',
				description: (
					<>
						Zaczynamy od dowolnego punktu P0 w płaszczyźnie. Losujemy jeden z wierzchołków trójkąta i przesuwamy punkt
						Pn w połowie drogi w kierunku tego wierzchołka. Powtarzamy ten proces wielokrotnie.
					</>
				),
			},
			{
				title: 'Automaty komórkowe',
				description:
					'Trójkąt Sierpińskiego można wygenerować za pomocą reguł automatu komórkowego, np. w siatce binarnej, gdzie cyfra 1 oznacza wypełnione pole, a cyfra 0 - puste. Należy stosować określone zasady.',
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">-</span> Trójkąt Sierpińskiego jest fraktalem, co oznacza, że ma taką samą
					strukturę w każdej skali.
				</p>
				<p className="text-xl">
					<span className="font-bold">-</span> Wymiar fraktalny Trójkąta Sierpińskiego to log{subMethod(2)}3 ≈ 1.585
				</p>
			</div>
		),
		component: SierpinskiTriangle,
	},
	'dywan-sierpinskiego': {
		title: 'Dywan Sierpińskiego',
		path: 'dywan-sierpinskiego',
		authorName: 'Wacław Sierpiński',
		authorImage: '/images/fractalAuthors/Waclaw_Sierpinski.jpg',
		authorDescription:
			'Wacław Sierpiński (1882 - 1969) był czołowym polskim matematykiem związanym z warszawską szkołą matematyczną. Pracował na Uniwersytecie Warszawskim, kierował Instytutem Matematycznym PAN i był członkiem wielu akademii nauk. Jego badania dotyczyły m.in. teorii liczb, analizy matematycznej oraz podstaw matematyki, zwłaszcza teorii mnogości i zagadnień nieskończoności. Opublikował setki prac, promował młodych naukowców i współtworzył ważne czasopisma matematyczne. Za swoje osiągnięcia został wielokrotnie odznaczony, m.in. Krzyżem Wielkim Orderu Odrodzenia Polski.',
		authorURL: 'https://pl.wikipedia.org/wiki/Wac%C5%82aw_Sierpi%C5%84ski#',
		definition: (
			<>
				Dywan Sierpińskiego to jeden z klasycznych fraktali, którego konstrukcja opiera się na rekurencyjnym podziale
				figury - w tym przypadku kwadratu - na mniejsze części. W odróżnieniu od trójkąta Sierpińskiego, gdzie operację
				wykonuje się na trójkącie, tutaj operację wykonuje się na kwadracie. Wynikowy obiekt cechuje się
				samopodobieństwem, czyli każdy jego fragment (po odpowiednim powiększeniu) jest podobny do całości.
			</>
		),
		description: 'Opis Dywanu Sierpińskiego',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">1.</span> Zaczynamy od kwadratu.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">2.</span> Kwadrat dzieli się na dziewięć równych mniejszych kwadratów,
					ułożonych w siatkę 3x3.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">3.</span> otrzymanej siatki usuwa się wewnętrzny (środkowy) kwadrat,
					pozostawiając 8 kwadratów otaczających.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-semibold">4.</span> Następnie tę samą operację stosuje się do każdego z pozostałych 8
					kwadratów. Każdy z nich dzieli się na 9 mniejszych kwadratów, usuwa się środkowy, a procedura powtarza się dla
					każdego powstałego kwadratu.
				</p>
			</>
		),
		creationMethod: [
			{ title: 'Podstawowy', description: 'Podstawowy algorytm tworzenia Dywanu Sierpińskiego - opisany wyżej.' },
			{
				title: 'Metoda Chaosu',
				description:
					'Na początku rozpoczynamy z jednym dużym kwadratem, losowo wybieramy punkt w obrębie kwadratu, później kolejno wybieramy jeden z 8 pozostałych mniejszych kwadratów, powtarzamy ten proces wielokrotnie.',
			},
			{
				title: 'Automaty komórkowe',
				description:
					'Ustalamy reguły, które będą decydować o tym, które komórki w kolejnym kroku zostaną "wypełnione", a które "puste". Zwykle będzie to zależało od tego, czy komórki sąsiadują z komórkami wypełnionymi.',
			},
			{
				title: 'Macierze',
				description:
					'Tworzymy macierz transformacji dla każdego z mniejszych kwadratów, stosujemy transformację na kwadratach, w ten sposób tworzymy nowy układ, powtarzamy cały ten proces, generując coraz mniejsze fragmenty.',
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">-</span> Każda część dywanu, po odpowiednim powiększeniu, jest podobna do całości.
					Oznacza to, że fragment kwadratu powstały w wyniku iteracji, gdy zostanie powiększony, wygląda jak cały dywan.
				</p>
				<p className="text-xl">
					<span className="font-bold">-</span> Wymiar fraktalny Dywanu Sierpińskiego wynosi{' '}
					{fractionsMethod('log(8)', 'log(3)')} ≈ 1.8928.
				</p>
			</div>
		),
		component: SierpinskiCarpet,
	},
	'krzywa-kocha': {
		title: 'Krzywa Kocha',
		path: 'krzywa-kocha',
		authorName: 'Helge von Koch',
		authorImage: '/images/fractalAuthors/Helge_von_Koch.jpg',
		authorDescription: `Niels von Koch (1870 - 1924) był szwedzkim matematykiem, znanym przede wszystkim jako autor krzywej Kocha - jednego z pierwszych i najbardziej rozpoznawalnych fraktali, opisanego w 1904 roku w pracy „Une méthode géométrique élémentaire pour l'étude de certaines questions de la théorie des courbes plane”. Pisał również na tematy związane z teorią liczb, badał hipotezę Riemanna i zajmował się zagadnieniami dotyczącymi nieskończonych wyznaczników.`,
		authorURL: 'https://pl.wikipedia.org/wiki/Helge_von_Koch',
		definition: (
			<>
				Krzywa Kocha to fraktalna krzywa, która powstaje poprzez rekurencyjne dzielenie każdej krawędzi równobocznego
				trójkąta na cztery mniejsze odcinki, tworząc &#34;zębaty&#34; kształt. Proces ten powtarza się nieskończoną
				ilość razy, przez co krzywa staje się coraz bardziej złożona, a jej długość rośnie w nieskończoność, podczas gdy
				jej wymiar topologiczny wynosi około 1. Krzywa Kocha jest przykładem fraktala o samopodobnym charakterze, gdzie
				każda iteracja jest podobna do poprzedniej.
			</>
		),
		description: 'Opis Krzywej Kocha',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1.</span> Zaczynamy od prostego odcinka linii.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">2.</span> Dzielimy odcinek na trzy równe części.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">3.</span> Środkowy odcinek zamieniamy na dwa ramiona trójkąta równobocznego.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">4.</span> Proces powtarzamy rekursywnie dla każdej nowej linii.
				</p>
			</>
		),
		creationMethod: [
			{ title: 'Podstawowy', description: 'Podstawowy algorytm tworzenia Krzywej Kocha - opisany wyżej.' },
			{
				title: 'Programowanie komputerowe',
				description:
					'Popularne języki programowania do generowania takich drzew to Python, JavaScript, C++. Algorytmy bazują na rekurencji, gdzie każda funkcja rysuje dwie mniejsze gałęzie i wywołuje się dla nich ponownie.',
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">-</span> Cała struktura przypomina swoje części.
				</p>
				<p className="text-xl">
					<span className="font-bold">-</span> Wymiar fraktalny Krzywej Kocha: {fractionsMethod('log(4)', 'log(3)')} ≈
					1.2619.
				</p>
			</div>
		),
		component: KochCurve,
	},
	'platek-kocha': {
		title: 'Płatek Kocha',
		path: 'platek-kocha',
		authorName: 'Helge von Koch',
		authorImage: '/images/fractalAuthors/Helge_von_Koch.jpg',
		authorDescription: `Niels von Koch (1870 - 1924) był szwedzkim matematykiem, znanym przede wszystkim jako autor krzywej Kocha - jednego z pierwszych i najbardziej rozpoznawalnych fraktali, opisanego w 1904 roku w pracy „Une méthode géométrique élémentaire pour l'étude de certaines questions de la théorie des courbes plane”. Pisał również na tematy związane z teorią liczb, badał hipotezę Riemanna i zajmował się zagadnieniami dotyczącymi nieskończonych wyznaczników.`,
		authorURL: 'https://pl.wikipedia.org/wiki/Helge_von_Koch',
		definition: (
			<>
				Płatek Kocha to fraktal powstały przez rekurencyjne zastosowanie konstrukcji krzywej Kocha na bokach trójkąta
				równobocznego. W każdym kroku każda krawędź trójkąta dzielona jest na trzy równe części, a środkowa część
				zastępowana &#34;wypukłym zębem&#34; w kształcie mniejszego równobocznego trójkąta. Proces powtarza się nieskończoną
				ilość razy, tworząc symetryczną, śnieżynkopodobną strukturę o nieskończonej długości obwodu i skończonym polu
				powierzchni.
			</>
		),
		description: 'Opis dotyczący Płatka Kocha',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1.</span> Rysujemy trójkąt równoboczny.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">2.</span> Każdy bok trójkąta traktujemy jak pojedynczy odcinek i stosujemy na nim
					metodę krzywej Kocha.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">3.</span> Proces rekursywny powtarzamy dla wszystkich boków nowo utworzonej
					figury.
				</p>
			</>
		),
		creationMethod: [
			{ title: 'Podstawowy', description: 'Podstawowy algorytm tworzenia Krzywej Kocha - opisany wyżej.' },
			{
				title: 'Programowanie komputerowe',
				description:
					'Popularne języki programowania do generowania takich drzew to Python, JavaScript, C++. Algorytmy bazują na rekurencji, gdzie każda funkcja rysuje dwie mniejsze gałęzie i wywołuje się dla nich ponownie.',
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">-</span> Płatek Kocha jest fraktalem, co oznacza, że jego części są podobne do
					całości (powiększając fragment, widzimy strukturę identyczną do całego płatka).
				</p>
				<p className="text-xl">
					<span className="font-bold">-</span> Wymiar fraktalny Płatka Kocha: {fractionsMethod('log(4)', 'log(3)')} ≈
					1.2619.
				</p>
			</div>
		),
		component: KochSnowflake,
	},
	'drzewo-binarne': {
		title: 'Drzewo Binarne',
		path: 'drzewo-binarne',
		authorName: 'Nieznane',
		authorImage: '/images/fractalAuthors/question-mark-2309040_640.jpg',
		authorDescription: `Brak informacji.`,
		authorURL: 'https://pixabay.com/pl/photos/znak-zapytania-symbol-ikona-posta%C4%87-2309040/',
		definition: (
			<>
				Drzewo binarne jako fraktal to struktura, która powstaje poprzez rekurencyjne rozgałęzianie się początkowego
				&#34;pnia&#34; drzewa na dwa nowe &#34;gałęzie&#34; w każdej iteracji. W każdej kolejnej generacji każda gałąź
				dzieli się na dwie mniejsze gałęzie, tworząc coraz bardziej złożoną, ale samopodobną strukturę. Jest to przykład
				fraktala, ponieważ na różnych skalach struktura drzewa zachowuje podobny układ, niezależnie od poziomu
				szczegółowości.
			</>
		),
		description: 'Opis dotyczący Drzewa Binarnego',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1.</span> Zaczynamy od narysowania pierwszego, pionowego segmentu, którzy będzie
					nam przypominał korzeń drzewa.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">2.</span> Na końcu każdej gałęzi rysujemy dwie nowe gałęzie, kąt ich nachylenia
					jest ustalony (np. 30 stopni), długość nowych gałęzi to połowa długości poprzedniej gałęzi.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">3.</span> Proces powtarza się na końcach wszystkich nowych gałęzi. Każdy krok
					zwiększa szczegółowość drzewa.
				</p>
			</>
		),
		creationMethod: [
			{ title: 'Podstawowy', description: 'Podstawowy algorytm tworzenia Krzywej Kocha - opisany wyżej.' },
			{
				title: 'Programowanie komputerowe',
				description:
					'Popularne języki programowania do generowania takich drzew to Python, JavaScript, C++. Algorytmy bazują na rekurencji, gdzie każda funkcja rysuje dwie mniejsze gałęzie i wywołuje się dla nich ponownie.',
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">-</span> Każda część drzewa (np. gałąź i jej poddrzewo) przypomina całą strukturę
					drzewa.
				</p>
				<p className="text-xl">
					<span className="font-bold">-</span> Przy odpowiednio dużej liczbie iteracji drzewo wygląda coraz bardziej
					szczegółowo, ale mieści się w ograniczonym obszarze przestrzeni.
				</p>
			</div>
		),
		component: BinaryTree,
	},
	'zbior-cantora': {
		title: 'Zbiór Cantora',
		path: 'zbior-cantora',
		authorName: 'Georg Cantor',
		authorImage: '/images/fractalAuthors/Matematiker_georg_cantor.jpg',
		authorDescription:
			'Studiował w Darmstadt, Zurychu oraz Getyndze, a doktorat uzyskał w Berlinie w 1867 roku. Jego nauczycielami byli m.in. Karl Weierstrass, Ernst Eduard Kummer i Leopold Kronecker. Rozpoczął karierę pedagogiczną w berlińskim gimnazjum, a przez ponad trzydzieści lat wykładał na uniwersytecie w Halle (Saale). Utrzymywał bliskie relacje z Richardem Dedekindem. Cantor odegrał istotną rolę w tworzeniu fundamentów współczesnej matematyki, zwłaszcza dzięki swojemu wkładowi w rozwój teorii mnogości. Zmarł 6 stycznia 1918 roku po przebytym zawale serca.',
		authorURL: 'https://pl.wikipedia.org/wiki/Georg_Cantor',
		definition: (
			<>
				Zbiór Cantora (często określany jako trójkowy zbiór Cantora) to klasyczny przykład fraktala, który został
				opisany już pod koniec XIX wieku przez Georga Cantora. Jest to podzbiór przedziału [0, 1] o zadziwiających
				właściwościach. Zbiór ten jest także przykładem struktury samopodobnej: każdy jego fragment (po odpowiednim
				powiększeniu) wygląda jak całość.
			</>
		),
		description: 'Opis Zbioru Cantora',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1.</span> Rozpoczynamy od przedziału [0, 1] na osi liczbowej.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">2.</span> Dzielimy przedział [0, 1] na trzy równe części o długościach 1/3.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">3.</span> Usuwamy środkowy segment, czyli przedział (
					{fractionsMethod('1/3', '2/3')}). Pozostają dwa segmenty: [0, 1/3] oraz [2/3, 1].
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">4.</span> Dla każdego pozostałego segmentu powtarzamy tę samą operację.
				</p>
			</>
		),
		creationMethod: [
			{
				title: 'Iteracyjna konstrukcja geometryczna',
				description: 'Podstawowy algorytm tworzenia Zbioru Cantora - opisany wyżej.',
			},
			{
				title: 'Numeryczna reprezentacja w systemie trójkowym',
				description:
					'Generujemy liczby rzeczywiste, w przedziale [0, 1], których rozwinięcie w systemie trójkowym nie zawiera cyfry 1.',
			},
			{
				title: 'Metoda iteracyjna',
				description: (
					<>
						Zbiór Cantora może być skonstruowany jako wynik działania dwóch funkcji liniowych: f(x) ={' '}
						{fractionsMethod('x', 3)}, g(x) = {fractionsMethod('x', 3)} + {fractionsMethod(2, 3)}.
					</>
				),
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">-</span> Na każdej iteracji z przedziału usuwany środkowy segment o długości
					{fractionsMethod(1, 3)}. Dla pierwszej iteracji pozostaje {fractionsMethod(2, 3)} długości, a po n iteracjach
					długość wynosi: ({fractionsMethod(2, 3)}){supMethod('n')}. W granicy dla n {'->'} ∞ otrzymujemy: lim{' '}
					{/* TUTAJ BEDZIE COS DO ZROBIENIA, ABY ZAMIENIC ZNAK NIESKOCZNOSCI I STRZALKE W ORAWO*/}
					{subMethod('n -> ∞')} ({fractionsMethod(2, 3)}){supMethod('n')} = 0
				</p>
				<p className="text-xl">
					<span className="font-bold">-</span> Wymiar fraktalny Zbioru Cantora wynosi:
					{fractionsMethod('log(2)', 'log(3)')} ≈ 0,63093.
				</p>
			</div>
		),
		component: CantorSet,
	},
	'zbior-mandelbrota': {
		title: 'Zbiór Mandelbrota',
		path: 'zbior-mandelbrota',
		authorName: 'Benoît Mandelbrot',
		authorImage: '/images/fractalAuthors/Benoit_Mandelbrot,_TED_2010.jpg',
		authorDescription:
			'Benoît B. Mandelbrot (urodzony jako Benedykt, 1924 - 2010) był matematykiem francusko-amerykańskim żydowskiego pochodzenia, uważanym za twórcę geometrii fraktalnej. To on opisał zbiór Mandelbrota i ukuł termin „fraktal”. Był bratankiem Szolema Mandelbrojta. Wychowywał się w Polsce (1924 - 1936), mieszkał we Francji (1936 - 1957), a następnie pracował w USA dla IBM, gdzie wykorzystał komputery do badań inspirowanych pracami Julii i Fatou. Za swoje dokonania otrzymał liczne wyróżnienia, m.in. Nagrodę Wolfa w fizyce (1993), Nagrodę Japońską (2003) oraz 16 doktoratów honoris causa.',
		authorURL: 'https://pl.wikipedia.org/wiki/Beno%C3%AEt_Mandelbrot',
		definition: (
			<>
				Zbiór Mandelbrota definiuje się następująco. Rozważamy funkcję rekurencyjną dla liczby zespolonej c: z
				{subMethod(0)} = 0, z{subMethod('n + 1')} = z{supMethod(2)}
				{subMethod('n')} + c. Punkt c należy do zbioru Mandelbrota, jeśli ciąg z{subMethod('n')} pozostaje ograniczony
				(tj. nie ucieka do nieskończoności) - formalnie, jeśli lim sup{subMethod('n -> ∞')} |z{supMethod('n')}| jest
				skończone. W praktyce przyjmuje się, że jeśli dla pewnego n zachodzi |z{subMethod('n')}| {'>'} 2, ciąg będzie
				rozbieżny, a punkt c nie należy do zbioru.
			</>
		),
		description: 'Opis Zbioru Mandelbrota',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1.</span> Dla każdego punktu c z płaszczyzny zespolonej obliczamy iteracje według
					wzoru z{subMethod('n + 1')} = z{supMethod(2)}
					{subMethod('n')} + c. Jeśli wartość |z{subMethod('n')}| przekroczy pewien ustalony próg (najczęściej 2) -
					punkt uznajemy za nie należący do zbioru.
				</p>
				<p className="text-xl font-bold">
					<span className="font-bold"></span> Przykład (c = 1):
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">Krok 0:</span> z{subMethod(0)} = 0.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">Krok 1:</span> z{subMethod(1)} = z{supMethod(2)}
					{subMethod(0)} + c = 0{supMethod(2)} + 1 = 1.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">Krok 2:</span> z{subMethod(2)} = z{supMethod(2)}
					{subMethod(1)} + c = 1{supMethod(2)} + 1 = 2.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">Krok 3:</span> z{subMethod(3)} = z{supMethod(2)}
					{subMethod(2)} + c = 2{supMethod(2)} + 1 = 4 + 1 = 5.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">-</span> Dla c = 1 wartość |z{subMethod('n')}| przekracza próg 2 (juz |z
					{subMethod('n')}| = 5), więc punkt c = 1 nie należy do zbioru.
				</p>
			</>
		),
		creationMethod: [
			{ title: 'Metoda iteracyjna', description: 'Podstawowy algorytm tworzenia Zbioru Mandelbrota - opisany wyżej.' },
			{
				title: 'Escape Time Algorithm',
				description: (
					<>
						Zamiast obserwować, czy |z{subMethod('z')}| przekracza wartość graniczną (np. 2), można zastosować inny próg
						ograniczenia (np. 3 lub 4) i obserwować, jak zmienia się wynikowy obraz lub zmodyfikować równanie z
						{subMethod('n+1')} = z{supMethod('d')}
						{subMethod('n')} + c, gdzie d {'>'} 2 (podnosić do innych potęg).
					</>
				),
			},
			{
				title: 'Probabilistyczny algorytm',
				description:
					'Zamiast iterować wszystkie punkty c na regularnej siatce, losujemy punkty c z płaszczyzny zespolonej, w ten sposób generujemy „rozproszone” fragmenty zbioru Mandelbrota.',
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">- </span>Zbiór Mandelbrota jest fraktalem o nieskończenie złożonej granicy.
				</p>
				<p className="text-xl">
					<span className="font-bold">- </span> Jego struktura zawiera powtarzające się wzory samopodobne.
				</p>
				<p className="text-xl">
					<span className="font-bold">- </span> Wokół zbioru występują różnorodne kolory w wizualizacjach, które
					odpowiadają szybkości zbieżności.
				</p>
			</div>
		),
		component: MandelbrotSet,
	},
	'zbior-julii': {
		title: 'Zbiór Julii',
		path: 'zbior-julii',
		authorName: 'Gaston Julia',
		authorImage: '/images/fractalAuthors/Gustav_Herglotz,_Gaston_Julia.jpeg',
		authorDescription: `Gaston Maurice Julia (1893 - 1978) był francuskim matematykiem i prekursorem teorii układów dynamicznych, profesorem École Polytechnique. Podczas I wojny światowej, jako żołnierz, stracił nos, co skutkowało noszeniem skórzanej przepaski do końca życia. Jego najsłynniejsza praca, "Mémoire sur l'itération des fonctions rationnelles", opisała własności fraktala, który później nazwano zbiorem Julii.`,
		authorURL: 'https://en.wikipedia.org/wiki/Gaston_Julia',
		definition: (
			<>
				Zbiór Julii to rodzina fraktali powstałych w wyniku iteracji funkcji zespolonych. Dla danego stałego parametru c
				(liczby zespolonej) rozważamy funkcję f(z) = z{supMethod(2)} + c, gdzie z również należy do płaszczyzny
				zespolonej. Zbiór Julii J(c) to zbiór punktów z, dla których iterację z{subMethod('n + 1')} = f(z
				{subMethod('n')}) (z z{subMethod(0)} = z) nie ulegają rozbieżności, czyli pozostają ograniczone. Wartość
				parametru c decyduje o tym, czy zbiór Julii będzie spójny.
			</>
		),
		description: 'Opis Zbioru Julii',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1.</span> W przeciwieństwie do zbioru Mandelbrota, gdzie c zmieniamy, w przypadku
					zbioru Julii wybieramy ustalony punkt c w płaszczyźnie zespolonej.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">2.</span> Dla ustalonego c definiujemy funkcję f(z) = z{supMethod(2)} + c.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">3.</span> Dla dowolnego punktu z obliczamy ciąg z{subMethod(0)} = z, z
					{subMethod(1)} = f(z{subMethod(0)}), z{subMethod(1)} = f(z{subMethod(0)}), z{subMethod(2)} = f(z{subMethod(1)}
					), ...
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">4.</span> Podobnie jak przy zbiorze Mandelbrota, jeśli w pewnym kroku |z
					{subMethod('n')}| przekroczy ustalony próg (najczęściej 2), uznajemy, że ciąg zaczyna rozbiegać się i dany
					punkt z nie należy do J(c).
				</p>
			</>
		),
		creationMethod: [
			{
				title: 'Matematyczna iteracja',
				description: (
					<>
						Dla stałej liczby zespolonej c i każdego punktu z{subMethod(0)} ∈ C iterujemy: z{subMethod('n+1')} = z
						{supMethod(2)}
						{subMethod('n')} + c. Punkt z{subMethod(0)} należy do zbioru Julii, jeśli iteracja z{subMethod('n')}{' '}
						pozostaje ograniczona (|z{subMethod('n')}| {'<='} 2)
					</>
				),
			},
			{
				title: 'Metoda komputerowa',
				description: (
					<>
						Tworzymy siatkę punktów w płaszczyźnie zespolonej odpowiadającej wartościom z{subMethod('0')} = x + yi, dla
						każdego punktu wykonujemy iterację z{subMethod('n+1')} = z{supMethod(2)}
						{subMethod('n')} + c, aż do określonej liczby kroków N{subMethod('max')}, jeśli |z{subMethod('n')}| {'>'} 2,
						zapisujemy liczbę iteracji dla kolorowania. Wynikiem jest wizualizacja zależna od wybranej wartości c.
					</>
				),
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">- </span>Zbiór Julii jest fraktalem.
				</p>
				<p className="text-xl">
					<span className="font-bold">- </span> W zależności od c, zbiór Julii może być spójny (jeśli c należy do zbioru
					Mandelbrota) lub rozłączny.
				</p>
				<p className="text-xl">
					<span className="font-bold">- </span> Struktura zbioru Julii jest wysoce złożona i może wyglądać jak
					nieregularne wzory koronkowe.
				</p>
			</div>
		),
		component: JuliaSet,
	},
	'krzywa-hilberta': {
		title: 'Krzywa Hilberta',
		path: 'krzywa-hilberta',
		authorName: 'David Hilbert',
		authorImage: '/images/fractalAuthors/Hilbert.jpg',
		authorDescription: `Hilbert rozpoczął karierę w Królewcu, gdzie został profesorem, a następnie przeniósł się do Getyndze. Zajmował się teorią niezmienników, udowadniając istnienie skończonej bazy i formułując twierdzenie o zerach w geometrii algebraicznej. W 1899 roku opublikował „Grundlagen der Geometrie”, ustanawiając aksjomatyczne podstawy geometrii, a jego prace przyczyniły się do rozwoju przestrzeni Hilberta i rozwiązania problemu Waringa. Na Międzynarodowym Kongresie Matematyków w 1900 roku przedstawił słynne problemy, a w 1915 sformułował równania pola dla ogólnej teorii względności, jednocześnie będąc oddanym wykładowcą.`,
		authorURL: 'https://pl.wikipedia.org/wiki/David_Hilbert',
		definition: (
			<>
				Krzywa Hilberta została opracowana przez niemieckiego matematyka Davida Hilberta i należy do rodziny krzywych
				wypełniających przestrzeń. Mimo że topologicznie jest krzywą (czyli ciągłą funkcją z przedziału [0,1] do
				płaszczyzny), jej konstrukcja sprawia, że „wypełnia” ona całą jednostkową przestrzeń kwadratową. Oznacza to, że
				przy odpowiedniej granicy iteracji, obraz tej krzywej jest zbiór o miarze powierzchni równej tej jednostkowego
				kwadratu. Choć jej topologiczny wymiar wynosi 1 (jako krzywa), to wymiar fraktalny tej krzywej wynosi 2, co
				odzwierciedla jej zdolność „wypełniania” płaszczyzny.
			</>
		),
		description: 'Opis Krzywej Hilberta',
		instruction: (
			<>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1. </span>W pierwszej iteracji rysujemy kształt litery „U” w ograniczonym
					obszarze.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">2. </span>Każda kolejna iteracja dzieli obszar na cztery kwadraty i wprowadza
					bardziej złożony wzór „U”, aby połączyć wszystkie podkwadraty.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">3. </span>W granicy liczba punktów zbiega do pełnego pokrycia kwadratu.
				</p>
			</>
		),
		creationMethod: [
			{
				title: 'Rekurencyjna konstrukcja geometryczna:',
				description: 'Podstawowy algorytm tworzenia Krzywej Hilberta - opisany wyżej.',
			},
			{
				title: 'Algorytm komputerowy',
				description: (
					<>
						Algorytm iteracyjny za pomocą L-systemu zaczyna się od aksjomatu początkowego (A) i polega na wielokrotnym
						stosowaniu reguł produkcji, takich jak A → +BF-AFA-FB+ oraz B → -AF+BFB+FA-, gdzie + oznacza obrót o 90° w
						prawo, - obrót o 90° w lewo, F przesunięcie do przodu, a A/B pełnią funkcję tymczasowych miejsc docelowych;
						kolejne iteracje generują coraz bardziej złożone etapy krzywej Hilberta, które rysuje się na płaszczyźnie,
						łącząc wynikowe punkty.
					</>
				),
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">- </span>Krzywa Hilberta jest ciągła, ale nie różniczkowalna.
				</p>
				<p className="text-xl">
					<span className="font-bold">- </span>Jest samopodobna i ma wymiar fraktalny równy 2 (wypełnia obszar
					kwadratu).
				</p>
			</div>
		),
		component: HilbertCurveSet,
	},
	'atraktory-lorentza': {
		title: 'Atraktory Lorentza',
		path: 'atraktory-lorentza',
		authorName: 'Edward Norton Lorenz',
		authorImage: '/images/fractalAuthors/Edward_lorenz.jpg',
		authorDescription: `Edward Norton Lorenz (1917 - 2008) był amerykańskim matematykiem i meteorologiem, który stworzył podstawy przewidywania pogody oraz komputerowej meteorologii. Jego badania nad teorią chaosu, ujawniające wrażliwość układów dynamicznych na warunki początkowe, przyniosły mu Nagrodę Kyoto w 1991 roku. Pochodząc z naukowej rodziny, studiował matematykę na Dartmouth i Harvardzie, a meteorologię na MIT, gdzie obronił doktorat w 1948 roku. Pracował jako meteorolog w czasie II wojny światowej, a później mieszkał w Cambridge, Massachusetts, z żoną i trójką dzieci, aż do śmierci w 2008 roku.`,
		authorURL: 'https://en.wikipedia.org/wiki/Edward_Norton_Lorenz',
		definition: (
			<>
				Krzywa Hilberta została opracowana przez niemieckiego matematyka Davida Hilberta i należy do rodziny krzywych
				wypełniających przestrzeń. Mimo że topologicznie jest krzywą (czyli ciągłą funkcją z przedziału [0,1] do
				płaszczyzny), jej konstrukcja sprawia, że „wypełnia” ona całą jednostkową przestrzeń kwadratową. Oznacza to, że
				przy odpowiedniej granicy iteracji, obraz tej krzywej jest zbiór o miarze powierzchni równej tej jednostkowego
				kwadratu. Choć jej topologiczny wymiar wynosi 1 (jako krzywa), to wymiar fraktalny tej krzywej wynosi 2, co
				odzwierciedla jej zdolność „wypełniania” płaszczyzny
			</>
		),
		description: 'Opis dotyczący Atraktorów Lorentza',
		instruction: (
			<div>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">1. </span>Rozwiązujemy numerycznie układ równań różniczkowych z różnymi
					wartościami początkowymi.
				</p>
				<p className="text-justify text-xl text-textColor">
					<span className="font-bold">2. </span>Trajektorie układu zbiegają do dziwnego atraktora, który ma charakter
					fraktalny.
				</p>
			</div>
		),
		creationMethod: [
			{
				title: 'Numeryczne rozwiązanie równań różniczkowych',
				description:
					'Podstawowy algorytm tworzenia Atraktorów Lorentza - opisany wyżej. Typowe wartości parametrów to σ = 10, ρ = 28, β = 8/3.',
			},
			{
				title: 'Metoda komputerowa',
				description: (
					<>
						Używamy metody numerycznej, np. metody Rungego-Kutty czwartego rzędu, do rozwiązania równań, dla różnych
						warunków początkowych (x{subMethod(0)}, y{subMethod(0)}, z{subMethod(0)}) rozwiązujemy układ równań na
						pewnym przedziale czasu. Wynikiem są współrzędne (x, y, z), które można wizualizować jako trajektorię w
						przestrzeni trójwymiarowej.
					</>
				),
			},
		],
		properties: (
			<div>
				<p className="text-xl">
					<span className="font-bold">- </span>Atraktor Lorentza jest fraktalem i reprezentuje trajektorie układu
					dynamicznego w przestrzeni fazowej.
				</p>
				<p className="text-xl">
					<span className="font-bold">- </span>Charakteryzuje się chaosem deterministycznym - układ jest
					deterministyczny, ale jego zachowanie jest nieprzewidywalne na dłuższą metę.
				</p>
				<p className="text-xl">
					<span className="font-bold">- </span>Ma zastosowanie w meteorologii i teorii układów chaotycznych.
				</p>
			</div>
		),
		component: LorenzAttractor,
	},
}

export const FractalsTitles = [
	{
		title: 'Trójkąt Sierpińskiego',
		description: 'Informacje dotyczące Trójkąta Sierpinskiego',
		href: 'trojkat-sierpinskiego',
	},
	{
		title: 'Dywan Sierpińskiego',
		description: 'Informacje dotyczące Dywanu Sierpinskiego',
		href: 'dywan-sierpinskiego',
	},
	{
		title: 'Krzywa Kocha',
		description: 'Informacje dotyczące Krzywej Kocha',
		href: 'krzywa-kocha',
	},
	{
		title: 'Płatek Kocha',
		description: 'Informacje dotyczące Płatka Kocha',
		href: 'platek-kocha',
	},
	{
		title: 'Drzewo Binarne',
		description: 'Informacje dotyczące Drzewa Binarne',
		href: 'drzewo-binarne',
	},
	{
		title: 'Zbiór Cantora',
		description: 'Informacje dotyczące Zbioru Cantora',
		href: 'zbior-cantora',
	},
	{
		title: 'Zbiór Mandelbrota',
		description: 'Informacje dotyczące Zbioru Mandelbrota',
		href: 'zbior-mandelbrota',
	},
	{
		title: 'Zbiór Julii',
		description: 'Informacje dotyczące Zbioru Julii',
		href: 'zbior-julii',
	},
	{
		title: 'Krzywa Hilberta',
		description: 'Informacje dotyczące Krzywej Hilberta',
		href: 'krzywa-hilberta',
	},
	{
		title: 'Atraktory Lorentza',
		description: 'Informacje dotyczące Atraktorów Lorentza',
		href: 'atraktory-lorentza',
	},
]

export const FractalsOnADailyBasis: FractalsOnADailyBasisType = {
	przyroda: {
		title: 'Przyroda',
		path: 'przyroda',
		imagesList: [
			{
				name: 'Chmury',
				images: [
					{
						src: '/images/fractals/nature/clouds.jpg',
						copyrightLink: 'https://ciekawe.org/2015/11/02/fraktalne-wzory-w-przyrodzie/',
					},
					{
						src: '/images/fractals/nature/Actinoform_cloud.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Actinoform_cloud.jpg',
					},
				],
			},
			{
				name: 'Unerwienie liści',
				images: [
					{
						src: '/images/fractals/nature/leaf_1_web.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Li%C5%9B%C4%87',
					},
					{
						src: '/images/fractals/nature/Blatt-wiki.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Li%C5%9B%C4%87',
					},
				],
			},
			{
				name: 'Płatki śniegu',
				images: [
					{
						src: '/images/fractals/nature/snowflake.jpg',
						copyrightLink:
							'https://www.ekologia.pl/srodowisko/platki-sniegu-opis-ksztalty-i-zdjecia-jak-powstaje-snieg/',
					},
					{
						src: '/images/fractals/nature/snowflake2.jpeg',
						copyrightLink:
							'https://www.national-geographic.pl/przyroda/platki-sniegu-w-najlepszej-mozliwej-rozdzielczosci-aby-je-uchwycic-zbudowano-specjalny-aparat/',
					},
				],
			},
			{
				name: 'Mróz na szybach',
				images: [
					{
						src: '/images/fractals/nature/Mroz-maluje-na-szybie-juz-tylko-w-internecie-ZDJECIA-3.jpg',
						copyrightLink:
							'https://www.radiowroclaw.pl/articles/view/48389/Mroz-maluje-na-szybie-juz-tylko-w-internecie-ZDJeCIA',
					},
					{
						src: '/images/fractals/nature/mroz_na-oknie.jpg',
						copyrightLink: 'https://sklep.winkhaus.pl/pl/blog/post/mroz-na-oknie-sposoby-na-zamarzniete-okno',
					},
				],
			},
			{
				name: 'Fiordy',
				images: [
					{
						src: '/images/fractals/nature/Fjords_5.81273E_61.84781N.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Fjords_5.81273E_61.84781N.jpg',
					},
					{
						src: '/images/fractals/nature/Fjords_highlighted_by_snow.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Fjords_highlighted_by_snow.jpg',
					},
				],
			},
			{
				name: 'Błyskawice',
				images: [
					{
						src: '/images/fractals/nature/pio.jpg',
						copyrightLink: 'https://kalejdoskopmatematyczny.pk.edu.pl/fraktale/',
					},
					{
						src: '/images/fractals/nature/blyskawica.jpg',
						copyrightLink: 'http://student.krk.pl/013-Zmilczak-Kety/index.html',
					},
				],
			},
		],
		description: 'Przykłady fraktali w naturze.',
	},
	medycyna: {
		title: 'Medycyna',
		path: 'medycyna',
		imagesList: [
			{
				name: 'Neurony',
				images: [
					{
						src: '/images/fractals/medicine/neuron.jpg',
						copyrightLink: 'http://student.krk.pl/013-Zmilczak-Kety/index.html',
					},
					{
						src: '/images/fractals/medicine/neurons.png',
						copyrightLink:
							'https://naukawpolsce.pl/aktualnosci/news%2C33378%2Cnawet-dorosly-mozg-potrafi-wytwarzac-nowe-neurony.html',
					},
				],
			},
			{
				name: 'Chromosomy',
				images: [
					{
						src: '/images/fractals/medicine/Fotolia_18622944_XS.jpg',
						copyrightLink: 'https://www.testdna.pl/zjawisko-lamliwego-chromosomu-y-przyczyna-jego-utraty/',
					},
					{
						src: '/images/fractals/medicine/Niedoceniany-chromosom-Y.jpg',
						copyrightLink: 'https://ziebaclinic.pl/niedoceniany-chromosom-y/',
					},
				],
			},
			{
				name: 'Płuca',
				images: [
					{
						src: '/images/fractals/medicine/człowiek.jpg',
						copyrightLink: 'https://home.agh.edu.pl/~zobmat/2019/wyr_2/',
					},
					{
						src: '/images/fractals/medicine/pobrane.png',
						copyrightLink:
							'https://www.aptelia.pl/czytelnia/a721-Wszystko_o_plucach__budowa_funkcje_mozliwe_choroby_i_sposoby_dbania_o_pluca',
					},
				],
			},
		],
		description: 'Przykłady fraktali w medycynie.',
	},
	'grafika-komputerowa': {
		title: 'Grafika Komputerowa',
		path: 'grafika-komputerowa',
		imagesList: [
			{
				name: 'Grafika Komputerowa',
				images: [
					{
						src: '/images/fractals/graphics/Apophysis_fractal_flame.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Apophysis_fractal_flame.jpg',
					},
					{
						src: '/images/fractals/graphics/Fractal_Sentinel_SterlingW3165.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Fractal_Sentinel_SterlingW3165.jpg',
					},
					{
						src: '/images/fractals/graphics/Fractal_Flame_linear_yaprak001.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Fractal_Flame_linear_yaprak001.jpg',
					},
					{
						src: '/images/fractals/graphics/Electricsheep-21194.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Electricsheep-21194.jpg',
					},
					{
						src: '/images/fractals/graphics/Fractal_Flame_linear_kabuklu001.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Fractal_Flame_linear_kabuklu001.jpg',
					},
					{
						src: '/images/fractals/graphics/Electricsheep-24265.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Electricsheep-24265.jpg',
					},
					{
						src: '/images/fractals/graphics/Fractal_Flame_linear_kelebek003.jpg',
						copyrightLink: 'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Fractal_Flame_linear_kelebek003.jpg',
					},
					{
						src: '/images/fractals/graphics/Hidden_Mandarin_fractal_Sterling2_3365.jpg',
						copyrightLink:
							'https://pl.wikipedia.org/wiki/Fraktal#/media/Plik:Hidden_Mandarin_fractal_Sterling2_3365.jpg',
					},
				],
			},
		],
		description: 'Przykłady fraktali w grafice komputerowej.',
	},
}
