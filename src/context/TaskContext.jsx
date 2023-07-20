import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {

    const [ tasks, setTasks ] = useState(getInitialTasks());
    const [ inputText, setInputText ] = useState('');
    const [ completed, setCompleted ] = useState(false);
    const [ showError, setShowError ] = useState(false);

    // die daten holen und anzeigen
    // die funktion danach als initalwert des states festlegen 
    function getInitialTasks() {
        const temp = localStorage.getItem('tasks');
        const savedTasks = JSON.parse(temp);
        return savedTasks || [];
    }

    // todo liste im localStorage des Browsers speichern
    // somit wird die liste auch nach wieder öffnen des browsers gespeichert/angezeigt
    // wann immer die tasks geupdatet werden, wird der effect neu gerendert, um die daten im local storage zu aktualisieren
    useEffect(() => {
        // storing task items
        const temp = JSON.stringify(tasks);
        localStorage.setItem('tasks', temp);
    }, [tasks]);


    // unique ID erstellen
    // wird hier genutzt
    const createID = () => {
        return Math.random().toString(16).slice(2,8);
    }

    // neue task hinzufügen mit button
    // --> an Input weitergeben
    const handleAddTask = (e) => {
        e.preventDefault();
        if(inputText !== '') {
            const newTask = {
                id: createID(),
                text: inputText,
                completed: false
            }
            setTasks(tasks => [newTask, ...tasks]);
            setInputText('');
            setShowError('');
        } else {
            setShowError(true);
        }
    }

    // neue task hinzufügen mit enter taste
    // --> an Input weitergeben
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleAddTask(e);
        }
    }

    // task löschen
    const handleDeleteTask = (id) => {
        setTasks([...tasks.filter((task) => {
            return task.id !== id;
            }),
        ]);
    }

    // status der checkbox verändern
    // --> an TaskItem weitergeben
    const handleChangeBox = (id) => {
        setTasks((prevState) => {
            return prevState.map((task) => {
                if(task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            });
        });
    }

    // interface mit dem bearbeiteten text aktualisieren
    const setUpdate = (updatedInputText, id) => {
        setTasks(
            tasks.map((task) => {
                if(task.id === id) {
                    task.text = updatedInputText;
                }
                return task;
            })
        );
    };



    return(
        <TaskContext.Provider 
            value={{
                tasks,
                handleAddTask,
                handleKeyDown,
                inputText,
                setInputText,
                showError,
                handleChangeBox,
                handleDeleteTask,
                setUpdate

            }}>

            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(TaskContext);
