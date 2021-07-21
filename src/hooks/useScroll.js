import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import {
    setIsBottomFollow,
    setIsBottomForYou,
    setIsBottomSuggest,
} from '../features/Explore/exploreSlice'

const useScroll = (option) => {
    const dispatch = useDispatch()
    const [el, setEl] = useState(null)
    useEffect(() => {
        setEl(document.querySelector('.page__scroll'))
        dispatch(setIsBottomForYou(false))
        dispatch(setIsBottomFollow(false))
        dispatch(setIsBottomSuggest(false))
    }, [])

    const handleScroll = () => {
        if (el && el.scrollHeight - 2 * el.offsetHeight <= el.scrollTop) {
            if (option === 'FORYOU') {
                dispatch(setIsBottomForYou(true))
            } else if (option === 'FOLLOW') {
                dispatch(setIsBottomFollow(true))
            } else if (option === 'SUGGEST') {
                dispatch(setIsBottomSuggest(true))
            }
        }
    }

    return {
        handleScroll,
    }
}

export default useScroll
