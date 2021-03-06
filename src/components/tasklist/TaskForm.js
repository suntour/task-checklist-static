import React, { useState } from "react";
import { Button, Grid, IconButton, Input } from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <Grid
        container
        className="task-form-container"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={5}>
          <Input
            type="text"
            placeholder="Add a task"
            name="text"
            value={input}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button className="add-task-button" type="submit" variant="contained">
            Add Task
          </Button>
        </Grid>
        <Grid item xs={1}>
          <IconButton className="reset-button" onClick={props.resetTasks}>
            <LoopIcon></LoopIcon>
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaskForm;
