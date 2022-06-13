/** @jsxImportSource @emotion/react */
import Navbar from './nav/Navbar'
import { css } from '@emotion/react'

type LayoutProps = {
  children: JSX.Element
}

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main
        css={css`
          position: relative;
          top: 132px;
        `}
      >
        {children}
      </main>
    </>
  )
}

export default PageLayout
