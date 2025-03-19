import TextColorOutline from '@/components/TextColorOutline'
import { FractalsOnADailyBasis } from '@/data/fractals'
import Image from 'next/image'
import Link from 'next/link'
type Props = {
	params: Promise<{ name: string }>
}

export default async function Page({ params }: Props) {
	const unwrappedParams = await params
	const query = unwrappedParams.name
	const decodedItem = decodeURIComponent(query)
	const item = FractalsOnADailyBasis[decodedItem]
	const { title, description, imagesList, path } = item

	const backgroundColor = () => {
		switch (path) {
			case 'przyroda':
				return '#139c27'
				break
			case 'medycyna':
				return '#136c9c'
				break
			case 'grafika-komputerowa':
				return '#621682'
				break
			default:
				console.log('Brak danych')
				break
		}
	}

	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<TextColorOutline backgroundColor={backgroundColor()}>
						<h2 className="font-semibold text-4xl">{title.toUpperCase()}</h2>
					</TextColorOutline>
				</div>
				<p className="text-justify text-xl text-textColor">{description}</p>
			</div>
			<div className="pt-20">
				{imagesList.map(({ name, images }, index) => (
					<div className={`${index === 0 ? '' : 'pt-20'}`} key={index}>
						<TextColorOutline backgroundColor={backgroundColor()}>
							<h2 className="font-semibold text-4xl">{name}</h2>
						</TextColorOutline>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
							{images.map(({ src, copyrightLink }, index) => (
								<div key={index}>
									<div className="w-full aspect-[2/2] overflow-hidden">
										<Image src={src} alt="photo" width={300} height={300} className="w-full h-full object-cover" />
									</div>
									<div className="mt-1">
										<Link href={copyrightLink} className="text-textColor">
											Źródło
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
