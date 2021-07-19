/* eslint-disable react/prop-types */
import React from 'react'

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
                    <Post key={item.index} index={index + 1} dataPost={item} />
                    // </LazyLoad>
                ))}
        </div>
    )
}

export default PostList
