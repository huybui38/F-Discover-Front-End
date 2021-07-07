import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    position: {
        currentEl: 1,
        topEl: 1,
        bottomEl: 4,
        maxEl: 4,
        paddingTop: 0,
        paddingBottom: 5600,
    },
    listSuggestPosts: [],
}

const exploreSlice = createSlice({
    name: 'explore',
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload
        },
        setListSuggestPosts: (state, action) => {
            state.listSuggestPosts = action.payload
        },
    },
})

const { reducer, actions } = exploreSlice
export const { setPosition, setListSuggestPosts } = actions
export default reducer
