import React from 'react'
import { useSelector } from 'react-redux'
import { setUser } from '@api/calls'
import Dispatches from '@state/slices'
import InputWrapper from '@atoms/input-wrapper'
import Text from '@atoms/text'
import Input from '@atoms/input'
import Button from '@atoms/button'
import Link from '@atoms/link'
import { IUser } from '@interfaces/data'
import { IComponent } from '@interfaces/component'
import './user.sass'

const User = ({
  user: userOriginal,
  editable = true,
  collapsible = true,
}: IComponent & {
  user: IUser
  editable?: boolean
  collapsible?: boolean
}) => {
  const collapsed = useSelector((state) => state.ui.collapsed)
  const usersChanged = useSelector((state) => state.data.usersChanged)
  const isCollapsed = collapsed.includes(userOriginal.id)
  const isChanged = usersChanged.find(
    (changed: IUser) => changed.id === userOriginal.id,
  )
  const user = isChanged || userOriginal

  return (
    <div className={'container'}>
      {collapsible && (
        <Button
          onClick={() => {
            Dispatches.ui.setCollapsed(user.id)
          }}
        >
          {!isCollapsed ? 'Expand' : 'Collapse'}
        </Button>
      )}
      <Text>{user.name}</Text>
      <InputWrapper>
        <Input
          id={'username'}
          value={user.username}
          disabled={!editable || !isCollapsed}
          required={true}
          validate={'username'}
          onChange={({ target }) => {
            Dispatches.data.setUserChange({ ...user, username: target.value })
          }}
        >
          username
        </Input>
      </InputWrapper>
      <InputWrapper>
        <Input
          id={'phone'}
          value={user.phone}
          disabled={!editable || !isCollapsed}
          validate={'phone'}
          onChange={({ target }) => {
            Dispatches.data.setUserChange({ ...user, phone: target.value })
          }}
        >
          phone
        </Input>
      </InputWrapper>
      <InputWrapper>
        <Input
          id={'email'}
          value={user.email}
          disabled={!editable || !isCollapsed}
          required={true}
          validate={'email'}
          onChange={({ target }) => {
            Dispatches.data.setUserChange({ ...user, email: target.value })
          }}
        >
          email
        </Input>
      </InputWrapper>
      {collapsible && isCollapsed && (
        <>
          <InputWrapper>
            <Input
              id={'website'}
              value={user.website}
              disabled={!editable || !isCollapsed}
              validate={'website'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  website: target.value,
                })
              }}
            >
              website
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'street'}
              value={user.address.street}
              disabled={!editable || !isCollapsed}
              required={true}
              validate={'street'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  address: {
                    ...user.address,
                    street: target.value,
                  },
                })
              }}
            >
              street
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'suite'}
              value={user.address.suite}
              disabled={!editable || !isCollapsed}
              required={true}
              validate={'suite'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  address: {
                    ...user.address,
                    suite: target.value,
                  },
                })
              }}
            >
              suite
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'zipcode'}
              value={user.address.zipcode}
              disabled={!editable || !isCollapsed}
              validate={'zipcode'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  address: {
                    ...user.address,
                    zipcode: target.value,
                  },
                })
              }}
            >
              zipcode
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'city'}
              value={user.address.city}
              disabled={!editable || !isCollapsed}
              required={true}
              validate={'city'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  address: {
                    ...user.address,
                    city: target.value,
                  },
                })
              }}
            >
              city
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'lat'}
              value={user.address.geo.lat}
              disabled={!editable || !isCollapsed}
              validate={'lat'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  address: {
                    ...user.address,
                    geo: {
                      ...user.address.geo,
                      lat: target.value,
                    },
                  },
                })
              }}
            >
              lat
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'lng'}
              value={user.address.geo.lng}
              disabled={!editable || !isCollapsed}
              validate={'lng'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  address: {
                    ...user.address,
                    geo: {
                      ...user.address.geo,
                      lng: target.value,
                    },
                  },
                })
              }}
            >
              lng
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'companyName'}
              value={user.company.name}
              disabled={!editable || !isCollapsed}
              validate={'companyName'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  companyName: target.value,
                })
              }}
            >
              company name
            </Input>
          </InputWrapper>
          <InputWrapper>
            <Input
              id={'catchPhrase'}
              value={user.company.catchPhrase}
              disabled={!editable || !isCollapsed}
              validate={'companyPhrase'}
              onChange={({ target }) => {
                Dispatches.data.setUserChange({
                  ...user,
                  companyPhrase: target.value,
                })
              }}
            >
              catch phrase
            </Input>
          </InputWrapper>
          <div className={'controls'}>
            <Link href={`/posts?userId=${user.id}`} target={''}>
              See posts
            </Link>
            {editable && (
              <>
                <Button
                  disabled={!isChanged}
                  onClick={() => {
                    setUser(user).then(() => {
                      Dispatches.data.setUser(user)
                    })
                  }}
                >
                  Save
                </Button>
                <Button
                  disabled={!isChanged}
                  onClick={() => {
                    Dispatches.data.setUserRevert(user)
                  }}
                >
                  Revert
                </Button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default User
