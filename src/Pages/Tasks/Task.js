import './TaskStyle.css';
import React from 'react';

const Task = () => {
    return(
        <div className="tasks">
            <input className="task_input" type="text" placeholder="Task"/>
            <button className="button_goal">Add new task</button>
        </div>

    );
}
export default Task;