import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUsers } from '@api/calls'
import Dispatches from '@state/slices'
import Content from '@atoms/content-wrapper'
import Text from '@atoms/text'
import List from '@molecules/list'
import User from '@molecules/user'
import { IUser } from '@interfaces/data'

const Users = () => {
  const users = useSelector((state) => state.data.users)

  useEffect(() => {
    const urlSearch = new URLSearchParams(window.location.search)
    const userId = urlSearch.get('userId')

    !users &&
      getUsers(userId).then((response) => {
        Dispatches.data.setUsers(response.data || response)
      })
    Array.isArray(users) && Dispatches.ui.setLoading(false)
  }, [users])

  return (
    users && (
      <Content>
        <List>
          {users.error ? (
            <Text>{users.error}</Text>
          ) : users.length ? (
            users
              .slice(0, 10)
              .map((user: IUser, i: number) => <User key={i} user={user} />)
          ) : (
            <Text>No users to display</Text>
          )}
        </List>
      </Content>
    )
  )
}

export default Users
