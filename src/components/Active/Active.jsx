import React from 'react'
import ActiveList from './ActiveList';

function Active({tasks,handleAddTask,input,setInput, setTasks}) {
    return (
        <div className='w-full h-96 bg-white flex flex-col items-center'>
                <form onSubmit={handleAddTask} className="mb-[10px] flex w-full flex flex-row justify-evenly items-center">
                    <input
                        className="border w-[385px] border-gray-300 hover:border-blue-700 focus:outline-none rounded-[10px] p-4"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="add details"
                    />
                    <button type="submit" className="py-4 px-8 rounded-[10px] bg-blue-500 text-white ">Add</button>
                </form>

            <ActiveList tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default Active
