import React, { useEffect, useState } from 'react'

import { ForYouPostList } from '../components/PostListOption/ForYouPostList'

import useScroll from '../../../hooks/useScroll'
import * as Styled from './styled.elements'

export const ForYouPage = () => {
    useEffect(() => {
        localStorage.setItem('prevAfter', 0)
    }, [])

    const { handleScroll } = useScroll()

    return (
        <Styled.FlexWrapper onScroll={handleScroll}>
            <Styled.MainWrapper>
                <ForYouPostList />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default ForYouPage
