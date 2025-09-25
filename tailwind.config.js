/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", "ui-sans-serif", "system-ui"],
			},
			colors: {
				gray_dark: "#2E2F2F",
				gray_light: "#F3F5F7",
				orange_dark: "#ff4810",
			},

			screens: {
				tall: {
					raw: `only screen and (max-height: 960px) and (max-width: 480px)`,
				},
				wide: {
					raw: `only screen and (max-height: 480px) and (max-width: 960px)`,
				},
				rg: {
					raw: `only screen and (min-width: 767px) and (max-width: 1300px)`,
				},
				sm: {
					raw: `only screen and (max-width: 768px)`,
				},
			},
		},
	},
	plugins: [],
}
