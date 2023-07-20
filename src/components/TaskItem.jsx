import React, { useState, useRef } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import '../styles/TaskItem.scss';

export const TaskItem = ({ task }) => {
    const { handleChangeBox, handleDeleteTask, setUpdate} = useTaskContext();

    // useRef ist eine bessere Methode, um unnötiges re-rendern zu verhindern
    const editInputRef = useRef(null);
    
    const [ editing, setEditing ] = useState(false);

    // eingabe des edit textfeldes
    const handleEditing = () => {
        setEditing(!editing);
    }

    // mit enter taste wird die bearbeitung einer task bestätigt
    // reset editing state
    const handleUpdatedDone = (e) => {
        if(e.key === 'Enter') {
            // ein referenz value wird dem elternelement geschickt, um den task.text zu aktualisieren
            // kein re-render ist hier nötig
            setUpdate(editInputRef.current.value, task.id);
            setEditing(false);
        }
    }


    return(      
        <li className='TaskItem'>

            <div className="TaskItem__content">
                <input 
                    className='TaskItem__content__checkbox'
                    type='checkbox'
                    checked={task.completed}
                    onChange={ () => handleChangeBox(task.id) }
                /> 

                <span className={`${task.completed ? 'completed' : 'not-completed'}`}>{task.text}</span>


                <button 
                    className='TaskItem__content__editbtn' 
                    onClick={handleEditing}>  
                    <AiFillEdit 
                        style={{ 
                            color: "#8a4baf", 
                            fontSize: "16px" 
                        }}
                    />
                </button>

                <button 
                    className='TaskItem__content__delbtn' 
                    onClick={ () => handleDeleteTask(task.id) }>
                    <FaTrash 
                        style={{ 
                            color: "#8a4baf", 
                            fontSize: "16px" 
                        }}
                    />
                </button> 
                
            </div>
               
            {/* editierbaren text input anzeigen */}
            { editing && (
                <input 
                    className='TaskItem__editsection'
                    type='text'
                    ref={editInputRef}
                    defaultValue={task.text}
                    onKeyDown={handleUpdatedDone}
                />
            )}

        </li>
    )
}
