/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
            container: {
                center: true,
                screens: {
                    "3xl": "1440px",
                },
                padding: {
                    DEFAULT: "10px",
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"], // Use the "light" theme
    },
};
