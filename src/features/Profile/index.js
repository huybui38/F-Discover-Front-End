import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import styled from 'styled-components'

import NavBarExplore from '../../components/Navbar/NavbarExplore/NavbarExplore'

import DesktopProfile from './pages/desktop.profile'
import MobileProfile from './pages/mobile.profile'
import { resetProfileState, setGuest, setIsGuestView } from './profileSlice'

const ProfileContainer = styled.div`
    /* display: flex;
    flex-direction: column; */
`
export const Profile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(resetProfileState())
        }
    }, [dispatch])
    let { profileID } = useParams()
    const userID = useSelector((state) => state.auth.userID)
    useEffect(() => {
        if (!profileID) return dispatch(setIsGuestView(false))
        if (profileID == userID) {
            window.history.replaceState(null, 'New Page Title', '/profile')
            dispatch(setIsGuestView(false))
        }
    }, [profileID, userID, dispatch])
    const isDesktop = useBreakpoint(up('xl'))
    return (
        <ProfileContainer>
            <NavBarExplore></NavBarExplore>
            {isDesktop ? <DesktopProfile /> : <MobileProfile />}
        </ProfileContainer>
    )
}
