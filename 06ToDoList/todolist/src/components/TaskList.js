import React from 'react';

const TaskList = (props) => {
    const handleDelete = (index) => {
        props.onDeleteTask(index);
    };

    const handleCompleteToggle = (index) => {
        props.onCompleteToggle(index);
    };
    return(
        <div className='taskList'>
        {
            props.taskList.map( (task,index) =>
                <span
                    key={ index }
                    className={task.completed ? "completed" : undefined } >
                    <input
                        checked={ task.completed } 
                        type="checkbox"
                        onChange={ (event) => handleCompleteToggle(index) } />
                    { task.text }
                    <button
                        onClick={ (event) =>{ handleDelete(index) } }>
                            Delete
                    </button>
                </span>
            )
        }
        </div>
    );
}
export default TaskList;