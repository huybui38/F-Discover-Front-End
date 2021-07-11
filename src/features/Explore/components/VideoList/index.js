/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Loading } from '../../../../components/Loading'

import { VideoFeedItem } from '../VideoFeedItem'

export const VideoList = ({ posCurrentScroll, isLoading }) => {
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    return (
        <div
            className="video__wrapper"
            style={{
                height: 'fit-content',
            }}
        >
            <Loading isLoading={isLoading} />
            {listSuggestPosts.map((item, index) => (
                <VideoFeedItem
                    key={item.index}
                    index={index + 1}
                    dataPost={item}
                    hidden={
                        index > posCurrentScroll + 2 || index < posCurrentScroll - 2 ? true : false
                    }
                    posCurrentScroll={posCurrentScroll}
                />
            ))}
        </div>
    )
}

export default VideoList
