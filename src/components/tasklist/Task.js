import React, { useState } from "react";
import "./Task.css";
import { Button, Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TaskDialog from "./TaskDialog";

function Task({ tasks, completeTask, removeTask, updateTask }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const submitUpdate = () => {
    updateTask(edit.id, edit.text);
    setEdit({
      id: null,
      text: "",
    });
    setOpen(false);
  };

  const openDialog = (id) => {
    setEdit({
      id: id,
      text: "",
    });
    setOpen(true);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className={task.isComplete ? "task-row complete" : "task-row"}
        >
          <Grid container justify="center" alignItems="center" spacing={0}>
            <Grid item xs={5}>
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
              <IconButton onClick={() => openDialog(task.id)}>
                <EditIcon fontSize="small" />
              </IconButton>
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
      ))}
      ;
      <TaskDialog
        edit={edit}
        setEdit={setEdit}
        setOpen={setOpen}
        open={open}
        submitUpdate={submitUpdate}
      ></TaskDialog>
    </div>
  );
}

export default Task;
