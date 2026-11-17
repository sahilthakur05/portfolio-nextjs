import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ground:   '#080808',
        surface:  '#111111',
        surface2: '#161616',
        editor:   '#1E1E1E',
        border:   '#252525',
        border2:  '#2D2D2D',
        accent:   '#00FF9C',
        blue:     '#58A6FF',
        purple:   '#C792EA',
        amber:    '#FFCB6B',
        muted:    '#8892B0',
        dim:      '#3C4048',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'Consolas', 'Courier New', 'monospace'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        pulse2:  'pulse2 2s infinite',
        blink:   'blink 1s step-end infinite',
        float:   'float 3s ease-in-out infinite',
        float2:  'float 3.5s ease-in-out 0.4s infinite',
        float3:  'float 2.9s ease-in-out 0.8s infinite',
      },
      keyframes: {
        pulse2: {
          '0%,100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(0,255,156,0.4)' },
          '50%':     { opacity: '0.8', boxShadow: '0 0 0 4px rgba(0,255,156,0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
