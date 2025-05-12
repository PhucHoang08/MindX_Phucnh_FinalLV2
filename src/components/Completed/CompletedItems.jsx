import React from 'react'
function CompletedItems({ task, setTasks,handleDelete }) {
    return (
        <li className=' w-full h-fit bg-white px-6 py-4 flex flex-row justify-between items-center'>
            <input
                className='w-6 h-6 '
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
            <span className={`text-md w-1/2 mr-[150px] ${task.active ? 'line-through text-gray-400' : ''}`}>
                {task.text}
            </span>
            <button onClick={handleDelete}>
                <svg fill="#aaaaaa" className='w-6 h-6' viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="trash-2" enable-background="new 0 0 32 32" xml:space="preserve" stroke="#000000" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 6V2H9v4H3v2h2v22h22V8h2V6H23zM11 4h10v2H11V4zM25 28H7V8h18V28z"></path> </g></svg>
            </button>
        </li>
        
    )
}

export default CompletedItems