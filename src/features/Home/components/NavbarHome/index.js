import React from 'react'

import { SearchForm } from '../../../../components/SearchForm'

import Logo from '../../../../assets/img/logo.png'
import LogoTitle from '../../../../assets/img/logoTitle.png'
import { NavbarWrapper, NavbarItem, NavbarList, LogoWrapper } from './Navbar.elements'

export const Navbar = (props) => {
    return (
        <NavbarWrapper {...props}>
            <LogoWrapper>
                <img className="logo" src={Logo} alt="logo" />
                <img className="logoTitle" src={LogoTitle} alt="logo title" />
            </LogoWrapper>
            <NavbarList>
                <NavbarItem to="/">Discover</NavbarItem>
                <NavbarItem to="/">Blogs</NavbarItem>
                <NavbarItem to="/">Contact</NavbarItem>
                <NavbarItem to="/">About us</NavbarItem>
                <div style={{ display: 'flex', flex: 1 }}>
                    <SearchForm />
                    <NavbarItem to="/login">Login</NavbarItem>
                </div>
            </NavbarList>
        </NavbarWrapper>
    )
}

export default Navbar
