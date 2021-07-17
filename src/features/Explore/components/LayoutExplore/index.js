import React, { useEffect } from 'react'

import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { Baseline } from '../../../../components/Baseline'
import { Navbar } from '../../../../components/Navbar'
import { NavbarMobile } from '../../../../components/NavbarMobile'
import { SidebarMobile } from '../../../../components/SidebarMobile'

import { Explore } from '../../../Explore'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

export const LayoutExplore = () => {
    const mobile = useBreakpoint(down('lg'))
    useEffect(() => {
        localStorage.setItem('prevAfter', 0)
    }, [])

    return (
        <Styled.Container>
            {mobile ? <NavbarMobile background_color="#050505" text_color="#fff" /> : <Navbar />}
            <Baseline color="#eee" width="100vw" />
            <Styled.SidebarWrapper>
                <Sidebar />
            </Styled.SidebarWrapper>
            <Explore />
        </Styled.Container>
    )
}

export default LayoutExplore
