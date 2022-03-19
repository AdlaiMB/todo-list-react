import {useState, useRef} from 'react';
import Item from './Item';

function Todo(){

    const taskInput = useRef(null);
    const [task, setTask] = useState({});
    const [tasksList, setTasksList] = useState([]);

    const addTask = () => {
        
        const newTasks = [...tasksList, task];
        taskInput.current.value = "";

        setTasksList(newTasks);

    };

    return (
    <div className="Todo">
        <input ref={taskInput} onChange={(task) => setTask({key: tasksList.length, task: task.target.value})} placeholder="enter your task"/>
        <button onClick={addTask}> Create Task </button>
        <div>
            { tasksList.map((item) => ( 
                    <Item {...item}/>
            ))
            }
        </div>
    </div>
    )
}

export default Todo;