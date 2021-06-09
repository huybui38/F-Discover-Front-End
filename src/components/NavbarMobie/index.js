import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import logo from '../../assets/img/logo.png'
import { SearchForm } from '../SearchForm'
import { SidebarMobie } from '../SidebarMobie'
import { Wrapper, Logo, LoginWrapper, SidebarWrapper, Overlay } from './NavbarMobie.elements'

const propType = {
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    children: PropTypes.any,
}

export const NavbarMobie = (props) => {
    const mobie = useBreakpoint(down('sm'))
    const [onSidebar, setOnSidebar] = useState(false)

    return (
        <Wrapper {...props} padding={mobie ? '18px' : '48px'}>
            <div>
                <FaBars onClick={() => setOnSidebar(!onSidebar)} />
                <Logo src={logo} art="Logo"></Logo>
            </div>
            <div>
                <SearchForm width={mobie ? '100px' : '150px'} />
                <LoginWrapper {...props}>
                    <Link to="/login">Login</Link>
                </LoginWrapper>
            </div>
            <SidebarWrapper className={onSidebar ? 'sidebar--on' : 'sidebar--disable'}>
                <Overlay className="sidebar__overlay" onClick={() => setOnSidebar(!onSidebar)} />
                <SidebarMobie padding={mobie ? '18px' : '48px'} width={mobie ? '250px' : '300px'} />
            </SidebarWrapper>
        </Wrapper>
    )
}

NavbarMobie.propTypes = propType

export default NavbarMobie
