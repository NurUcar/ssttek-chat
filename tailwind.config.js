/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto'],
			},
			colors: {
				philippineGray: '#8B8B8B',
			},
		},
	},
	plugins: [],
};
