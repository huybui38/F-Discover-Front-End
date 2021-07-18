/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

import LazyLoad from 'react-lazyload'
import { useSelector } from 'react-redux'

import { Loading } from '../../../../components/Loading'

import { Post } from '../Post'

const LoadingLazy = () => (
    <div className="post loading">
        <h5>Loading...</h5>
    </div>
)

export const PostList = ({ isLoading }) => {
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    return (
        <div
            className="video__wrapper"
            style={{
                height: 'fit-content',
            }}
        >
            <Loading isLoading={isLoading} />
            {listSuggestPosts &&
                listSuggestPosts.map((item, index) => (
                    // <LazyLoad key={item.index} placeholder={<LoadingLazy />}>
                    <Post
                        key={item.index}
                        index={index + 1}
                        dataPost={item}
                        // lazyLoading={
                        //     index > posCurrentScroll + 1 || index < posCurrentScroll - 1 ? true : false
                        // }
                        // lazyLoading={
                        //     index > posCurrentScroll + 2 || index < posCurrentScroll - 2 ? true : false
                        // }
                        // posCurrentScroll={posCurrentScroll}
                    />
                    // </LazyLoad>
                ))}
        </div>
    )
}

export default PostList
