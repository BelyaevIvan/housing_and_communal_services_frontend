import {configureStore, combineReducers} from '@reduxjs/toolkit'

import { AppSlice } from './slices/appSlice';
const rootReducer = combineReducers({
    app: AppSlice.reducer,
})
export const store = configureStore({
    reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>;