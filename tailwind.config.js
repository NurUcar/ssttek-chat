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
				darkGunmetal: '#1e2532',
				platinum: '#E8E8E8',
				yellowGreen: '#16c607',
				aliceBlue: '#F4F8FF',
				darkGunmetal: '#1E2532 ',
			},
			letterSpacing: {
				custom: '.14em',
			},
		},
	},
	plugins: [],
};
