import React, { useState } from 'react'
import Button from '@atoms/button'
import { IComponent } from '@interfaces/component'

interface IPagination {
  size?: number
}

const Pagination = ({ size = 10, children }: IComponent & IPagination) => {
  const [page, setPage] = useState(0)
  const pages =
    Math.ceil((React.Children.toArray(children)?.length || 0) / size) - 1
  return (
    <div className={'pagination-wrapper'}>
      {React.Children.toArray(children)?.slice(page * size, (page + 1) * size)}
      <Button disabled={page === 0} onClick={() => setPage(0)}>
        first
      </Button>
      <Button disabled={page === 0} onClick={() => setPage(page - 1)}>
        prev
      </Button>
      {page + 1}
      <Button disabled={page === pages} onClick={() => setPage(page + 1)}>
        next
      </Button>
      <Button disabled={page === pages} onClick={() => setPage(pages)}>
        last
      </Button>
    </div>
  )
}

export default Pagination
