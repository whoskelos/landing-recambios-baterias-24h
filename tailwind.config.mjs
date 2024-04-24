import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        hero: "calc(100svh - 3.5rem)",
      },
      backgroundImage: {
        "gradiennt-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [animations],
  darkMode: "selector",
};
