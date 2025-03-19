import React from 'react'

export default function Table() {
	const complexNumbers = [
		{ general: 'a + bi', point: '(a, b)' },
		{ general: '7 + 3i', point: '(7, 3)' },
		{ general: '-2 - i', point: '(-2, -1)' },
		{ general: '7 - 7i', point: '(7, -7)' },
		{ general: 'i', point: '(0, 1)' },
		{ general: '4', point: '(4, 0)' },
		{ general: '0', point: '(0, 0)' },
	]

	return (
		<table className="table-auto w-full border-collapse border">
			<thead>
				<tr className="">
					<th className="border px-4 py-2 text-xl">Liczba zespolona w postaci ogólnej</th>
					<th className="border px-4 py-2 text-xl">Liczba zespolona jako punkt</th>
				</tr>
			</thead>
			<tbody>
				{complexNumbers.map((number, index) => (
					<tr key={index}>
						<td className="border px-4 py-2 text-center text-xl">{number.general}</td>
						<td className="border px-4 py-2 text-center text-xl">{number.point}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
