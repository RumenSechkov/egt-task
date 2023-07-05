import React from 'react'
import Dispatches from '@state/slices'
import InputWrapper from '@atoms/input-wrapper'
import Input from '@atoms/input'

interface IFilters {
  filters: {
    title?: string
    username?: string
    completed?: boolean | null
  }
}

const Filters = ({ filters }: IFilters) => {
  return (
    <div>
      <Input
        value={filters.title || ''}
        onChange={({ target }) => {
          Dispatches.ui.setFilters({
            filter: target.value,
            prop: 'title',
          })
        }}
      >
        filter by title
      </Input>
      <Input
        value={filters.username || ''}
        onChange={({ target }) => {
          Dispatches.ui.setFilters({
            filter: target.value,
            prop: 'username',
          })
        }}
      >
        filter by owner
      </Input>
      <InputWrapper>
        <label htmlFor="completed">completed</label>
        <Input
          id={'completed'}
          type={'checkbox'}
          checked={
            filters.completed ||
            filters.completed === null ||
            filters.completed === undefined
          }
          onChange={() => {
            Dispatches.ui.setFilters({
              filter: filters.completed === false ? null : false,
              prop: 'completed',
            })
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="not-completed">not completed</label>
        <Input
          id={'not-completed'}
          type={'checkbox'}
          checked={!filters.completed}
          onChange={() => {
            Dispatches.ui.setFilters({
              filter: filters.completed === true ? null : true,
              prop: 'completed',
            })
          }}
        />
      </InputWrapper>
    </div>
  )
}

export default Filters
