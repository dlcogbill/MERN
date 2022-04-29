import React, { useState } from 'react';

const NewTask = (props) => {
    const [userTask,setUserTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onNewTask( userTask );
        setUserTask("Enter a task for your to do list")
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label>
                <p className="formLabel">Add Task: </p>
                <input
                    type="text"
                    value={userTask}
                    onChange={ (e) => setUserTask( e.target.value ) }
                    onClick={ (e) => e.target.value=""} />
            </label>
            <input type="submit" value="Add"/>
        </form>
    );

}
export default NewTask;