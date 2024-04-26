import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "fade-scroll": "fade-scroll linear both"
      },
      keyframes:{
        "fade-scroll": {
          to: {
            opacity: 1,
          }
        }
      },
      height: {
        hero: "calc(100svh - 3.5rem)",
      },
      backgroundImage: {
        "gradiennt-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderRadius: {
        "50-50": "50% 50%"
      }
    },
  },
  plugins: [animations],
  darkMode: "selector",
};
