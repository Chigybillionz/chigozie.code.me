import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      screens: {
        'tablet': '1024px', // iPad 4 landscape breakpoint
      },
    },
  },
} satisfies Config
