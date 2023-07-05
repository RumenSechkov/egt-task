import React from 'react'
import Text from '@atoms/text'
import { ITask, IUser } from '@interfaces/data'
import { IComponent } from '@interfaces/component'

const Task = ({ task, user }: IComponent & { task: ITask; user: IUser }) => {
  return (
    <div className={'container'}>
      <Text>id: {task.id}</Text>
      <Text>task: {task.title}</Text>
      <Text>{task.completed ? 'Completed' : 'Not Completed'}</Text>
      <Text>user: {user.username}</Text>
    </div>
  )
}

export default Task
