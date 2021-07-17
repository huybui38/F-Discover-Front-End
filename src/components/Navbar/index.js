import React from 'react'

import Logo from '../../assets/img/logo.png'
import { SearchForm } from '../SearchForm'
import { NavbarWrapper, NavbarItem, NavbarList, LogoWrapper } from './Navbar.elements'

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <LogoWrapper>
                <img className="logo" src={Logo} alt="logo"></img>
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
