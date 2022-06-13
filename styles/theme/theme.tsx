export type PaletteMode = 'light' | 'dark'

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
          background: {
            default: '#00035b',
            paper: '#00035b',
          },
        }
      : {
          primary: {
            light: '#729840',
            main: '#446a12',
            dark: '#193f00',
            contrastText: '#fff',
          },
          secondary: {
            light: '#f0ffb7',
            main: '#bdd986',
            dark: '#8ca758',
            contrastText: '#000',
          },
          background: {
            default: '#729840',
            paper: '#ffffff',
          },
        }),
  },
})
