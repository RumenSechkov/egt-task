import axios, { CancelToken } from 'axios'
import config from './config'
import reportError from './reportError'

const source = () => axios.CancelToken.source()
const BaseClient = axios.create(config.axios)
BaseClient.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      config.transformRequest = [(data) => JSON.stringify(data.data)]
    }
    return config
  },
  (error) => Promise.reject(error),
)

const get = (url: string, cancelToken: CancelToken) =>
  BaseClient.get(`${config.axios.baseURL}${url}`, { cancelToken })
    .then((response) => response)
    .catch(reportError)

const put = (url: string, body: any, cancelToken: CancelToken) =>
  BaseClient.put(
    `${config.axios.baseURL}${url}`,
    { body: body },
    { cancelToken },
  )
    .then((response) => response)
    .catch(reportError)

const post = (url: string, body: any, cancelToken: CancelToken) =>
  BaseClient.post(
    `${config.axios.baseURL}${url}`,
    { body: body },
    { cancelToken },
  )
    .then((response) => response)
    .catch(reportError)

const patch = (url: string, body: any, cancelToken: CancelToken) =>
  BaseClient.patch(
    `${config.axios.baseURL}${url}`,
    { body: body },
    { cancelToken },
  )
    .then((response) => response)
    .catch(reportError)

const remove = (url: string, cancelToken: CancelToken) =>
  BaseClient.delete(`${config.axios.baseURL}${url}`, { cancelToken })
    .then((response) => response)
    .catch(reportError)

const ApiClient = {
  paths: config.paths,
  source,
  get,
  put,
  post,
  patch,
  remove,
}

export default ApiClient
