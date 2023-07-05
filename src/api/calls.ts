import { IPost, ITask, IUser } from '@interfaces/data'
import ApiClient from './client'

interface ICallSources {
  getUsers?: { cancel: Function }
  setUser?: { cancel: Function }
  getPosts?: { cancel: Function }
  setPost?: { cancel: Function }
  getTasks?: { cancel: Function }
  setTask?: { cancel: Function }
}

interface IResponse {
  error?: string
  data?: Array<any> | Object
}

const callSources: ICallSources = {}

export const getUsers = async (id?: string | number | null) => {
  if (callSources.getUsers) {
    callSources.getUsers.cancel()
  }
  const callSource = ApiClient.source()
  callSources.getUsers = callSource

  const response: IResponse = await ApiClient.get(
    `${ApiClient.paths.getUsers}${id ? `/${id}` : ''}`,
    callSource.token,
  )
  return response
}

export const setUser = async (user: IUser) => {
  if (callSources.setUser) {
    callSources.setUser.cancel()
  }
  const callSource = ApiClient.source()
  callSources.setUser = callSource

  const response: IResponse = await ApiClient.put(
    `${ApiClient.paths.getUsers}/${user.id}`,
    user,
    callSource.token,
  )
  return response
}

export const getPosts = async (id?: string | number | null) => {
  if (callSources.getPosts) {
    callSources.getPosts.cancel()
  }
  const callSource = ApiClient.source()
  callSources.getPosts = callSource

  const response: IResponse = await ApiClient.get(
    `${ApiClient.paths.getPosts}?userId=${id || 1}`,
    callSource.token,
  )
  return response
}

export const setPost = async (post: IPost) => {
  if (callSources.setPost) {
    callSources.setPost.cancel()
  }
  const callSource = ApiClient.source()
  callSources.setPost = callSource

  const response: IResponse = await ApiClient.put(
    `${ApiClient.paths.getPosts}/${post.id}`,
    post,
    callSource.token,
  )
  return response
}

export const deletePost = async (post: IPost) => {
  if (callSources.setPost) {
    callSources.setPost.cancel()
  }
  const callSource = ApiClient.source()
  callSources.setPost = callSource

  const response: IResponse = await ApiClient.remove(
    `${ApiClient.paths.getPosts}/${post.id}`,
    callSource.token,
  )
  return response
}

export const getTasks = async () => {
  if (callSources.getTasks) {
    callSources.getTasks.cancel()
  }
  const callSource = ApiClient.source()
  callSources.getTasks = callSource

  const response: IResponse = await ApiClient.get(
    ApiClient.paths.getTasks,
    callSource.token,
  )
  return response
}

export const setTask = async (task: ITask) => {
  if (callSources.setTask) {
    callSources.setTask.cancel()
  }
  const callSource = ApiClient.source()
  callSources.setTask = callSource

  const response: IResponse = await ApiClient.put(
    `${ApiClient.paths.getPosts}/${task.id}`,
    task,
    callSource.token,
  )
  return response
}
