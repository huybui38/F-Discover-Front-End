/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getSuggestPosts } from '../../services/api/postApi'
import { setListSuggestPosts } from './exploreSlice'
import { ExplorePage } from './pages/ExplorePage'

export const Explore = () => {
    const dispatch = useDispatch()
    const { posBefore, posAfter, goingUp } = useSelector((state) => state.explore.element)
    const listSuggestPosts = useSelector((state) => state.explore.listSuggestPosts)

    useEffect(() => {
        console.log('Render')
        getSuggestPosts(1, 4, 5).then((response) => {
            if (response.message === 'Success') {
                const action = setListSuggestPosts(response.data.posts)
                dispatch(action)
            }
        })
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
        console.log(posBefore, posAfter, goingUp)
        let temp = [...listSuggestPosts]
        if (goingUp && posAfter >= 4) {
            temp.pop()
            const action = setListSuggestPosts(temp)
            dispatch(action)
        }
        if (!goingUp && posAfter > 1) {
            getSuggestPosts(posAfter, 1, 5)
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

    return <ExplorePage pos={posAfter} />
}

export default Explore
