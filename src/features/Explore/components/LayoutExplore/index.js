import React, { useRef, useState } from 'react'

import { useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'

import Baseline from '../../../../components/Baseline'
import { Navbar } from '../../../../components/Navbar'

import { Explore } from '../../../Explore'
import { setPosition } from '../../exploreSlice'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

const getIndexEl = (coordinates) => {
    const height = 600
    return parseInt(coordinates / height)
}

const initialValue = {
    currentEl: 0,
    topEl: 0,
    bottomEl: 4,
    maxEl: 4,
}
localStorage.setItem('position', JSON.stringify(initialValue))

export const LayoutExplore = () => {
    const dispatch = useDispatch()
    const prevScrollY = useRef(0)
    const [goingUp, setGoingUp] = useState(false)
    let prevEl = getIndexEl(prevScrollY.current)

    const onScroll = (e) => {
        const currentScrollY = e.target.scrollTop
        const currentEl = getIndexEl(currentScrollY)
        if (prevEl < currentEl) {
            const pos = JSON.parse(localStorage.getItem('position'))
            const tmp = {
                currentEl: currentEl,
                topEl: currentEl > initialValue.bottomEl ? pos.topEl + 1 : 0,
                bottomEl: currentEl > 0 ? pos.bottomEl + 1 : initialValue.bottomEl,
                maxEl: Math.max(
                    pos.maxEl,
                    currentEl > 0 ? pos.bottomEl + 1 : initialValue.bottomEl
                ),
            }
            localStorage.setItem('position', JSON.stringify(tmp))
            const action = setPosition(tmp)
            dispatch(action)
        }
        if (prevEl > currentEl) {
            const pos = JSON.parse(localStorage.getItem('position'))
            const tmp = {
                currentEl: currentEl,
                topEl: currentEl >= initialValue.bottomEl ? pos.topEl - 1 : pos.topEl,
                bottomEl: currentEl >= 0 ? pos.bottomEl - 1 : pos.bottomEl,
                maxEl: pos.maxEl,
            }
            localStorage.setItem('position', JSON.stringify(tmp))
            const action = setPosition(tmp)
            dispatch(action)
        }
        if (prevScrollY.current > currentScrollY && goingUp) {
            setGoingUp(false)
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
            setGoingUp(true)
        }
        prevScrollY.current = currentScrollY
        prevEl = currentEl
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
                        <Route exact strict path="/explore/for-you" render={() => <Explore />} />
                    </Switch>
                </Styled.MainWrapper>
            </Styled.FlexWrapper>
        </Styled.Container>
    )
}

export default LayoutExplore
