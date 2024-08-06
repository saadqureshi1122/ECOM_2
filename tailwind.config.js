/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                "dark-navy-blue": "#131921",
                "light-yellow": "#fcb96a",
                "footer-color": "#3b4149",
            },
            textColor: {
                "navy-blue": "#131921",
                "light-yellow": "#fcb96a",
                "footer-color": "#3b4149",
            },
            borderColor: {
                gray: " #E5E7EB",
            },
            borderWidth: {
                "1px": "0.5px",
            },

            keyframes: {
                slideIn: {
                    "0%": {
                        transform: "translateX(25px)",
                        opacity: "0",
                        display: "none",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                        display: "flex",
                    },
                },
                slideOut: {
                    "0%": {
                        transform: "translateY(0)",
                        opacity: "1",
                        display: "flex",
                    },
                    "100%": {
                        transform: "translateX(25px)",
                        opacity: "0",
                        display: "none",
                    },
                },
            },
            animation: {
                slideIn: "slideIn 0.4s forwards",
                slideOut: "slideOut 0.4s forwards",
            },
        },
    },
    plugins: [],
};
