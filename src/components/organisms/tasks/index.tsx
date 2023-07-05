import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTasks, getUsers } from '@api/calls'
import Dispatches from '@state/slices'
import { filterItems } from '@helpers/filters'
import Content from '@atoms/content-wrapper'
import Text from '@atoms/text'
import List from '@molecules/list'
import Task from '@molecules/task'
import Filters from '@molecules/filters'
import Pagination from '@organisms/pagination'
import { ITask, IUser } from '@interfaces/data'

const Tasks = () => {
  const filters = useSelector((state) => state.ui.filters)
  const users = useSelector((state) => state.data.users)
  const tasks = useSelector((state) => state.data.tasks)?.map(
    (task: ITask) => ({
      ...task,
      username:
        users.find((user: IUser) => user.id === task.userId)?.username ||
        'unknown',
    }),
  )

  useEffect(() => {
    !tasks &&
      getTasks().then((responseTasks) => {
        getUsers().then((responseUsers) => {
          Dispatches.data.setTasks(responseTasks.data || responseTasks)
          Dispatches.data.setUsers(responseUsers.data || responseUsers)
        })
      })
    Array.isArray(tasks) && Dispatches.ui.setLoading(null)
  }, [tasks])

  return (
    tasks && (
      <Content>
        <List>
          {tasks.error ? (
            <Text>{tasks.error}</Text>
          ) : tasks.length ? (
            <>
              <Filters filters={filters} />
              <Pagination>
                {filterItems(tasks, filters).map(
                  (task: ITask & { username: string }, i: number) => (
                    <Task key={i} task={task} />
                  ),
                )}
              </Pagination>
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
