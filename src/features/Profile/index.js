import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import DesktopProfile from './pages/desktop.profile'
import MobileProfile from './pages/mobile.profile'
import { setGuest } from './profileSlice'

export const Profile = () => {
    let { profileID } = useParams()

    const isDesktop = useBreakpoint(up('xl'))
    return isDesktop ? <DesktopProfile /> : <MobileProfile />
}
