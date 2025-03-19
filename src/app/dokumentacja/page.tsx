import React from 'react'
import { FaReact } from 'react-icons/fa'
import LearningFolder from './_components/LearningFolder'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { BsFillTriangleFill } from 'react-icons/bs'
import { TbNumbers } from 'react-icons/tb'

export default function page() {
	return (
		<div className="px-4 py-4">
			<div>
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Kilka słów na start</h2>
				</div>
				<p className="text-justify text-xl text-textColor">
					Strona internetowa została stworzona specjalnie na potrzeby konkursu „Zobaczyć Matematykę”. W procesie jej
					tworzenia wykorzystałem ogólnodostępne, darmowe zasoby oraz najnowocześniejsze technologie, dzięki czemu
					finalny efekt cechuje się nie tylko atrakcyjnym designem, ale również wysoką funkcjonalnością. Projekt powstał
					z myślą o zapewnieniu użytkownikom intuicyjnego i przyjemnego doświadczenia, a jednocześnie spełnia najwyższe
					standardy techniczne i estetyczne.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">O czym jest strona</h2>
				</div>
				<p className="text-justify text-xl text-textColor">
					Tworząc tę stronę internetową, kierowałem się dbałością o najwyższą jakość prezentacji treści. Moim celem
					było, aby każdy temat został szczegółowo opisany, starannie opracowany i atrakcyjnie przedstawiony, co pozwoli
					użytkownikom cieszyć się pełnym i satysfakcjonującym doświadczeniem. Szczególną uwagę poświęciłem tematom
					takim jak fraktale oraz liczby zespolone - zagadnieniom, które nie tylko są niezwykle interesujące, ale
					również z pewnością przyciągną uwagę zarówno pasjonatów matematyki, jak i osób dopiero zaczynających swoją
					przygodę z tą dziedziną.
				</p>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Czego dowiesz się z tej strony </h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full" style={{ gridAutoRows: '1fr' }}>
					<LearningFolder
						label="Fraktale"
						icon={<BsFillTriangleFill size={48} />}
						description="Poznasz, czym są fraktale, jakie występują ich rodzaje w matematyce oraz zobaczysz przykłady ich zastosowania w codziennym życiu."
						href="/dokumentacja/fraktale"
					/>
					<LearningFolder
						label="Liczby zespolone"
						icon={<TbNumbers size={48} />}
						description="Poznasz definicję liczb zespolonych, odkryjesz ich kluczowe właściwości i dowiesz się, jak znajdują zastosowanie w matematyce."
						href="/dokumentacja/liczby-zespolone"
					/>
				</div>
			</div>
			<div className="pt-20">
				<div className="pb-4">
					<h2 className="font-semibold text-4xl">Technologie użyte, do zrobienia strony</h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
					<LearningFolder
						label="Next.js"
						icon={<RiNextjsFill size={48} />}
						description="Next.js pozwala na tworzenie aplikacji internetowych najwyższej jakości."
						href="https://nextjs.org/"
					/>
					<LearningFolder
						label="Tailwindcss"
						icon={<RiTailwindCssFill size={48} />}
						description="Framework CSS, który umożliwia budowanie dowolnych projektów bezpośrednio w kodzie."
						href="https://tailwindcss.com/"
					/>
					<LearningFolder
						label="Typescript"
						icon={<BiLogoTypescript size={48} />}
						description="TypeScript, oparty na JavaScript ze ścisłym typowaniem, oferuje lepsze narzędzia."
						href="https://www.typescriptlang.org/"
					/>
					<LearningFolder
						label="React-icons"
						icon={<FaReact size={48} />}
						description="React-icons oferuje ikony najwyższej jakości, idealne do wykorzystania na stronach internetowych."
						href="https://react-icons.github.io/react-icons/"
					/>
				</div>
			</div>
		</div>
	)
}
