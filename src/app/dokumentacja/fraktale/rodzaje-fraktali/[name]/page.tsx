import TextColorOutline from '@/components/TextColorOutline'
import { Fractals } from '@/data/fractals'
import Image from 'next/image'
import Link from 'next/link'
import TextHoverHelper from '@/components/TextHoverHelper'

export async function generateStaticParams() {
	return [
		{ name: 'trojkat-sierpinskiego' },
		{ name: 'dywan-sierpinskiego' },
		{ name: 'krzywa-kocha' },
		{ name: 'platek-kocha' },
		{ name: 'drzewo-binarne' },
		{ name: 'zbior-cantora' },
		{ name: 'zbior-mandelbrota' },
		{ name: 'zbior-julii' },
		{ name: 'krzywa-hilberta' },
		{ name: 'atraktory-lorentza' },
	]
}

type Props = {
	params: Promise<{ name: string }>
}

export default async function Page({ params }: Props) {
	const unwrappedParams = await params
	const query = unwrappedParams.name
	const decodedItem = decodeURIComponent(query)
	const item = Fractals[decodedItem]
	const {
		title,
		definition,
		instruction,
		creationMethod,
		properties,
		authorImage,
		authorDescription,
		authorURL,
		authorName,
		path,
	} = item

	const backgroundColor = () => {
		switch (path) {
			case 'trojkat-sierpinskiego':
				return '#d6421a'
				break
			case 'dywan-sierpinskiego':
				return '#718ed9'
				break
			case 'krzywa-kocha':
				return '#b360eb'
				break
			case 'platek-kocha':
				return '#e340c5'
				break
			case 'drzewo-binarne':
				return '#e6355b'
				break
			case 'zbior-cantora':
				return '#edab55'
				break
			case 'zbior-mandelbrota':
				return '#eb7546'
				break
			case 'zbior-julii':
				return '#2d9ab5'
				break
			case 'krzywa-hilberta':
				return '#71e65a'
				break
			case 'atraktory-lorentza':
				return '#6f5ae6'
				break
			default:
				console.log('Brak danych')
				break
		}
	}

	return (
		<div className="px-4 py-4">
			<div>
				<TextColorOutline backgroundColor={backgroundColor()}>
					<h2 className="font-semibold text-3xl xl:text-4xl">{title.toUpperCase()}</h2>
				</TextColorOutline>
				<p className="text-justify text-xl text-textColor">{definition}</p>
				<div className="pt-6 w-fit">
					<Image src={authorImage} alt={authorName} width={350} height={350} />
					<div className="flex items-center justify-between mt-1">
						<TextHoverHelper title={authorName} description={authorDescription} />
						<Link href={authorURL}>Źródło</Link>
					</div>
					<div className="lg:hidden">
						<TextColorOutline backgroundColor={backgroundColor()}>
							<h2 className="font-semibold text-3xl xl:text-4xl">O Autorze</h2>
						</TextColorOutline>
						<p className="text-textColor text-xl">{authorDescription}</p>
					</div>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={backgroundColor()}>
						<h2 className="font-semibold text-3xl xl:text-4xl">Jak powstaje</h2>
					</TextColorOutline>
				</div>
				{instruction}
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={backgroundColor()}>
						<h2 className="font-semibold text-3xl xl:text-4xl">Wizualizacja</h2>
					</TextColorOutline>
				</div>
				{item?.component && <item.component />}
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={backgroundColor()}>
						<h2 className="font-semibold text-3xl xl:text-4xl">Własności</h2>
					</TextColorOutline>
				</div>
				{properties}
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<TextColorOutline backgroundColor={backgroundColor()}>
						<h2 className="font-semibold text-3xl xl:text-4xl">Metody tworzenia</h2>
					</TextColorOutline>
				</div>
				{creationMethod?.map(({ title, description }, index) => (
					<div className={`${index === 0 ? '' : 'pt-4'}`} key={index}>
						<h3 className="text-2xl">{title}</h3>
						<p className="text-xl">{description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
