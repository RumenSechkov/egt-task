export interface IAction<P, T = string> {
  readonly payload: P
  readonly type?: T
}
