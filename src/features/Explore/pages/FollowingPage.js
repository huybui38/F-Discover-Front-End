import React, { useEffect, useState } from 'react'

import { FollowingPostList } from '../components/PostListOption/FollowingPostList'

import useScroll from '../../../hooks/useScroll'
import * as Styled from './styled.elements'

export const FollowingPage = () => {
    useEffect(() => {
        localStorage.setItem('prevAfter', 0)
    }, [])

    const { handleScroll } = useScroll()
    return (
        <Styled.FlexWrapper onScroll={handleScroll}>
            <Styled.MainWrapper>
                <FollowingPostList />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default FollowingPage
