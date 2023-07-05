import React from 'react'
import { setTask } from '@api/calls'
import Dispatches from '@state/slices'
import Text from '@atoms/text'
import Input from '@atoms/input'
import { ITask } from '@interfaces/data'
import { IComponent } from '@interfaces/component'

const Task = ({
  task,
}: IComponent & { task: ITask & { username: string } }) => {
  return (
    <div className={'container'}>
      <Text>id: {task.id}</Text>
      <Text>task: {task.title}</Text>
      <label htmlFor={'task-completed'}>
        {task.completed ? 'Completed' : 'Not Completed'}
      </label>
      <Input
        id={'task-completed'}
        type={'checkbox'}
        checked={task.completed}
        onChange={({ target }) => {
          const set = {
            ...task,
            completed: target.checked,
          }
          setTask(set).then(() => {
            Dispatches.data.setTask(set)
          })
        }}
      />
      <Text>user: {task.username}</Text>
    </div>
  )
}

export default Task
