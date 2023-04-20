/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "dark-grey": "#121212",
            white: "#FFFFFF",
            "white-smoke": "#F8F8F8",
            grey: "#EDEDF1",
            "foggy-grey": "#ACA99F",
            "sonic-silver": "#777777",
            warning: "#D24340",
            "light-yellow": "#FBC81D",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            dropShadow: {
                "2xl": "0px 5px 15px rgba(0, 0, 0, 0.75)",
                "3xl": "0px 5px 25px rgba(0, 0, 0, 0.25)",
            },
            fontSize: {
                "0.5xl": ["19px", "19px"],
                lg: ["18px", "20px"],
                "2xl": ["24px", "24px"],
                "4.5xl": ["36px", "46px"],
            },
            spacing: {
                6.5: "27px",
                7.5: "30px",
            },
            borderRadius: {
                "3.5xl": "30px",
                "4xl": "35px",
            },
        },
    },
    plugins: [
        // ...
        require("@tailwindcss/forms"),
    ],
};
