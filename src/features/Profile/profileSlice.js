import ApiCaller from '../../utils/apiCaller'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    bioDetail: {},
    status: 'idle',
    isLoading: false,
}
export const fetchUserBio = createAsyncThunk('profile/fetchUserBio', async () => {
    let response
    try {
        response = await ApiCaller.get('/user')
    } catch (ex) {
        console.log(ex)
    }
    return response
})

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAvatar: (state, action) => {
            state.bioDetail.avatarUrl = action.payload
        },
        setCover: (state, action) => {
            state.bioDetail.coverUrl = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
    },
    extraReducers: {
        [fetchUserBio.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchUserBio.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.bioDetail = action.payload.data
        },
        [fetchUserBio.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    },
})

export const { setAvatar, setLoading, setCover } = profileSlice.actions
export default profileSlice.reducer
