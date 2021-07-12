import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { FollowingVideoList } from '../components/VideoListOption/FollowingVideoList'

import useScroll from '../../../hooks/useScroll'
import { getSuggestPosts } from '../../../services/api/postApi'
import { setGoingUp, setListSuggestPosts, setPosAfter } from '../exploreSlice'
import * as Styled from './styled.elements'

export const FollowingPage = () => {
    useEffect(() => {
        localStorage.setItem('prevAfter', 0)
    }, [])

    const { handleScroll } = useScroll()
    return (
        <Styled.FlexWrapper onScroll={handleScroll}>
            <Styled.MainWrapper>
                <FollowingVideoList />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default FollowingPage
