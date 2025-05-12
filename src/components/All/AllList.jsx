import React from 'react'
import AllItems from './AllItems'

function AllList({ tasks,setTasks }) {
  console.log("hello",tasks)
  if (!Array.isArray(tasks)) return null;
  
  return (
    tasks.map((task) => (

        <AllItems
          key={task.id}
          task={task}
          setTasks={setTasks}
        />
    ))


  )
}

export default AllList
