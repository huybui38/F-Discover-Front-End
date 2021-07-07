/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'

import { VideoFeedItem } from '../components/VideoFeedItem'

export const ExplorePage = () => {
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    return (
        <div
            className="video__wrapper"
            style={{
                // paddingTop: `${position.paddingTop}px`,
                // paddingBottom: `${position.paddingBottom}px`,
                height: 'fit-content',
            }}
        >
            {listSuggestPosts.map((item) => (
                <VideoFeedItem key={item.id} dataPost={item} />
            ))}
        </div>
    )
}

export default ExplorePage
