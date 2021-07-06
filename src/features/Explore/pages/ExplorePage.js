/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'

import { VideoFeedItem } from '../components/VideoFeedItem'

export const ExplorePage = () => {
    return (
        <div
            className="video__wrapper"
            style={{
                // paddingTop: `${position.paddingTop}px`,
                // paddingBottom: `${position.paddingBottom}px`,
                height: 'fit-content',
            }}
        >
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
            {/* {data.map((item, index) => (
                <VideoFeedItem
                    key={index}
                    index={index + 1}
                    active={item === 1 ? true : false}
                    target={index + 1 === position.currentEl ? true : false}
                />
            ))} */}
        </div>
    )
}

export default ExplorePage
