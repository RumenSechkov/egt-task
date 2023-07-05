import React, { ChangeEventHandler } from 'react'
import { validateString } from '@helpers/validator'
import { IComponent } from '@interfaces/component'
import './input.sass'

interface IInput {
  value: string | number
  required?: boolean
  disabled?: boolean
  validate?: string
  type?: string
  name?: string
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  value,
  required,
  disabled,
  validate,
  type,
  name,
  checked,
  onChange,
  children,
}: IComponent & IInput) => (
  <>
    <input
      className={'input'}
      value={value}
      type={type}
      name={name}
      checked={checked}
      placeholder={children?.toString()}
      required={required}
      disabled={disabled}
      onChange={onChange}
    />
    {validate && value && validateString(value.toString(), validate)}
  </>
)

export default Input
