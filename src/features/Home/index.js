import React from 'react'

import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { HomeDesktop } from './pages/HomeDesktop'
import { HomeMobile } from './pages/HomeMobile'

export const Home = () => {
    const isDesktop = useBreakpoint(up('lg'))
    return isDesktop ? <HomeDesktop /> : <HomeMobile />
}

export default Home
