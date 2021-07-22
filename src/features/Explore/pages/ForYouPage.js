/* eslint-disable react/prop-types */
import React from 'react'

import { ForYouPostList } from '../components/PostListOption/ForYouPostList'

import useScroll from '../../../hooks/useScroll'
import * as Styled from './styled.elements'

export const ForYouPage = ({ timeStamp }) => {
    const { handleScroll } = useScroll('FORYOU')
    // const timeStamp = Date.now()

    return (
        <Styled.FlexWrapper onScroll={handleScroll} className="page__scroll">
            <Styled.MainWrapper>
                <ForYouPostList timeStamp={timeStamp} />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default ForYouPage
