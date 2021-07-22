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
    mapFollow: [],
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
        setMapFollow: (state, action) => {
            const hashList = state.mapFollow
            const data = action.payload
            const find = hashList.findIndex((user) => user.id === data.id)
            if (find === -1) {
                hashList.push(data)
            } else {
                hashList[find] = data
            }
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
    setMapFollow,
} = actions
export default reducer
