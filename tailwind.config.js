/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
	red: twColors.red[500],
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	gray: '#cdcdcd',
	secondary: '#161d25',
	primary: '#ff9902',
	'bg-color': '#f2f2f5',
	aqua: '#268697'
}
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors,
		extend: {}
	},
	plugins: []
}
