import React, { useRef, useState } from 'react'

import { Route, Switch, Redirect } from 'react-router'

import Baseline from '../../../../components/Baseline'
import { Navbar } from '../../../../components/Navbar'

import { Explore } from '../../../Explore'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

export const LayoutExplore = () => {
    const prevScrollY = useRef(0)
    const [goingUp, setGoingUp] = useState(false)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(4)
    const onScroll = (e) => {
        const currentScrollY = e.target.scrollTop
        if (prevScrollY.current < currentScrollY && goingUp) {
            setGoingUp(false)
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
            setGoingUp(true)
        }
        prevScrollY.current = currentScrollY
        console.log('scroll: ', goingUp, currentScrollY)
    }

    return (
        <Styled.Container>
            <Navbar />
            <Baseline color="#eee" width="100vw" />
            <Styled.SidebarWrapper>
                <Sidebar />
            </Styled.SidebarWrapper>
            <Styled.FlexWrapper onScroll={onScroll}>
                <Styled.MainWrapper>
                    <Switch>
                        <Route exact strict path="/explore/for-you" component={Explore} />
                    </Switch>
                </Styled.MainWrapper>
            </Styled.FlexWrapper>
        </Styled.Container>
    )
}

export default LayoutExplore
