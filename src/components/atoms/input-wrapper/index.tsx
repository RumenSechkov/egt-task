import React from 'react'
import { IComponent } from '@interfaces/component'

const InputWrapper = ({ children }: IComponent) => (
  <div className="input-wrapper">{children}</div>
)

export default InputWrapper
