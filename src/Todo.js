import {useState, useRef} from 'react';
import Item from './Item';

function Todo(){

    const taskInput = useRef(null);
    const [task, setTask] = useState({});
    const [tasksList, setTasksList] = useState([]);

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

        console.log(newTasksList);

        setTasksList(newTasksList);

    }

    return (
    <div className="Todo">
        <input ref={taskInput} onChange={(task) => setTask({key: tasksList.length, id:tasksList.length, task: task.target.value})} placeholder="enter your task"/>
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