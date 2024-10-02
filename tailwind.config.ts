import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#ffffff",
        primaryColor:'#678E61',
        bgicon:'#7C9E77',
        bannerBg:'#F3F3F3',
        cartBg: '#F7F7F7',
      },
    },
  },
  plugins: [],
};
export default config;
