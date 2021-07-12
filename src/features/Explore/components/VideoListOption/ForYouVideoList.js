/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getSuggestPosts } from '../../../../services/api/postApi'
import { setGoingUp, setListSuggestPosts, setPosAfter } from '../../exploreSlice'
import { VideoList } from '../VideoList'

export const ForYouVideoList = () => {
    const dispatch = useDispatch()
    const { posAfter, goingUp } = useSelector((state) => state.explore.element)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        setIsLoading(true)
        getSuggestPosts(1, 4, 1).then((response) => {
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
            const action1 = setPosAfter(0)
            dispatch(action1)
            const action2 = setGoingUp(false)
            dispatch(action2)
        }
    }, [])

    // useEffect(() => {
    //     console.log('check: ', posAfter, goingUp)
    //     let temp = [...listSuggestPosts]
    //     if (goingUp && posAfter >= 8) {
    //         temp.pop()
    //         const action = setListSuggestPosts(temp)
    //         dispatch(action)
    //     }
    //     if (!goingUp && posAfter > 8) {
    //         getSuggestPosts(1, 1, posAfter)
    //             .then((response) => {
    //                 if (response.message === 'Success') {
    //                     if (response.data.posts === null) return null
    //                     return response.data.posts[0]
    //                 }
    //             })
    //             .then((post) => {
    //                 if (post) {
    //                     temp = Object.assign([], temp)
    //                     temp.push({ ...post })
    //                     const action = setListSuggestPosts(temp)
    //                     dispatch(action)
    //                 }
    //             })
    //     }
    // }, [posAfter])

    return <VideoList isLoading={isLoading} posCurrentScroll={posAfter} />
}

export default ForYouVideoList
