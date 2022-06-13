import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { getDesignTokens, PaletteMode } from '../styles/theme/theme'
import PageLayout from '../components/PageLayout'
import { createContext, useState, useMemo, useContext } from 'react'
import Paper from '@mui/material/Paper'

const ColorModeContext = createContext({ toggleColorMode: () => {} })
export const UseColorModeContext = () => {
  return useContext(ColorModeContext)
}

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light')
  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) =>
        prevMode === 'light' ? 'dark' : 'light'
      )
    },
  }

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper
          sx={{
            backgroundImage: `url(/img/bg/pattern_5_scaled.png)`,
            position: 'fixed',
            top: 0,
            width: '100vw',
            height: '100vh',
            zIndex: '-1',
            opacity: '1.0',
            backgroundColor: theme.palette.primary.main,
          }}
        />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default MyApp
