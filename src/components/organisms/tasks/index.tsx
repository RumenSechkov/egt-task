import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTasks, getUsers } from '@api/calls'
import Dispatches from '@state/slices'
import { filterItems } from '@helpers/filters'
import Content from '@atoms/content-wrapper'
import Text from '@atoms/text'
import Input from '@atoms/input'
import List from '@molecules/list'
import Task from '@molecules/task'
import { ITask, IUser } from '@interfaces/data'
import InputWrapper from '@atoms/input-wrapper'

const Tasks = () => {
  const tasks = useSelector((state) => state.data.tasks)
  const users = useSelector((state) => state.data.users)
  const filters = useSelector((state) => state.ui.filters)

  useEffect(() => {
    !tasks &&
      getTasks().then((responseTasks) => {
        getUsers().then((responseUsers) => {
          Dispatches.data.setTasks(responseTasks.data || responseTasks)
          Dispatches.data.setUsers(responseUsers.data || responseUsers)
        })
      })
    Array.isArray(tasks) && Dispatches.ui.setLoading(false)
  }, [tasks])

  return (
    tasks && (
      <Content>
        <List>
          {tasks.error ? (
            <Text>{tasks.error}</Text>
          ) : tasks.length ? (
            <>
              <Input
                value={filters.title}
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
                value={filters.user}
                onChange={({ target }) => {
                  Dispatches.ui.setFilters({
                    filter: target.value,
                    prop: 'user',
                  })
                }}
              >
                filter by owner
              </Input>
              <InputWrapper>
                <label htmlFor="completed">completed</label>
                <Input
                  id={'completed'}
                  value={'true'}
                  type={'checkbox'}
                  name={'status'}
                  onChange={({ target }) => {
                    Dispatches.ui.setFilters({
                      filter: target.value,
                      prop: 'completed',
                    })
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="not-completed">not completed</label>
                <Input
                  id={'not-completed'}
                  value={'false'}
                  type={'checkbox'}
                  name={'status'}
                  onChange={({ target }) => {
                    Dispatches.ui.setFilters({
                      filter: target.value,
                      prop: 'completed',
                    })
                  }}
                />
              </InputWrapper>
              {filterItems(tasks, filters).map((task: ITask, i: number) => (
                <Task
                  key={i}
                  task={task}
                  user={users?.find((user: IUser) => user.id === task.userId)}
                />
              ))}
            </>
          ) : (
            <Text>No tasks to display</Text>
          )}
        </List>
      </Content>
    )
  )
}

export default Tasks
