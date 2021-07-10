import apiCaller from '../../utils/apiCaller'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    locations: {
        status: 'idle',
        data: [],
    },
}

export const fetchLocationAsync = createAsyncThunk(
    'app/fetchLocation',
    async (user, { rejectWithValue }) => {
        let response
        try {
            response = await apiCaller.get('/location')
            console.log(response)
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
    extraReducers: {
        [fetchLocationAsync.pending]: (state, action) => {
            state.locations.status = 'loading'
        },
        [fetchLocationAsync.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.locations.status = 'succeeded'
            state.locations.data = action.payload.data
        },
        [fetchLocationAsync.rejected]: (state, action) => {
            state.locations.status = 'failed'
            state.locations.error = action.error.message
        },
    },
})

// export const {} = appSlice.actions
export default appSlice.reducer
