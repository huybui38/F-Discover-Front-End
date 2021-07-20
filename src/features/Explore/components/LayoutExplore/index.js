import React from 'react'

import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { Baseline } from '../../../../components/Baseline'

import { Explore } from '../../../Explore'
import NavBarExplore from '../NavbarExplore/NavbarExplore'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

export const LayoutExplore = () => {
    return (
        <Styled.Container>
            <NavBarExplore />
            {/* {mobile ? <NavbarMobile background_color="#ffffff" text_color="#000000" /> : <Navbar />} */}
            <Baseline color="#eee" width="100vw" />
            <Styled.SidebarWrapper>
                <Sidebar />
            </Styled.SidebarWrapper>
            <Explore />
        </Styled.Container>
    )
}

export default LayoutExplore
