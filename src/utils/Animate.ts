import { Variants } from 'framer-motion'

export const Animate = (variants: Variants) => {
	return {
		initial: 'initial',
		animate: 'animate',
		exit: 'exit',
		variants,
	}
}
