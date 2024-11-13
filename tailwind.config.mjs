/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'blue': '#4880bd',
			'purple': '#310480',
			'white': '#ffffff',
			'black': '#000000'
		},
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {},
	},
	plugins: [],
}
