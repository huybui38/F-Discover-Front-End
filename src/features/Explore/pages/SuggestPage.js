import React from 'react'

import { SuggestPostList } from '../components/PostListOption/SuggestPostList'

import useScroll from '../../../hooks/useScroll'
import * as Styled from './styled.elements'

export const FollowingPage = () => {
    const { handleScroll } = useScroll()

    return (
        <Styled.FlexWrapper onScroll={handleScroll} className="page__scroll">
            <Styled.MainWrapper>
                <SuggestPostList />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default FollowingPage
