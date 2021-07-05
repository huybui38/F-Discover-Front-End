import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    position: {},
}

const exploreSlice = createSlice({
    name: 'explore',
    initialState,
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload
        },
    },
})

const { reducer, actions } = exploreSlice
export const { setPosition } = actions
export default reducer
