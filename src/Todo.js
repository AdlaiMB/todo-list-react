import {useState, useRef} from 'react';
import Item from './Item';

function Todo(){

    const taskInput = useRef(null);
    const [task, setTask] = useState({});
    const [tasksList, setTasksList] = useState([]);

    const createTask = (task) => {

        const key = Math.floor(Math.random() * 1000000);
        task = task.target.value;

        setTask({key, id: key, task});

    }

    const addTask = () => {

        if (taskInput.current.value === ""){
            return;
        }
        
        const newTasksList = [...tasksList, task];
        taskInput.current.value = "";

        setTasksList(newTasksList);

    };

    const removeTask = (id) => {

        const newTasksList = [];

        for (const task of tasksList) {

            if (task.id !== id)
            {
                newTasksList.push(task);
            }

        }

        setTasksList(newTasksList);

    }

    return (
    <div className="Todo">
        <input ref={taskInput} onChange={createTask} placeholder="enter your task"/>
        <button onClick={addTask}> Create Task </button>
        <div>
            { tasksList.map((item) => ( 
                    <Item {...item} removeTask={removeTask}/>
            ))
            }
        </div>
    </div>
    )
}

export default Todo;