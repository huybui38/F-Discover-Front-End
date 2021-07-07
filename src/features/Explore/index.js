/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { getSuggestPosts } from '../../services/api/postApi'
import { setListSuggestPosts } from './exploreSlice'
import { ExplorePage } from './pages/ExplorePage'

export const Explore = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getSuggestPosts(1, 5, 5).then((response) => {
            if (response.message === 'Success') {
                const action = setListSuggestPosts(response.data.posts)
                dispatch(action)
            }
        })
    }, [])

    return <ExplorePage />
}

export default Explore
