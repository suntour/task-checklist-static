import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

function TaskDialog(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChange = (e) => {
    props.setEdit({
      id: props.edit.id,
      text: e.target.value,
    });
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit Name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Please enter a new name"
          value={props.edit.text}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.submitUpdate} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskDialog;
