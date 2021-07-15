import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    element: {
        posAfter: 0,
        goingUp: false,
    },
    isComment: false,
    isFollowUser: false,
    listSuggestPosts: [],
    sumHeightEl: [0],
    locationList: [],
}

const exploreSlice = createSlice({
    name: 'explore',
    initialState,
    reducers: {
        setPosBefore: (state, action) => {
            state.element.posBefore = action.payload
        },
        setPosAfter: (state, action) => {
            state.element.posAfter = action.payload
        },
        setGoingUp: (state, action) => {
            state.element.goingUp = action.payload
        },
        setIsComment: (state) => {
            state.isComment = !state.isComment
        },
        setIsFollowUser: (state) => {
            state.isFollowUser = !state.isFollowUser
        },
        setListSuggestPosts: (state, action) => {
            state.listSuggestPosts = action.payload
        },
        setSumHeightEl: (state, action) => {
            state.sumHeightEl = action.payload
        },
        setLocationList: (state, action) => {
            state.locationList = action.payload
        },
    },
})

const { reducer, actions } = exploreSlice
export const {
    setPosBefore,
    setPosAfter,
    setGoingUp,
    setListSuggestPosts,
    setIsComment,
    setIsFollowUser,
    setSumHeightEl,
    setLocationList,
} = actions
export default reducer
