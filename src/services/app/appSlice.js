import apiCaller from '../../utils/apiCaller'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    locations: [],
    status: 'idle',
}

export const fetchLocationAsync = createAsyncThunk(
    'app/fetchLocation',
    async (user, { rejectWithValue }) => {
        let response
        try {
            response = await apiCaller.get('/location')
        } catch (ex) {
            return rejectWithValue(ex)
        }
        return response
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    [fetchLocationAsync.pending]: (state, action) => {
        state.status = 'loading'
    },
    [fetchLocationAsync.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        state.locations = action.payload.data
    },
    [fetchLocationAsync.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
    },
})

// export const {} = appSlice.actions
export default appSlice.reducer
