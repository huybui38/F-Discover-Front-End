/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getSuggestPosts } from '../../services/api/postApi'
import { setLoading } from '../Profile/profileSlice'
import { setGoingUp, setListSuggestPosts, setPosAfter } from './exploreSlice'
import { ExplorePage } from './pages/ExplorePage'

export const Explore = ({ time }) => {
    const dispatch = useDispatch()
    const { posBefore, posAfter, goingUp } = useSelector((state) => state.explore.element)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)
    const isFollowUser = useSelector((state) => state.explore.isFollowUser)
    const userId = useSelector((state) => state.auth.userID)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        console.log('Render: ', userId)
        getSuggestPosts(1, 4, time).then((response) => {
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
    //     console.log(posBefore, posAfter, goingUp)
    //     let temp = [...listSuggestPosts]
    //     if (!goingUp && posBefore > 4) {
    //         temp.shift()
    //         console.log('remove', temp)
    //         const action = setListSuggestPosts(temp)
    //         dispatch(action)
    //     }
    //     if (goingUp && posBefore > 4) {
    //         getSuggestPosts(posBefore, 1, 5)
    //             .then((response) => {
    //                 if (response.message === 'Success') {
    //                     return response.data.posts[0]
    //                 }
    //             })
    //             .then((post) => {
    //                 temp = Object.assign([], temp)
    //                 temp.unshift({ ...post })
    //                 const action = setListSuggestPosts(temp)
    //                 dispatch(action)
    //             })
    //     }
    // }, [posBefore])

    useEffect(() => {
        console.log(posAfter)
        let temp = [...listSuggestPosts]
        if (goingUp && posAfter >= 4) {
            temp.pop()
            const action = setListSuggestPosts(temp)
            dispatch(action)
        }
        if (!goingUp && posAfter > 2) {
            getSuggestPosts(1, 1, posAfter)
                .then((response) => {
                    if (response.message === 'Success') {
                        if (response.data.posts === null) return null
                        return response.data.posts[0]
                    }
                })
                .then((post) => {
                    if (post) {
                        temp = Object.assign([], temp)
                        temp.push({ ...post })
                        console.log('add', temp)
                        const action = setListSuggestPosts(temp)
                        dispatch(action)
                    }
                })
        }
    }, [posAfter])

    return <ExplorePage isLoading={isLoading} pos={posAfter} />
}

export default Explore
