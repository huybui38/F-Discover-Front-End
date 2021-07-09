/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'

import { VideoFeedItem } from '../components/VideoFeedItem'

export const ExplorePage = ({ pos }) => {
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    return (
        <div
            className="video__wrapper"
            style={{
                height: 'fit-content',
            }}
        >
            {listSuggestPosts.map((item, index) => (
                <VideoFeedItem
                    key={item.index}
                    index={index + 1}
                    dataPost={item}
                    hidden={index + 1 > pos + 2 || index + 1 < pos - 2 ? true : false}
                />
            ))}
        </div>
    )
}

export default ExplorePage
