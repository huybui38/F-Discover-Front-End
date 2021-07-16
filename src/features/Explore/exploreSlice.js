import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isBottom: false,
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
        setIsBottom: (state, action) => {
            state.isBottom = action.payload
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
export const { setListSuggestPosts, setIsComment, setIsFollowUser, setLocationList, setIsBottom } =
    actions
export default reducer
