import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Tabs } from 'antd';
import {useLocation, useNavigate } from 'react-router-dom';
import All from '../components/All/All';
import Active from '../components/Active/Active';
import Completed from '../components/Completed/Completed';


function Todo() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const tabItems = [
        { key: 'all', label: 'All' },
        { key: 'active', label: 'Active' },
        { key: 'completed', label: 'Completed' }
    ];

    const changeTab = () => {
        if (currentPath === "/") return 'all';
        if (currentPath === "/active") return 'active';
        if (currentPath === "/completed") return 'completed';
    };
    const [input, setInput] = useState("");
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newTasks = [
            ...tasks,
            {
                id: Date.now(),
                text: input,
                active: false
            }
        ];

        setTasks(newTasks);
        setInput("");
    };
    const getLocalTasks = () => {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [
            {
                id: Date.now(),
                text: "Do coding challenges 1",
                active: false
            },
            {
                id: Date.now() + 1234,
                text: "Do coding challenges 2",
                active: false
            },
            {
                id: Date.now() + 345678,
                text: "Do coding challenges 3",
                active: false
            }
        ];
    };

    const [tasks, setTasks] = useState(getLocalTasks());

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleDelete = useCallback((index) => {
        setTasks((prev) => prev.filter((_, i) => i !== index))
    }, [])

    const handleDeleteAll = useCallback(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => !task.active));
      }, []);
      

    return (
        <div className='w-1/3 h-fit bg-white flex flex-col justify-between items-center'>
            <div className='w-full h-fit flex flex-col justify-between items-center'>
                <h1 className='font-bold  m-0 mb-[30px] pt-4 text-[50px]'>#todo</h1>
                <Tabs
                    className='w-full h-fit'
                    centered
                    items={tabItems}
                    activeKey={changeTab()}
                    onChange={(key) => {
                        if (key === 'all') {
                            navigate('/');
                        } else if (key === 'active') {
                            navigate('/active');
                        }
                        else if (key === 'completed') {
                            navigate('/completed');
                        }
                    }}
                />
                {(changeTab() === 'all') && (
                    <All
                        tasks={tasks}
                        input={input}
                        setInput={setInput}
                        handleAddTask={handleAddTask}
                        setTasks={setTasks}
                    />
                )}
                {(changeTab() === 'active') && (
                    <Active
                        tasks={tasks}
                        input={input}
                        setInput={setInput}
                        handleAddTask={handleAddTask}
                        setTasks={setTasks}
                    />
                )}
                {(changeTab() === 'completed') && (
                    <Completed
                        tasks={tasks}
                        setTasks={setTasks}
                        handleDelete={handleDelete}
                        handleDeleteAll={handleDeleteAll}
                    />
                )}
            </div>

        </div>
    )
}

export default Todo;
