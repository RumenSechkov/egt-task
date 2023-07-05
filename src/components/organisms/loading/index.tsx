import React from 'react'

interface ILoading {
  loading: boolean
}

const Loading = ({ loading }: ILoading) => loading && <div>Loading</div>

export default Loading
