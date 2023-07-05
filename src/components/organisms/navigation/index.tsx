import React from 'react'
import Link from '@atoms/link'

const Navigation = () => (
  <div>
    <Link href={'/'} target={''}>
      users
    </Link>
    <Link href={'/tasks'} target={''}>
      tasks
    </Link>
  </div>
)

export default Navigation
