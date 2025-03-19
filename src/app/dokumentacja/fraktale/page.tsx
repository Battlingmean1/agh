import React from 'react'
import LearningFolder from '../_components/LearningFolder'
import { TbGeometry } from 'react-icons/tb'
import { FaLeaf } from 'react-icons/fa'

export default function page() {
	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Fraktale</h2>
				</div>
				<p className="text-justify text-xl text-textColor">
					W potocznym znaczeniu fraktal to zazwyczaj obiekt samopodobny, czyli taki, którego fragmenty przypominają
					całość, lub struktura o nieskończonej złożoności, odsłaniająca coraz bardziej skomplikowane detale przy
					dowolnym powiększeniu. Ze względu na ogromną różnorodność takich obiektów, matematycy unikają podawania
					ścisłej definicji i zamiast tego opisują fraktal jako zbiór spełniający większość z poniższych cech:
					<br />
					<span>- wykazuje samopodobieństwo - dokładne, przybliżone lub stochastyczne,</span>
					<br />
					<span>- ma charakterystyczny, nieregularny kształt („poszarpany”, „kłębiasty” itp.).</span>
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Czego dowiesz się z tej strony </h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
					<LearningFolder
						label="Rodzaje fraktali"
						icon={<TbGeometry size={48} />}
						description="Poznasz różne rodzaje fraktali, ich definicje, właściwości oraz metody tworzenia, a na końcu zobaczysz ich wizualizację."
						href="/dokumentacja/fraktale/rodzaje-fraktali"
					/>
					<LearningFolder
						label="Fraktale na co dzień"
						icon={<FaLeaf size={48} />}
						description="Poznasz różnorodne przykłady fraktali, które możemy zaobserwować naturze w medycynie, jak i w grafice komputerowej."
						href="/dokumentacja/fraktale/fraktale-na-co-dzien"
					/>
				</div>
			</div>
		</div>
	)
}
