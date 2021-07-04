import React, { useRef, useState } from 'react'

import { VideoFeedItem } from '../components/VideoFeedItem'

export const ExplorePage = () => {
    return (
        <div>
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
            <VideoFeedItem />
        </div>
    )
}

export default ExplorePage
