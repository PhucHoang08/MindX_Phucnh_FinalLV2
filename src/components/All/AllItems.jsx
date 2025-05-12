import React from 'react'
function AllItems({ task, setTasks }) {
  return (
    <li className=' w-full h-fit bg-white px-6 py-2 flex flex-row gap-2 items-center'>
      <input
      className='w-6 h-6'
        type="checkbox"
        defaultChecked={task.active}
        onChange={(e) => {
          setTasks((prevTasks) => {
            return prevTasks.map((prevTask) => {
              if (prevTask.id === task.id) {
                return { ...prevTask, active: e.target.checked };
              }
              return prevTask;
            });
          });
        }}
      />
      <span className={`text-md ${task.active ? 'line-through text-gray-400' : ''}`}>
        {task.text}
      </span>
    </li>
  )
}

export default AllItems