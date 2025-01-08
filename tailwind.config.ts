import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        mainImage: "url('/images/superCar(1).jpg')",
        SecondImage: "url('/images/superCar(2).jpg')",
        ThirdImage: "url('/images/superCar(3).jpg')",
        FourthImage: "url('/images/superCar(4).jpg')",
        FifthImage: "url('/images/superCar(5).jpg')",
        SixthImage: "url('/images/superCar(6).jpg')",
        SeventhImage: "url('/images/superCar(7).jpg')",
        EighthImage: "url('/images/superCar(8).jpg')",
        NinthImage: "url('/images/superCar(9).jpg')",
       
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake","coffee","autumn", "winter"],
    darktheme: "coffee"
  },
} satisfies Config;
