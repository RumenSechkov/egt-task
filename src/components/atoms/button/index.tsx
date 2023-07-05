import React, { MouseEventHandler } from 'react'
import { IComponent } from '@interfaces/component'
import './button.sass'

interface IButton {
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ disabled, onClick, children }: IComponent & IButton) => (
  <button className={'button'} disabled={disabled} onClick={onClick}>
    {children}
  </button>
)

export default Button
