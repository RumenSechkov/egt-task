import { IAction } from '@interfaces/state'
import { IPost, ITask, IUser } from '@interfaces/data'
interface IState {
  users: Array<IUser> | null
  usersChanged: Array<IUser>
  posts: Array<IPost> | null
  postsChanged: Array<IPost>
  tasks: Array<ITask> | null
}

export const initialState: IState = {
  users: null,
  usersChanged: [],
  posts: null,
  postsChanged: [],
  tasks: null,
}

export const manageState = {
  setUsers: (state: IState, action: IAction<Array<IUser>>) => {
    state.users = action.payload!
  },
  setUser: (state: IState, action: IAction<IUser>) => {
    const index = state.users?.findIndex(
      (user: IUser) => user.id === action.payload?.id,
    )
    const changedIndex = state.usersChanged.findIndex(
      (user: IUser) => user.id === action.payload?.id,
    )
    if ((index || index === 0) && state.users) {
      state.users[index] = action.payload!
      state.usersChanged.splice(changedIndex, 1)
    }
  },
  setUserChange: (state: IState, action: IAction<IUser>) => {
    const index = state.usersChanged.findIndex(
      (user: IUser) => user.id === action.payload?.id,
    )
    if (index !== -1) {
      state.usersChanged[index] = action.payload!
    } else {
      state.usersChanged.push(action.payload!)
    }
  },
  setUserRevert: (state: IState, action: IAction<IUser>) => {
    const index = state.usersChanged.findIndex(
      (user: IUser) => user.id === action.payload?.id,
    )
    state.usersChanged.splice(index, 1)
  },
  setPosts: (state: IState, action: IAction<Array<IPost>>) => {
    state.posts = action.payload!
  },
  setPost: (state: IState, action: IAction<IPost>) => {
    const index = state.posts?.findIndex(
      (post: IPost) => post.id === action.payload?.id,
    )
    const changedIndex = state.postsChanged.findIndex(
      (post: IPost) => post.id === action.payload?.id,
    )
    if ((index || index === 0) && state.posts) {
      state.posts[index] = action.payload!
      state.postsChanged.splice(changedIndex, 1)
    }
  },
  setPostChange: (state: IState, action: IAction<IPost>) => {
    const index = state.postsChanged.findIndex(
      (post: IPost) => post.id === action.payload?.id,
    )
    if (index !== -1) {
      state.postsChanged[index] = action.payload!
    } else {
      state.postsChanged.push(action.payload!)
    }
  },
  setPostRevert: (state: IState, action: IAction<IPost>) => {
    const index = state.postsChanged.findIndex(
      (post: IPost) => post.id === action.payload?.id,
    )
    state.postsChanged.splice(index, 1)
  },
  setPostDelete: (state: IState, action: IAction<IPost>) => {
    const index = state.posts?.findIndex(
      (post: IPost) => post.id === action.payload?.id,
    )
    const changedIndex = state.postsChanged.findIndex(
      (post: IPost) => post.id === action.payload?.id,
    )
    if ((index || index === 0) && state.posts) {
      state.posts.splice(index, 1)
      state.postsChanged.splice(changedIndex, 1)
    }
  },
  setTasks: (state: IState, action: IAction<Array<ITask>>) => {
    state.tasks = action.payload!
  },
}
