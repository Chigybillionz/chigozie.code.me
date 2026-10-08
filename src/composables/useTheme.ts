import { ref } from 'vue'

const getInitialTheme = (): boolean => {
  if (typeof window === 'undefined') return true
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    return storedTheme === 'dark'
  }
  // Default to dark mode for portfolio, or check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const isDark = ref<boolean>(getInitialTheme())

export const applyTheme = (dark: boolean) => {
  isDark.value = dark
  if (typeof document !== 'undefined') {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }
}

export const toggleTheme = () => {
  applyTheme(!isDark.value)
}

// Initialize on load
if (typeof document !== 'undefined') {
  applyTheme(isDark.value)
}
