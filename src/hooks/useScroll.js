import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { setIsBottom } from '../features/Explore/exploreSlice'

const useScroll = () => {
    const dispatch = useDispatch()
    const [el, setEl] = useState(null)
    useEffect(() => {
        setEl(document.querySelector('.page__scroll'))
    }, [])

    const handleScroll = () => {
        if (el && el.scrollHeight - el.offsetHeight == el.scrollTop) {
            dispatch(setIsBottom(true))
        }
    }

    return {
        handleScroll,
    }
}

export default useScroll
