import React from 'react';
import { TaskItem } from './TaskItem';
import { useTaskContext } from '../context/TaskContext';

export const TaskList = () => {

    const { tasks } = useTaskContext();

    return(
        <div className="TaskList">
            <ul>
                {
                    tasks.map((task, id) => {
                        return(
                            <TaskItem 
                                key={task.id}
                                task={task}
                            />
                        )})
                }
            </ul>
        </div>
    )
}
