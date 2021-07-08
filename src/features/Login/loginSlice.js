import jwt_decode from 'jwt-decode'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    status: 'idle',
    userID: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')).id : -1,
}
const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true
            state.userID = jwt_decode(action.payload).id
        },
        signOut: (state) => {
            state.isAuthenticated = false
        },
    },
})
export const authSelector = (state) => state.auth.isAuthenticated
export const { login, signOut } = loginSlice.actions
export default loginSlice.reducer
