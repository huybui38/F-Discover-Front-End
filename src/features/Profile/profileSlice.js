import { getPostsByID } from '../../services/user/profile'
import ApiCaller from '../../utils/apiCaller'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    bioDetail: {
        name: 'NULL',
        job: '',
        quote: '',
        following: 0,
        followStatus: -1,
    },
    selfBioDetail: {
        name: 'NULL',
        job: '',
        quote: '',
        following: 0,
        followStatus: -1,
    },
    status: {
        updatePost: 'idle',
        fetchSelfBio: 'idle',
        fetchUserBio: 'idle',
        fetchPosts: 'idle',
    },
    posts: [],
    isLoading: false,
    guestID: '-1',
    isGuestView: true,
}
export const fetchUserBio = createAsyncThunk(
    'profile/fetchUserBio',
    async (userData, { rejectWithValue }) => {
        let response
        try {
            let params = userData ? '/' + userData : ''
            response = await ApiCaller.get('/user' + params)
        } catch (ex) {
            return rejectWithValue(ex)
        }
        return { ...response, isSelf: !userData ? true : false }
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
            state.selfBioDetail.avatarUrl = action.payload
        },
        setCover: (state, action) => {
            state.selfBioDetail.coverUrl = action.payload
        },
        setGuest: (state, action) => {
            state.guestID = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setFollowStatus: (state, action) => {
            state.bioDetail.followStatus = action.payload
        },
        setIsGuestView: (state, action) => {
            state.isGuestView = action.payload
        },
        resetProfileState: (state) => {
            Object.assign(state, initialState)
        },
        onUpdateProfileSuccess: (state, action) => {
            state.selfBioDetail = {
                ...state.selfBioDetail,
                ...action.payload,
            }
        },
        setUpdatePostStatus: (state, action) => {
            state.status.updatePost = action.payload
        },
    },
    extraReducers: {
        [fetchUserBio.pending]: (state, action) => {
            // state.status.fetchUserBio = 'loading'
        },
        [fetchUserBio.fulfilled]: (state, action) => {
            if (action.payload.isSelf) {
                state.status.fetchSelfBio = 'succeeded'
                state.selfBioDetail = action.payload.data
            } else {
                state.status.fetchUserBio = 'succeeded'
                state.bioDetail = action.payload.data
            }
        },
        [fetchUserBio.rejected]: (state, action) => {
            // state.status.fetchUserBio = 'failed'
            state.error = action.error.message
        },
        [updatePost.pending]: (state, action) => {
            state.status.updatePost = 'loading'
        },
        [updatePost.fulfilled]: (state, action) => {
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
            state.posts = !action.payload.posts ? [] : action.payload.posts
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status.fetchPosts = 'failed'
            state.error = action.error.message
            state.isLoading = false
        },
    },
})

export const {
    setAvatar,
    setLoading,
    setCover,
    onUpdateProfileSuccess,
    setUpdatePostStatus,
    resetProfileState,
    setGuest,
    setFollowStatus,
    setIsGuestView,
} = profileSlice.actions
export const getBioProfile = (state) => {
    if (state.profile.isGuestView) return state.profile.bioDetail
    return state.profile.selfBioDetail
}
export const getBioFetchStatus = (state) => {
    if (state.profile.isGuestView) return state.profile.status.fetchUserBio
    return state.profile.status.fetchSelfBio
}
export default profileSlice.reducer
