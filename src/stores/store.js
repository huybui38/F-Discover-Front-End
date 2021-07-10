// import appReducer from '../app/appSlice'
import authReducer from '../features/Login/loginSlice'
import profileReducer from '../features/Profile/profileSlice'
import appSlice from '../services/app/appSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        // app: appReducer,
        auth: authReducer,
        profile: profileReducer,
        app: appSlice,
    },
})
