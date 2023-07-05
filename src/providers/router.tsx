import React from 'react'
import { createBrowserRouter, RouterProvider as Router } from 'react-router-dom'
import NotFound from '@organisms/not-found'
import Layout from '@organisms/layout'
import Users from '@organisms/users'
import Posts from '@organisms/posts'
import Tasks from '@organisms/tasks'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout hasNavigation>
        <Users />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/posts',
    element: (
      <Layout hasNavigation>
        <Posts />
      </Layout>
    ),
  },
  {
    path: '/tasks',
    element: (
      <Layout hasNavigation>
        <Tasks />
      </Layout>
    ),
  },
])

const RouterProvider = () => <Router router={router} />

export default RouterProvider
