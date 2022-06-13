import type { NextPage } from 'next'
import Head from 'next/head'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import SearchBar from '../components/SearchBar'
import logo from '../public/img/logo/herbme_logo_123.png'
import Image from 'next/image'

const Home: NextPage<string, never> = () => {
  return (
    <div>
      <Head>
        <title>HRBZ.org - Encyclopedia herbam</title>
      </Head>
      <Paper
        sx={{
          backgroundImage: `url(/img/bg/pattern_5_scaled.png)`,
          position: 'fixed',
          top: 0,
          width: '100vw',
          height: '100vh',
          zIndex: '-1',
          opacity: '1.0',
          backgroundColor: '#80ed99',
        }}
      />
      <Container maxWidth="md">
        <Paper
          sx={{
            background: 'white',
            marginTop: '60px',
          }}
          elevation={6}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ pb: '60px', pt: '20px' }}
          >
            <Paper
              elevation={4}
              sx={{ padding: '16px', background: 'darkgreen' }}
            >
              <Stack direction="column" alignItems="center">
                <Box
                  sx={{ position: 'relative', height: '123px', width: '462px' }}
                >
                  <Image
                    alt={`herbme logo`}
                    src={logo}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontStyle: 'italic',
                    fontWeight: 'light',
                    color: 'lightgreen',
                  }}
                >
                  Encyclopedia hebam
                </Typography>
              </Stack>
            </Paper>
            <Typography
              variant="h4"
              sx={{
                fontStyle: 'italic',
                paddingTop: '40px',
                fontWeight: 'light',
              }}
            >
              search for a herb:
            </Typography>
            <SearchBar />
          </Stack>
        </Paper>
      </Container>
    </div>
  )
}

export default Home
