import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from './Navbar'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../theme';
import Paper from '@mui/material/Paper'

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "herbme",
  description: "Encyclopedia herbam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
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
                /* backgroundColor: theme.palette.primary.main, */
              }}
            />
            <section>
              <NavBar />
            </section>
            <section>
              <main className='relative top-70'>
                {children}
              </main>
            </section>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
