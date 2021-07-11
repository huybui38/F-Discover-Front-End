import React, { useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { setGoingUp, setPosAfter } from '../features/Explore/exploreSlice'
import { getIndexEl } from '../utils/getIndexEl'

const useScroll = () => {
    const dispatch = useDispatch()
    const goingUp = useSelector((state) => state.explore.element.goingUp)
    const sumHeightEl = useSelector((state) => state.explore.sumHeightEl)
    const prevScroll = useRef(0)

    const handleScroll = (e) => {
        const currentScroll = e.target.scrollTop
        const prevAfter = parseInt(localStorage.getItem('prevAfter'))
        const currentAfter = getIndexEl(currentScroll, prevAfter, sumHeightEl)

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
        localStorage.setItem('prevAfter', currentAfter)
    }

    return {
        handleScroll,
    }
}

export default useScroll
