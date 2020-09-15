import React, { useState } from "react";
import "./Task.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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
    handleClose();
  };

  const handleChange = (e) => {
    setEdit({
      id: edit.id,
      text: e.target.value,
    });
  };

  const openDialog = (id) => {
    setEdit({
      id: id,
      text: "",
    });
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return tasks.map((task, index) => (
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

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          PaperProps={{
            style: {
              backgroundColor: "white",
              boxShadow: "none",
            },
          }}
        >
          <DialogTitle id="form-dialog-title">Edit Name</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Please enter a new name"
              value={edit.text}
              onChange={handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={submitUpdate} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

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
