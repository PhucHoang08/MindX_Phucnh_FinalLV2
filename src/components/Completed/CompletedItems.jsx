import React from 'react'
function CompletedItems({ task, setTasks,handleDelete }) {
    return (
        <li className=' w-full h-fit bg-white px-6 py-2 flex flex-row justify-between items-center'>
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
            <span className={`text-md w-1/2 mr-[190px] ${task.active ? 'line-through text-gray-400' : ''}`}>
                {task.text}
            </span>
            <button onClick={handleDelete}>
            <svg fill="#aaaaaa" className='w-4 h-4' viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="trash-2" enableBackground="new 0 0 32 32" xmlSpace="preserve" stroke="#000000" strokeWidth="0.00032"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 6V2H9v4H3v2h2v22h22V8h2V6H23zM11 4h10v2H11V4zM25 28H7V8h18V28z"></path> </g></svg>
            </button>
        </li>
        
    )
}

export default CompletedItems