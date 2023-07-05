import React from 'react'
import { useSelector } from 'react-redux'
import { setPost, deletePost } from '@api/calls'
import Dispatches from '@state/slices'
import InputWrapper from '@atoms/input-wrapper'
import Text from '@atoms/text'
import Input from '@atoms/input'
import Button from '@atoms/button'
import { IPost } from '@interfaces/data'
import { IComponent } from '@interfaces/component'

const Post = ({ post: postOriginal }: IComponent & { post: IPost }) => {
  const postsChanged = useSelector((state) => state.data.postsChanged)
  const isChanged = postsChanged.find(
    (changed: IPost) => changed.id === postOriginal.id,
  )
  const post = isChanged || postOriginal

  return (
    <div className={'container'}>
      <Text>{post.id}</Text>
      <InputWrapper>
        <Input
          id={'title'}
          value={post.title}
          onChange={({ target }) => {
            Dispatches.data.setPostChange({ ...post, title: target.value })
          }}
        >
          title
        </Input>
      </InputWrapper>
      <InputWrapper>
        <Input
          id={'body'}
          value={post.body}
          onChange={({ target }) => {
            Dispatches.data.setPostChange({ ...post, body: target.value })
          }}
        >
          body
        </Input>
      </InputWrapper>
      <Button
        disabled={!isChanged}
        onClick={() => {
          setPost(post).then(() => {
            Dispatches.data.setPost(post)
          })
        }}
      >
        Save
      </Button>
      <Button
        disabled={!isChanged}
        onClick={() => {
          Dispatches.data.setPostRevert(post)
        }}
      >
        Revert
      </Button>
      <Button
        onClick={() => {
          deletePost(post).then(() => {
            Dispatches.data.setPostDelete(post)
          })
        }}
      >
        Delete
      </Button>
    </div>
  )
}

export default Post
