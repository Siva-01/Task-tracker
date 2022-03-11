import React from "react";
import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete , onToggle }) {
  console.log(task, "this is task");
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3>{task.day} {task.text} <FaTimes style={{color: 'red' , cursor: ' pointer'}} onClick = {()=> onDelete(task.id)} /> </h3>
    </div>
  );
}

export default Task;
