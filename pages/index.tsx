import type { NextPage } from 'next'
import Head from 'next/head'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import SearchBar from '../components/SearchBar'
import logo from '../public/img/logo/herbme_logo_123.png'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

const Home: NextPage<string, never> = () => {
  const theme = useTheme()
  return (
    <div>
      <Head>
        <title>herbme - Encyclopedia herbam</title>
      </Head>
      <Container maxWidth="md">
        <Paper
          sx={{
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
              sx={{ padding: '16px', background: theme.palette.primary.dark }}
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
                    color: theme.palette.primary.contrastText,
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
