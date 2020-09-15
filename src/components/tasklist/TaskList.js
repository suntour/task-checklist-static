import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { Paper } from "@material-ui/core";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(...tasks);
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((tasks) => {
      if (tasks.id === id) {
        tasks.isComplete = !tasks.isComplete;
      }
      return tasks;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const arrWithoutRemovedTask = [...tasks].filter((task) => task.id !== id);
    setTasks(arrWithoutRemovedTask);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }
    var updatedTasks = tasks.map((item) => {
      if (item.id === taskId) {
        item.text = newValue;
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  const resetTasks = (e) => {
    let resettedTasks = tasks.map((t) => {
      t.isComplete = false;
      return t;
    });

    setTasks(resettedTasks);
  };

  return (
    <div className="header">
      <Paper className="form-area">
        <TaskForm onSubmit={addTask} resetTasks={resetTasks}></TaskForm>
      </Paper>
      <div className="scroll-area">
        <Task
          tasks={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default TaskList;
