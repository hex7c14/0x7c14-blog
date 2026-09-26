/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        win: {
          bg: 'var(--win-bg)',
          'bg-elevated': 'var(--win-bg-elevated)',
          'card-bg': 'var(--win-card-bg)',
          'card-hover': 'var(--win-card-hover)',
          border: 'var(--win-border)',
          'text-primary': 'var(--win-text-primary)',
          'text-secondary': 'var(--win-text-secondary)',
          accent: 'var(--win-accent)',
          'accent-hover': 'var(--win-accent-hover)',
          'nav-active': 'var(--win-nav-active)',
        },
      },
      fontFamily: {
        sans: [
          '"Maple Mono NF CN"',
          '"MapleMono NF CN"',
          '"Maple Mono SC NF"',
          '"Maple Mono CN"',
          '"Maple Mono"',
          '"Cascadia Code"',
          '"Segoe UI Variable"',
          '"Segoe UI"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          '"Maple Mono NF CN"',
          '"MapleMono NF CN"',
          '"Maple Mono SC NF"',
          '"Maple Mono"',
          '"Cascadia Code"',
          '"JetBrains Mono"',
          'Consolas',
          'monospace',
        ],
      },
      borderRadius: {
        'win-card': '8px',
        'win-control': '4px',
      },
      boxShadow: {
        'win-1': 'var(--win-shadow-1)',
        'win-2': 'var(--win-shadow-2)',
      },
    },
  },
  plugins: [],
};
