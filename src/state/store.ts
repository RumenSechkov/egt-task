import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { slices } from './slices'

export const store = configureStore({
  reducer: combineReducers(
    Object.keys(slices).reduce(
      (reducers, key) => ({
        ...reducers,
        [key]: slices[key as keyof Object].reducer,
      }),
      {},
    ),
  ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
