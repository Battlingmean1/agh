import React from 'react'

type Props = {
	backgroundColor: string | undefined
	children: React.ReactNode
}

export default function TextColorOutline({ backgroundColor, children }: Props) {
	return (
		<div className="pb-4 flex">
			<div className={`px-4 py-3 border-b-4 rounded-2xl text-white`} style={{ borderColor: `${backgroundColor}` }}>
				{children}
			</div>
		</div>
	)
}
