import React from 'react'
import { IComponent } from '@interfaces/component'

interface ILink {
  href: string
  target?: string
}

const Link = ({ href, target = '_blank', children }: IComponent & ILink) => (
  <a href={href} target={target}>
    {children}
  </a>
)

export default Link
