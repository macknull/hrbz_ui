/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/img/logo/herbme_logo_64.png'
import { css } from '@emotion/react'
import Paper from '@mui/material/Paper'

const Navbar = () => {
  return (
    <div
      css={css`
        width: 100%;
        position: fixed;
        top: 0;
        height: 128px;
        background: white;
        z-index: 5;
      `}
    >
      <Paper elevation={2}>
        <nav>
          <Link href="/">
            <a
              css={css`
                margin-left: 24px;
                cursor: pointer;
              `}
            >
              <Image alt={`herbme logo`} src={logo} />
            </a>
          </Link>
        </nav>
      </Paper>
    </div>
  )
}

export default Navbar
