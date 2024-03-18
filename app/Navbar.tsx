// "use client";
import Link from 'next/link'
import Image from 'next/image'
import { css } from '@emotion/react'
import Paper from '@mui/material/Paper'
import { Stack } from '@mui/material'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div
      // css={css`
      //   width: 100%;
      //   position: fixed;
      //   top: 0;
      //   height: 70px;
      //   background: white;
      //   z-index: 5;
      // `}
    >
      <Paper elevation={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={12}
        >
          <nav>
            <Link href="/">
                <Image width={240} height={64} alt={`herbme logo`} src='/img/logo/herbme_logo_64.png' />
            </Link>
          </nav>
          <SearchBar />
        </Stack>
      </Paper>
    </div>
  )
}

export default Navbar