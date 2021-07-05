// import appReducer from '../app/appSlice'
import exploreReducer from '../features/Explore/exploreSlice'
import authReducer from '../features/Login/loginSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        // app: appReducer,
        auth: authReducer,
        explore: exploreReducer,
    },
})
