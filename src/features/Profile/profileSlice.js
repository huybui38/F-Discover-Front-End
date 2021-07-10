import { getPostsByID } from '../../services/user/profile'
import ApiCaller from '../../utils/apiCaller'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    bioDetail: {
        name: 'NULL',
        job: '',
        quote: '',
        following: 0,
    },
    status: {
        updatePost: 'idle',
        fetchUserBio: 'idle',
        fetchPosts: 'idle',
    },
    posts: [],
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
export const fetchPosts = createAsyncThunk(
    'profile/fetchPosts',
    async (userID, { rejectWithValue }) => {
        let result = await getPostsByID(userID, 1, 10)
        if (!result) return rejectWithValue('Đã có lỗi xảy ra')

        return result
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
        setUpdatePostStatus: (state, action) => {
            state.status.updatePost = action.payload
        },
    },
    extraReducers: {
        [fetchUserBio.pending]: (state, action) => {
            state.status.fetchUserBio = 'loading'
        },
        [fetchUserBio.fulfilled]: (state, action) => {
            state.status.fetchUserBio = 'succeeded'
            state.bioDetail = action.payload.data
        },
        [fetchUserBio.rejected]: (state, action) => {
            state.status.fetchUserBio = 'failed'
            state.error = action.error.message
        },
        [updatePost.pending]: (state, action) => {
            state.status.updatePost = 'loading'
        },
        [updatePost.fulfilled]: (state, action) => {
            console.log(state.status.updatePost)
            state.status.updatePost = 'succeeded'
        },
        [updatePost.rejected]: (state, action) => {
            state.status.updatePost = 'failed'
            state.error = action.error.message
        },
        [fetchPosts.pending]: (state, action) => {
            state.status.fetchPosts = 'loading'
            state.isLoading = true
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status.fetchPosts = 'succeeded'
            state.isLoading = false
            state.posts = action.payload.posts
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status.fetchPosts = 'failed'
            state.error = action.error.message
            state.isLoading = false
        },
    },
})

export const { setAvatar, setLoading, setCover, onUpdateProfileSuccess, setUpdatePostStatus } =
    profileSlice.actions
export default profileSlice.reducer
