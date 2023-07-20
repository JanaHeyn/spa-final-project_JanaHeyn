import React from 'react';
import { Input } from './Input';
import { TaskList } from './TaskList';
import { TaskProvider } from '../context/TaskContext';
import '../styles/Content.scss';

export const Content = () => {
    
    return(
        <TaskProvider>
            <div className='Content'>
                <Input className='Input' />

                <TaskList/>
            </div>
        </TaskProvider>
    )
}
