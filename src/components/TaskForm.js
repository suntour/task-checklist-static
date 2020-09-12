import React, { useState } from "react";

function TaskForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        
        setInput('');
        
    };

  return (
      <form className="task-form" onSubmit={handleSubmit}>
          <input type="text" className='task-input' placeholder= "Add a task" value={input} name="text" onChange={handleChange}></input>
          <button className='task-button'>Add Task</button>
      </form>
  )
}

export default TaskForm;
