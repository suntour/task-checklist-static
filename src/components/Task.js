import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./Task.css";
import { Button, Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function Task({ tasks, completeTask, removeTask, updateTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate}></TaskForm>;
  }

  return tasks.map((task, index) => (
    <div
      key={index}
      className={task.isComplete ? "task-row complete" : "task-row"}
    >
      <Grid container justify="center" spacing={1}>
        <Grid item xs={6}>
          <Button
            className="task-button"
            variant="contained"
            key={task.id}
            onClick={() => completeTask(task.id)}
          >
            {task.text}
          </Button>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            className="delete-button"
            aria-label="delete"
            onClick={() => removeTask(task.id)}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  ));
}

export default Task;
