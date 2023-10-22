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
                roboto: ["var(--font-roboto)"],
                raleway: ["var(--font-raleway)"],
            },
            colors: {
                primary: "#05cbd2",
                secondary: "#debca8",
                third: "#0d162f",
                fourth: "#2d7c8b",
                fifth: "#f28e42",
                sixth: "#e4554e",
            },
        },
    },
    plugins: [],
};
