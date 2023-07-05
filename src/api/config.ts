const config = {
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  },
  paths: {
    getUsers: '/users',
    getPosts: '/posts',
    getTasks: '/todos',
  },
}

export default config
