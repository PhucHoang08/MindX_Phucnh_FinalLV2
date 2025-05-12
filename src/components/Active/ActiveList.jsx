import React from 'react'
import ActiveItems from './ActiveItems'

function ActiveList({ tasks,setTasks }) {
  if (!Array.isArray(tasks)) return null;
  const activeTasks = tasks.filter(task => !task.active);
  
  return (
    activeTasks.map((task) => (

        <ActiveItems
          key={task.id}
          task={task}
          setTasks={setTasks}
        />
    ))
  )
}

export default ActiveList
