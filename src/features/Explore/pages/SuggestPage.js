import React from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import NotFound from '../../../components/NotFound'
import { SuggestAllList } from '../components/PostListOption/SuggestAllList'
import { SuggestLocationList } from '../components/PostListOption/SuggestLocationList'

import useScroll from '../../../hooks/useScroll'
import * as Styled from './styled.elements'

export const SuggestPage = () => {
    const locationList = useSelector((state) => state.explore.locationList)
    const { handleScroll } = useScroll('SUGGEST')
    const { locationId } = useParams()
    const check = locationList.findIndex((location) => location.id === locationId)

    return locationId.toLowerCase() !== 'all' && check === -1 ? (
        <NotFound />
    ) : (
        <Styled.FlexWrapper onScroll={handleScroll} className="page__scroll">
            <Styled.MainWrapper>
                {locationId.toLowerCase() === 'all' ? (
                    <SuggestAllList />
                ) : (
                    <SuggestLocationList locationId={locationId} />
                )}
            </Styled.MainWrapper>
        </Styled.FlexWrapper>
    )
}

export default SuggestPage
