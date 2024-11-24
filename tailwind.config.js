/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#3b4044",
				white: "#ffffff",
				placeholder: "#c1c1c1",
				border: "#adbbc4",
				focus: "#2495e7",
				brand: "#2ecc87",
				"brand-dark": "#2e9f64",
				error: "#ff3d72",
				readonly: "#fbfbfb",
				"brand-disabled": "#baead5",
				gray: "#f0f5f6",
			},
			fontSize: {
				base: "0.875rem" /* 14px */,
				lg: "1rem" /* 16px */,
				xl: "1.125rem" /* 18px */,
				"2xl": "1.5rem" /* 24px */,
			},
			borderRadius: {
				none: "0rem",
				sm: "0.2857142857142857rem" /* 4px */,
				md: "0.35714285714285715rem" /* 5px */,
				lg: "0.5714285714285714rem" /* 8px */,
			},
			padding: {
				// biome-ignore format: 2と3の間の値
				"2.5": "0.625rem" /* 10px */,
			},
		},
	},
	plugins: [],
};
