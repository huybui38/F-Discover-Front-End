import ApiCaller from '../../utils/apiCaller'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    bioDetail: {
        name: 'NULL',
        job: '',
        quote: '',
        following: 0,
    },
    status: 'idle',
    isLoading: false,
}
export const fetchUserBio = createAsyncThunk(
    'profile/fetchUserBio',
    async (userData, { rejectWithValue }) => {
        let response
        try {
            response = await ApiCaller.get('/user')
        } catch (ex) {
            return rejectWithValue(ex)
        }
        return response
    }
)
export const updatePost = createAsyncThunk(
    'profile/updatePost',
    async (userData, { rejectWithValue }) => {
        const { videoID, ...rest } = userData
        let response
        try {
            response = await ApiCaller.put('/post/' + videoID, rest)
        } catch (ex) {
            return rejectWithValue(ex)
        }
        return response
    }
)
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
        onUpdateProfileSuccess: (state, action) => {
            state.bioDetail = {
                ...state.bioDetail,
                ...action.payload,
            }
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
        [updatePost.pending]: (state, action) => {
            state.status = 'loading'
        },
        [updatePost.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            // state.bioDetail = action.payload.data
        },
        [updatePost.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    },
})

export const { setAvatar, setLoading, setCover, onUpdateProfileSuccess } = profileSlice.actions
export default profileSlice.reducer
