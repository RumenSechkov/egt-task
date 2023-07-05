import { IAction } from '@interfaces/state'

interface IState {
  loading: boolean
  filters: {
    [key: string]: string | number
  }
  collapsed: Array<string | number>
}

export const initialState: IState = {
  loading: true,
  filters: {},
  collapsed: [],
}

export const manageState = {
  setLoading: (state: IState, action: IAction<boolean>) => {
    state.loading = !!action.payload
  },
  setCollapsed: (state: IState, action: IAction<string | number>) => {
    state.collapsed.includes(action.payload!)
      ? state.collapsed.splice(state.collapsed.indexOf(action.payload!), 1)
      : state.collapsed.push(action.payload!)
  },
  setFilters: (
    state: IState,
    action: IAction<{ filter: string | number; prop: string }>,
  ) => {
    state.filters[action.payload.prop] = action.payload.filter
  },
}
