/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file structure
  ],
  theme: {
	fontFamily: {
		'inter': ['Inter'],
	  },
    extend: {
		colors:
		{
		  primary: '#9855FF',

		}
	},
  },
  plugins: [],
};
