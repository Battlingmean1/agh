import TextColorOutline from '@/components/TextColorOutline'
import { subMethod, supMethod } from '@/utils/formatter'
import React from 'react'

export default function page() {
	const borderColor = '#6b1dcf'
	return (
		<div className="px-4 py-4">
			<div className="pb-4">
				<TextColorOutline backgroundColor={borderColor}>
					<h2 className="font-semibold text-2xl xl:text-4xl">Sprzężenie i moduł liczby zespolonej</h2>
				</TextColorOutline>
			</div>
			<div className="">
				<p className="text-justify text-xl text-textColor">
					Załóżmy, że mamy liczbę zespoloną <span className="font-bold">z = a + bi</span>. Wtedy liczbę{' '}
					<span className="font-bold">a - bi</span> nazywamy sprzężoną liczbą zespoloną i zapisujemy ją jako{' '}
					<span className="overline">z</span>.
				</p>
				<div className="flex flex-col items-center justify-center pt-10">
					<div className="flex flex-col items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl">
						<p className="text-justify text-xl text-textColor">
							<span className="overline">z</span> = a - bi
						</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Przykład 1.</h2>
					</TextColorOutline>
				</div>
				<div>
					<p className="text-justify text-xl text-textColor">
						1. Jeżeli z = 5 + 9i, to <span className="overline">z</span> = 5 - 9i
					</p>
					<p className="text-justify text-xl text-textColor">
						2. Jeżeli z = -3i, to <span className="overline">z</span> = 3i
					</p>
					<p className="text-justify text-xl text-textColor">
						4. Jeżeli z = 8i + 3, to <span className="overline">z</span> = 3 - 8i
					</p>
					<p className="text-justify text-xl text-textColor">
						3. Jeżeli z = &#8730;2 - i, to <span className="overline">z</span> = &#8730;2 + i
					</p>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Własności liczb sprzężonych</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">Dla dowolnych z, z1, z2 ∈ C</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								z + <span className="overline">z</span> = 2Re(z)
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								<span className="overline">z1 + z2</span> = <span className="overline">z1</span> +{' '}
								<span className="overline">z2</span>
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								z * <span className="overline">z</span> = |z|{supMethod(2)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Moduł z liczby zespolonej</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor italic">sqrt - pierwiastek drugiej potęgi</p>
				<p className="text-justify text-xl text-textColor">
					Przyjmijmy, że mamy daną liczbę zespoloną z + <span className="font-bold">a + bi</span>. Wówczas liczbę{' '}
					<span className="font-bold">
						sqrt(a{supMethod(2)} + b{supMethod(2)})
					</span>{' '}
					nazywamy modułem liczby z i oznaczamy symbolem |z|. Czyli:
				</p>
				<div className="flex flex-col items-center justify-center pt-10 pb-6">
					<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
						<p className="text-xl">
							|z| = sqrt(a<sup>2</sup> + b<sup>2</sup>)
						</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Przykład 2.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">Obliczamy moduł liczby zespolonej z = 8 + 6i</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								|z| = sqrt(8{supMethod(2)} + 6{supMethod(2)}) = <br /> = sqrt(64 + 36) = <br />= sqrt(100) = 10
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">Obliczamy moduł liczby zespolonej z = 3 + 2i</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								|z| = sqrt(3{supMethod(2)} + 2{supMethod(2)}) = <br /> = sqrt(9 + 4) = sqrt(13)
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">Obliczamy moduł liczby zespolonej z = 4 - 5i</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								|z| = sqrt(4{supMethod(2)} + (-5){supMethod(2)}) = <br /> = sqrt(16 + 25) = sqrt(41)
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">Obliczamy moduł liczby zespolonej z = 6i</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								|z| = sqrt(0{supMethod(2)} + 6{supMethod(2)}) = <br /> = sqrt(0 + 36) = <br /> = sqrt(36) = 6
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Przykład 3.</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					Obliczamy moduł liczby zespolonej z = 3i{supMethod(2)} - 4i + 2
				</p>
				<p className="text-justify text-xl text-textColor">Upraszczamy wyrażenie</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								z = 3i{supMethod(2)} - 4i + 2 = <br /> = 3 * (-1) - 4i + 2 = <br />
								-1 - 4i
							</p>
						</div>
					</div>
				</div>
				<p className="text-justify text-xl text-textColor">Obliczamy moduł:</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl text-center">
								|z| = sqrt((-1){supMethod(2)} + (-4){supMethod(2)}) = <br /> = sqrt(1 + 16) = sqrt(17)
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={borderColor}>
						<h2 className="font-semibold text-2xl xl:text-4xl">Własności modułu</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">
					Dla dowolnych z, z{supMethod(1)}, z{supMethod(2)} ∈ C
				</p>
				<div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								z * <span className="overline">z</span> = |z|{supMethod(2)}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								|z{subMethod(1)} * z{subMethod(2)}| = |z{subMethod(1)}| * |z{subMethod(2)}|
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center pt-10 pb-6">
						<div className="flex items-center justify-center border p-12 w-[20rem] lg:w-[25rem] rounded-2xl gap-4">
							<p className="text-xl">
								|z{subMethod(1)} + z{subMethod(2)}| {'<='} |z{subMethod(1)}| + |z{subMethod(2)}|
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
