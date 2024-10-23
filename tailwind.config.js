/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				zoomInOut: {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.1)" },
				},
			},
			animation: {
				"zoom-loop": "zoomInOut 15s ease-in-out infinite",
			},
			
		},
	},
	plugins: [],
};
