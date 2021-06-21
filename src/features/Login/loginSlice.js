import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    status: 'idle',
}

// const getTokenAsync = createAsyncThunk('auth/getToken', () => {

// })
const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        signOut: (state) => {
            state.isAuthenticated = false
        },
    },
})
export const authSelector = (state) => state.auth.isAuthenticated
export const { login, signOut } = loginSlice.actions
export default loginSlice.reducer