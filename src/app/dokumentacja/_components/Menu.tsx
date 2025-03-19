'use client'
import React from 'react'
import { FaFile, FaFolder, FaUser } from 'react-icons/fa'
import FolderSystem from '@/components/FolderSystem'

export default function Menu({ setIsOpen }: { setIsOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
	return (
		<>
			<div
				className="flex items-start flex-col w-full text-[#a8a7a7] min-h-[125dvh]"
				onClick={() => setIsOpen?.(false)}
			>
				<FolderSystem label="Dokumentacja" icon={<FaFile size={20} />} />
				<FolderSystem
					label="Fraktale"
					parentURL="/dokumentacja"
					icon={<FaFolder size={20} />}
					files={[
						{
							label: 'Rodzaje fraktali',
							files: [
								'Trójkąt Sierpińskiego',
								'Dywan Sierpińskiego',
								'Krzywa Kocha',
								'Płatek Kocha',
								'Drzewo Binarne',
								'Zbiór Cantora',
								`Zbiór Mandelbrota`,
								'Zbiór Julii',
								'Krzywa Hilberta',
								'Atraktory Lorentza',
							],
						},
						{
							label: 'Fraktale na co dzień',
							files: ['Przyroda', 'Medycyna', 'Grafika komputerowa'],
						},
					]}
				/>
				<FolderSystem
					label="Liczby zespolone"
					parentURL="/dokumentacja"
					icon={<FaFolder size={20} />}
					files={[
						{
							label: 'Początek',
							files: [
								'Wprowadzenie',
								'Definicja',
								'Sprzężenie i moduł liczby zespolonej',
								'Działania na liczbach zespolonych',
								'Geometria liczb zespolonych',
							],
						},
					]}
				/>
				<FolderSystem label="Prawa autorskie" parentURL="/dokumentacja" icon={<FaUser size={20} />} />
			</div>
		</>
	)
}
