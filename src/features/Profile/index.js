import React from 'react'

import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import DesktopProfile from './pages/desktop.profile'
import MobileProfile from './pages/mobile.profile'

export const Profile = () => {
    const isDesktop = useBreakpoint(up('xl'))
    return isDesktop ? <DesktopProfile /> : <MobileProfile />
}
