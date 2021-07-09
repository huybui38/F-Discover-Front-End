// import appReducer from '../app/appSlice'
import exploreReducer from '../features/Explore/exploreSlice'
import authReducer from '../features/Login/loginSlice'
import profileReducer from '../features/Profile/profileSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        explore: exploreReducer,
        profile: profileReducer,
    },
})
