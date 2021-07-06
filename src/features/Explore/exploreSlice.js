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
