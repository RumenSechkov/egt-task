import React from 'react'
import { IComponent } from '@interfaces/component'
import './content-wrapper.sass'

const Content = ({ children }: IComponent) => (
  <div className="content-wrapper">{children}</div>
)

export default Content
