import React from 'react'

import Logo from '../../assets/img/logo.png'
import { SearchForm } from '../SearchForm'
import { NavbarWrapper, NavbarItem, NavbarList, LogoWrapper } from './Navabar.elements'

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <LogoWrapper>
                <img className="logo" src={Logo} alt="logo"></img>
            </LogoWrapper>
            <NavbarList>
                <NavbarItem>Discover</NavbarItem>
                <NavbarItem>Blogs</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
                <NavbarItem>About us</NavbarItem>
                <SearchForm />
                <NavbarItem>Login</NavbarItem>
            </NavbarList>
        </NavbarWrapper>
    )
}

export default Navbar
