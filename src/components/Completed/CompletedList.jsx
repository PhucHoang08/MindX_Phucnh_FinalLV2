import React from 'react'
import CompletedItems from './CompletedItems'

function CompletedList({ tasks,setTasks, handleDelete ,handleDeleteAll}) {
  if (!Array.isArray(tasks)) return null;
  const completedTasks = tasks.filter(task => task.active);
  
  return (
    <div className='w-full h-fit flex flex-col items-end bg-white'>
      {
    completedTasks.map((task) => (
      
        <CompletedItems
          key={task.id}
          task={task}
          setTasks={setTasks}
          handleDelete={()=>handleDelete(index)}
        />
        
     
        
        
    ))}
    <button onClick={handleDeleteAll} className='p-4 text-white bg-red-500 rounded-[5px] flex flex-row gap-2 mr-2'>
    <svg fill="#ffffff" className='w-4 h-4' viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="trash-2" enable-background="new 0 0 32 32" xml:space="preserve" stroke="#000000" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 6V2H9v4H3v2h2v22h22V8h2V6H23zM11 4h10v2H11V4zM25 28H7V8h18V28z"></path> </g></svg>
      delete all
    </button>
    </div>
  )
}

export default CompletedList
