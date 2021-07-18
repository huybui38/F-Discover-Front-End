import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isBottomForYou: false,
    isBottomFollow: false,
    isBottomSuggest: false,
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
        setIsBottomForYou: (state, action) => {
            state.isBottomForYou = action.payload
        },
        setIsBottomFollow: (state, action) => {
            state.isBottomFollow = action.payload
        },
        setIsBottomSuggest: (state, action) => {
            state.isBottomSuggest = action.payload
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
        setLocationList: (state, action) => {
            state.locationList = action.payload
        },
    },
})

const { reducer, actions } = exploreSlice
export const {
    setListSuggestPosts,
    setIsComment,
    setIsFollowUser,
    setLocationList,
    setIsBottomFollow,
    setIsBottomForYou,
    setIsBottomSuggest,
} = actions
export default reducer
