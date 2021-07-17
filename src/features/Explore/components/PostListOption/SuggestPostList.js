/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getSuggestPosts } from '../../../../services/api/postApi'
import { setIsBottom, setListSuggestPosts } from '../../exploreSlice'
import { PostList } from '../PostList'

export const SuggestPostList = () => {
    const dispatch = useDispatch()
    const isBottom = useSelector((state) => state.explore.isBottom)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    const [isFetching, setIsFetching] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(2)

    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        getSuggestPosts(1, 5, 1).then((response) => {
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
        getSuggestPosts(page, 5, 1)
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

                    dispatch(setIsBottom(false))
                    setPage(page + 1)
                }
            })
    }

    useEffect(() => {
        console.log('pos: ', isBottom)
        if (!isBottom) return
        if (isBottom && !isFetching) {
            setIsFetching(true)
        }
    }, [isBottom])

    return <PostList isLoading={isLoading} />
}

export default SuggestPostList
