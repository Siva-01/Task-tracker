import React from "react";
import { useState } from "react";

function AddTask({onAdd}) {
  const [text, setText] = useState();
  const [day, setDay] = useState();
  const [remin, setRemin] = useState("false");

  const onSubmit=(e)=>{
      e.preventDefault();
      if(!text){
         alert('please add task')
         return
      }
      else{
          onAdd({text,day,remin})
      }
      setText('')
      setDay('')
      setRemin('')
         
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder=" Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          placeholder="Add reminder"
          checked={remin}
          value={remin}
          onChange={(e) => setRemin(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="create task" className="btn btn-block" />
    </form>
  );
}

export default AddTask;
