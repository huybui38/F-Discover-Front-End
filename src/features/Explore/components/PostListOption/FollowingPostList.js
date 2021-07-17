/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAllPostUserFollowing } from '../../../../services/api/postApi'
import { setIsBottom, setListSuggestPosts } from '../../exploreSlice'
import { PostList } from '../PostList'

export const FollowingPostList = () => {
    const dispatch = useDispatch()
    const isBottom = useSelector((state) => state.explore.isBottom)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    const [isFetching, setIsFetching] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(2)

    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        getAllPostUserFollowing(1, 5).then((response) => {
            if (response.message === 'Success') {
                if (mounted) {
                    setIsLoading(false)
                    const action = setListSuggestPosts(response.data)
                    dispatch(action)
                }
            }
        })

        return () => {
            mounted = false
        }
    }, [])

    useEffect(() => {
        if (!isFetching) return
        fetchMoreListItems()
    }, [isFetching])

    function fetchMoreListItems() {
        getAllPostUserFollowing(page, 5)
            .then((response) => {
                if (response.message === 'Success') {
                    if (response.data === null) return null
                    return response.data
                }
            })
            .then((posts) => {
                if (posts) {
                    const action = setListSuggestPosts([...listSuggestPosts, ...posts])
                    dispatch(action)
                    setIsFetching(false)
                    dispatch(setIsBottom(false))
                    setPage(page + 1)
                }
            })
    }

    useEffect(() => {
        if (!isBottom) return
        if (isBottom && !isFetching) {
            setIsFetching(true)
        }
    }, [isBottom])

    return <PostList isLoading={isLoading} />
}

export default FollowingPostList
