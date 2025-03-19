'use client'
import React from 'react'
import DailyFractalsCard from './_components/DailyFractalsCard'

export default function page() {
	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Fraktale na co dzień</h2>
				</div>
				<p className="text-justify text-xl text-textColor">
					Fraktale otaczają nas na co dzień, choć często nie zdajemy sobie z tego sprawy. Można je dostrzec w pozornie
					zwyczajnych rzeczach, jak choćby w liściach paproci. W tym miejscu poznasz przykłady fraktali występujących w
					różnych dziedzinach - od natury, przez medycynę, aż po grafikę komputerową.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-8">
					<h2 className="font-semibold text-4xl">Przykłady fraktali w dziedzinach</h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
					<DailyFractalsCard
						title="Przyroda"
						description="Informacje dotyczące fraktali w przyrodzie."
						href="/dokumentacja/fraktale/fraktale-na-co-dzien/przyroda"
					/>
					<DailyFractalsCard
						title="Medycyna"
						description="Informacje dotyczące fraktali w medycynie."
						href="/dokumentacja/fraktale/fraktale-na-co-dzien/medycyna"
					/>
					<DailyFractalsCard
						title="Grafika komputerowa"
						description="Informacje dotyczące fraktali w grafice komputerowej."
						href="/dokumentacja/fraktale/fraktale-na-co-dzien/grafika-komputerowa"
					/>
				</div>
			</div>
		</div>
	)
}
