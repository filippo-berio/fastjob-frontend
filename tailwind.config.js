/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            height: {
                '128': '32rem',
                '160': '40rem',
            }
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/aspect-ratio'),
    ]
}
