/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Error } from '../../../../helpers/notify'
import { getAllPostUserFollowing } from '../../../../services/api/postApi'
import { setIsBottomFollow, setListSuggestPosts, setMapFollow } from '../../exploreSlice'
import { PostList } from '../PostList'

export const FollowingPostList = () => {
    const dispatch = useDispatch()
    const isBottomFollow = useSelector((state) => state.explore.isBottomFollow)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    const [isFetching, setIsFetching] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(2)

    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        getAllPostUserFollowing(1, 5)
            .then((res) => {
                if (mounted) {
                    setIsLoading(false)
                    if (res.data) {
                        dispatch(setListSuggestPosts(res.data))
                        res.data.forEach((user) =>
                            dispatch(
                                setMapFollow({
                                    id: user.author.id,
                                    status: user.author.followStatus,
                                })
                            )
                        )
                    }
                }
            })
            .catch((e) => {
                console.log(e)
                Error('Server error.')
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
                    dispatch(setListSuggestPosts([...listSuggestPosts, ...posts]))
                    dispatch(setIsBottomFollow(false))
                    posts.forEach((user) =>
                        dispatch(
                            setMapFollow({
                                id: user.author.id,
                                status: user.author.followStatus,
                            })
                        )
                    )
                    setPage(page + 1)
                }
            })
        setIsFetching(false)
    }

    useEffect(() => {
        if (!isBottomFollow) return
        if (isBottomFollow && !isFetching) {
            setIsFetching(true)
        }
    }, [isBottomFollow])

    return <PostList isLoading={isLoading} />
}

export default FollowingPostList
