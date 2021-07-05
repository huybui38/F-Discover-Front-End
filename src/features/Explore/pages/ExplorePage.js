import React, { useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'

import { VideoFeedItem } from '../components/VideoFeedItem'

export const ExplorePage = () => {
    const position = useSelector((state) => state.explore.position)
    useEffect(() => {
        console.log('kakak')
        console.log(position)
    }, [position])
    return (
        <div>
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
        </div>
    )
}

export default ExplorePage
