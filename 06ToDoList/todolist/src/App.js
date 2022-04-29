import './App.css';
import React, { useState } from 'react';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';

function App() {
  const [toDoList,setToDoList] = useState([]);

  const addNewTask = ( newText ) => {
    const newTask = {
      text : newText,
      completed : false
    };
    setToDoList( [...toDoList, newTask] );
  }

  const deleteTask = ( deletedTaskIndex ) => {
    const updatedList = toDoList.filter( (task, i) => {
      return i !== deletedTaskIndex;
    });
    setToDoList(updatedList);
  }

  const toggleComplete = ( toggledIndex ) => {
    const updatedList = toDoList.map( (task, i) => {
      if ( toggledIndex === i ) {
        const updatedTask = { ...task, completed : !task.completed}
        return updatedTask;
      }
      return task;
    });
    setToDoList(updatedList);
  }

  return (
    <div className="App">
      <NewTask onNewTask={ addNewTask } />
      <TaskList onDeleteTask={ deleteTask }
        onCompleteToggle={ toggleComplete }
        taskList={ toDoList } />
    </div>
  );
}

export default App;
