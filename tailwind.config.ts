import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { gold:'#fbbf24', emerald:'#10b981' }} },
  plugins: []
}
export default config
