import React from 'react'

import { ForYouPostList } from '../components/PostListOption/ForYouPostList'

import useScroll from '../../../hooks/useScroll'
import * as Styled from './styled.elements'

export const ForYouPage = () => {
    const { handleScroll } = useScroll('FORYOU')

    return (
        <Styled.FlexWrapper onScroll={handleScroll} className="page__scroll">
            <Styled.MainWrapper>
                <ForYouPostList />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default ForYouPage
