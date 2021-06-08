import React from 'react'

import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import logo from '../../assets/img/logo.png'
import { SearchForm } from '../SearchForm'
import { Wrapper, Logo } from './NavbarMobie.elements'

const propType = {
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
}

export const NavbarMobie = (props) => {
    const mobie = useBreakpoint(down('sm'))
    return (
        <Wrapper {...props} padding={mobie ? '18px' : '48px'}>
            <div>
                <FaBars />
                <Logo src={logo} art="Logo"></Logo>
            </div>
            <div>
                <SearchForm width={mobie ? '100px' : '150px'} />
                <div>Hello, Dai !</div>
            </div>
        </Wrapper>
    )
}

NavbarMobie.propTypes = propType

export default NavbarMobie
