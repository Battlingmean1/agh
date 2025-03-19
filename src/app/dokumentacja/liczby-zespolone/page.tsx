import { supMethod } from '@/utils/formatter'
import React from 'react'
import LearningFolder from '../_components/LearningFolder'
import { MdNotStarted } from 'react-icons/md'

export default function page() {
	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Liczby zespolone</h2>
				</div>
				<p className="text-justify text-xl text-textColor">
					Liczba zespolona to wyrażenie w postaci z = a + bi, gdzie a i b są liczbami rzeczywistymi, a i jest jednostką
					urojoną, która spełnia i{supMethod(2)} = -1. Zbiór liczb zespolonych, oznaczany przez C jest rozszerzeniem
					zbioru liczb rzeczywistych R, Liczby zespolone obejmują liczby rzeczywiste jako przypadek szczególny, gdy b =
					0, oraz liczby urojone, gdy a = 0. Operacje na liczbach zespolonych, takie jak dodawanie, mnożenie i
					dzielenie, wykonuje się przy użyciu właściwości liczb rzeczywistych oraz zasady i{supMethod(2)} = -1. Liczby
					zespolone można przedstawić graficznie na płaszczyźnie zespolonej, gdzie oś pozioma reprezentuje część
					rzeczywistą, a oś pionowa część urojoną. Zastosowania liczb zespolonych są szerokie i obejmują m.in.
					rozwiązywanie równań, które nie mają rozwiązań w zbiorze liczb rzeczywistych.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Czego dowiesz się z tej strony </h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
					<LearningFolder
						label="Początek"
						icon={<MdNotStarted size={48} />}
						description="Tu zacznie się Twoja przygoda z liczbami zespolonymi."
						href="/dokumentacja/liczby-zespolone/poczatek"
					/>
				</div>
			</div>
		</div>
	)
}
