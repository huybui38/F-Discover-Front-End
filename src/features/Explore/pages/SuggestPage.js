import React from 'react'

import { useParams } from 'react-router-dom'

import { SuggestPostList } from '../components/PostListOption/SuggestPostList'

import useScroll from '../../../hooks/useScroll'
import * as Styled from './styled.elements'

export const SuggestPage = () => {
    const { handleScroll } = useScroll()
    const { locationId } = useParams()
    console.log('Tran: ', locationId)
    return (
        <Styled.FlexWrapper onScroll={handleScroll} className="page__scroll">
            <Styled.MainWrapper>
                <SuggestPostList locationId={locationId} />
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default SuggestPage
