import { createSlice } from '@reduxjs/toolkit'
import { store } from './store'
import * as reducers from './reducers'

const createActions = (manage: Object) =>
  Object.keys(manage).reduce(
    (actions, action) => ({
      ...actions,
      [action]: manage[action as keyof Object],
    }),
    {},
  )

const createDispatches = (actions: Object) =>
  Object.keys(actions).reduce(
    (dispatches, dispatch) => ({
      ...dispatches,
      [dispatch]: (payload: any) =>
        store.dispatch(actions[dispatch as keyof Object](payload)),
    }),
    {},
  )

export const slices = Object.keys(reducers).reduce(
  (slices, slice) => ({
    ...slices,
    [slice]: createSlice({
      name: slice,
      initialState: reducers[slice as keyof Object].initialState,
      reducers: createActions(reducers[slice as keyof Object].manageState),
    }),
  }),
  {},
)

export default Object.keys(slices).reduce(
  (dispatches, dispatch) => ({
    ...dispatches,
    [dispatch]: createDispatches(slices[dispatch as keyof Object].actions),
  }),
  {},
)
