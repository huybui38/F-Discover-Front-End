/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getSuggestPosts } from '../../../../services/api/postApi'
import { setGoingUp, setListSuggestPosts, setPosAfter } from '../../exploreSlice'
import { VideoList } from '../VideoList'

export const FollowingVideoList = () => {
    const dispatch = useDispatch()
    const { posAfter, goingUp } = useSelector((state) => state.explore.element)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    const [isFetching, setIsFetching] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        getSuggestPosts(2, 4, 2).then((response) => {
            if (response.message === 'Success') {
                if (mounted) {
                    setIsLoading(false)
                    const action = setListSuggestPosts(response.data.posts)
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
        getSuggestPosts(2, 1, posAfter)
            .then((response) => {
                if (response.message === 'Success') {
                    if (response.data.posts === null) return null
                    return response.data.posts
                }
            })
            .then((posts) => {
                if (posts) {
                    const action = setListSuggestPosts([...listSuggestPosts, ...posts])
                    dispatch(action)
                    setIsFetching(false)
                }
            })
    }

    useEffect(() => {
        if (posAfter && posAfter === listSuggestPosts.length && !isFetching) {
            setIsFetching(true)
        }
    }, [posAfter])

    return <VideoList isLoading={isLoading} posCurrentScroll={posAfter} />
}

export default FollowingVideoList
