import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<div>
			<Link href="/">
				<p className="text-sm sm:text-lg md:text-2xl lg:text-3xl">W Krainie Fraktali i Liczb Zespolonych</p>
			</Link>
		</div>
	)
}

export default Logo
