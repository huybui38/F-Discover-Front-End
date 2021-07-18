/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Error } from '../../../../helpers/notify'
import { getAllPostOfLocation, getSuggestPosts } from '../../../../services/api/postApi'
import { setIsBottom, setListSuggestPosts } from '../../exploreSlice'
import { PostList } from '../PostList'

export const SuggestPostList = () => {
    const dispatch = useDispatch()
    const isBottom = useSelector((state) => state.explore.isBottom)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    const [isFetching, setIsFetching] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(2)

    const { locationId } = useParams()
    useEffect(() => {
        console.log(locationId)
        let mounted = true
        setIsLoading(true)
        getAllPostOfLocation(locationId, 1, 5)
            .then((res) => {
                if (mounted) {
                    setIsLoading(false)
                    const action = setListSuggestPosts(res.data)
                    dispatch(action)
                }
            })
            .catch((e) => {
                console.log(e)
                Error('Server error.')
            })

        return () => {
            mounted = false
        }
    }, [locationId])

    useEffect(() => {
        if (!isFetching) return
        fetchMoreListItems()
    }, [isFetching])

    function fetchMoreListItems() {
        getAllPostOfLocation(locationId, 1, 5)
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
        if (!isBottom) return
        if (isBottom && !isFetching) {
            setIsFetching(true)
        }
    }, [isBottom])

    return <PostList isLoading={isLoading} />
}

export default SuggestPostList
