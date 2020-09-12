import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)){
            return
        }

        const newTasks = [task, ...tasks]

        setTasks(newTasks);
        console.log(...tasks);
    }

    const completeTask = id => {
        let updatedTasks = tasks.map(tasks => {
            if (tasks.id === id){
                tasks.isComplete = !tasks.isComplete
            }
            return tasks
        })
        setTasks(updatedTasks);
    }

    const removeTask = id => {
      const arrWithoutRemovedTask = [...tasks].filter(task => task.id !== id)
      setTasks(arrWithoutRemovedTask);
    }

    const updateTask = (taskId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }

    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    }

  return (
    <div>
      <h1>Task Checklist</h1>
      <TaskForm onSubmit={addTask}></TaskForm>
      <Task tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask} />
    </div>
  );
}

export default TaskList