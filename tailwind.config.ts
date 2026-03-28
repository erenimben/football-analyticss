import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0b1020',
        card: '#121934',
        accent: '#60a5fa',
        success: '#22c55e',
        warning: '#f59e0b'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96,165,250,0.2), 0 10px 30px rgba(15,23,42,0.4)'
      }
    }
  },
  plugins: []
};

export default config;
