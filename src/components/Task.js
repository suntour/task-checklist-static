import React, { useState } from "react";
import TaskForm from "./TaskForm";
import './Task.css';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Task({tasks, completeTask, removeTask, updateTask}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id){
    return <TaskForm edit={edit} onSubmit={submitUpdate}></TaskForm>
  }

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? 'task-row complete' : 'task-row'}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          className='delete-icon'
          onClick={() => removeTask(task.id)}
        />
        <TiEdit
          className='edit-icon'
          onClick={() => setEdit({id: task.id, value: task.text})}
        />
      </div>
    </div>
  ));
}

export default Task;
