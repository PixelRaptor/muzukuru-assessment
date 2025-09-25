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
		},
	},
	plugins: [],
}
