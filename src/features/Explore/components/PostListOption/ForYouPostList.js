/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Error } from '../../../../helpers/notify'
import { getSuggestPosts } from '../../../../services/api/postApi'
import { setIsBottomForYou, setListSuggestPosts } from '../../exploreSlice'
import { PostList } from '../PostList'

export const ForYouPostList = () => {
    const dispatch = useDispatch()
    const isBottomForYou = useSelector((state) => state.explore.isBottomForYou)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    const [page, setPage] = useState(2)

    const [isLoading, setIsLoading] = useState(true)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        getSuggestPosts(1, 5, 1)
            .then((response) => {
                //  if (response.message === 'Success') {
                if (mounted) {
                    setIsLoading(false)
                    const action = setListSuggestPosts(response.data.posts)
                    dispatch(action)
                }
                //   }
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
                    dispatch(setIsBottomForYou(false))
                    setPage(page + 1)
                }
            })
        setIsFetching(false)
    }

    useEffect(() => {
        if (!isBottomForYou) return
        if (isBottomForYou && !isFetching) {
            setIsFetching(true)
        }
    }, [isBottomForYou])

    return <PostList isLoading={isLoading} />
}

export default ForYouPostList
