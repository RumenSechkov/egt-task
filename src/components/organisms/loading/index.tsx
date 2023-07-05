import { IComponent } from '@interfaces/component'
import React from 'react'

interface ILoading {
  loading: string
}

const Loading = ({ loading, children }: IComponent & ILoading) =>
  loading &&
  (loading === 'main' ? (
    <div className={'loading-wrapper'}>{children}</div>
  ) : (
    children
  ))

export default Loading
