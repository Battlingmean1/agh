import React from 'react'
import ChapterCard from './_components/ChapterCard'

export default function page() {
	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Początek</h2>
				</div>
				<p className="text-justify text-xl text-textColor">
					Tutaj poznasz liczby zespolone i przejdziesz przez krótki kurs składający się z 10 lekcji. Dowiesz się, czym
					jest liczba zespolona, jednostka urojona oraz inne kluczowe pojęcia. Nauczysz się wykonywać działania na
					liczbach zespolonych, takie jak dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie czy pierwiastkowanie,
					a także poznasz funkcje zespolone i wiele więcej.
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-20" style={{ gridAutoRows: '1fr' }}>
				<ChapterCard
					title="Wprowadzenie"
					lesson={1}
					description="Kluczowe informacje na temat liczb zespolonych, ich własności oraz sposobów ich przedstawiania."
					href="/dokumentacja/liczby-zespolone/poczatek/wprowadzenie"
				/>
				<ChapterCard
					title="Definicja"
					lesson={2}
					description="Poznasz sposoby zapisu liczby zespolonej oraz jej różne formy przedstawienia."
					href="/dokumentacja/liczby-zespolone/poczatek/definicja"
				/>
				<ChapterCard
					title="Sprzężenie i moduł liczby zespolonej"
					lesson={3}
					description="Poznasz znaczenie liczby sprzężonej oraz sposób obliczania modułu liczby zespolonej."
					href="/dokumentacja/liczby-zespolone/poczatek/sprzezenie-i-modul-liczby-zespolonej"
				/>
				<ChapterCard
					title="Działania na liczbach zespolonych"
					lesson={4}
					description="Podstawowe działania wykonywane na liczbach zespolonych oraz ich właściwości."
					href="/dokumentacja/liczby-zespolone/poczatek/dzialania-na-liczbach-zespolonych"
				/>
				<ChapterCard
					title="Geometria liczb zespolonych"
					lesson={5}
					description="Dowiesz się co to jest postać trygonometryczna liczby zespolonej."
					href="/dokumentacja/liczby-zespolone/poczatek/geometria-liczb-zespolonych"
				/>
			</div>
		</div>
	)
}
