import React, { useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { compose } from 'redux'

import { Baseline } from '../../../../components/Baseline'
import { Navbar } from '../../../../components/Navbar'
import NotFound from '../../../../components/NotFound'

import { Explore } from '../../../Explore'
import { setGoingUp, setPosBefore, setPosAfter } from '../../exploreSlice'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

const initialValue = {
    currentEl: 1,
    topEl: 1,
    bottomEl: 4,
    maxEl: 4,
    paddingTop: 0,
    paddingBottom: 5600,
}
localStorage.setItem('position', JSON.stringify(initialValue))

const getIndexEl = (scrollY) => {
    let index = Math.floor(scrollY / 684)
    if (index < 0) {
        index = 0
    }
    return index
}
localStorage.setItem('prevBefore', 0)
localStorage.setItem('prevAfter', 0)

export const LayoutExplore = () => {
    const dispatch = useDispatch()
    const goingUp = useSelector((state) => state.explore.element.goingUp)

    const prevScroll = useRef(0)
    const handleScroll = (e) => {
        const currentScroll = e.target.scrollTop
        const prevBefore = parseInt(localStorage.getItem('prevBefore'))
        const prevAfter = parseInt(localStorage.getItem('prevAfter'))
        const currentBefore = getIndexEl(currentScroll + 284)
        const currentAfter = getIndexEl(currentScroll)
        //ADD
        if (currentBefore > prevBefore) {
            if (goingUp) {
                const action = setGoingUp(false)
                dispatch(action)
            } else {
                const action = setPosBefore(currentBefore)
                dispatch(action)
            }
        } else if (currentBefore < prevBefore) {
            if (!goingUp) {
                const action = setGoingUp(true)
                dispatch(action)
            } else {
                const action = setPosBefore(currentBefore)
                dispatch(action)
            }
        }
        //REMOVE
        if (currentAfter > prevAfter) {
            if (goingUp) {
                const action = setGoingUp(false)
                dispatch(action)
            } else {
                const action = setPosAfter(currentAfter)
                dispatch(action)
            }
        } else if (currentAfter < prevAfter) {
            if (!goingUp) {
                const action = setGoingUp(true)
                dispatch(action)
            } else {
                const action = setPosAfter(currentAfter)
                dispatch(action)
            }
        }
        prevScroll.current = currentScroll
        localStorage.setItem('prevBefore', currentBefore)
        localStorage.setItem('prevAfter', currentAfter)
    }
    return (
        <Styled.Container>
            <Navbar />
            <Baseline color="#eee" width="100vw" />
            <Styled.SidebarWrapper>
                <Sidebar />
            </Styled.SidebarWrapper>
            <Styled.FlexWrapper onScroll={handleScroll}>
                <Styled.MainWrapper>
                    <Switch>
                        <Route
                            exact
                            strict
                            path="/explore/for-you"
                            render={() => <Explore time={1} />}
                        />
                        <Route
                            exact
                            strict
                            path="/explore/following"
                            render={() => <Explore time={2} />}
                        />
                        <Route
                            exact
                            strict
                            path="/explore/suggest"
                            render={() => <Explore time={3} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Styled.MainWrapper>
            </Styled.FlexWrapper>
        </Styled.Container>
    )
}

export default LayoutExplore

// const onScroll = (e) => {
//     const pos = JSON.parse(localStorage.getItem('position'))
//     const currentScrollY = e.target.scrollTop
//     const currentEl = getIndexEl(currentScrollY)
//     console.log(prevScrollY.current, currentScrollY)

//     if (prevEl < currentEl) {
//         console.log('hello: ', prevScrollY.current, currentScrollY)
//         console.log('pre: ', prevEl)
//         console.log('currentL ', currentEl)

//         const tmp = {
//             currentEl: currentEl + 1,
//             topEl: currentEl >= 5 ? pos.topEl + 1 : 1,
//             bottomEl: currentEl > 0 ? pos.bottomEl + 1 : 4,
//             maxEl: Math.max(pos.maxEl, currentEl > 0 ? pos.bottomEl + 1 : 4),
//             paddingTop: currentEl >= 5 ? pos.paddingTop + 650 : 0,
//             paddingBottom:
//                 currentEl > 0 && pos.paddingBottom > 2600 ? pos.paddingBottom - 650 : 5600,
//         }

//         localStorage.setItem('position', JSON.stringify(tmp))
//         const action = setPosition(tmp)
//         dispatch(action)
//         prevEl = currentEl
//     }
//     if (prevEl > currentEl) {
//         const pos = JSON.parse(localStorage.getItem('position'))
//         const tmp = {
//             currentEl: currentEl,
//             topEl: currentEl >= initialValue.bottomEl ? pos.topEl - 1 : pos.topEl,
//             bottomEl: currentEl >= 0 ? pos.bottomEl - 1 : pos.bottomEl,
//             maxEl: pos.maxEl,
//         }
//         localStorage.setItem('position', JSON.stringify(tmp))
//         const action = setPosition(tmp)
//         dispatch(action)
//     }
//     prevScrollY.current = currentScrollY
//     prevScrollY.current = currentScrollY
// }
