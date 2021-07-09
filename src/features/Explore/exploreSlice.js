import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    element: {
        posBefore: 1,
        posAfter: 1,
        goingUp: false,
    },
    listSuggestPosts: [],
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
        setListSuggestPosts: (state, action) => {
            state.listSuggestPosts = action.payload
        },
    },
})

const { reducer, actions } = exploreSlice
export const { setPosBefore, setPosAfter, setGoingUp, setListSuggestPosts } = actions
export default reducer
