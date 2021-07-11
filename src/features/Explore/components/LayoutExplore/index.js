import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { compose } from 'redux'

import { Baseline } from '../../../../components/Baseline'
import { Navbar } from '../../../../components/Navbar'
import NotFound from '../../../../components/NotFound'

import { Explore } from '../../../Explore'
import { setGoingUp, setPosBefore, setPosAfter } from '../../exploreSlice'
import { FollowingPage } from '../../pages/FollowingPage'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

export const LayoutExplore = () => {
    useEffect(() => {
        localStorage.setItem('prevAfter', 0)
    }, [])

    return (
        <Styled.Container>
            <Navbar />
            <Baseline color="#eee" width="100vw" />
            <Styled.SidebarWrapper>
                <Sidebar />
            </Styled.SidebarWrapper>
            <Explore />
        </Styled.Container>
    )
}

export default LayoutExplore
