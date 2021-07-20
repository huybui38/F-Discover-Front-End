import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { FaBars, FaArrowLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

// import { SidebarMobile } from '../../features/Explore/components/SidebarMobile'
import logo from '../../assets/img/logoTitle.png'
import { authSelector } from '../../features/Login/loginSlice'
import Avatar from '../Avatar'
import { SearchForm } from '../SearchForm'
import { SidebarMobile } from '../SidebarMobile'
import {
    Wrapper,
    Logo,
    LoginWrapper,
    SidebarWrapper,
    Overlay,
    IconWrapper,
    NavbarItem,
} from './NavbarMobile.elements'

const propType = {
    background_color: PropTypes.string,
    text_color: PropTypes.string,
    children: PropTypes.any,
}

export const NavbarMobile = (props) => {
    let isAuthenticated = useSelector(authSelector)
    const mobile = useBreakpoint(down('sm'))
    const [onSidebar, setOnSidebar] = useState(false)

    return (
        <Wrapper {...props} padding={mobile ? '18px' : '48px'}>
            <div>
                <IconWrapper onClick={() => setOnSidebar(!onSidebar)}>
                    <FaBars
                        className={onSidebar ? 'sidebar__list--disable' : 'sidebar__list--active'}
                    />
                    <FaArrowLeft
                        className={!onSidebar ? 'sidebar__back--disable' : 'sidebar__back--active'}
                    />
                </IconWrapper>
                <Logo src={logo} art="Logo"></Logo>
            </div>
            <NavbarItem>
                {mobile ? null : <SearchForm width="150px" />}
                <LoginWrapper {...props}>
                    {isAuthenticated ? <Avatar src="#" /> : <Link to="/login">Login</Link>}
                </LoginWrapper>
            </NavbarItem>
            <SidebarWrapper className={onSidebar ? 'sidebar--on' : 'sidebar--disable'}>
                <Overlay className="sidebar__overlay" onClick={() => setOnSidebar(!onSidebar)} />
                <SidebarMobile
                    padding={mobile ? '18px' : '48px'}
                    width={mobile ? '250px' : '300px'}
                />
            </SidebarWrapper>
        </Wrapper>
    )
}

NavbarMobile.propTypes = propType

export default NavbarMobile
