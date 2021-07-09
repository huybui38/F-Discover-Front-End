// import appReducer from '../app/appSlice'
import authReducer from '../features/Login/loginSlice'
import profileReducer from '../features/Profile/profileSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        // app: appReducer,
        auth: authReducer,
        profile: profileReducer,
    },
})
