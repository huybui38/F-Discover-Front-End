import React from 'react'

import { down, up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { HomeDesktop } from './pages/HomeDesktop'
import { HomeMobile } from './pages/HomeMobile'

export const Home = () => {
    const isTablet = useBreakpoint(down('lg'))
    return !isTablet ? <HomeDesktop /> : <HomeMobile />
}

export default Home
