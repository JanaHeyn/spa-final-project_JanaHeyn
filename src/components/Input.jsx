import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { FaPlusCircle } from 'react-icons/fa';
import '../styles/Input.scss';

export const Input = () => {
    const { handleAddTask, handleKeyDown, showError, setInputText, inputText } = useTaskContext();

    // eingabe des textfeldes
    const handleInputTextChange = (e) => {
        setInputText(e.target.value);
    }

    return(
        <div className="Input">

            <form onSubmit={handleAddTask} className='Input__container'>
                <input
                    className='Input__container__text'
                    type='text'
                    placeholder='Eine neue Aufgabe...'
                    value={inputText}
                    onChange={ handleInputTextChange } 
                    onKeyDown={ handleKeyDown } 
                     
                />

                <button 
                    className='Input__container__addbtn' 
                    onClick={handleAddTask}>

                    <FaPlusCircle 
                        style={{
                            color: '#8a4baf',
                            fontSize: '20px',
                            marginTop: '2px',
                        }}
                    />

                </button>
            </form>

            {
                showError && <span className='Input__warning'>Bitte gib was ein.</span>
            }
        </div>
    )
}
