import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [lineClamp],
}