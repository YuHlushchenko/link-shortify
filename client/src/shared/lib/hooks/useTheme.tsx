import { useState } from 'react'
import { Theme } from '../../const/theme'

interface IUseTheme {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useTheme = (): IUseTheme => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)

  return {
    theme,
    setTheme,
  }
}
