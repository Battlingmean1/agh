import React from 'react'

export default function Footer() {
	return (
		<footer className="w-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 place-items-center w-full h-full py-20">
				<div className="flex flex-col items-center justify-center w-full">
					<span className="text-xl md:text-2xl lg:text-3xl text-center">Praca przygotowana na konkurs:</span>
					<span className="text-lg md:text-xl lg:text-2xl text-center">„Zobaczyć Matematykę”</span>
				</div>
				<div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
					<span className="text-3xl text-center">Autor pracy:</span>
					<span className="text-xl text-center">Miłosz Auguścik</span>
				</div>
			</div>
		</footer>
	)
}
