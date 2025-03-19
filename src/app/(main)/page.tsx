'use client'
import React from 'react'
import Link from 'next/link'

const page = () => {
	return (
		<>
			<div
				className="absolute w-full h-screen pointer-events-none -z-10"
				style={{
					backgroundImage:
						'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
					backgroundSize: '100px 100px',
				}}
			/>
			<main className="grid grid-rows-[100px_1fr_100px] bg-[radial-gradient(hsl(0,1%,12%,40%),hsl(0,0%,12%,40%),hsl(0,_0%,_0%,_100%)_60%)] justify-items-center items-center min-h-dvh p-8">
				<div className=" flex flex-col justify-center items-center row-start-2">
					<h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-center text-balance m-6">
						W Krainie Fraktali i Liczb Zespolonych
					</h1>
					<p className="text-lg md:text-md lg:text-3xl text-balance max-w-screen-2xl text-center text-[#a8a7a7]">
						W Krainie Fraktali i Liczb Zespolonych to podróż przez{' '}
						<span className="text-white">fascynujący świat matematyki</span>, gdzie fraktale i liczby zespolone
						odsłaniają swoje tajemnice, łącząc abstrakcję z pięknem geometrycznych struktur.
					</p>
					<Link
						href="/dokumentacja"
						className="mt-12 px-4 py-3 bg-[#ededed] rounded-md text-black text-xl hover:bg-[#d6d6d6]"
					>
						Przejdź dalej
					</Link>
				</div>
			</main>
		</>
	)
}

export default page
