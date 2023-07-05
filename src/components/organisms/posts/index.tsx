import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getPosts, getUsers } from '@api/calls'
import Dispatches from '@state/slices'
import Content from '@atoms/content-wrapper'
import Text from '@atoms/text'
import List from '@molecules/list'
import Post from '@molecules/post'
import User from '@molecules/user'
import { IPost } from '@interfaces/data'

const Posts = () => {
  const posts = useSelector((state) => state.data.posts)
  const user = useSelector((state) => state.data.users)

  useEffect(() => {
    const urlSearch = new URLSearchParams(window.location.search)
    const userId = urlSearch.get('userId')
    !posts &&
      getPosts(userId).then((responsePosts) => {
        getUsers(userId).then((responseUsers) => {
          Dispatches.data.setPosts(responsePosts.data || responsePosts)
          Dispatches.data.setUsers(responseUsers.data || responseUsers)
        })
      })
    Array.isArray(posts) && Dispatches.ui.setLoading(false)
  }, [posts])

  return (
    posts && (
      <Content>
        <List>
          {posts.error ? (
            <Text>{posts.error}</Text>
          ) : posts.length ? (
            <>
              {user && (
                <User user={user} editable={false} collapsible={false} />
              )}
              {posts.map((post: IPost, i: number) => (
                <Post key={i} post={post} />
              ))}
            </>
          ) : (
            <Text>No posts to display</Text>
          )}
        </List>
      </Content>
    )
  )
}

export default Posts
