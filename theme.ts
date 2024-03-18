// src/theme.ts
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
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
  }
});

export default theme;