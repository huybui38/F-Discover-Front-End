import { useState } from 'react'

import { FaBars, FaArrowLeft } from 'react-icons/fa'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import Fdiscover from '../../../../assets/F-discover.png'
import SearchBar from '../NavbarExplore/SearchBar/SearchBar'
import TopLeft from '../NavbarExplore/TopLeft/TopLeft'
import { SidebarMobile } from '../SidebarMobile'
import * as Styled from './styled.elements'

function NavBarExplore() {
    const tablet = useBreakpoint(down('lg'))
    const mobile = useBreakpoint(down('sm'))
    const [onSidebar, setOnSidebar] = useState(false)
    return (
        <Styled.NavBar>
            {tablet ? (
                <Styled.IconWrapper onClick={() => setOnSidebar(!onSidebar)}>
                    <FaBars
                        className={onSidebar ? 'sidebar__list--disable' : 'sidebar__list--active'}
                    />
                    <FaArrowLeft
                        className={!onSidebar ? 'sidebar__back--disable' : 'sidebar__back--active'}
                    />
                </Styled.IconWrapper>
            ) : null}

            <Styled.LogoWrapper>
                <a href="/home">
                    <Styled.Logo src={Fdiscover} />
                </a>
            </Styled.LogoWrapper>

            <Styled.SearchWrapper>
                <SearchBar></SearchBar>
            </Styled.SearchWrapper>
            <Styled.ActionWrapper>
                <TopLeft />
            </Styled.ActionWrapper>
            <Styled.SidebarWrapper className={onSidebar ? 'sidebar--on' : 'sidebar--disable'}>
                <Styled.Overlay
                    className="sidebar__overlay"
                    onClick={() => setOnSidebar(!onSidebar)}
                />
                <SidebarMobile
                    padding={mobile ? '18px' : '48px'}
                    width={mobile ? '250px' : '300px'}
                />
            </Styled.SidebarWrapper>
        </Styled.NavBar>
    )
}

export default NavBarExplore
