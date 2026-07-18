import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const applyTheme = (dark) => {
    isDark.value = dark
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      applyTheme(savedTheme === 'dark')
    } else {
      // Default to dark mode
      applyTheme(true)
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
