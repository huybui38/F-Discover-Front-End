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
            const numbers = state.sumHeightEl.length
            if (action.payload.pos > numbers) {
                state.sumHeightEl.push(state.sumHeightEl[numbers - 1] + action.payload.value)
            }
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
} = actions
export default reducer
