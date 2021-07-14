import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { SuggestVideoList } from '../components/VideoListOption/SuggestVideoList'

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
                <SuggestVideoList />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default FollowingPage
