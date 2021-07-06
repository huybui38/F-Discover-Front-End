import React, { useRef, useState } from 'react'

import { useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { compose } from 'redux'

import Baseline from '../../../../components/Baseline'
import { Navbar } from '../../../../components/Navbar'

import { Explore } from '../../../Explore'
import { setPosition } from '../../exploreSlice'
import { Sidebar } from '../Sidebar'
import * as Styled from './styled.elements'

const getIndexEl = (coordinates) => {
    const height = 636
    return (coordinates - (coordinates % height)) / height + 1
}

const initialValue = {
    currentEl: 1,
    topEl: 1,
    bottomEl: 4,
    maxEl: 4,
    paddingTop: 0,
    paddingBottom: 5600,
}
localStorage.setItem('position', JSON.stringify(initialValue))

export const LayoutExplore = () => {
    const onScroll = () => {}
    return (
        <Styled.Container>
            <Navbar />
            <Baseline color="#eee" width="100vw" />
            <Styled.SidebarWrapper>
                <Sidebar />
            </Styled.SidebarWrapper>
            <Styled.FlexWrapper className="scroll__wrapper" onScroll={onScroll}>
                {/* <Styled.MainWrapper> */}
                <Switch>
                    <Route exact strict path="/explore/for-you" render={() => <Explore />} />
                </Switch>
                {/* </Styled.MainWrapper> */}
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
