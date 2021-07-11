import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { ForYouVideoList } from '../components/VideoListOption/ForYouVideoList'

import useScroll from '../../../hooks/useScroll'
import { getSuggestPosts } from '../../../services/api/postApi'
import { setGoingUp, setListSuggestPosts, setPosAfter } from '../exploreSlice'
import * as Styled from './styled.elements'

export const ForYouPage = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        localStorage.setItem('prevAfter', 0)
        let mounted = true
        setIsLoading(true)
        getSuggestPosts(1, 10, 1).then((response) => {
            if (response.message === 'Success') {
                if (mounted) {
                    setIsLoading(false)
                    const action = setListSuggestPosts(response.data.posts)
                    dispatch(action)
                }
            }
        })

        return () => {
            mounted = false
            const action1 = setPosAfter(0)
            dispatch(action1)
            const action2 = setGoingUp(false)
            dispatch(action2)
        }
    }, [])

    const { handleScroll } = useScroll()

    return (
        <Styled.FlexWrapper onScroll={handleScroll}>
            <Styled.MainWrapper>
                <ForYouVideoList isLoading={isLoading} />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default ForYouPage
