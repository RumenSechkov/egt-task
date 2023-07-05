import { MouseEventHandler } from 'react'
import { IAction } from '@interfaces/state'

interface IModal {
  active?: boolean
  action?: MouseEventHandler<HTMLButtonElement>
  content?: React.ReactNode
}
interface IState {
  modal: IModal
  loading: string | null
  collapsed: Array<string | number>
  filters: {
    [key: string]: string | number
  }
}

export const initialState: IState = {
  modal: {},
  loading: 'main',
  collapsed: [],
  filters: {},
}

export const manageState = {
  setModal: (state: IState, action: IAction<IModal>) => {
    state.modal = action.payload
  },
  setLoading: (state: IState, action: IAction<string>) => {
    state.loading = action.payload
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
    state.filters = {
      ...state.filters,
      [action.payload.prop]: action.payload.filter,
    }
  },
}
