import React from 'react'
import CompletedList from './CompletedList';
function Completed({tasks,setTasks,handleDelete, handleDeleteAll}) {
    return (
        <div className='w-full h-96 bg-white flex flex-col items-center'>
            <CompletedList tasks={tasks} setTasks={setTasks} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll}/>
        </div>
    )
}
export default Completed
