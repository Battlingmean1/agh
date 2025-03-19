import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				sm: '100%',
				md: '100%',
				lg: '100%',
				xl: '1800px',
			},
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				textColor: '#e0e0e0',
				primary: '#3f95eb',
			},
		},
	},
	plugins: [],
} satisfies Config
